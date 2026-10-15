export interface ServiceDetails {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  heroHeadline: string;
  heroSubtitle: string;
  problemSolved: string;
  overview: string;
  capabilities: {
    title: string;
    description: string;
  }[];
  processSteps: {
    number: string;
    title: string;
    description: string;
  }[];
  deliverables: string[];
  supportedNetworks: string[];
  whoThisIsFor: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  seoTitle: string;
  seoDescription: string;
}

export const SERVICES_DATA: Record<string, ServiceDetails> = {
  'crypto-tracing': {
    slug: 'crypto-tracing',
    number: '01',
    title: 'Cryptocurrency Tracing',
    tagline: 'We trace where the crypto went.',
    heroHeadline: 'We trace where the crypto went.',
    heroSubtitle:
      'We follow relevant transactions between wallets and supported blockchain networks to see where your funds moved.',
    problemSolved:
      'When funds leave your wallet, they can move quickly through several addresses and platforms. Tracing connects these transfers so you can see where the cryptocurrency went.',
    overview:
      'Blockchains are public ledgers. Every transaction and transfer is recorded. Fundresq examines the transaction trail, mapping intermediate wallets, split amounts, and destination deposit addresses on exchanges.',
    capabilities: [
      {
        title: 'Multi-Chain Path Mapping',
        description:
          'Track transactions across Bitcoin (UTXO), Ethereum (EVM), Tron (TRC-20), Solana, Binance Smart Chain, Polygon, Arbitrum, and Avalanche.',
      },
      {
        title: 'Exchange Deposit Identification',
        description:
          'Identify specific deposit addresses at major centralized exchanges (such as Binance, OKX, Bybit, Coinbase, and Kraken) where scammers cash out.',
      },
      {
        title: 'DEX Swaps & Bridge Resolution',
        description:
          'Follow funds as they are swapped across decentralized exchanges (Uniswap, 1inch) and cross-chain liquidity bridges (Thorchain, Stargate).',
      },
      {
        title: 'Wallet Clustering & Attribution',
        description:
          'Group related addresses controlled by the same entity, identifying scammer infrastructure and consolidation pools.',
      },
    ],
    processSteps: [
      {
        number: '1',
        title: 'Transaction Verification',
        description: 'We verify your starting transaction hashes on the public blockchain explorer.',
      },
      {
        number: '2',
        title: 'Graph Path Analysis',
        description: 'We follow each outgoing hop, mapping every intermediate address and token swap.',
      },
      {
        number: '3',
        title: 'Exchange Attribution',
        description: 'We pinpoint destination wallets belonging to centralized exchanges or regulated financial entities.',
      },
      {
        number: '4',
        title: 'Evidence Delivery',
        description: 'We compile all findings into a structured chronological report ready for official submission.',
      },
    ],
    deliverables: [
      'Comprehensive money flow visual diagram showing every transaction hop',
      'Tabular exhibit of all verified transaction IDs (TxIDs), timestamps, and amounts',
      'List of destination centralized exchange deposit accounts and entity attributions',
      'Executive summary explaining the money trail in plain, non-technical language',
    ],
    supportedNetworks: [
      'Bitcoin (BTC)',
      'Ethereum (ETH & ERC-20)',
      'Tether on Tron (USDT TRC-20)',
      'Solana (SOL & SPL)',
      'Binance Smart Chain (BNB & BEP-20)',
      'Polygon (MATIC)',
      'Arbitrum & Optimism',
      'Avalanche (AVAX)',
    ],
    whoThisIsFor: [
      'Scam and theft victims seeking to establish where their cryptocurrency went',
      'Solicitors, barristers, and legal counsel preparing asset recovery claims',
      'Police fraud divisions and cybercrime units requiring on-chain analysis',
      'Corporate risk teams and accountants auditing contested cryptocurrency transactions',
    ],
    faqs: [
      {
        question: 'Can you trace cryptocurrency if it went through a mixer or bridge?',
        answer:
          'Yes, in many cases. While mixers aim to obscure transaction flow, cross-chain bridges and decentralized exchanges leave public records. We analyze entry and exit timing, amounts, and on-chain heuristics to follow funds as far as technically possible.',
      },
      {
        question: 'How long does a blockchain tracing investigation take?',
        answer:
          'Initial case reviews are typically completed within 24 to 48 hours. Comprehensive multi-hop tracing reports generally require 3 to 5 business days depending on transaction complexity.',
      },
      {
        question: 'Can I use this tracing report in court or with police?',
        answer:
          'Yes. Our reports are formatted specifically as evidentiary documents suitable for formal recovery claims, dispute resolutions, and official fraud reporting.',
      },
    ],
    seoTitle: 'Cryptocurrency Tracing Services | Fundresq',
    seoDescription:
      'Professional blockchain transaction tracing. We follow the movement of Bitcoin, Ethereum, and USDT across wallets and exchanges to document verifiable facts.',
  },

  'wallet-investigation': {
    slug: 'wallet-investigation',
    number: '02',
    title: 'Wallet & Transaction Investigation',
    tagline: 'We examine wallet addresses, transactions and other information connected to your case.',
    heroHeadline: 'Examine the wallets. Uncover the connections.',
    heroSubtitle:
      'Deep forensic analysis of wallet histories, contract interactions, counterparty addresses, and historical activity.',
    problemSolved:
      'Looking at a single transaction hash only tells part of the story. A wallet investigation reveals the full behavior of counterparty addresses, uncovering scam network connections and historical patterns.',
    overview:
      'A single compromised wallet or recipient address is rarely an isolated incident. Scammers operate complex networks of feeder wallets, automated collection scripts, and treasury addresses. Our wallet investigation examines the full transaction history, token permissions, smart contract calls, and associated address clusters to establish the complete picture of what happened.',
    capabilities: [
      {
        title: 'Full Ledger History Audit',
        description:
          'Analyze the historical balance, inflows, and outflows of any target wallet across its lifetime.',
      },
      {
        title: 'Smart Contract & Permit Analysis',
        description:
          'Identify malicious contract approvals, token drainers, and backdoors that compromised your wallet.',
      },
      {
        title: 'Counterparty Intelligence',
        description:
          'Determine other victims or wallets interacting with the same entity to establish syndicated activity.',
      },
      {
        title: 'Risk & Vulnerability Remediation',
        description:
          'Provide clear instructions to revoke active approvals, secure remaining assets, and prevent re-exploitation.',
      },
    ],
    processSteps: [
      {
        number: '1',
        title: 'Wallet Ingestion',
        description: 'We log all relevant public wallet addresses and examine on-chain historical records.',
      },
      {
        number: '2',
        title: 'Contract & Allowance Audit',
        description: 'We inspect smart contract interactions, approval signatures, and script triggers.',
      },
      {
        number: '3',
        title: 'Cluster Mapping',
        description: 'We correlate counterparty addresses to identify larger scam networks and operators.',
      },
      {
        number: '4',
        title: 'Advisory & Report',
        description: 'We deliver an analytical breakdown of the wallet activity and security recommendations.',
      },
    ],
    deliverables: [
      'Comprehensive wallet activity ledger with categorized transaction types',
      'Smart contract approval audit detailing active spend permissions and vulnerabilities',
      'Counterparty cluster analysis identifying associated scam infrastructure',
      'Security guidance for safeguarding remaining wallets and digital assets',
    ],
    supportedNetworks: [
      'Ethereum & EVM Chains',
      'Bitcoin & UTXO Blockchains',
      'Tron Network',
      'Solana Ecosystem',
      'Polygon, Arbitrum & Base',
    ],
    whoThisIsFor: [
      'Individuals who experienced unauthorized wallet drains or hack attempts',
      'Crypto investors seeking an audit of suspicious addresses before transferring funds',
      'Legal teams conducting due diligence on disputed crypto assets',
      'Companies investigating internal fraud or unauthorized employee wallet transfers',
    ],
    faqs: [
      {
        question: 'Can you tell me the real identity of a wallet owner?',
        answer:
          'Blockchains display public addresses, not names. However, when scammers transfer funds to centralized cryptocurrency exchanges, those exchanges hold real-world identity verification records (KYC). Our report pinpoints those exact exchange accounts so law enforcement can request the identity records.',
      },
      {
        question: 'Can you check if my wallet still has malicious permissions active?',
        answer:
          'Yes. As part of our wallet investigation, we audit all smart contract approvals and explain how to revoke any malicious authorizations that could put future funds at risk.',
      },
      {
        question: 'Does Fundresq need my private key or seed phrase?',
        answer:
          'NEVER. Fundresq will NEVER ask for your private key, seed phrase, or wallet passwords. All blockchain investigations are performed using public wallet addresses and transaction hashes.',
      },
    ],
    seoTitle: 'Wallet & Transaction Investigation Services | Fundresq',
    seoDescription:
      'Forensic investigation of crypto wallet addresses and transaction histories. We analyze contract interactions, drainer scripts, and counterparty clusters.',
  },

  'investigation-reports': {
    slug: 'investigation-reports',
    number: '03',
    title: 'Scam Fund Recovery',
    tagline: 'We track down diverted assets and take direct action to recover your scam funds.',
    heroHeadline: 'Recovering your scam funds.',
    heroSubtitle:
      'Fundresq traces stolen digital assets across blockchains and takes direct action to recover your lost cryptocurrency.',
    problemSolved:
      'Victims need direct action to recover stolen digital assets, not passive paperwork. We manage the recovery process to return your scam funds.',
    overview:
      'Fundresq actively traces and manages the recovery of lost or stolen cryptocurrency. We combine on-chain forensic attribution with direct recovery actions to track down recipient accounts and secure the return of your assets.',
    capabilities: [
      {
        title: 'Direct Asset Recovery Action',
        description:
          'Targeted recovery actions and formal evidentiary claim submissions against identified recipient wallets and endpoints.',
      },
      {
        title: 'Multi-Hop Ledger Attribution',
        description:
          'Tracking stolen coins through peeled outputs, token bridges, and mixer hops directly to identifiable recipient accounts.',
      },
      {
        title: 'End-to-End Recovery Management',
        description:
          'Managing the entire asset recovery workflow so victims do not have to navigate complicated technical hurdles alone.',
      },
      {
        title: 'Evidentiary Chain of Custody',
        description:
          'Forensically unassailable transaction proof verifying exact client loss and recipient accounts.',
      },
    ],
    processSteps: [
      {
        number: '1',
        title: 'Transaction Intake',
        description: 'We gather all wallet addresses, TxIDs, and incident records under strict confidentiality.',
      },
      {
        number: '2',
        title: 'Destination Mapping',
        description: 'Our analysts trace the movement of coins directly to recipient accounts and endpoints.',
      },
      {
        number: '3',
        title: 'Direct Recovery Action',
        description: 'We initiate targeted recovery actions against identified recipient wallets to secure the funds.',
      },
      {
        number: '4',
        title: 'Asset Return',
        description: 'We coordinate the recovery workflow to return verified stolen assets to client custody.',
      },
    ],
    deliverables: [
      'Official Fund Recovery Action & Claim Filing',
      'Forensic Blockchain Tracing Map & Account Attribution',
      'Direct Recovery Case Representation',
      'Verified Custodial Return Coordination',
    ],
    supportedNetworks: [
      'Multi-chain coverage across all major public blockchain networks',
    ],
    whoThisIsFor: [
      'Individuals who lost crypto to investment platforms or romance scams',
      'Victims of wallet drains, phishing hacks, or unauthorized transfers',
      'Businesses experiencing unauthorized digital asset diversion',
      'Victims seeking immediate direct recovery intervention',
    ],
    faqs: [
      {
        question: 'Do I need to hire an external solicitor to recover my funds?',
        answer:
          'No. Unlike passive forensic firms that only give you a technical report and leave you to find and pay a lawyer, Fundresq is designed to manage the recovery process directly. We locate where your money went and take direct action to recover your scam funds.',
      },
      {
        question: 'How quickly should I begin the recovery process?',
        answer:
          'As quickly as possible. The sooner our team investigates your transaction trail, the faster we can locate the recipient wallets and initiate recovery actions.',
      },
      {
        question: 'Does Fundresq charge upfront fees or guarantee 100% recovery?',
        answer:
          'No legitimate firm can promise a 100% recovery guarantee before inspecting blockchain ledgers. Fundresq provides clear, transparent case reviews and works aggressively to recover your scam funds.',
      },
    ],
    seoTitle: 'Scam Fund Recovery Services | Fundresq',
    seoDescription:
      'Direct cryptocurrency and scam fund recovery services. We track stolen digital assets across blockchains and take direct action to recover your lost funds.',
  },
};
