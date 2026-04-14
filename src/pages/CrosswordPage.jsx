import React, { useState } from 'react';

// ─── VERIFIED GRID (9×9) ──────────────────────────────────────────────────
//
//   Col:  0    1    2    3    4    5    6    7    8
// Row 0:  P    Y   [T]   H    O    N    ■    ■    ■    ← PYTHON (across 1)
// Row 1:  ■    ■   [O]   ■    ■    ■    ■    ■    ■
// Row 2: [S]  [P]  [R]   I   [N]  [G]   ■    ■    ■    ← SPRING (across 2)
// Row 3:  Q    ■   [C]   ■   [O]  [I]   ■    ■    ■
// Row 4:  L    ■   [H]   ■   [D]  [T]   ■    ■    ■
// Row 5:  ■    P    A    T   [E]   N    T    ■    ■    ← PATENT (across 3)
// Row 6:  ■    ■    ■    ■    ■    ■    ■    ■    ■
// Row 7:  ■    ■    ■    ■    ■    ■    ■    ■    ■
// Row 8:  D    O    C    K    E    R    ■    ■    ■    ← DOCKER (across 4)
//
// Intersections (all verified):
//   TORCH(col=2) ∩ PYTHON(row=0) : T = T ✓
//   TORCH(col=2) ∩ SPRING(row=2) : R = R ✓
//   SQL(col=0)   ∩ SPRING(row=2) : S = S ✓
//   GIT(col=5)   ∩ SPRING(row=2) : G = G ✓
//   NODE(col=4)  ∩ SPRING(row=2) : N = N ✓
//   NODE(col=4)  ∩ PATENT(row=5) : E = E ✓   (PATENT starts col=1, pos 3 → col 4)
// ─────────────────────────────────────────────────────────────────────────

const GRID_ROWS = 9;
const GRID_COLS = 9;

// Word definitions: [row, col, direction, answer, clue, displayNumber]
const WORD_DEFS = [
  // ACROSS
  [0, 0, 'across', 'PYTHON', 'Language powering her ML models and Flask apps',            1],
  [2, 0, 'across', 'SPRING', 'Boot framework for Java backends she shipped at Synefo',    2],
  [5, 1, 'across', 'PATENT', 'She earned one for her CNN health-monitoring model',         3],
  [8, 0, 'across', 'DOCKER', 'Container tool at the heart of her DevOps pipeline',        4],
  // DOWN
  [0, 2, 'down',   'TORCH',  'Deep learning framework — short for Py___',                 5],
  [2, 0, 'down',   'SQL',    'Structured query language for databases (abbr.)',            6],
  [2, 4, 'down',   'NODE',   '___.js — her backend JavaScript runtime',                   7],
  [2, 5, 'down',   'GIT',    'Version control tool she uses daily with GitHub Actions',   8],
];

// ── Build answer / black / number grids from word definitions ──────────────
function buildGrid() {
  const ans  = Array.from({ length: GRID_ROWS }, () => Array(GRID_COLS).fill(null));
  const blk  = Array.from({ length: GRID_ROWS }, () => Array(GRID_COLS).fill(true));
  const nums = Array.from({ length: GRID_ROWS }, () => Array(GRID_COLS).fill(0));

  WORD_DEFS.forEach(([r, c, dir, word, , num]) => {
    for (let i = 0; i < word.length; i++) {
      const row = dir === 'across' ? r     : r + i;
      const col = dir === 'across' ? c + i : c;
      ans[row][col] = word[i];
      blk[row][col] = false;
    }
    // Only stamp the number at the first cell of each word
    // (two words can share a start cell — stamp only the first time)
    if (!nums[r][c]) nums[r][c] = num;
  });
  return { ans, blk, nums };
}

const { ans: ANSWER, blk: BLACK, nums: NUMS } = buildGrid();

