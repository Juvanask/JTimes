import React, { useState, useEffect, useCallback } from 'react';

const WORDS = [
  { word: 'REACT',  hint: "Juvana's go-to JavaScript UI library" },
  { word: 'FLASK',  hint: 'Python micro-framework for web APIs' },
  { word: 'NUMPY',  hint: 'Numerical Python — used with PyTorch' },
  { word: 'TORCH',  hint: 'Short form of her deep learning framework' },
  { word: 'REDUX',  hint: 'State management library for React apps' },
  { word: 'NGINX',  hint: 'Web server / reverse proxy tool' },
  { word: 'KERAS',  hint: 'High-level neural network API' },
  { word: 'MONGO',  hint: 'NoSQL database — short for MongoDB' },
];

const KEYBOARD_ROWS = [
  ['Q','W','E','R','T','Y','U','I','O','P'],
  ['A','S','D','F','G','H','J','K','L'],
  ['ENTER','Z','X','C','V','B','N','M','⌫'],
];

function scoreGuess(guess, answer) {
  const result = Array(answer.length).fill('absent');
  const ans = answer.split('');
  const used = Array(answer.length).fill(false);
  guess.split('').forEach((l, i) => {
    if (l === ans[i]) { result[i] = 'correct'; used[i] = true; }
  });
  guess.split('').forEach((l, i) => {
    if (result[i] === 'correct') return;
    const j = ans.findIndex((a, idx) => a === l && !used[idx]);
    if (j !== -1) { result[i] = 'present'; used[j] = true; }
  });
  return result;
}

const TILE_COLORS = {
  correct: { bg: '#538d4e', border: '#538d4e', color: 'white' },
  present: { bg: '#b59f3b', border: '#b59f3b', color: 'white' },
  absent:  { bg: '#3a3a3c', border: '#3a3a3c', color: 'white' },
  filled:  { bg: 'white',   border: '#888',     color: '#121212' },
  empty:   { bg: 'white',   border: '#ccc',     color: '#121212' },
};

function Tile({ letter, state }) {
  const style = TILE_COLORS[state] || TILE_COLORS.empty;
  return (
    <div style={{
      width: '52px', height: '52px',
      border: `2px solid ${style.border}`,
      background: style.bg,
      color: style.color,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: "'Source Serif 4', serif",
      fontSize: '22px', fontWeight: 700,
      textTransform: 'uppercase',
      transition: 'background 0.3s, border-color 0.3s',
    }}>
      {letter}
    </div>
  );
}

