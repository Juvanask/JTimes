import React from 'react';

function SectionLabel({ children }) {
  return (
    <div style={{
      fontFamily: "'Source Serif 4', serif",
      fontSize: '11px', fontWeight: 700,
      letterSpacing: '0.15em', textTransform: 'uppercase',
      color: '#727272',
      borderBottom: '1px solid #121212',
      marginBottom: '14px', paddingBottom: '4px',
    }}>{children}</div>
  );
}

function Kicker({ children, color = '#cc0000' }) {
  return (
    <div style={{
      fontFamily: "'Source Serif 4', serif",
      fontSize: '12px', fontWeight: 700,
      letterSpacing: '0.1em', textTransform: 'uppercase',
      color, marginBottom: '5px',
    }}>{children}</div>
  );
}

export default function FrontPage() {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '28px 24px 60px' }}>
      <SectionLabel>Today's Edition</SectionLabel>

      {/* 3-col grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1px 1.7fr 1px 1fr',
        gap: '0 18px',
        borderBottom: '1px solid #e2e2e2',
        paddingBottom: '22px',
        marginBottom: '22px',
      }}>
        {/* LEFT */}
        <div>
          <Kicker>AI & Engineering</Kicker>
          <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '22px', fontWeight: 700, lineHeight: 1.25, marginBottom: '8px' }}>
            Engineer Deploys Generative AI Chatbot, Automates 70% of Firm's Internal Queries
          </h2>
          <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#727272', marginBottom: '8px' }}>
            By The Editorial Board · Oct 2024
          </div>
          <p style={{ fontSize: '15px', lineHeight: 1.65, color: '#333' }}>
            In a move that drew attention from product and AI teams alike, Juvana Khan architected and shipped a production-grade enterprise chatbot — React frontend, FastAPI backend, LLM integration — solving complex internal queries at scale without human intervention.
          </p>
          <div style={{ borderTop: '3px solid #121212', borderBottom: '1px solid #121212', padding: '12px 0', margin: '16px 0', fontFamily: "'Libre Baskerville', serif", fontStyle: 'italic', fontSize: '20px', lineHeight: 1.3, textAlign: 'center' }}>
            "End-to-end ownership, from architecture to production."
          </div>
          <p style={{ fontSize: '15px', lineHeight: 1.65, color: '#333' }}>
            CI/CD pipelines via GitHub Actions cut deployment failures by 40%, enabling the engineering team to release rapidly and reliably.
          </p>
        </div>

        {/* DIVIDER */}
        <div style={{ background: '#e2e2e2' }} />

        {/* CENTER */}
        <div style={{ textAlign: 'center', borderRight: '1px solid #e2e2e2', borderLeft: '1px solid #e2e2e2', padding: '0 18px' }}>
          <Kicker>Breaking Development</Kicker>
          <h1 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '40px', fontWeight: 700, lineHeight: 1.1, marginBottom: '10px' }}>
            The Full-Stack Engineer The New York Times Needs Has Arrived
          </h1>
          <p style={{ fontFamily: "'Source Serif 4', serif", fontStyle: 'italic', fontSize: '18px', color: '#444', marginBottom: '10px' }}>
            Juvana Khan — builder, problem-solver, patent holder — is ready to make news, not just read it.
          </p>
          {/* Portrait placeholder */}
          <div style={{
            width: '180px', height: '180px', margin: '12px auto',
            background: 'linear-gradient(145deg, #d5cfc6, #b8b0a5)',
            borderRadius: '2px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontFamily: "'UnifrakturMaguntia', cursive", fontSize: '64px', color: '#555' }}>JK</span>
          </div>
          <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: '11px', color: '#727272', fontStyle: 'italic', marginBottom: '10px' }}>
            Juvana Khan, Full-Stack Engineer &amp; AI Specialist, Rutgers University MITA '26
          </div>
          <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#727272', marginBottom: '12px' }}>
            Hyderabad · New Jersey · New York (Prospectively)
          </div>
          <p style={{ fontSize: '14px', color: '#444', lineHeight: 1.65 }}>
            With experience shipping production systems at two companies, a patent to her name, and a graduate degree underway at Rutgers, Khan combines engineering rigor with the product instinct this role demands.
          </p>
        </div>

        {/* DIVIDER */}
        <div style={{ background: '#e2e2e2' }} />

        {/* RIGHT */}
        <div>
          <Kicker>Patent Desk</Kicker>
          <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '20px', fontWeight: 700, lineHeight: 1.25, marginBottom: '8px' }}>
            Patent Granted for Novel Health Monitoring System Using Computer Vision
          </h2>
          <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#727272', marginBottom: '8px' }}>
            Correspondent · Fall 2023
          </div>
          <p style={{ fontSize: '15px', lineHeight: 1.65, color: '#333', marginBottom: '16px' }}>
            A CNN-based deep learning model achieving <strong>94.2% accuracy</strong> in detecting stress and heart rate via facial expressions earned Juvana Khan a granted patent — a rare achievement for an undergraduate student.
          </p>
          <div style={{ height: '1px', background: '#e2e2e2', margin: '14px 0' }} />
          <Kicker color="#326891">Education</Kicker>
          <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '20px', fontWeight: 700, lineHeight: 1.25, marginBottom: '8px' }}>
            Rutgers University Enrolls Khan in Elite MITA Graduate Program
          </h2>
          <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#727272', marginBottom: '8px' }}>
            Higher Education Desk · Aug 2025
          </div>
          <p style={{ fontSize: '15px', lineHeight: 1.65, color: '#333' }}>
            Building on a B.Tech in CS with AI &amp; ML specialization from Hyderabad, Khan joined Rutgers' Master of IT &amp; Analytics program, expected completion December 2026.
          </p>
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '3px solid #121212' }}>
        {[
          { kicker: 'Performance', color: '#326891', title: "Node.js Optimization Doubles API Speed, Cuts DB Load 35%", body: "Intelligent caching strategies at Zavyat Enterprise transformed backend throughput — shipping on a tight cross-functional deadline." },
          { kicker: 'Frontend', color: '#cc0000', title: "React & Angular Apps Cut Load Times 40%, Reach Thousands of Users", body: "Responsive, performant web and mobile apps using Flutter/Dart delivered measurable UX improvements across logistics planning features." },
          { kicker: 'Technology Stack', color: '#2d7a4a', title: "From PyTorch to Spring Boot: An Engineer Who Speaks Every Layer", body: "JavaScript, Python, Java, React, FastAPI, Docker, AWS — Khan's stack spans the full pipeline, from NLP models to CI/CD infrastructure." },
        ].map((item, i) => (
          <div key={i} style={{
            padding: '14px 18px',
            borderRight: i < 2 ? '1px solid #e2e2e2' : 'none',
          }}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: item.color, marginBottom: '5px', fontFamily: "'Source Serif 4', serif" }}>{item.kicker}</div>
            <h3 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '17px', fontWeight: 700, lineHeight: 1.25, marginBottom: '6px' }}>{item.title}</h3>
            <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.5 }}>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
