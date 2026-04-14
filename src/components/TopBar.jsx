import React from 'react';

export default function TopBar() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  return (
    <div style={{
      background: '#121212',
      color: 'white',
      padding: '6px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: "'Source Serif 4', serif",
      fontSize: '11px',
      letterSpacing: '0.05em',
    }}>
      <span>{today} | New Jersey, USA</span>
      <span style={{ fontStyle: 'italic', opacity: 0.85 }}>All the Code That's Fit to Ship</span>
      <span>Vol. CLXXII · No. 1</span>
    </div>
  );
}
