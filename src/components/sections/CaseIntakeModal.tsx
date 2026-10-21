'use client';

import { useState, useEffect } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Lock, 
  AlertCircle,
  TrendingDown,
  UserX,
  ShieldAlert,
  Coins,
  Search,
  Scale,
  Sparkles,
  FileCheck
} from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface CaseIntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedIncident?: string;
}

export interface CaseProfile {
  id: string;
  label: string;
  badge: string;
  desc: string;
  icon: any;
  step2Advice: string;
  timingQuestion: string;
  timingOptions: { id: string; label: string; sub: string }[];
  valueQuestion: string;
  specialFieldTitle: string;
  specialFieldOptions: string[];
  evidenceTitle: string;
  evidenceSubtitle: string;
  textareaLabel: string;
  textareaPlaceholder: string;
  evidenceChecklist: string[];
  step4Heading: string;
  step4Subtext: string;
  step4SpecialCheckLabel: string;
  step4SpecialCheckDesc: string;
  step4Notice: string;
  submitButtonText: string;
  successTitle: string;
  successActionText: string;
}

const CASE_PROFILES: Record<string, CaseProfile> = {
  investment_scam: {
    id: 'investment_scam',
    label: 'Investment Scam / Fake Platform',
    badge: 'Fake Broker & Yield Fraud',
    desc: 'I sent crypto to a trading platform, fake broker, or yield scheme that turned out to be fraudulent',
    icon: TrendingDown,
    step2Advice: 'Fake brokers use simulated dashboards to show false profits before locking withdrawals. Reconstructing the initial deposit trail allows us to identify the recipient deposit accounts.',
    timingQuestion: 'When was your most recent deposit or withdrawal refusal?',
    timingOptions: [
      { id: 'within_7_days', label: 'Last 7 Days', sub: 'Urgent / active site' },
      { id: 'within_30_days', label: '1 - 4 Weeks Ago', sub: 'Recent transfer' },
      { id: 'older', label: 'Over 1 Month Ago', sub: 'Older deposit' },
    ],
    valueQuestion: 'Total crypto value sent to this investment platform:',
    specialFieldTitle: 'What is the current status of the platform or broker?',
    specialFieldOptions: [
      'Demanding fake taxes/fees to allow withdrawal',
      'Account blocked / balance inaccessible',
      'Broker or account manager went dark',
      'Platform website is completely offline'
    ],
    evidenceTitle: 'Investment Platform & Deposit Evidence',
    evidenceSubtitle: 'Specific records regarding the fraudulent broker and your payments',
    textareaLabel: 'Platform Website URL, Broker Names & Deposit Transaction IDs (TxIDs)',
    textareaPlaceholder: 'Enter the investment platform link (e.g. https://...), names or Telegram handles of account managers, and all cryptocurrency deposit transaction hashes...',
    evidenceChecklist: [
      'Deposit transaction hashes (TxIDs)',
      'Chat logs with broker / advisor (Telegram, WhatsApp)',
      'Screenshots of platform balance & refusal messages',
      'Demands for fake release fees or taxes'
    ],
    step4Heading: 'Investment Fraud Recovery Lead',
    step4Subtext: 'Assigned directly to our Investment Fraud Recovery team.',
    step4SpecialCheckLabel: 'I am currently being pressured to pay more money to "unlock" my funds',
    step4SpecialCheckDesc: 'Do NOT send any more funds. Our recovery specialists prioritize active fraud containment.',
    step4Notice: 'Strictly confidential. Fundoraid investigates investment fraud and executes direct recovery actions against recipient endpoints.',
    submitButtonText: 'Submit Case to Recover Investment Funds',
    successTitle: 'Investment Recovery Case Logged',
    successActionText: 'Our fraud analysts are reviewing your broker deposit trail and mapping recipient endpoints to initiate direct recovery.'
  },
  romance_scam: {
    id: 'romance_scam',
    label: 'Romance Scam / Deceptive Contact',
    badge: 'Social Engineering Fraud',
    desc: 'Someone I met online, on a dating app, or social media persuaded me to send crypto or deposit on a site',
    icon: UserX,
    step2Advice: 'Perpetrators gain trust before steering victims to fake web applications or intermediary wallets. Tracing early prevents them from completing secondary off-ramp hops.',
    timingQuestion: 'When did you make your most recent transfer to this person?',
    timingOptions: [
      { id: 'within_7_days', label: 'Last 7 Days', sub: 'Urgent / active contact' },
      { id: 'within_30_days', label: '1 - 4 Weeks Ago', sub: 'Recent transfers' },
      { id: 'older', label: 'Over 1 Month Ago', sub: 'Historical contact' },
    ],
    valueQuestion: 'Total cryptocurrency sent across all requests:',
    specialFieldTitle: 'Where did you initially meet or communicate?',
    specialFieldOptions: [
      'Dating app (Tinder, Bumble, Hinge, etc.)',
      'WhatsApp / Telegram / Signal messaging',
      'Instagram / Facebook / Social media',
      'LinkedIn or professional networking'
    ],
    evidenceTitle: 'Contact History & Transfer Information',
    evidenceSubtitle: 'Details about the contact and the addresses they provided',
    textareaLabel: 'Profile Names, Communication Apps & Wallet Addresses Sent To',
    textareaPlaceholder: 'Enter the contact’s profile name/handles, phone numbers, the app or site link they instructed you to send crypto to, and all outgoing wallet addresses...',
    evidenceChecklist: [
      'Outgoing transaction IDs (TxIDs)',
      'Chat transcripts and voice message records',
      'Phone numbers and profile screenshots',
      'Portal links or URLs provided by the contact'
    ],
    step4Heading: 'Confidential Romance Scam Intake',
    step4Subtext: 'Treated with strict confidentiality, privacy, and zero judgment.',
    step4SpecialCheckLabel: 'The scammer is still actively messaging or contacting me',
    step4SpecialCheckDesc: 'Active communication can assist investigators in identifying current operational infrastructure.',
    step4Notice: 'Your privacy is 100% safeguarded. We focus entirely on tracking where your assets went and recovering them.',
    submitButtonText: 'Submit Case to Recover Romance Scam Funds',
    successTitle: 'Romance Fraud Recovery Case Active',
    successActionText: 'Our investigators are tracing the transaction trail from your transfers to identify recipient accounts and take direct recovery action.'
  },
  theft: {
    id: 'theft',
    label: 'Stolen Cryptocurrency',
    badge: 'Unauthorized Transfers & Drainers',
    desc: 'My wallet was drained, hacked, or unauthorized transactions moved funds without my approval',
    icon: ShieldAlert,
    step2Advice: 'Wallet drainers execute automated multi-hop split transactions immediately. Fast blockchain forensic mapping isolates the payout cluster before assets disperse.',
    timingQuestion: 'When did the unauthorized transfer occur?',
    timingOptions: [
      { id: 'within_24_hours', label: 'Last 24 Hours', sub: 'Critical emergency' },
      { id: 'within_7_days', label: 'Past Week', sub: 'Active trail' },
      { id: 'older', label: 'Over 1 Week Ago', sub: 'Established path' },
    ],
    valueQuestion: 'Total value drained from your wallet:',
    specialFieldTitle: 'How do you believe the compromise occurred?',
    specialFieldOptions: [
      'Signed a malicious Web3 signature / DApp permit',
      'Private key or 12/24-word seed phrase compromised',
      'Phishing link in Discord, Telegram, or email',
      'Unknown / funds suddenly transferred out'
    ],
    evidenceTitle: 'Drained Wallet & Transaction Records',
    evidenceSubtitle: 'Public blockchain data to map the theft flow',
    textareaLabel: 'Your Compromised Wallet Address & Unauthorized Outgoing Hashes (TxIDs)',
    textareaPlaceholder: 'Paste your affected public wallet address (e.g. 0x...), the exact transaction hashes of the unauthorized transfers, and any suspicious links interacted with...',
    evidenceChecklist: [
      'Unauthorized outgoing transaction hashes (TxIDs)',
      'Your affected public wallet address',
      'Phishing site or malicious contract URL',
      'Record of smart contract approvals revoked'
    ],
    step4Heading: 'Emergency Theft Recovery Protocol',
    step4Subtext: 'Direct escalation to our Blockchain Forensics and Recovery desk.',
    step4SpecialCheckLabel: 'Other assets or tokens are still remaining in the affected wallet',
    step4SpecialCheckDesc: 'Never send new funds to this wallet. Create a fresh secure wallet immediately.',
    step4Notice: 'Fundoraid will never ask for your seed phrase or private keys. We only inspect public ledger records to recover your assets.',
    submitButtonText: 'Submit Case to Recover Stolen Crypto',
    successTitle: 'Theft Recovery Protocol Initiated',
    successActionText: 'Our forensic team is analyzing the drainer contract and tracking the movement of stolen funds to initiate direct recovery.'
  },
  loan_scam: {
    id: 'loan_scam',
    label: 'Loan Scam',
    badge: 'Advance Fee & Collateral Fraud',
    desc: 'I paid upfront fees, collateral, insurance, or deposits for a loan that was never disbursed',
    icon: Coins,
    step2Advice: 'Advance-fee loan scammers impersonate financial institutions or DeFi lenders, demanding crypto deposits for "collateral" or "processing" before disappearing.',
    timingQuestion: 'When did you make your most recent fee or collateral payment?',
    timingOptions: [
      { id: 'within_7_days', label: 'Last 7 Days', sub: 'Urgent / active lender' },
      { id: 'within_30_days', label: '1 - 4 Weeks Ago', sub: 'Recent payment' },
      { id: 'older', label: 'Over 1 Month Ago', sub: 'Past loan offer' },
    ],
    valueQuestion: 'Total amount paid in advance fees, collateral, or deposits:',
    specialFieldTitle: 'What reason did the lender give for requiring upfront crypto?',
    specialFieldOptions: [
      'Collateral / liquidity proof deposit',
      'Loan insurance / guarantee fee',
      'Cross-border tax / customs clearance fee',
      'Credit score repair or verification deposit'
    ],
    evidenceTitle: 'Loan Agreement & Advance Fee Proof',
    evidenceSubtitle: 'Documentation of the fraudulent loan offer and your payments',
    textareaLabel: 'Lender Website / Company Name, Agreement Details & Payment Hashes',
    textareaPlaceholder: 'Enter the lender name, website or app URL, the loan offer amount, and the transaction IDs for the advance fees or collateral you sent...',
    evidenceChecklist: [
      'Payment transaction IDs (TxIDs) for all upfront fees',
      'Fake loan approval letter, contract, or term sheet',
      'Email, WhatsApp, or Telegram messages with loan officer',
      'Lender website, application portal, or payment address'
    ],
    step4Heading: 'Loan Fraud Recovery Desk',
    step4Subtext: 'Targeted recovery action to reclaim upfront collateral and advance fees.',
    step4SpecialCheckLabel: 'The lender is currently demanding another payment to release the loan',
    step4SpecialCheckDesc: 'Do NOT send any more payments. Real lenders never require crypto deposits to release a loan.',
    step4Notice: 'Fundoraid takes direct action to track down the recipient wallets and recover advance-fee scam payments.',
    submitButtonText: 'Submit Case to Recover Loan Scam Funds',
    successTitle: 'Loan Scam Recovery Case Received',
    successActionText: 'Our fraud team is tracing the advance fee payments to identify the recipient accounts and execute direct recovery.'
  },
  wallet_audit: {
    id: 'wallet_audit',
    label: 'Wallet or Transaction Investigation',
    badge: 'Forensic Ledger Examination',
    desc: 'I need to examine a specific wallet address, transaction trail, or counterparties',
    icon: Search,
    step2Advice: 'We conduct comprehensive multi-network forensic tracing to map counterparty networks, fund flows, and identify ultimate destination endpoints.',
    timingQuestion: 'What timeframe does this investigation cover?',
    timingOptions: [
      { id: 'recent', label: 'Past 30 Days', sub: 'Current transactions' },
      { id: 'medium', label: '1 - 6 Months', sub: 'Medium term' },
      { id: 'historical', label: '6+ Months Ago', sub: 'Historical audit' },
    ],
    valueQuestion: 'Total volume or asset value under investigation:',
    specialFieldTitle: 'What is the primary objective of this investigation?',
    specialFieldOptions: [
      'Trace where funds moved from a specific wallet',
      'Identify the owner / entity behind a recipient address',
      'Verify if transactions are linked to known scams or mixers',
      'Full transaction chronology and evidence dossier'
    ],
    evidenceTitle: 'Target Addresses & Examination Scope',
    evidenceSubtitle: 'Define the specific blockchain entities to examine',
    textareaLabel: 'Public Wallet Addresses, Transaction Hashes (TxIDs) & Scope Questions',
    textareaPlaceholder: 'Paste the target public address (0x..., bc1..., etc.), relevant transaction hashes, and any specific questions you need answered...',
    evidenceChecklist: [
      'Target public wallet addresses',
      'Key transaction hashes (TxIDs) of interest',
      'Associated platforms, services, or counterparties',
      'Relevant blockchain networks (Ethereum, Tron, Bitcoin, etc.)'
    ],
    step4Heading: 'Investigation Briefing Lead',
    step4Subtext: 'Direct collaboration with senior digital asset forensic analysts.',
    step4SpecialCheckLabel: 'This inquiry is related to a formal dispute or recovery action',
    step4SpecialCheckDesc: 'We format our reports to rigorous evidentiary standards for asset recovery.',
    step4Notice: 'Strict confidentiality protocols apply to all forensic examinations and client data.',
    submitButtonText: 'Submit Wallet for Investigation',
    successTitle: 'Investigation Scope Registered',
    successActionText: 'Our forensic analysts are indexing the target addresses and compiling the transaction trail.'
  },
  asset_recovery: {
    id: 'asset_recovery',
    label: 'Asset Recovery',
    badge: 'Direct Scam Fund Recovery',
    desc: 'I need to locate diverted funds, track the recipient trail, and execute direct recovery of my lost assets',
    icon: Scale,
    step2Advice: 'Fundoraid is tasked to help trace and recover lost funds directly. We pinpoint recipient accounts and take direct action to reclaim your cryptocurrency.',
    timingQuestion: 'When were the assets diverted or stolen?',
    timingOptions: [
      { id: 'urgent', label: 'Past 7 Days', sub: 'Immediate priority' },
      { id: 'recent', label: '1 - 4 Weeks Ago', sub: 'Active recovery' },
      { id: 'older', label: 'Over 1 Month Ago', sub: 'Standard claim' },
    ],
    valueQuestion: 'Total value of lost assets to recover:',
    specialFieldTitle: 'What is the current status of the diverted assets?',
    specialFieldOptions: [
      'Funds are currently sitting in an identified recipient wallet',
      'Assets were routed through multiple intermediate hops',
      'Scammer attempted to cash out at a recipient platform',
      'Trail is unknown / need full tracing to endpoint'
    ],
    evidenceTitle: 'Asset Recovery Claim Details',
    evidenceSubtitle: 'Core transaction records for rapid claim processing',
    textareaLabel: 'Transaction Hashes, Origin & Destination Wallets, and Claim Summary',
    textareaPlaceholder: 'Enter the origin wallet, destination addresses, outgoing transaction hashes, and any relevant background to help us start recovery action...',
    evidenceChecklist: [
      'Complete outgoing transaction hashes (TxIDs)',
      'Origin and destination wallet addresses',
      'Direct communications with the counterparty',
      'Any existing police, platform, or dispute reference numbers'
    ],
    step4Heading: 'Asset Recovery Desk Lead',
    step4Subtext: 'Direct case intake for full-cycle scam fund recovery.',
    step4SpecialCheckLabel: 'I am the verified owner of the originating wallet/funds',
    step4SpecialCheckDesc: 'Proof of ownership enables our team to take swift recovery action.',
    step4Notice: 'Fundoraid takes direct action to locate and recover your scam funds. We do not refer you off to third parties.',
    submitButtonText: 'Submit Case for Direct Asset Recovery',
    successTitle: 'Asset Recovery Case Initiated',
    successActionText: 'Your claim is now in our active recovery pipeline. Our specialists are pinpointing recipient endpoints to execute recovery.'
  }
};