// ── Component ──────────────────────────────────────────────────────────────
export default function CrosswordPage() {
  const [grid, setGrid]       = useState(() =>
    Array.from({ length: GRID_ROWS }, () => Array(GRID_COLS).fill(''))
  );
  const [status, setStatus]   = useState('');
  const [checked, setChecked] = useState(false);

  const handleChange = (r, c, val) => {
    const next = grid.map(row => [...row]);
    next[r][c] = val.toUpperCase().replace(/[^A-Z]/g, '').slice(-1);
    setGrid(next);
    setStatus('');
    setChecked(false);
  };

  const handleCheck = () => {
    let correct = 0, total = 0;
    for (let r = 0; r < GRID_ROWS; r++)
      for (let c = 0; c < GRID_COLS; c++)
        if (!BLACK[r][c]) { total++; if (grid[r][c] === ANSWER[r][c]) correct++; }
    setChecked(true);
    setStatus(correct === total ? '✓ Solved! Impressive.' : `${correct} / ${total} letters correct`);
  };

  const handleReveal = () => {
    setGrid(ANSWER.map(row => row.map(l => l ?? '')));
    setChecked(true);
    setStatus('Revealed!');
  };

  const handleReset = () => {
    setGrid(Array.from({ length: GRID_ROWS }, () => Array(GRID_COLS).fill('')));
    setStatus('');
    setChecked(false);
  };

  const cellBg = (r, c) => {
    if (BLACK[r][c]) return '#121212';
    if (!checked)    return '#ffffff';
    if (!grid[r][c]) return '#ffffff';
    return grid[r][c] === ANSWER[r][c] ? '#d4edda' : '#f8d7da';
  };

  const across = WORD_DEFS.filter(w => w[2] === 'across');
  const down   = WORD_DEFS.filter(w => w[2] === 'down');

  return (
    <div style={{ maxWidth: '780px', margin: '0 auto', padding: '30px 20px 60px' }}>

      {/* Section label */}
      <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#727272', borderBottom: '1px solid #121212', marginBottom: '14px', paddingBottom: '4px' }}>
        The Juvana Times Crossword
      </div>

      <h1 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '34px', fontWeight: 700, marginBottom: '8px' }}>
        Tuesday Crossword
      </h1>
      <p style={{ fontFamily: "'Source Serif 4', serif", fontStyle: 'italic', fontSize: '17px', color: '#555', borderTop: '1px solid #e2e2e2', borderBottom: '1px solid #e2e2e2', padding: '8px 0', marginBottom: '24px' }}>
        All answers are drawn from Juvana Khan's real tech stack and career.
      </p>

      <div style={{ background: '#fff', border: '1px solid #e2e2e2', padding: '24px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '36px', alignItems: 'flex-start' }}>

          {/* ── GRID ── */}
          <div>
            <div style={{ border: '2px solid #121212', display: 'inline-block', lineHeight: 0 }}>
              {Array.from({ length: GRID_ROWS }).map((_, r) => (
                <div key={r} style={{ display: 'flex' }}>
                  {Array.from({ length: GRID_COLS }).map((_, c) => {
                    const isBlack = BLACK[r][c];
                    return (
                      <div
                        key={c}
                        style={{
                          width: '38px', height: '38px',
                          background: cellBg(r, c),
                          border: isBlack ? 'none' : '1px solid #bbb',
                          position: 'relative',
                          flexShrink: 0,
                        }}
                      >
                        {!isBlack && NUMS[r][c] > 0 && (
                          <span style={{
                            position: 'absolute', top: '1px', left: '2px',
                            fontSize: '8px', fontWeight: 700,
                            color: '#121212', lineHeight: 1,
                            pointerEvents: 'none', userSelect: 'none',
                          }}>
                            {NUMS[r][c]}
                          </span>
                        )}
                        {!isBlack && (
                          <input
                            maxLength={1}
                            value={grid[r][c]}
                            onChange={e => handleChange(r, c, e.target.value)}
                            style={{
                              position: 'absolute', inset: 0,
                              width: '100%', height: '100%',
                              border: 'none', outline: 'none',
                              textAlign: 'center',
                              fontFamily: "'Libre Baskerville', serif",
                              fontSize: '17px', fontWeight: 700,
                              textTransform: 'uppercase',
                              background: 'transparent',
                              cursor: 'pointer',
                              color: '#121212',
                              paddingTop: '6px',
                            }}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Controls */}
            <div style={{ marginTop: '14px', display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
              <button onClick={handleCheck} style={btnStyle('#121212')}>Check</button>
              <button onClick={handleReveal} style={btnStyle('#326891')}>Reveal</button>
              <button onClick={handleReset} style={btnStyle('#888')}>Reset</button>
            </div>
            {status && (
              <div style={{
                marginTop: '10px', fontSize: '13px', fontWeight: 700,
                color: status.startsWith('✓') ? '#1a7a1a' : status === 'Revealed!' ? '#326891' : '#cc0000',
                fontFamily: "'Source Serif 4', serif",
              }}>
                {status}
              </div>
            )}
          </div>

          {/* ── CLUES ── */}
          <div style={{ flex: 1, minWidth: '200px' }}>
            <ClueSection title="Across" clues={across} />
            <ClueSection title="Down"   clues={down} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ClueSection({ title, clues }) {
  return (
    <div style={{ marginBottom: '22px' }}>
      <h4 style={{
        fontFamily: "'Libre Baskerville', serif",
        fontSize: '15px', fontWeight: 700,
        marginBottom: '10px',
        borderBottom: '1px solid #121212', paddingBottom: '4px',
      }}>
        {title}
      </h4>
      {clues.map(([, , , word, clue, num]) => (
        <div key={num + title} style={{ fontSize: '13px', lineHeight: 1.65, marginBottom: '6px', display: 'flex', gap: '6px' }}>
          <span style={{ fontWeight: 700, flexShrink: 0 }}>{num}.</span>
          <span>{clue} <span style={{ color: '#aaa' }}>({word.length})</span></span>
        </div>
      ))}
    </div>
  );
}

function btnStyle(bg) {
  return {
    background: bg, color: 'white',
    border: 'none', padding: '8px 20px',
    fontFamily: "'Source Serif 4', serif",
    fontSize: '13px', fontWeight: 600,
    cursor: 'pointer', letterSpacing: '0.04em',
    borderRadius: '2px',
  };
}
