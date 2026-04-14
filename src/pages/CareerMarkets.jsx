import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale, LinearScale, BarElement, LineElement, PointElement,
  RadialLinearScale, ArcElement, Filler, Tooltip, Legend,
} from 'chart.js';
import { Bar, Line, Radar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale, LinearScale, BarElement, LineElement, PointElement,
  RadialLinearScale, ArcElement, Filler, Tooltip, Legend
);

const charts = {
  impact: {
    label: 'Impact Metrics',
    Component: Bar,
    data: {
      labels: ['Query Automation', 'Deploy Failures ↓', 'User Engagement ↑', 'API Speed ↑', 'Load Time ↓', 'DB Load ↓'],
      datasets: [{ label: 'Improvement %', data: [70, 40, 50, 100, 40, 35], backgroundColor: '#326891', borderRadius: 2 }],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true, max: 110, ticks: { callback: v => v + '%' }, grid: { color: '#eee' } },
        x: { ticks: { font: { size: 11 } }, grid: { display: false } },
      },
    },
    legend: [{ color: '#326891', label: 'Improvement %' }],
  },
  skills: {
    label: 'Skills Portfolio',
    Component: Radar,
    data: {
      labels: ['Frontend', 'Backend', 'AI/ML', 'DevOps', 'Databases', 'System Design'],
      datasets: [{
        label: 'Proficiency',
        data: [90, 88, 82, 78, 80, 85],
        backgroundColor: 'rgba(204,0,0,0.1)',
        borderColor: '#cc0000', borderWidth: 2,
        pointBackgroundColor: '#cc0000',
      }],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      scales: { r: { min: 0, max: 100, ticks: { stepSize: 20 } } },
      plugins: { legend: { display: false } },
    },
    legend: [{ color: '#cc0000', label: 'Skill level' }],
  },
  timeline: {
    label: 'Career Timeline',
    Component: Line,
    data: {
      labels: ['2023 Patent', "Zavyat Jan'24", "Synefo Oct'24", "Rutgers Aug'25", "Grad Dec'26"],
      datasets: [{
        label: 'Career Index',
        data: [60, 70, 85, 88, 100],
        borderColor: '#538d4e', backgroundColor: 'rgba(83,141,78,0.1)',
        fill: true, tension: 0.4,
        pointBackgroundColor: '#538d4e', pointRadius: 5,
      }],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { min: 0, max: 110, grid: { color: '#eee' } },
        x: { grid: { display: false } },
      },
    },
    legend: [{ color: '#538d4e', label: 'Career impact index' }],
  },
};

const stats = [
  { label: 'Patent', value: '1', sub: 'Granted · CV Tech' },
  { label: 'Accuracy', value: '94.2%', sub: 'CNN Model', color: '#1a7a1a' },
  { label: 'Automation', value: '70%', sub: 'Query Automation', color: '#1a7a1a' },
  { label: 'YOE', value: '2+', sub: 'Years Experience' },
];

export default function CareerMarkets() {
  const [activeChart, setActiveChart] = useState('impact');
  const cfg = charts[activeChart];
  const { Component } = cfg;

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '30px 20px 60px' }}>
      <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#727272', borderBottom: '1px solid #121212', marginBottom: '14px', paddingBottom: '4px' }}>
        Career Markets Desk
      </div>
      <h1 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '34px', fontWeight: 700, lineHeight: 1.2, marginBottom: '8px' }}>
        JUVANA KHAN (JK) — Career Performance Index
      </h1>
      <p style={{ fontFamily: "'Source Serif 4', serif", fontStyle: 'italic', fontSize: '18px', color: '#555', borderTop: '1px solid #e2e2e2', borderBottom: '1px solid #e2e2e2', padding: '8px 0', marginBottom: '14px' }}>
        Tracking the rise of a full-stack engineer across roles, projects, and impact milestones
      </p>
      <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#727272', marginBottom: '24px' }}>
        Markets Reporter · Portfolio Tracker · Updated April 2026
      </div>

      {/* Chart Box */}
      <div style={{ background: '#fff', border: '1px solid #e2e2e2', padding: '24px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '18px', flexWrap: 'wrap', gap: '8px' }}>
          <div>
            <div style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '24px', fontWeight: 700 }}>Juvana Khan</div>
            <div style={{ fontSize: '13px', color: '#727272', letterSpacing: '0.1em' }}>NYSE: JK · FULL-STACK · AI SPECIALIST</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '28px', fontWeight: 700, color: '#1a7a1a' }}>↑ 94.2</div>
            <div style={{ fontSize: '14px', color: '#1a7a1a' }}>+50% engagement · All-time high</div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', borderBottom: '1px solid #e2e2e2', marginBottom: '16px' }}>
          {Object.entries(charts).map(([key, c]) => (
            <button key={key} onClick={() => setActiveChart(key)} style={{
              padding: '6px 14px', fontSize: '12px', fontWeight: 700,
              letterSpacing: '0.05em', cursor: 'pointer',
              border: 'none', background: 'none',
              borderBottom: activeChart === key ? '2px solid #121212' : '2px solid transparent',
              color: activeChart === key ? '#121212' : '#727272',
              fontFamily: "'Source Serif 4', serif",
            }}>{c.label}</button>
          ))}
        </div>

        <div style={{ position: 'relative', width: '100%', height: '320px' }}>
          <Component data={cfg.data} options={cfg.options} />
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '12px', fontSize: '12px', color: '#555' }}>
          {cfg.legend.map((l, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '2px', background: l.color, display: 'inline-block' }} />
              {l.label}
            </span>
          ))}
        </div>
      </div>

      {/* Stat Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '12px', marginBottom: '24px' }}>
        {stats.map((s, i) => (
          <div key={i} style={{ background: '#fff', border: '1px solid #e2e2e2', padding: '14px', textAlign: 'center' }}>
            <div style={{ fontSize: '11px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px', fontFamily: "'Source Serif 4', serif" }}>{s.label}</div>
            <div style={{ fontSize: '28px', fontWeight: 700, fontFamily: "'Libre Baskerville', serif", color: s.color || '#121212' }}>{s.value}</div>
            <div style={{ fontSize: '11px', color: '#888' }}>{s.sub}</div>
          </div>
        ))}
      </div>

      <div>
        <p style={{ fontSize: '16px', lineHeight: 1.75, marginBottom: '16px', color: '#222' }}>
          Analysts tracking the Full-Stack sector have flagged Juvana Khan as a strong buy heading into 2026. Shares of JK — measured in production systems shipped, APIs optimized, and user experiences improved — have shown consistent upward momentum since her first role at Zavyat Enterprise.
        </p>
        <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#222' }}>
          The breakthrough quarter came at Synefo, where Khan single-handedly owned the CI/CD pipeline and delivered an LLM-powered chatbot that reduced internal query volume by 70%. Investors in the engineering talent market took note.
        </p>
      </div>
    </div>
  );
}
