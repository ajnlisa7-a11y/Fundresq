export interface ScamDetails {
  slug: string;
  title: string;
  victimSearchPhrase: string;
  badge: string;
  heroHeadline: string;
  heroSubtitle: string;
  problemStatement: string;
  warningSigns: string[];
  howWeInvestigate: string[];
  whatWeTrace: string[];
  deliverableSummary: string;
  caseStudy: {
    title: string;
    lossAmount: string;
    narrative: string;
    findings: string;
    outcome: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  seoTitle: string;
  seoDescription: string;
}

export const SCAMS_DATA: Record<string, ScamDetails> = {
  'investment-scams': {
    slug: 'investment-scams',
    title: 'Investment Scams',
    victimSearchPhrase: 'I sent crypto to an investment platform and cannot withdraw',
    badge: 'Trading & Yield Schemes',
    heroHeadline: 'Lost money to a fake crypto investment or trading scheme?',
    heroSubtitle:
      'We trace the cryptocurrency you deposited, identify the recipient wallets and exchange accounts, and document the verifiable evidence.',
    problemStatement:
      'Fake investment schemes convince victims to deposit Bitcoin, Ethereum, or USDT into websites promising automated daily profits, AI trading algorithms, or guaranteed returns. When you request a withdrawal, the operators demand extra "liquidity deposits", "clearance fees", or "capital gains taxes" before disappearing.',
    warningSigns: [
      'Guaranteed daily returns or automated high-yield profit percentages',
      'Demands for additional fees or taxes before a withdrawal is processed',
      'Unregulated trading portals that look professional but have no corporate registration',
      'Coaching or pressure from an online "financial mentor" or account manager',
    ],
    howWeInvestigate: [
      'We identify every deposit transaction hash (TxID) and map the movement of funds from your wallet.',
      'We determine whether your cryptocurrency was ever traded or if it was immediately funneled to private wallets.',
      'We trace the funds across intermediate hops until they reach centralized cryptocurrency exchange deposit accounts.',
      'We compile a chronological, court-ready report with wallet ownership attributions and timestamped ledger records.',
    ],
    whatWeTrace: [
      'Bitcoin, Ethereum, USDT (Tron/ERC-20), USDC, Solana, and BSC transaction routes',
      'Scammer consolidation wallets and multi-signature clusters',
      'Centralized exchange deposit addresses (e.g., Binance, OKX, Bybit, Coinbase)',
    ],
    deliverableSummary:
      'A formal written evidence report documenting the full transaction trail, timestamped exhibits, and exchange deposit identifiers suitable for law enforcement crime reports and legal freeze injunctions.',
    caseStudy: {
      title: 'Automated Arbitrage Platform Scheme',
      lossAmount: '$58,000 USDT',
      narrative:
        'A client deposited 58,000 USDT across four months into an offshore trading platform claiming to execute high-frequency crypto arbitrage. When the balance reached $140,000, the platform demanded an advance $15,000 "tax deposit" to release the funds.',
      findings:
        'Fundresq proved the platform never traded the funds. Each deposit was instantly forwarded within 4 minutes to a high-volume consolidation cluster on the Tron network, with 46,000 USDT deposited into two verified exchange accounts.',
      outcome:
        'Client provided our verified evidence report to their legal counsel and local police fraud division, enabling an immediate exchange account freeze request.',
    },
    faqs: [
      {
        question: 'Can you get my investment back directly?',
        answer:
          'No legitimate firm can unilaterally pull funds back from the blockchain. What Fundresq does is trace the exact destination exchange accounts where scammers cashed out, providing the forensic evidence police and lawyers require to freeze those accounts.',
      },
      {
        question: 'Should I pay the withdrawal fee or tax requested by the platform?',
        answer:
          'Do NOT send additional funds. Scammers frequently demand advance "clearance fees" or "taxes" knowing the victim is desperate to recover their money. Paying this fee will only result in greater loss.',
      },
      {
        question: 'What details do I need for you to investigate?',
        answer:
          'The transaction IDs (TxIDs or hashes) of your deposits, your outgoing wallet address, and any URLs or platform communications you preserved.',
      },
    ],
    seoTitle: 'Investment Scam Tracing & Investigation | Fundresq',
    seoDescription:
      'Investigate fake cryptocurrency investment platforms. We trace where your funds moved, identify recipient exchange accounts, and deliver court-ready evidence reports.',
  },

  'romance-scams': {
    slug: 'romance-scams',
    title: 'Romance Scams',
    victimSearchPhrase: 'Someone I met online convinced me to transfer cryptocurrency',
    badge: 'Social Engineering & Pig Butchering',
    heroHeadline: 'Convinced to send cryptocurrency by someone you met online?',
    heroSubtitle:
      'We follow the transactions you made, document the scammer’s collection wallets, and provide an objective evidence report.',
    problemStatement:
      'Romance and relationship scams (often called "pig butchering" or sha zhu pan) involve scammers building personal trust over weeks or months on dating apps, social media, or messaging channels. Eventually, they introduce a "special investment opportunity", a deceptive liquidity pool, or a crypto trading portal.',
    warningSigns: [
      'The contact refused to meet in person or conduct verifiable live video calls',
      'The relationship quickly turned to financial topics, cryptocurrency investments, or "exclusive liquidity nodes"',
      'You were instructed to purchase crypto on a legitimate exchange (like Coinbase or Kraken) and transfer it to an external portal',
      'The platform initially allowed small mock withdrawals to create false confidence before locking larger deposits',
    ],
    howWeInvestigate: [
      'We aggregate every single transaction made over the course of the relationship into a single verified ledger.',
      'We trace the path across multiple blockchain networks to determine the scam syndicate’s collection addresses.',
      'We connect the destination addresses with known threat actor clusters and exchange infrastructure.',
      'We deliver a plain-language summary that documents the financial deception without technical confusion.',
    ],
    whatWeTrace: [
      'Tether (USDT) on Tron and Ethereum, Bitcoin, Ethereum, and cross-chain transfers',
      'Scammer syndicate collection pools and intermediary transit wallets',
      'Cash-out points at centralized cryptocurrency exchanges',
    ],
    deliverableSummary:
      'A structured investigative report with clear transaction charts, chronological money flow timelines, and exchange account references prepared for law enforcement cyber units.',
    caseStudy: {
      title: 'Dating App Liquidity Pool Scheme',
      lossAmount: '$84,000 USDC',
      narrative:
        'A victim was contacted on a professional networking app by an individual who claimed to be an experienced commodities trader. Over three months, the contact convinced the victim to connect their Web3 wallet to a fake decentralized finance (DeFi) liquidity mining pool.',
      findings:
        'Fundresq identified that the smart contract had granted unlimited spend approval to the scammer. We mapped the transfer of 84,000 USDC through two decentralized swap routers and traced the final funds to a verified deposit address at a major overseas exchange.',
      outcome:
        'The victim submitted our comprehensive report directly to the FBI IC3 and local law enforcement, who issued a formal evidence preservation request to the exchange.',
    },
    faqs: [
      {
        question: 'Is my privacy protected if I report a romance scam?',
        answer:
          'Yes. All reviews and reports are conducted under strict non-disclosure obligations. We treat your personal circumstances with complete confidentiality, professionalism, and care.',
      },
      {
        question: 'Why do scammers prefer USDT on Tron for romance scams?',
        answer:
          'Tron transactions are extremely fast and inexpensive. However, every Tron transaction is completely public and permanent. We can follow every hop from your wallet directly to the recipient exchange deposit accounts.',
      },
      {
        question: 'Can police take action on a romance scam report?',
        answer:
          'Police often struggle to investigate raw blockchain hashes without clear documentation. When provided with a Fundresq report detailing exact exchange accounts and timelines, law enforcement has actionable evidence to file subpoenas and freeze notices.',
      },
    ],
    seoTitle: 'Romance Scam Crypto Tracing & Investigation | Fundresq',
    seoDescription:
      'Traced funds for romance and pig-butchering crypto scams. We follow the transaction trail, identify recipient exchanges, and provide verified evidence for police reports.',
  },

  'fake-trading-platforms': {
    slug: 'fake-trading-platforms',
    title: 'Fake Trading Platforms',
    victimSearchPhrase: 'A platform shows money in my account but will not let me withdraw it',
    badge: 'Brokerage & Platform Fraud',
    heroHeadline: 'Platform shows money in your account but won’t let you withdraw?',
    heroSubtitle:
      'We review your original transactions and investigate where your real cryptocurrency actually went.',
    problemStatement:
      'Deceptive trading portals and fabricated brokerages display simulated dashboards showing large account balances and profitable trades. In reality, the numbers on screen are completely fabricated. When you attempt to withdraw, the website claims your account is frozen or demands additional payments.',
    warningSigns: [
      'The platform dashboard shows steady, unrealistic daily profits with zero losing trades',
      'Withdrawals are held hostage behind advance payments for "VIP clearance", "AML audits", or "capital taxes"',
      'Customer support is only reachable via Telegram, WhatsApp, or an anonymous website live chat',
      'The platform website was registered only a few months ago under redacted domain ownership',
    ],
    howWeInvestigate: [
      'We analyze the original deposit transactions to confirm whether your funds entered real liquidity pools or went directly to personal wallets.',
      'We audit the blockchain ledger to prove the platform was never conducting live market trades with your cryptocurrency.',
      'We follow the movement of your real coins as they are consolidated into scammer-controlled wallets.',
      'We identify the cryptocurrency exchange accounts where the scammers converted your funds.',
    ],
    whatWeTrace: [
      'Direct deposit hashes and recipient deposit addresses',
      'Multi-hop transfer chains and mixing/bridging services',
      'Offshore exchange deposit addresses and OTC (over-the-counter) broker desks',
    ],
    deliverableSummary:
      'An objective forensic report confirming that the platform balance is simulated, documenting the real movement of your funds, and presenting verifiable evidence for legal advisers and police.',
    caseStudy: {
      title: 'Offshore Futures Platform Freeze',
      lossAmount: '$112,000 BTC & USDT',
      narrative:
        'An individual deposited Bitcoin and USDT into what appeared to be an institutional crypto futures trading platform. Within 60 days, the platform interface displayed a balance of $310,000. When requesting a withdrawal of $50,000, the user was told their account was flagged for "money laundering" and required a $30,000 compliance bond.',
      findings:
        'Fundresq proved that the platform never opened any positions on-chain. The user’s Bitcoin deposits were moved within 30 minutes of receipt into an unhosted wallet cluster, and the USDT was consolidated and transferred to an exchange deposit wallet.',
      outcome:
        'The client received verified documentation proving the fraud, preventing them from paying the $30,000 bond and equipping their solicitor with actionable exhibits.',
    },
    faqs: [
      {
        question: 'Does the balance shown on my dashboard actually exist?',
        answer:
          'In almost all fake platform cases, the dashboard balance is purely simulated HTML numbers. Your real cryptocurrency was moved to the scammer’s private wallet immediately after your initial deposit.',
      },
      {
        question: 'What if the platform threatens me with legal action if I do not pay?',
        answer:
          'Fake platforms frequently use intimidation and fake legal notices to extract more money. These threats are baseless tactics designed to exploit fear. Do not send further funds.',
      },
      {
        question: 'Can your report be used by police or lawyers?',
        answer:
          'Yes. Our reports are designed specifically for law enforcement investigators, solicitors, and exchange compliance teams to establish the evidentiary facts.',
      },
    ],
    seoTitle: 'Fake Trading Platform Crypto Investigation | Fundresq',
    seoDescription:
      'Investigate fake crypto trading portals and withheld withdrawals. We trace where your actual funds went and provide verified evidence for police and legal counsel.',
  },

  'crypto-scams': {
    slug: 'crypto-scams',
    title: 'Crypto Scams & Fraud',
    victimSearchPhrase: 'Lost cryptocurrency to an online scam or fraudulent scheme',
    badge: 'General Fraud & Deception',
    heroHeadline: 'Lost cryptocurrency to an online scam or fraudulent scheme?',
    heroSubtitle:
      'We investigate the transactions you made, reconstruct the movement of funds, and establish the verifiable facts.',
    problemStatement:
      'Cryptocurrency scams take many forms: deceptive token presales, airdrop phishing, social media giveaways, impersonation of crypto influencers, and fake customer support desks. Regardless of the scheme, every transfer leaves an immutable record on the blockchain.',
    warningSigns: [
      'Unsolicited direct messages on Telegram, Discord, or X offering investment opportunities or customer support',
      'Requests to send cryptocurrency to "verify" or "unlock" an account or receive a doubled payout',
      'Fake airdrop claims directing you to connect your wallet to claim free tokens',
      'Fraudulent QR codes or wallet addresses provided by fake support representatives',
    ],
    howWeInvestigate: [
      'We examine every transaction hash and identify the exact destination wallet addresses.',
      'We follow the path of your funds across supported networks and intermediate wallets.',
      'We identify centralized exchanges, liquidity pools, or bridges involved in the flow.',
      'We produce an authoritative forensic report ready for official reporting.',
    ],
    whatWeTrace: [
      'Bitcoin, Ethereum, Tron, Solana, Avalanche, Polygon, and Arbitrum',
      'Cross-chain bridges, token swaps, and smart contract transactions',
      'Centralized exchange deposit addresses and OTC cash-out points',
    ],
    deliverableSummary:
      'A comprehensive, plain-language forensic report with transaction exhibits, address cluster maps, and destination exchange identifiers.',
    caseStudy: {
      title: 'Phishing Token Pre-Sale Scam',
      lossAmount: '$32,000 ETH',
      narrative:
        'A user intended to participate in an upcoming blockchain token presale, but clicked a sponsored search engine ad linking to a clone of the official project website, sending 10 ETH to a fraudulent contract.',
      findings:
        'Fundresq tracked the funds through a decentralized token swap into DAI and then through a cross-chain bridge into a destination wallet on Polygon, where funds were transferred to an exchange deposit address.',
      outcome:
        'Delivered a verified transaction trail identifying the exchange deposit account, submitted to national fraud authorities.',
    },
    faqs: [
      {
        question: 'Is it too late to trace funds if the scam happened months ago?',
        answer:
          'No. Blockchain ledgers are permanent and will never be deleted or modified. We can trace transactions regardless of whether they occurred yesterday or two years ago.',
      },
      {
        question: 'Do you work directly with law enforcement?',
        answer:
          'We provide court- and police-ready documentation that clients can hand directly to law enforcement, and we support investigators with technical clarification when requested.',
      },
      {
        question: 'How do I start a review?',
        answer:
          'Click "Start a Case" and share your transaction hashes and wallet address. We will review your details confidentially and let you know what can be traced.',
      },
    ],
    seoTitle: 'Cryptocurrency Scam Tracing & Investigation | Fundresq',
    seoDescription:
      'Professional cryptocurrency scam investigation. We trace stolen Bitcoin, Ethereum, and USDT across blockchains to identify destination exchange accounts.',
  },

  'wallet-hacks': {
    slug: 'wallet-hacks',
    title: 'Wallet Hacks & Drainers',
    victimSearchPhrase: 'Transactions left my wallet that I did not authorize',
    badge: 'Key Compromise & Drainers',
    heroHeadline: 'Unauthorized transactions left your crypto wallet?',
    heroSubtitle:
      'We investigate how your funds moved, trace where the stolen tokens went, and identify the destination exchange accounts.',
    problemStatement:
      'Wallet hacks and drainers occur when a victim inadvertently signs a malicious smart contract approval, visits a phishing site, or has their private seed phrase compromised. Automated drainer scripts sweep tokens and NFTs within seconds across multiple addresses.',
    warningSigns: [
      'Unexpected outgoing transactions that you never approved or signed',
      'Tokens suddenly transferred to an unknown address within minutes of connecting to a Web3 app',
      'Your wallet balance reduced to zero without receiving any notification or confirmation',
      'Interactions with suspicious Discord links, airdrop claim sites, or fake NFT minting pages',
    ],
    howWeInvestigate: [
      'We examine the compromised wallet address to identify the exact malicious contract or transaction that initiated the theft.',
      'We follow the stolen tokens as drainer scripts route them through decentralized liquidity pools and bridges.',
      'We trace the converted funds (usually converted to ETH or BTC) until they are sent to exchange deposit addresses.',
      'We advise on revoking active smart contract approvals to protect any future assets.',
    ],
    whatWeTrace: [
      'ERC-20, BEP-20, TRC-20, and SPL token transfers and drainer scripts',
      'DEX swaps (Uniswap, 1inch, Curve) and cross-chain bridge routes (Thorchain, Stargate)',
      'Consolidation wallets and final exchange deposit addresses',
    ],
    deliverableSummary:
      'A forensic ledger detailing the exact drainer transaction, the intermediate swap trail, and destination exchange accounts for legal and law enforcement use.',
    caseStudy: {
      title: 'Malicious Permit Drainer Exploit',
      lossAmount: '$65,000 ETH & ERC-20 Tokens',
      narrative:
        'A cryptocurrency investor signed what appeared to be a standard Web3 login signature on a fraudulent portfolio tracker. Within two minutes, all tokens and liquidity positions were drained across 14 consecutive transactions.',
      findings:
        'Fundresq identified the drainer contract address, mapped the immediate conversion of altcoins into ETH via decentralized aggregators, and traced the movement into a known drainer operator payout cluster, culminating in deposits to two centralized exchanges.',
      outcome:
        'Client delivered our verified evidence pack to exchange fraud desks and law enforcement, resulting in an account flag on the scammer’s deposit address.',
    },
    faqs: [
      {
        question: 'Is my wallet safe to continue using after being drained?',
        answer:
          'No. If your private keys or seed phrase were compromised, that wallet address must be completely abandoned. Never deposit funds into a compromised wallet. Create a fresh wallet on a secure, uncompromised device.',
      },
      {
        question: 'Can you cancel the unauthorized transactions on the blockchain?',
        answer:
          'Blockchain transactions are irreversible once confirmed. However, we can trace where those funds moved and identify the exchange accounts where the thief sent them.',
      },
      {
        question: 'Can you tell how the hacker accessed my wallet?',
        answer:
          'Yes. By reviewing the transaction data and smart contract interactions on-chain, we can usually determine whether the theft was caused by a malicious contract approval or a direct private key compromise.',
      },
    ],
    seoTitle: 'Wallet Hack & Drainer Investigation | Fundresq',
    seoDescription:
      'Investigate drained crypto wallets and unauthorized transfers. We trace stolen tokens across DEX swaps and bridges to destination exchange accounts.',
  },

  'stolen-crypto': {
    slug: 'stolen-crypto',
    title: 'Stolen Cryptocurrency',
    victimSearchPhrase: 'Cryptocurrency was stolen from my wallet or account',
    badge: 'Theft & Asset Misappropriation',
    heroHeadline: 'Cryptocurrency taken from your wallet or account?',
    heroSubtitle:
      'We investigate the movement of your stolen funds, trace intermediate hops, and document the verifiable blockchain facts.',
    problemStatement:
      'Whether through malware, unauthorized account access, physical device theft, or fraudulent transfer requests, stolen cryptocurrency leaves an unbroken cryptographic trail across the public ledger. We follow that trail to identify where the assets landed.',
    warningSigns: [
      'Unexplained zero balances on your private wallet or software wallet',
      'Notifications from exchange accounts indicating unauthorized logins or API key withdrawals',
      'Malicious malware on desktop or mobile devices intercepting clipboard wallet addresses',
      'Compromised cloud backup files containing seed phrases or recovery keys',
    ],
    howWeInvestigate: [
      'We analyze the initial unauthorized transfer hash and verify timestamps on the public ledger.',
      'We follow the stolen assets through multi-hop transfers, mixers, and coin join services.',
      'We identify the centralized exchange accounts or OTC broker desks where the funds were deposited.',
      'We prepare an official forensic report ready for court injunctions, police reporting, or insurance claims.',
    ],
    whatWeTrace: [
      'Bitcoin, Ethereum, Tron, Solana, Monero cross-chain conversions, and stablecoins',
      'Mixer inputs and outputs (where traceable) and peel chains',
      'Centralized exchange deposit wallets and merchant payment processors',
    ],
    deliverableSummary:
      'A formal written evidence pack with chronological transaction exhibits, verified address clustering, and destination exchange accounts.',
    caseStudy: {
      title: 'Clipboard Malware Redirection Theft',
      lossAmount: '$42,000 BTC',
      narrative:
        'A user copied a recipient address to send 1.2 BTC, but clipboard malware on their computer replaced the address with an attacker’s wallet, causing the funds to be sent to a thief.',
      findings:
        'Fundresq mapped the stolen Bitcoin through a series of peel chain transactions across 18 hops, identifying that 0.85 BTC was sent directly to a deposit address at an exchange requiring Know Your Customer (KYC) identity verification.',
      outcome:
        'With our report in hand, law enforcement was able to issue a court order to the exchange to freeze the associated account.',
    },
    faqs: [
      {
        question: 'Can Bitcoin really be tracked through multiple hops?',
        answer:
          'Yes. Bitcoin operates on an immutable public ledger (the UTXO model). Every single satoshi can be followed mathematically from its source address through intermediate wallets to its final destination.',
      },
      {
        question: 'What should I do immediately after discovering stolen crypto?',
        answer:
          'Record the transaction IDs, secure any other wallets you own on a clean device, preserve communications or computer logs, and do not communicate with unsolicited "recovery hackers" on social media.',
      },
      {
        question: 'How do police and exchanges respond to Fundresq reports?',
        answer:
          'Police and exchanges require objective, verifiable proof before they can take action. Fundresq provides standard forensic documentation that compliance officers and detectives can immediately verify and use.',
      },
    ],
    seoTitle: 'Stolen Cryptocurrency Tracing & Investigation | Fundresq',
    seoDescription:
      'Trace stolen Bitcoin, Ethereum, and crypto assets. We follow the on-chain trail to identify recipient exchanges and provide evidence for police and legal action.',
  },
};
