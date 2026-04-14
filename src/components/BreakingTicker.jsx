import React from 'react';

const headlines = [
  "Juvana Khan ships AI-powered enterprise chatbot automating 70% of internal queries",
  "Patent granted for CNN-based heart rate detection via facial expressions — 94.2% accuracy",
  "Full-stack engineer reduces deployment failures by 40% with GitHub Actions CI/CD pipeline",
  "Rutgers MITA student lands on New York Times hiring radar",
  "Node.js optimization doubles API response speed, cuts database load by 35%",
  "React + Angular applications boost user engagement 50% at Synefo",
  "Load time reductions of 40% praised by thousands of logistics users at Zavyat",
  "STEM OPT eligible engineer available for full-stack roles — 3-year authorization",
];

export default function BreakingTicker() {
  const doubled = [...headlines, ...headlines];

  return (
    <div style={{
      background: '#cc0000',
      color: 'white',
      overflow: 'hidden',
      height: '30px',
      display: 'flex',
      alignItems: 'center',
    }}>
      <div style={{
        background: '#900',
        padding: '0 14px',
        fontFamily: "'Source Serif 4', serif",
        fontSize: '11px',
        fontWeight: 700,
        letterSpacing: '0.1em',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        flexShrink: 0,
      }}>
        BREAKING
      </div>
      <div style={{ overflow: 'hidden', flex: 1 }}>
        <div style={{
          display: 'flex',
          animation: 'ticker 42s linear infinite',
          whiteSpace: 'nowrap',
        }}>
          {doubled.map((h, i) => (
            <span key={i} style={{
              fontFamily: "'Source Serif 4', serif",
              fontSize: '12px',
              padding: '0 28px',
              letterSpacing: '0.03em',
            }}>
              ◆ {h}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
