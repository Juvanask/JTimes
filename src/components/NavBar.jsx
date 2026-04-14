import React from 'react';

const tabs = [
  { id: 'front',     label: 'Front Page' },
  { id: 'career',    label: 'Career Markets' },
  { id: 'crossword', label: 'Crossword' },
  { id: 'wordle',    label: 'Skill•dle' },
  { id: 'contact',   label: 'Contact' },
];

export default function NavBar({ activePage, setActivePage }) {
  return (
    <nav style={{
      background: '#fff',
      borderBottom: '1px solid #121212',
      display: 'flex',
      justifyContent: 'center',
      overflowX: 'auto',
    }}>
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => setActivePage(tab.id)}
          style={{
            fontFamily: "'Source Serif 4', serif",
            fontSize: '13px',
            fontWeight: 600,
            padding: '9px 18px',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            color: '#121212',
            letterSpacing: '0.03em',
            borderBottom: activePage === tab.id ? '3px solid #121212' : '3px solid transparent',
            transition: 'border-color 0.15s',
            whiteSpace: 'nowrap',
          }}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
