// src/pages/CareerPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Bar, Radar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale, LinearScale, BarElement,
  RadialLinearScale, PointElement, LineElement,
  Filler, Tooltip, Legend,
} from 'chart.js';
import { careerChartData, experience } from '../data/resume';

ChartJS.register(
  CategoryScale, LinearScale, BarElement,
  RadialLinearScale, PointElement, LineElement,
  Filler, Tooltip, Legend
);

const TABS = [
  { id: 'impact', label: 'Impact Metrics' },
  { id: 'skills', label: 'Skills Portfolio' },
  { id: 'timeline', label: 'Career Timeline' },
];

const StatCard = ({ label, value, sub }) => (
  <div style={{
    background: '#ffffff',
    border: '1px solid #e2e2e2',
    padding: '14px',
    textAlign: 'center',
    flex: '1 1 120px',
  }}>
    <div style={{ fontSize: '11px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>{label}</div>
    <div style={{ fontSize: '28px', fontWeight: 700, fontFamily: 'var(--font-display)', color: '#1a7a1a' }}>{value}</div>
    {sub && <div style={{ fontSize: '11px', color: '#888', marginTop: '2px' }}>{sub}</div>}
  </div>
);

const CareerPage = () => {
  const [tab, setTab] = useState('impact');

  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
  };

  const chartMap = {
    impact: (
      <Bar
        data={{
          labels: careerChartData.impact.labels,
          datasets: [{
            label: 'Improvement %',
            data: careerChartData.impact.data,
            backgroundColor: '#326891',
            borderRadius: 2,
          }],
        }}
        options={{
          ...commonOptions,
          scales: {
            y: { beginAtZero: true, max: 110, ticks: { callback: v => v + '%' }, grid: { color: '#eee' } },
            x: { ticks: { font: { size: 11 } }, grid: { display: false } },
          },
        }}
      />
    ),
    skills: (
      <Radar
        data={{
          labels: careerChartData.skills.labels,
          datasets: [{
            label: 'Proficiency',
            data: careerChartData.skills.data,
            backgroundColor: 'rgba(204,0,0,0.1)',
            borderColor: '#c00000',
            borderWidth: 2,
            pointBackgroundColor: '#c00000',
          }],
        }}
        options={{
          ...commonOptions,
          scales: { r: { min: 0, max: 100, ticks: { stepSize: 20 } } },
        }}
      />
    ),
    timeline: (
      <Line
        data={{
          labels: careerChartData.timeline.labels,
          datasets: [{
            label: 'Career Index',
            data: careerChartData.timeline.data,
            borderColor: '#538d4e',
            backgroundColor: 'rgba(83,141,78,0.1)',
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#538d4e',
            pointRadius: 5,
          }],
        }}
        options={{
          ...commonOptions,
          scales: {
            y: { min: 0, max: 110, grid: { color: '#eee' } },
            x: { grid: { display: false } },
          },
        }}
      />
    ),
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '30px 24px' }} className="page-enter">
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#727272', borderBottom: '1px solid #121212', marginBottom: '14px', paddingBottom: '4px' }}>
        Career Markets Desk
      </div>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '34px', fontWeight: 700, lineHeight: 1.2, marginBottom: '6px' }}>
        JUVANA KHAN (JK) — Career Performance Index
      </h1>
      <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '18px', color: '#555', marginBottom: '6px', borderTop: '1px solid #e2e2e2', borderBottom: '1px solid #e2e2e2', padding: '8px 0' }}>
        Tracking the rise of a full-stack engineer across roles, projects, and impact milestones
      </p>
      <p style={{ fontSize: '11px', color: '#727272', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '24px' }}>
        Markets Reporter · Portfolio Tracker · Updated April 2026
      </p>

      {/* STAT CARDS */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
        <StatCard label="Patent" value="1" sub="Granted · CV Tech" />
        <StatCard label="Accuracy" value="94.2%" sub="CNN Model" />
        <StatCard label="Automation" value="70%" sub="Query Automation" />
        <StatCard label="YOE" value="2+" sub="Years Experience" />
      </div>

      {/* CHART */}
      <div style={{ background: '#ffffff', border: '1px solid #e2e2e2', padding: '24px', marginBottom: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700 }}>Juvana Khan</div>
            <div style={{ fontSize: '12px', color: '#727272', letterSpacing: '0.1em' }}>NYSE: JK · FULL-STACK · AI SPECIALIST</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '26px', fontWeight: 700, color: '#1a7a1a' }}>↑ 94.2</div>
            <div style={{ fontSize: '13px', color: '#1a7a1a' }}>+50% engagement · All-time high</div>
          </div>
        </div>

        {/* TABS */}
        <div style={{ display: 'flex', borderBottom: '1px solid #e2e2e2', marginBottom: '16px' }}>
          {TABS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              style={{
                padding: '6px 16px',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.05em',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                color: tab === id ? '#121212' : '#727272',
                borderBottom: tab === id ? '2px solid #121212' : '2px solid transparent',
                fontFamily: 'var(--font-serif)',
              }}
            >
              {label}
            </button>
          ))}
        </div>

        <div style={{ position: 'relative', width: '100%', height: '320px' }}>
          {chartMap[tab]}
        </div>
      </div>

      {/* EXPERIENCE CARDS */}
      {experience.map((job, i) => (
        <div key={i} style={{ background: '#ffffff', border: '1px solid #e2e2e2', padding: '22px', marginBottom: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700 }}>{job.company}</h3>
              <div style={{ fontSize: '14px', color: '#555', fontStyle: 'italic' }}>{job.role} · {job.location}</div>
            </div>
            <div style={{ fontSize: '12px', color: '#727272', letterSpacing: '0.06em', fontWeight: 600 }}>{job.period}</div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '14px' }}>
            {job.stats.map((s, j) => (
              <div key={j} style={{ background: '#f7f4ef', padding: '8px 14px', flex: '1 1 100px', textAlign: 'center' }}>
                <div style={{ fontSize: '22px', fontWeight: 700, color: '#1a7a1a', fontFamily: 'var(--font-display)' }}>{s.value}</div>
                <div style={{ fontSize: '11px', color: '#727272', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
              </div>
            ))}
          </div>
          <ul style={{ paddingLeft: '18px' }}>
            {job.bullets.map((b, j) => (
              <li key={j} style={{ fontSize: '14px', color: '#333', lineHeight: 1.65, marginBottom: '5px' }}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CareerPage;