export default function WordlePage() {
  const [wordEntry, setWordEntry] = useState(() => WORDS[Math.floor(Math.random() * WORDS.length)]);
  const [guesses, setGuesses] = useState([]); // array of {guess, result}
  const [current, setCurrent] = useState('');
  const [msg, setMsg] = useState('');
  const [over, setOver] = useState(false);
  const [keyColors, setKeyColors] = useState({});

  const WORD = wordEntry.word;
  const MAX_LEN = WORD.length;
  const MAX_ROWS = 6;

  const newGame = () => {
    const pick = WORDS[Math.floor(Math.random() * WORDS.length)];
    setWordEntry(pick);
    setGuesses([]);
    setCurrent('');
    setMsg('');
    setOver(false);
    setKeyColors({});
  };

  const submit = useCallback(() => {
    if (current.length < MAX_LEN) { setMsg('Not enough letters'); return; }
    const result = scoreGuess(current, WORD);
    const newGuesses = [...guesses, { guess: current, result }];
    setGuesses(newGuesses);

    // Update key colors
    const kc = { ...keyColors };
    current.split('').forEach((l, i) => {
      const r = result[i];
      if (kc[l] === 'correct') return;
      if (r === 'correct') kc[l] = 'correct';
      else if (r === 'present' && kc[l] !== 'correct') kc[l] = 'present';
      else if (!kc[l]) kc[l] = 'absent';
    });
    setKeyColors(kc);
    setCurrent('');
    setMsg('');

    if (current === WORD) {
      setMsg(`★ Correct! Juvana uses ${WORD} in production.`);
      setOver(true);
    } else if (newGuesses.length >= MAX_ROWS) {
      setMsg(`Answer: ${WORD}`);
      setOver(true);
    }
  }, [current, WORD, guesses, keyColors, MAX_LEN, MAX_ROWS]);

  const handleKey = useCallback((key) => {
    if (over) return;
    if (key === '⌫' || key === 'Backspace') {
      setCurrent(c => c.slice(0, -1));
      setMsg('');
    } else if (key === 'ENTER' || key === 'Enter') {
      submit();
    } else if (/^[A-Za-z]$/.test(key) && current.length < MAX_LEN) {
      setCurrent(c => c + key.toUpperCase());
      setMsg('');
    }
  }, [over, submit, current, MAX_LEN]);

  useEffect(() => {
    const handler = e => handleKey(e.key);
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [handleKey]);

  // Build board rows
  const rows = [];
  for (let r = 0; r < MAX_ROWS; r++) {
    const tiles = [];
    for (let c = 0; c < MAX_LEN; c++) {
      if (r < guesses.length) {
        tiles.push(<Tile key={c} letter={guesses[r].guess[c]} state={guesses[r].result[c]} />);
      } else if (r === guesses.length) {
        const l = current[c] || '';
        tiles.push(<Tile key={c} letter={l} state={l ? 'filled' : 'empty'} />);
      } else {
        tiles.push(<Tile key={c} letter="" state="empty" />);
      }
    }
    rows.push(<div key={r} style={{ display: 'flex', gap: '5px' }}>{tiles}</div>);
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '30px 20px 60px' }}>
      <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#727272', borderBottom: '1px solid #121212', marginBottom: '14px', paddingBottom: '4px' }}>
        Games Desk
      </div>

      <div style={{ background: '#fff', border: '1px solid #e2e2e2', padding: '28px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '28px', fontWeight: 700, marginBottom: '4px' }}>SKILL•DLE</h1>
        <p style={{ fontSize: '13px', color: '#727272', fontStyle: 'italic', marginBottom: '20px' }}>
          Guess Juvana's tech skill in 6 tries. All answers are from her stack.
        </p>

        {msg && (
          <div style={{ fontSize: '14px', fontWeight: 700, color: over && guesses.length && guesses[guesses.length - 1]?.guess === WORD ? '#1a7a1a' : '#cc0000', marginBottom: '12px', fontFamily: "'Source Serif 4', serif" }}>
            {msg}
          </div>
        )}

        {/* Board */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', marginBottom: '20px' }}>
          {rows}
        </div>

        {/* Keyboard */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'center' }}>
          {KEYBOARD_ROWS.map((row, ri) => (
            <div key={ri} style={{ display: 'flex', gap: '4px' }}>
              {row.map(key => {
                const kc = keyColors[key];
                const bg = kc === 'correct' ? '#538d4e' : kc === 'present' ? '#b59f3b' : kc === 'absent' ? '#3a3a3c' : '#d3d6da';
                const color = kc ? 'white' : '#121212';
                return (
                  <button
                    key={key}
                    onClick={() => handleKey(key)}
                    style={{
                      minWidth: key.length > 1 ? '52px' : '34px',
                      height: '52px',
                      padding: '0 4px',
                      background: bg, color,
                      border: 'none', borderRadius: '3px',
                      fontFamily: "'Source Serif 4', serif",
                      fontSize: '13px', fontWeight: 700,
                      cursor: 'pointer',
                      textTransform: 'uppercase',
                      transition: 'background 0.2s',
                    }}
                  >{key}</button>
                );
              })}
            </div>
          ))}
        </div>

        {over && (
          <div style={{ marginTop: '16px', fontSize: '13px', color: '#727272', fontStyle: 'italic' }}>
            {wordEntry.hint}
          </div>
        )}

        <button
          onClick={newGame}
          style={{
            marginTop: '18px',
            background: '#121212', color: 'white',
            border: 'none', padding: '10px 24px',
            fontFamily: "'Source Serif 4', serif",
            fontSize: '14px', fontWeight: 600,
            cursor: 'pointer', borderRadius: '2px',
            letterSpacing: '0.03em',
          }}
        >
          New Word ↺
        </button>
      </div>

      <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.7, marginTop: '20px', fontStyle: 'italic', fontFamily: "'Source Serif 4', serif" }}>
        Each answer is drawn from Juvana Khan's verified technical skill set — languages, frameworks, and tools she has shipped production code with.
      </p>
    </div>
  );
}
