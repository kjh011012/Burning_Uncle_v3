import React from 'react';

// StoryCard.jsx - video content card
export const CATEGORY_BG = {
  '체험마을': '#1a1008',
  '교육농장': '#0f1f0a',
  '치유마을': '#0a1020',
  '치유농장': '#0a1a10',
  default:    '#1c1c1c',
};

const StoryCard = ({ title, village, region, badge, category, onClick }) => {
  const [hovered, setHovered] = React.useState(false);
  const bg = CATEGORY_BG[category] || CATEGORY_BG.default;

  return (
    <div
      style={{ ...scStyles.card, background: hovered ? '#262626' : '#1c1c1c', transform: hovered ? 'scale(1.02)' : 'scale(1)' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <div style={{ ...scStyles.thumb, background: bg }}>
        <div style={scStyles.playBtn}>
          <svg width="9" height="11" viewBox="0 0 9 11" fill="white"><path d="M0 0l9 5.5L0 11z"/></svg>
        </div>
      </div>
      <div style={scStyles.info}>
        <span style={scStyles.badge}>{badge || '시네마'}</span>
        <div style={scStyles.title}>{title}</div>
        <div style={scStyles.sub}>{region} · {village}</div>
      </div>
    </div>
  );
};

const scStyles = {
  card: {
    width: '140px', flexShrink: 0,
    borderRadius: '8px', overflow: 'hidden',
    cursor: 'pointer',
    transition: 'transform 150ms ease, background 150ms ease',
    boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
  },
  thumb: {
    width: '100%', aspectRatio: '16/9',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  playBtn: {
    width: '28px', height: '28px', borderRadius: '50%',
    background: 'rgba(255,255,255,0.18)',
    backdropFilter: 'blur(4px)',
    border: '1.5px solid rgba(255,255,255,0.35)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  info: { padding: '8px 8px 10px' },
  badge: {
    display: 'inline-block',
    fontSize: '10px', fontWeight: 600, letterSpacing: '.04em',
    color: '#E8593C',
    background: 'rgba(232,89,60,0.15)',
    borderRadius: '4px',
    padding: '2px 6px',
    marginBottom: '5px',
  },
  title: { fontSize: '12px', fontWeight: 500, lineHeight: 1.4, color: '#fff', marginBottom: '3px' },
  sub:   { fontSize: '10px', color: '#888888' },
};

export default StoryCard;
