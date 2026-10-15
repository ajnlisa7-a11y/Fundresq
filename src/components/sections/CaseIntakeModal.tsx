'use client';

import { useState } from 'react';
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
  AlertCircle 
} from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface CaseIntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedIncident?: string;
}

export function CaseIntakeModal({ isOpen, onClose, preselectedIncident }: CaseIntakeModalProps) {
  const [step, setStep] = useState(1);
  const [incidentType, setIncidentType] = useState(preselectedIncident || 'investment_scam');
  const [timeline, setTimeline] = useState('within_30_days');
  const [estimatedLoss, setEstimatedLoss] = useState('$50,000 - $250,000');
  const [hasHashes, setHasHashes] = useState(true);
  const [txDetails, setTxDetails] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [isInstitution, setIsInstitution] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const incidentOptions = [
    { id: 'investment_scam', label: 'Investment Scam / Fake Platform', desc: 'I sent crypto to a trading platform, fake broker, or yield scheme that turned out to be fraudulent' },
    { id: 'romance_scam', label: 'Romance Scam / Deceptive Contact', desc: 'Someone I met online, on a dating app, or social media persuaded me to send crypto or deposit on a site' },
    { id: 'theft', label: 'Stolen Cryptocurrency', desc: 'My wallet was drained, hacked, or unauthorized transactions moved funds without my approval' },
    { id: 'unresponsive', label: 'Withheld Funds / Blocked Account', desc: 'A platform halted withdrawals, demanded fake tax fees, or went dark' },
    { id: 'wallet_audit', label: 'Wallet or Transaction Investigation', desc: 'I need to examine a specific wallet address, transaction trail, or counterparties' },
    { id: 'commercial', label: 'Business or Legal Matter', desc: 'Partnership dispute, commercial litigation, or law enforcement / solicitor inquiry' },
  ];

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
      const selectedLabel = incidentOptions.find(o => o.id === incidentType)?.label || incidentType;
      await supabase.from('cases').insert([{
        case_id: `FR-${Date.now().toString(36).toUpperCase()}`,
        case_type: selectedLabel,
        user_name: contactName || 'Confidential Inquirer',
        user_email: contactEmail,
        description: txDetails,
        risk_level: estimatedLoss,
        status: 'Review Pending',
        evidence_integrity: hasHashes ? 'Has Transaction Hashes' : 'No Hashes Provided',
        form_values: {
          timeline,
          estimatedLoss,
          isInstitution,
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
    onClose();
  };

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
                Step {step} of 4
              </span>
            )}
          </div>

          <DialogTitle className="text-xl md:text-2xl font-headline font-bold text-[#F2EFE9] pt-2">
            {submitted ? 'Recovery Case Received' : 'Start Recovery Case'}
          </DialogTitle>
          <DialogDescription className="text-[#9FA3A3] text-xs md:text-sm">
            {submitted 
              ? 'We have received your case details. An asset recovery specialist will review the records under strict confidentiality.'
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
                An asset recovery specialist has been assigned to examine your transaction history and coordinate immediate fund recovery actions. You will receive an assessment by email within 24 hours.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[#090B0C] border border-[#252B2F] text-left text-xs font-mono space-y-1 max-w-md mx-auto">
              <div className="text-[#9FA3A3]">Status: <span className="text-[#61B58A]">CONFIDENTIAL & IN QUEUE</span></div>
              <div className="text-[#9FA3A3]">Category: <span className="text-[#F2EFE9]">{incidentOptions.find(o => o.id === incidentType)?.label}</span></div>
              <div className="text-[#9FA3A3]">Updates to: <span className="text-[#E15D44]">{contactEmail || 'Provided email address'}</span></div>
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
                  {incidentOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setIncidentType(opt.id)}
                      className={`p-3.5 rounded-lg text-left border transition-all text-xs ${
                        incidentType === opt.id
                          ? 'border-[#E15D44] bg-[#090B0C] text-[#F2EFE9] ring-1 ring-[#E15D44]'
                          : 'border-[#252B2F] bg-[#191D20] text-[#9FA3A3] hover:border-[#E15D44]/40 hover:text-[#F2EFE9]'
                      }`}
                    >
                      <div className="font-semibold text-[#F2EFE9] mb-1">{opt.label}</div>
                      <div className="text-[11px] text-[#9FA3A3] leading-snug">{opt.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Timing & Scope */}
            {step === 2 && (
              <div className="space-y-5">
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-[#9FA3A3] block mb-2">
                    When did this happen?
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'within_7_days', label: 'Past 7 Days', sub: 'Urgent / recent' },
                      { id: 'within_30_days', label: '1 - 4 Weeks Ago', sub: 'Recent transfer' },
                      { id: 'older', label: 'Over 1 Month Ago', sub: 'Past incident' },
                    ].map((t) => (
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

                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-[#9FA3A3] block mb-2">
                    Estimated total value involved (USD equivalent)
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

                <div className="p-3.5 rounded-lg bg-[#090B0C] border border-[#252B2F] flex items-start gap-3 text-xs text-[#9FA3A3]">
                  <AlertCircle className="w-4 h-4 text-[#E15D44] shrink-0 mt-0.5" />
                  <span>
                    Tip: Tracing early makes it much easier to track down the recipient and recover your scam funds.
                  </span>
                </div>
              </div>
            )}

            {/* Step 3: Technical Hashes & Evidence */}
            {step === 3 && (
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-[#9FA3A3] block">
                  Transaction IDs or Wallet Addresses (if you have them)
                </label>
                <textarea
                  rows={4}
                  value={txDetails}
                  onChange={(e) => setTxDetails(e.target.value)}
                  placeholder="Paste any transaction IDs (TxIDs), your wallet address, or the recipient's address here. If you don't have these handy right now, you can leave this blank..."
                  className="w-full bg-[#090B0C] border border-[#252B2F] rounded-lg p-3 text-xs font-mono text-[#F2EFE9] placeholder:text-[#9FA3A3]/40 focus:outline-none focus:border-[#E15D44]"
                />

                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-[#9FA3A3] uppercase tracking-wider block">
                    What documents or records do you have?
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <label className="flex items-center gap-2 p-2.5 rounded bg-[#191D20] border border-[#252B2F] cursor-pointer">
                      <input type="checkbox" defaultChecked className="accent-[#E15D44]" />
                      <span>Transaction IDs (TxIDs)</span>
                    </label>
                    <label className="flex items-center gap-2 p-2.5 rounded bg-[#191D20] border border-[#252B2F] cursor-pointer">
                      <input type="checkbox" defaultChecked className="accent-[#E15D44]" />
                      <span>Wallet Addresses</span>
                    </label>
                    <label className="flex items-center gap-2 p-2.5 rounded bg-[#191D20] border border-[#252B2F] cursor-pointer">
                      <input type="checkbox" className="accent-[#E15D44]" />
                      <span>Chat Messages / Emails</span>
                    </label>
                    <label className="flex items-center gap-2 p-2.5 rounded bg-[#191D20] border border-[#252B2F] cursor-pointer">
                      <input type="checkbox" className="accent-[#E15D44]" />
                      <span>Platform Screenshots</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Contact & Discretionary Routing */}
            {step === 4 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-[#9FA3A3] block mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Jane Doe or Solicitor Name"
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

                <div className="pt-2">
                  <label className="flex items-start gap-3 p-3 rounded-lg bg-[#191D20] border border-[#252B2F] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isInstitution}
                      onChange={(e) => setIsInstitution(e.target.checked)}
                      className="mt-0.5 accent-[#E15D44]"
                    />
                    <div className="text-xs">
                      <span className="font-semibold text-[#F2EFE9] block">I am a lawyer, police officer, or liquidator</span>
                      <span className="text-[#9FA3A3] text-[11px]">
                        Check if you require formal expert witness documentation for court or law enforcement proceedings.
                      </span>
                    </div>
                  </label>
                </div>

                <div className="p-3 bg-[#090B0C] border border-[#252B2F] rounded-lg text-[11px] text-[#9FA3A3] leading-relaxed">
                  <strong className="text-[#F2EFE9]">Confidential Case Review:</strong> Fundresq provides cryptocurrency tracing and direct scam fund recovery services. All information is held strictly confidential.
                </div>
              </div>
            )}

            {/* Modal Actions */}
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
                  Submit Case to Recover Funds <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              )}
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
