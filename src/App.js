import { useState } from "react";

const slides = [
  {
    id: 1,
    number: "01",
    tag: "ARCHITECTURE",
    title: "The Building Blocks of Trust",
    color: "#0A0F1E",
    accent: "#00D4FF",
    accentSoft: "#00D4FF22",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <rect x="8" y="36" width="14" height="20" rx="2" fill="#00D4FF" opacity="0.9"/>
        <rect x="25" y="24" width="14" height="32" rx="2" fill="#00D4FF" opacity="0.6"/>
        <rect x="42" y="12" width="14" height="44" rx="2" fill="#00D4FF" opacity="0.3"/>
        <path d="M15 36 L32 24 L49 12" stroke="#00D4FF" strokeWidth="2" strokeDasharray="4 2"/>
      </svg>
    ),
    points: [
      { label: "Blocks", text: "Each block holds a transaction list, Merkle root, timestamp, nonce, and a hash of the previous block." },
      { label: "Hashing", text: "SHA-256 produces 256-bit fingerprints. Change one bit anywhere — the entire hash changes. One-way, deterministic, collision-resistant." },
      { label: "Merkle Trees", text: "Transactions are organized in a binary hash tree. You can verify any transaction with just log₂(n) hashes — not the whole block." },
      { label: "Immutability", text: "Altering one historical block forces recalculation of every block after it — requiring more compute than the entire network combined." },
    ],
    quote: "\"The root problem with conventional currency is all the trust that's required.\" — Satoshi Nakamoto",
  },
  {
    id: 2,
    number: "02",
    tag: "CONSENSUS",
    title: "The Political System of the Chain",
    color: "#0D0A1E",
    accent: "#A855F7",
    accentSoft: "#A855F722",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="20" stroke="#A855F7" strokeWidth="2" fill="none"/>
        <circle cx="32" cy="32" r="12" stroke="#A855F7" strokeWidth="1.5" fill="none" opacity="0.5"/>
        <circle cx="32" cy="32" r="4" fill="#A855F7"/>
        <path d="M32 8 L32 18 M32 46 L32 56 M8 32 L18 32 M46 32 L56 32" stroke="#A855F7" strokeWidth="2"/>
        <path d="M16 16 L23 23 M41 41 L48 48 M48 16 L41 23 M23 41 L16 48" stroke="#A855F7" strokeWidth="1.5" opacity="0.5"/>
      </svg>
    ),
    points: [
      { label: "Proof of Work", text: "Miners solve energy-expensive puzzles to add blocks. A 51% attack requires more compute than every honest miner combined — hundreds of millions in hardware." },
      { label: "Proof of Stake", text: "Validators lock up cryptocurrency as collateral. Dishonest behavior gets your stake 'slashed.' Ethereum's switch to PoS cut energy use by 99.95%." },
      { label: "BFT Consensus", text: "Byzantine Fault Tolerant systems (Tendermint, HotStuff) achieve instant finality in a single round — but require a known, fixed validator set." },
      { label: "CAP Theorem", text: "No distributed system can guarantee Consistency, Availability, and Partition tolerance simultaneously. PoW chains choose availability; BFT chains choose consistency." },
    ],
    quote: "Consensus is how strangers agree on truth — without trusting each other.",
  },
  {
    id: 3,
    number: "03",
    tag: "SMART CONTRACTS",
    title: "Code as Law, Logic as Enforcement",
    color: "#0A1A0E",
    accent: "#22C55E",
    accentSoft: "#22C55E22",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <rect x="12" y="8" width="40" height="48" rx="4" stroke="#22C55E" strokeWidth="2" fill="none"/>
        <path d="M20 22 L28 30 L20 38" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 38 L44 38" stroke="#22C55E" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 16 L36 16" stroke="#22C55E" strokeWidth="1.5" opacity="0.4"/>
        <path d="M20 44 L30 44" stroke="#22C55E" strokeWidth="1.5" opacity="0.4"/>
      </svg>
    ),
    points: [
      { label: "The EVM", text: "Ethereum embeds a Turing-complete virtual machine on-chain. Every node executes every contract — ensuring verifiable, tamper-proof outcomes." },
      { label: "Gas", text: "Computational cost is measured in 'gas' — it compensates validators and prevents infinite loops from halting the entire network." },
      { label: "DeFi", text: "Exchanges, lending, stablecoins, derivatives — all operating without banks or brokers. At peak, $100B+ was locked in DeFi protocols." },
      { label: "The Oracle Problem", text: "Contracts can't natively read real-world data. Oracle networks like Chainlink solve this — but introduce a new trust layer that has cost billions in exploits." },
    ],
    quote: "Smart contracts compress trust requirements down to the software layer.",
  },
  {
    id: 4,
    number: "04",
    tag: "SCALING",
    title: "The Great Unsolved Problem",
    color: "#1A0E0A",
    accent: "#F97316",
    accentSoft: "#F9731622",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <path d="M8 48 L20 32 L32 40 L44 20 L56 8" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <circle cx="20" cy="32" r="3" fill="#F97316"/>
        <circle cx="32" cy="40" r="3" fill="#F97316"/>
        <circle cx="44" cy="20" r="3" fill="#F97316"/>
        <path d="M8 56 L56 56" stroke="#F97316" strokeWidth="1" opacity="0.3"/>
        <path d="M8 56 L8 8" stroke="#F97316" strokeWidth="1" opacity="0.3"/>
      </svg>
    ),
    points: [
      { label: "The Gap", text: "Bitcoin: ~7 TPS. Ethereum: ~15–30 TPS. Visa: ~24,000 TPS. This isn't a bug — it's structural. Every node must process every transaction." },
      { label: "Layer 2 Rollups", text: "Optimistic Rollups assume validity unless challenged. ZK-Rollups generate cryptographic proofs. Both batch thousands of transactions off-chain." },
      { label: "Zero-Knowledge Proofs", text: "ZKPs let you prove something is true without revealing the secret. They enable instant verification of large batches and full transaction privacy." },
      { label: "Sharding", text: "Ethereum's danksharding splits the network into parallel shards, each processing its own transaction subset — massively increasing data throughput for L2s." },
    ],
    quote: "ZK-proofs are perhaps the most intellectually extraordinary development in applied cryptography of the past decade.",
  },
  {
    id: 5,
    number: "05",
    tag: "DECENTRALIZATION",
    title: "The Promise vs. The Reality",
    color: "#1A1A0A",
    accent: "#EAB308",
    accentSoft: "#EAB30822",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="12" r="6" fill="#EAB308"/>
        <circle cx="12" cy="48" r="6" fill="#EAB308" opacity="0.7"/>
        <circle cx="52" cy="48" r="6" fill="#EAB308" opacity="0.7"/>
        <circle cx="32" cy="36" r="4" fill="#EAB308" opacity="0.4"/>
        <path d="M32 18 L32 32 M32 32 L14 44 M32 32 L50 44" stroke="#EAB308" strokeWidth="1.5"/>
        <path d="M18 46 L26 40 M38 40 L46 46" stroke="#EAB308" strokeWidth="1" opacity="0.5" strokeDasharray="3 2"/>
      </svg>
    ),
    points: [
      { label: "Mining Centralization", text: "Top 3–5 mining pools often control 50%+ of Bitcoin's hash rate. Economic incentives prevent attacks, but concentration is real." },
      { label: "Client Monoculture", text: "85%+ of Ethereum nodes historically ran Geth. A single bug could affect the whole network — driving the multi-client diversity push." },
      { label: "Governance", text: "Bitcoin's block-size wars led to a hard fork. Ethereum uses EIPs with core devs having outsized influence. On-chain voting risks plutocracy." },
      { label: "Where It's Overhyped", text: "If you have a trusted admin, need high throughput, and participants already trust each other — a regular database is almost always better." },
    ],
    quote: "Decentralized governance is a fundamentally hard problem, and every approach involves tradeoffs.",
  },
];

