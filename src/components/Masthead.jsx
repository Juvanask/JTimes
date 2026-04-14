import React from 'react';

export default function Masthead() {
  return (
    <div style={{
      background: '#fff',
      borderBottom: '3px solid #121212',
      padding: '18px 40px 14px',
      textAlign: 'center',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: '10px',
        fontSize: '11px',
        color: '#727272',
        fontFamily: "'Source Serif 4', serif",
      }}>
        <div>
          <div>New Jersey / Global Remote</div>
          <div style={{ fontStyle: 'italic' }}>F-1 · CPT Eligible · 3-yr STEM OPT</div>
        </div>
        <div style={{
          fontFamily: "'UnifrakturMaguntia', cursive",
          fontSize: '72px',
          lineHeight: 1,
          color: '#121212',
          letterSpacing: '-1px',
        }}>
          The Juvana Times
        </div>
        <div style={{ textAlign: 'right' }}>
          <div>sayeedajuvanakhan@gmail.com</div>
          <div>(972) 856-0080</div>
        </div>
      </div>
      <div style={{
        fontFamily: "'Source Serif 4', serif",
        fontSize: '11px',
        letterSpacing: '0.15em',
        color: '#727272',
        borderTop: '1px solid #e2e2e2',
        borderBottom: '1px solid #e2e2e2',
        padding: '5px 0',
        textTransform: 'uppercase',
      }}>
        Full-Stack Engineer · AI Specialist · Patent Holder · Rutgers University · Open to Work 2026
      </div>
    </div>
  );
}
