import React from 'react';

const skills = [
  { label: 'JavaScript', cat: 'lang' },
  { label: 'Python',     cat: 'lang' },
  { label: 'Java',       cat: 'lang' },
  { label: 'SQL',        cat: 'lang' },
  { label: 'React',      cat: 'fe'   },
  { label: 'Angular',    cat: 'fe'   },
  { label: 'Node.js',    cat: 'be'   },
  { label: 'FastAPI',    cat: 'be'   },
  { label: 'Spring Boot',cat: 'be'   },
  { label: 'GraphQL',    cat: 'be'   },
  { label: 'Docker',     cat: 'tool' },
  { label: 'AWS',        cat: 'tool' },
  { label: 'GitHub Actions', cat: 'tool' },
  { label: 'PyTorch',    cat: 'ml'   },
  { label: 'LLMs',       cat: 'ml'   },
  { label: 'Gen AI',     cat: 'ml'   },
  { label: 'NLP',        cat: 'ml'   },
];

const catColors = {
  lang: '#326891',
  fe:   '#121212',
  be:   '#121212',
  tool: '#2d7a4a',
  ml:   '#5a3e7a',
};

export default function ContactPage() {
  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '30px 20px 60px' }}>
      <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#727272', borderBottom: '1px solid #121212', marginBottom: '14px', paddingBottom: '4px' }}>
        Contact &amp; Correspondence
      </div>
      <h1 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '34px', fontWeight: 700, lineHeight: 1.2, marginBottom: '8px' }}>
        Hire This Engineer
      </h1>
      <p style={{ fontFamily: "'Source Serif 4', serif", fontStyle: 'italic', fontSize: '17px', color: '#555', borderTop: '1px solid #e2e2e2', borderBottom: '1px solid #e2e2e2', padding: '8px 0', marginBottom: '28px' }}>
        Available for full-stack engineering roles from December 2026. F-1 visa holder, CPT eligible, 3-year STEM OPT.
      </p>

      <div style={{ background: '#fff', border: '1px solid #e2e2e2', padding: '30px' }}>
        <div style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '24px', fontWeight: 700, marginBottom: '4px' }}>
          Juvana Khan
        </div>
        <div style={{ fontSize: '14px', color: '#727272', marginBottom: '20px', fontFamily: "'Source Serif 4', serif" }}>
          Full-Stack Engineer · AI/ML Specialist · Rutgers MITA '26
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
          {[
            { label: 'Email',        value: 'sayeedajuvanakhan@gmail.com', href: 'mailto:sayeedajuvanakhan@gmail.com' },
            { label: 'Phone',        value: '(972) 856-0080' },
            { label: 'LinkedIn',     value: 'linkedin.com/in/juvana-k', href: 'https://linkedin.com/in/juvana-k' },
            { label: 'Location',     value: 'New Jersey, USA' },
            { label: 'Availability', value: 'Dec 2026 (CPT: earlier)' },
            { label: 'Visa',         value: 'F-1 · STEM OPT 3 years' },
          ].map(item => (
            <div key={item.label}>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#727272', marginBottom: '3px', fontFamily: "'Source Serif 4', serif" }}>
                {item.label}
              </div>
              {item.href
                ? <a href={item.href} target="_blank" rel="noreferrer" style={{ fontSize: '15px', color: '#326891', textDecoration: 'none', fontFamily: "'Source Serif 4', serif" }}>{item.value}</a>
                : <span style={{ fontSize: '15px', fontFamily: "'Source Serif 4', serif" }}>{item.value}</span>
              }
            </div>
          ))}
        </div>

        <div style={{ height: '3px', background: '#121212', margin: '20px 0 14px' }} />

        <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#727272', marginBottom: '12px', fontFamily: "'Source Serif 4', serif" }}>
          Technical Stack
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
          {skills.map(s => (
            <span key={s.label} style={{
              background: catColors[s.cat],
              color: 'white',
              padding: '4px 12px',
              fontSize: '12px', fontWeight: 600,
              letterSpacing: '0.05em',
              borderRadius: '1px',
              fontFamily: "'Source Serif 4', serif",
            }}>{s.label}</span>
          ))}
        </div>

        <div style={{
          background: '#fffbe6',
          borderLeft: '4px solid #f0c000',
          padding: '16px',
          fontSize: '15px',
          fontStyle: 'italic',
          lineHeight: 1.7,
          color: '#333',
          fontFamily: "'Source Serif 4', serif",
        }}>
          "I build things end-to-end — from LLM integration and REST APIs to React interfaces and CI/CD pipelines. I care about reliability, speed, and user impact. I'd love to bring that to The New York Times."
        </div>
      </div>

      {/* Experience Summary */}
      <div style={{ marginTop: '32px' }}>
        <div style={{ height: '3px', background: '#121212', marginBottom: '20px' }} />
        <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>Experience</h2>
        {[
          {
            role: 'Full-Stack Software Engineer',
            company: 'Synefo — Hyderabad, India',
            period: 'Oct 2024 – Mar 2025',
            bullets: [
              'Built production-grade Gen AI chatbot: React + FastAPI + LLM APIs, automating 70% of internal queries.',
              'Owned CI/CD pipeline (GitHub Actions), reducing deployment failures by 40%.',
              'Developed scalable systems with Java, Spring Boot, React, Angular — 50% engagement increase.',
            ],
          },
          {
            role: 'Software Developer',
            company: 'Zavyat Enterprise Pvt Ltd — Hyderabad, India',
            period: 'Jan 2024 – Oct 2024',
            bullets: [
              'Delivered responsive apps in React, Angular, Flutter/Dart — 40% load time reduction.',
              'Optimized Node.js backend with caching — 35% DB load reduction, 2× API speed.',
              'Contributed to architectural decisions across the full stack in a fast-paced agile team.',
            ],
          },
        ].map((job, i) => (
          <div key={i} style={{ marginBottom: '24px' }}>
            <div style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '17px', fontWeight: 700 }}>{job.role}</div>
            <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: '13px', color: '#727272', marginBottom: '6px' }}>
              {job.company} &nbsp;·&nbsp; <em>{job.period}</em>
            </div>
            <ul style={{ paddingLeft: '18px' }}>
              {job.bullets.map((b, j) => (
                <li key={j} style={{ fontSize: '14px', lineHeight: 1.65, marginBottom: '4px', color: '#333' }}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