export default function App() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [dir, setDir] = useState(1);

  const goTo = (idx) => {
    if (idx === active || animating) return;
    setDir(idx > active ? 1 : -1);
    setAnimating(true);
    setTimeout(() => {
      setActive(idx);
      setAnimating(false);
    }, 320);
  };

  const prev = () => goTo((active - 1 + slides.length) % slides.length);
  const next = () => goTo((active + 1) % slides.length);

  const slide = slides[active];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#080B14",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px 16px",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <div style={{
          fontSize: 11,
          letterSpacing: "0.3em",
          color: "#666",
          textTransform: "uppercase",
          marginBottom: 8,
          fontFamily: "'DM Mono', monospace",
        }}>BLOCKCHAIN ARCHITECTURE</div>
        <h1 style={{
          fontSize: 22,
          fontWeight: 400,
          color: "#E8E8E8",
          margin: 0,
          letterSpacing: "0.05em",
        }}>The Architecture of Trustless Systems</h1>
      </div>

      {/* Progress Tabs */}
      <div style={{ display: "flex", gap: 8, marginBottom: 28 }}>
        {slides.map((s, i) => (
          <button key={s.id} onClick={() => goTo(i)} style={{
            cursor: "pointer",
            border: "none",
            background: i === active ? s.accent : "#1A1F2E",
            borderRadius: 3,
            height: 4,
            width: i === active ? 40 : 20,
            transition: "all 0.4s ease",
            padding: 0,
          }} />
        ))}
      </div>

      {/* Card */}
      <div style={{
        width: "100%",
        maxWidth: 720,
        background: slide.color,
        borderRadius: 20,
        border: `1px solid ${slide.accent}33`,
        boxShadow: `0 0 60px ${slide.accent}15, 0 20px 60px #00000080`,
        overflow: "hidden",
        opacity: animating ? 0 : 1,
        transform: animating ? `translateX(${dir * 30}px)` : "translateX(0)",
        transition: "opacity 0.32s ease, transform 0.32s ease",
      }}>
        {/* Top Bar */}
        <div style={{
          background: slide.accentSoft,
          borderBottom: `1px solid ${slide.accent}22`,
          padding: "20px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{
              fontSize: 48,
              fontWeight: 700,
              color: slide.accent,
              opacity: 0.2,
              fontFamily: "'DM Mono', monospace",
              lineHeight: 1,
            }}>{slide.number}</div>
            <div>
              <div style={{
                fontSize: 10,
                letterSpacing: "0.25em",
                color: slide.accent,
                fontFamily: "DM Mono', monospace",
                marginBottom: 4,
              }}>TOPIC {slide.number} · {slide.tag}</div>
              <h2 style={{
                fontSize: 22,
                fontWeight: 600,
                color: "#F0F0F0",
                margin: 0,
                lineHeight: 1.2,
              }}>{slide.title}</h2>
            </div>
          </div>
          <div style={{ opacity: 0.85 }}>{slide.icon}</div>
        </div>

        {/* Points Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 1,
          background: `${slide.accent}11`,
          margin: "24px 28px",
          borderRadius: 12,
          overflow: "hidden",
          border: `1px solid ${slide.accent}22`,
        }}>
          {slide.points.map((pt, i) => (
            <div key={i} style={{
              background: slide.color,
              padding: "18px 20px",
              borderBottom: i < 2 ? `1px solid ${slide.accent}18` : "none",
              borderRight: i % 2 === 0 ? `1px solid ${slide.accent}18` : "none",
            }}>
              <div style={{
                fontSize: 10,
                fontFamily: "inter",
                letterSpacing: "0.15em",
                color: slide.accent,
                marginBottom: 8,
                textTransform: "uppercase",
              }}>◆ {pt.label}</div>
              <p style={{
                fontSize: 13.5,
                color: "#B8C0CC",
                margin: 0,
                lineHeight: 1.65,
                fontFamily: "'DM Sans', sans-serif",
              }}>{pt.text}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div style={{
          margin: "0 28px 24px",
          padding: "16px 20px",
          borderLeft: `3px solid ${slide.accent}`,
          background: `${slide.accent}08`,
          borderRadius: "0 8px 8px 0",
        }}>
          <p style={{
            fontSize: 13,
            color: `${slide.accent}CC`,
            margin: 0,
            fontStyle: "italic",
            lineHeight: 1.6,
          }}>{slide.quote}</p>
        </div>

        {/* Nav */}
        <div style={{
          padding: "16px 28px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <button onClick={prev} style={{
            background: "transparent",
            border: `1px solid ${slide.accent}44`,
            borderRadius: 8,
            color: slide.accent,
            cursor: "pointer",
            padding: "10px 20px",
            fontSize: 12,
            fontFamily: "'DM Mono', monospace",
            letterSpacing: "0.1em",
            transition: "all 0.2s",
          }}
            onMouseOver={e => { e.currentTarget.style.background = `${slide.accent}22`; }}
            onMouseOut={e => { e.currentTarget.style.background = "transparent"; }}>
            ← PREV
          </button>

          <div style={{ display: "flex", gap: 6 }}>
            {slides.map((s, i) => (
              <button key={i} onClick={() => goTo(i)} style={{
                width: 8, height: 8,
                borderRadius: "50%",
                border: "none",
                background: i === active ? slide.accent : "#2A3040",
                cursor: "pointer",
                padding: 0,
                transition: "background 0.3s",
              }} />
            ))}
          </div>

          <button onClick={next} style={{
            background: `${slide.accent}22`,
            border: `1px solid ${slide.accent}66`,
            borderRadius: 8,
            color: slide.accent,
            cursor: "pointer",
            padding: "10px 20px",
            fontSize: 12,
            fontFamily: "'DM Mono', monospace",
            letterSpacing: "0.1em",
            transition: "all 0.2s",
          }}
            onMouseOver={e => { e.currentTarget.style.background = `${slide.accent}44`; }}
            onMouseOut={e => { e.currentTarget.style.background = `${slide.accent}22`; }}>
            NEXT →
          </button>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        marginTop: 24,
        fontSize: 11,
        color: "#333",
        fontFamily: "'DM Mono', monospace",
        letterSpacing: "0.1em",
      }}>
        {active + 1} / {slides.length} — {slide.tag}
      </div>
    </div>
  );
}