const normalizeIncidentId = (id?: string) => {
  if (!id) return 'investment_scam';
  if (id === 'unresponsive') return 'loan_scam';
  if (id === 'commercial') return 'asset_recovery';
  if (CASE_PROFILES[id]) return id;
  return 'investment_scam';
};

export function CaseIntakeModal({ isOpen, onClose, preselectedIncident }: CaseIntakeModalProps) {
  const [step, setStep] = useState(1);
  const [incidentType, setIncidentType] = useState(normalizeIncidentId(preselectedIncident));
  const [timeline, setTimeline] = useState('within_30_days');
  const [estimatedLoss, setEstimatedLoss] = useState('$50,000 - $250,000');
  const [specialDetail, setSpecialDetail] = useState('');
  const [txDetails, setTxDetails] = useState('');
  const [selectedDocuments, setSelectedDocuments] = useState<string[]>([]);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [urgentTriggerChecked, setUrgentTriggerChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Sync preselectedIncident if it changes when modal opens
  useEffect(() => {
    if (preselectedIncident) {
      const normalized = normalizeIncidentId(preselectedIncident);
      setIncidentType(normalized);
    }
  }, [preselectedIncident]);

  const activeProfile = CASE_PROFILES[incidentType] || CASE_PROFILES.investment_scam;

  // Initialize selected documents when profile changes
  useEffect(() => {
    if (activeProfile.evidenceChecklist.length > 0) {
      setSelectedDocuments([activeProfile.evidenceChecklist[0], activeProfile.evidenceChecklist[1]]);
    }
    if (activeProfile.specialFieldOptions.length > 0) {
      setSpecialDetail(activeProfile.specialFieldOptions[0]);
    }
    if (activeProfile.timingOptions.length > 0) {
      setTimeline(activeProfile.timingOptions[0].id);
    }
  }, [incidentType]);

  const toggleDocument = (docName: string) => {
    setSelectedDocuments(prev => 
      prev.includes(docName) 
        ? prev.filter(d => d !== docName)
        : [...prev, docName]
    );
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      await supabase.from('cases').insert([{
        case_id: `FR-${Date.now().toString(36).toUpperCase()}`,
        case_type: activeProfile.label,
        user_name: contactName || 'Confidential Inquirer',
        user_email: contactEmail,
        description: txDetails,
        risk_level: estimatedLoss,
        status: 'Review Pending',
        evidence_integrity: selectedDocuments.length > 0 ? `Records: ${selectedDocuments.join(', ')}` : 'Standard Intake',
        form_values: {
          timeline,
          estimatedLoss,
          specialDetail,
          urgentTriggerChecked,
          caseBadge: activeProfile.badge,
          source: 'Homepage Confidential Intake Modal'
        }
      }]);
    } catch (err) {
      console.error('Case intake submission error:', err);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    setTxDetails('');
    setContactName('');
    setContactEmail('');
    onClose();
  };

  const incidentList = Object.values(CASE_PROFILES);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl bg-[#111416] border-[#252B2F] text-[#F2EFE9] p-6 md:p-8 rounded-xl shadow-2xl">
        <DialogHeader className="mb-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#252B2F]">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E15D44]">
              <Lock className="w-3.5 h-3.5" /> Confidential Case Review
            </div>
            {!submitted && (
              <span className="text-xs font-mono text-[#9FA3A3]">
                Step {step} of 4 · <span className="text-[#E15D44] font-bold">{activeProfile.label}</span>
              </span>
            )}
          </div>

          <DialogTitle className="text-xl md:text-2xl font-headline font-bold text-[#F2EFE9] pt-2">
            {submitted ? activeProfile.successTitle : 'Start Recovery Case'}
          </DialogTitle>
          <DialogDescription className="text-[#9FA3A3] text-xs md:text-sm">
            {submitted 
              ? activeProfile.successActionText
              : 'Share a few details about your situation. We will trace the transaction trail, identify recipient accounts, and initiate recovery action.'}
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#E15D44]/10 border border-[#E15D44]/30 flex items-center justify-center mx-auto text-[#E15D44]">
              <CheckCircle2 className="w-8 h-8 text-[#61B58A]" />
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-[#F2EFE9]">Reference Number: FR-{Math.floor(100000 + Math.random() * 900000)}</h4>
              <p className="text-xs text-[#9FA3A3] max-w-md mx-auto leading-relaxed">
                {activeProfile.successActionText} You will receive a direct case assessment by email within 24 hours.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[#090B0C] border border-[#252B2F] text-left text-xs font-mono space-y-1.5 max-w-md mx-auto">
              <div className="text-[#9FA3A3]">Status: <span className="text-[#61B58A]">CONFIDENTIAL & IN RECOVERY QUEUE</span></div>
              <div className="text-[#9FA3A3]">Recovery Category: <span className="text-[#F2EFE9]">{activeProfile.label}</span></div>
              <div className="text-[#9FA3A3]">Case Strategy: <span className="text-[#E15D44]">{activeProfile.badge}</span></div>
              <div className="text-[#9FA3A3]">Updates Sent To: <span className="text-[#F2EFE9]">{contactEmail || 'Provided email address'}</span></div>
            </div>
            <Button onClick={handleReset} className="bg-[#E15D44] text-[#F2EFE9] hover:bg-[#F0836D] hover:text-[#090B0C] font-bold text-xs uppercase tracking-widest px-8">
              Close Window
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Incident Categorization */}
            {step === 1 && (
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-[#9FA3A3] block">
                  What best describes the incident?
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {incidentList.map((opt) => {
                    const Icon = opt.icon;
                    const isSelected = incidentType === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setIncidentType(opt.id)}
                        className={`p-3.5 rounded-lg text-left border transition-all text-xs flex flex-col justify-between ${
                          isSelected
                            ? 'border-[#E15D44] bg-[#090B0C] text-[#F2EFE9] ring-1 ring-[#E15D44]'
                            : 'border-[#252B2F] bg-[#191D20] text-[#9FA3A3] hover:border-[#E15D44]/40 hover:text-[#F2EFE9]'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="font-semibold text-[#F2EFE9]">{opt.label}</span>
                            <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#E15D44]' : 'text-[#9FA3A3]'}`} />
                          </div>
                          <div className="text-[11px] text-[#9FA3A3] leading-snug">{opt.desc}</div>
                        </div>
                        <div className="mt-2 pt-2 border-t border-[#252B2F]/60 flex items-center justify-between text-[9px] font-mono uppercase">
                          <span className={isSelected ? 'text-[#E15D44]' : 'text-[#9FA3A3]/70'}>{opt.badge}</span>
                          {isSelected && <span className="text-[#61B58A]">Selected</span>}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 2: Personalized Timing & Case Scope */}
            {step === 2 && (
              <div className="space-y-5">
                {/* Personalized Advice Header */}
                <div className="p-3.5 rounded-lg bg-[#090B0C] border border-[#E15D44]/30 flex items-start gap-3 text-xs text-[#9FA3A3]">
                  <Sparkles className="w-4 h-4 text-[#E15D44] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#F2EFE9] font-bold block mb-0.5">{activeProfile.badge}</span>
                    <span>{activeProfile.step2Advice}</span>
                  </div>
                </div>

                {/* Personalized Timing Question */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-[#9FA3A3] block mb-2">
                    {activeProfile.timingQuestion}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {activeProfile.timingOptions.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setTimeline(t.id)}
                        className={`p-3 rounded-lg border text-center text-xs transition-all ${
                          timeline === t.id
                            ? 'border-[#E15D44] bg-[#090B0C] text-[#F2EFE9]'
                            : 'border-[#252B2F] bg-[#191D20] text-[#9FA3A3] hover:border-[#E15D44]/40'
                        }`}
                      >
                        <div className="font-bold text-[#F2EFE9]">{t.label}</div>
                        <div className="text-[10px] text-[#9FA3A3]">{t.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Personalized Loss / Value Range */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-[#9FA3A3] block mb-2">
                    {activeProfile.valueQuestion}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['$10k - $50k', '$50k - $250k', '$250k - $1M', '$1M+'].map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setEstimatedLoss(val)}
                        className={`py-2.5 px-3 rounded-lg border text-xs font-mono font-bold transition-all text-center ${
                          estimatedLoss === val
                            ? 'border-[#E15D44] bg-[#090B0C] text-[#E15D44]'
                            : 'border-[#252B2F] bg-[#191D20] text-[#9FA3A3] hover:border-[#E15D44]/40'
                        }`}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Case-Specific Tailored Multi-Choice Question */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-[#9FA3A3] block mb-2">
                    {activeProfile.specialFieldTitle}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeProfile.specialFieldOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setSpecialDetail(option)}
                        className={`p-2.5 rounded-lg border text-left text-xs transition-all ${
                          specialDetail === option
                            ? 'border-[#E15D44] bg-[#090B0C] text-[#F2EFE9]'
                            : 'border-[#252B2F] bg-[#191D20] text-[#9FA3A3] hover:border-[#E15D44]/30'
                        }`}
                      >
                        <div className="font-medium text-[#F2EFE9] flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${specialDetail === option ? 'bg-[#E15D44]' : 'bg-[#252B2F]'}`} />
                          {option}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Personalized Evidence & Technical Hashes */}
            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#9FA3A3] block">
                      {activeProfile.evidenceTitle}
                    </label>
                    <span className="text-[10px] font-mono text-[#E15D44]">{activeProfile.evidenceSubtitle}</span>
                  </div>
                  <span className="text-[11px] text-[#9FA3A3] block mb-2">
                    {activeProfile.textareaLabel}
                  </span>
                  <textarea
                    rows={4}
                    value={txDetails}
                    onChange={(e) => setTxDetails(e.target.value)}
                    placeholder={activeProfile.textareaPlaceholder}
                    className="w-full bg-[#090B0C] border border-[#252B2F] rounded-lg p-3 text-xs font-mono text-[#F2EFE9] placeholder:text-[#9FA3A3]/40 focus:outline-none focus:border-[#E15D44]"
                  />
                </div>

                {/* Personalized Checklist */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-[#9FA3A3] uppercase tracking-wider block">
                    Which records do you currently have available?
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {activeProfile.evidenceChecklist.map((item) => {
                      const isChecked = selectedDocuments.includes(item);
                      return (
                        <div
                          key={item}
                          onClick={() => toggleDocument(item)}
                          className={`flex items-center gap-2.5 p-2.5 rounded border cursor-pointer transition-colors ${
                            isChecked
                              ? 'bg-[#090B0C] border-[#E15D44]/50 text-[#F2EFE9]'
                              : 'bg-[#191D20] border-[#252B2F] text-[#9FA3A3]'
                          }`}
                        >
                          <input 
                            type="checkbox" 
                            checked={isChecked} 
                            readOnly 
                            className="accent-[#E15D44] pointer-events-none" 
                          />
                          <span className="text-xs">{item}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#090B0C] border border-[#252B2F] flex items-center gap-2.5 text-[11px] text-[#9FA3A3]">
                  <FileCheck className="w-3.5 h-3.5 text-[#61B58A] shrink-0" />
                  <span>Don't worry if you don't have all documents now. We can begin tracing with just one transaction ID or wallet address.</span>
                </div>
              </div>
            )}

            {/* Step 4: Personalized Contact & Confidential Routing */}
            {step === 4 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#252B2F]">
                  <div>
                    <h4 className="text-sm font-bold text-[#F2EFE9]">{activeProfile.step4Heading}</h4>
                    <p className="text-xs text-[#9FA3A3]">{activeProfile.step4Subtext}</p>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#E15D44]/10 text-[#E15D44] border border-[#E15D44]/30 uppercase">
                    {activeProfile.badge}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-[#9FA3A3] block mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Jane Doe"
                      className="w-full bg-[#090B0C] border border-[#252B2F] rounded-lg p-3 text-xs text-[#F2EFE9] focus:outline-none focus:border-[#E15D44]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-[#9FA3A3] block mb-1">
                      Your Confidential Email
                    </label>
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="yourname@email.com"
                      className="w-full bg-[#090B0C] border border-[#252B2F] rounded-lg p-3 text-xs text-[#F2EFE9] focus:outline-none focus:border-[#E15D44]"
                    />
                  </div>
                </div>

                {/* Case-Specific Tailored Priority Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 p-3 rounded-lg bg-[#191D20] border border-[#252B2F] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={urgentTriggerChecked}
                      onChange={(e) => setUrgentTriggerChecked(e.target.checked)}
                      className="mt-0.5 accent-[#E15D44]"
                    />
                    <div className="text-xs">
                      <span className="font-semibold text-[#F2EFE9] block">{activeProfile.step4SpecialCheckLabel}</span>
                      <span className="text-[#9FA3A3] text-[11px]">
                        {activeProfile.step4SpecialCheckDesc}
                      </span>
                    </div>
                  </label>
                </div>

                <div className="p-3 bg-[#090B0C] border border-[#252B2F] rounded-lg text-[11px] text-[#9FA3A3] leading-relaxed">
                  <strong className="text-[#F2EFE9]">Confidential Notice:</strong> {activeProfile.step4Notice}
                </div>
              </div>
            )}

            {/* Modal Navigation Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-[#252B2F]">
              {step > 1 ? (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePrev}
                  className="border-[#252B2F] text-xs font-bold uppercase tracking-widest text-[#9FA3A3]"
                >
                  <ArrowLeft className="w-3.5 h-3.5 mr-1" /> Back
                </Button>
              ) : (
                <div />
              )}

              {step < 4 ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="bg-[#E15D44] text-[#F2EFE9] hover:bg-[#F0836D] hover:text-[#090B0C] text-xs font-bold uppercase tracking-widest px-6"
                >
                  Continue <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="bg-[#E15D44] text-[#F2EFE9] hover:bg-[#F0836D] hover:text-[#090B0C] text-xs font-bold uppercase tracking-widest px-8 shadow-lg shadow-[#E15D44]/20"
                >
                  {activeProfile.submitButtonText} <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              )}
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
