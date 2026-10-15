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
          'Yes. Our reports are formatted specifically as evidentiary documents suitable for law enforcement crime reports, court witness exhibits, and exchange freeze requests.',
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
    title: 'Investigation Reports',
    tagline: 'You receive a clear report showing what we found and the transaction trail we identified.',
    heroHeadline: 'See what happened to your funds.',
    heroSubtitle:
      'We explain what we found and provide a clear investigation report that police, lawyers, and exchanges can act upon.',
    problemSolved:
      'Police officers, solicitors, and fraud departments need a clear record of what happened, not complicated blockchain jargon. We provide structured documentation showing the verifiable facts.',
    overview:
      'A Fundresq Investigation Report brings together the evidence from your case. Written in plain English and backed by verified blockchain records, our reports are prepared for you to share with police, legal counsel, and exchange compliance teams.',
    capabilities: [
      {
        title: 'Plain-English Incident Narrative',
        description:
          'A clear chronological summary of the incident that non-technical investigators and judges can easily understand.',
      },
      {
        title: 'Cryptographic Proof Exhibits',
        description:
          'Complete tables of verified transaction hashes, block numbers, wallet addresses, and timestamps.',
      },
      {
        title: 'Exchange Freeze Documentation',
        description:
          'Specific exchange deposit addresses and compliance packet sections formatted for immediate account freeze requests.',
      },
      {
        title: 'Evidentiary Chain of Custody',
        description:
          'Objective documentation adhering to forensic evidentiary principles without false claims or speculation.',
      },
    ],
    processSteps: [
      {
        number: '1',
        title: 'Evidence Gathering',
        description: 'We assemble all verified on-chain data, communications, and victim documentation.',
      },
      {
        number: '2',
        title: 'Forensic Synthesis',
        description: 'Our analysts reconstruct the timeline, flow diagrams, and account attributions.',
      },
      {
        number: '3',
        title: 'Peer Review',
        description: 'Every report is reviewed for forensic accuracy and objective evidentiary compliance.',
      },
      {
        number: '4',
        title: 'Report Delivery',
        description: 'You receive the completed PDF report with filing guidance for police and lawyers.',
      },
    ],
    deliverables: [
      'Official Fundresq Forensic Investigation Report (PDF)',
      'Executive Summary for rapid review by law enforcement detectives',
      'High-resolution visual money flow diagram suitable for legal filings',
      'Actionable submission guidance for police crime reporting and exchange compliance desks',
    ],
    supportedNetworks: [
      'Multi-chain coverage across all major public blockchain networks',
    ],
    whoThisIsFor: [
      'Victims filing formal police reports or cybercrime complaints',
      'Solicitors preparing emergency asset freeze injunctions or Norwich Pharmacal orders',
      'Insolvency practitioners and liquidators recovering misappropriated assets',
      'Insurance adjusters verifying cryptocurrency loss claims',
    ],
    faqs: [
      {
        question: 'Why do police require a formal forensic report?',
        answer:
          'Most local police departments lack dedicated in-house blockchain forensics units. A structured Fundresq report translates technical ledger data into actionable evidence, making it straightforward for detectives to issue subpoenas to exchanges.',
      },
      {
        question: 'Can you guarantee that law enforcement will recover my money?',
        answer:
          'No company can guarantee law enforcement action or asset recovery. However, providing a verified, professional evidence report dramatically increases the probability that police or exchange compliance desks will freeze accounts and open a formal investigation.',
      },
      {
        question: 'How do I submit this report to an exchange or the police?',
        answer:
          'Every Fundresq report includes practical next-steps guidance detailing how to file with national cybercrime agencies, local police, and exchange compliance fraud desks.',
      },
    ],
    seoTitle: 'Blockchain Forensic Investigation Reports | Fundresq',
    seoDescription:
      'Court- and police-ready cryptocurrency investigation reports. We translate raw blockchain transactions into clear, actionable evidence for law enforcement and legal counsel.',
  },
};
