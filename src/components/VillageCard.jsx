import React from 'react';
import { CATEGORY_BG } from './StoryCard.jsx';

// VillageCard.jsx - village/farm browse card
export const TYPE_BADGE_BG = {
  '체험마을': 'rgba(180,100,40,0.45)',
  '교육농장': 'rgba(30,90,20,0.45)',
  '치유마을': 'rgba(20,40,100,0.45)',
  '치유농장': 'rgba(20,80,50,0.45)',
};

const VillageCard = ({ name, region, type, videoCount, expCount, onClick }) => {
  const [hovered, setHovered] = React.useState(false);
  const thumbBg = CATEGORY_BG[type] || '#1c1c1c';
  const badgeBg = TYPE_BADGE_BG[type] || 'rgba(100,100,100,0.4)';

  return (
    <div
      style={{ ...vcStyles.card, background: hovered ? '#262626' : '#1c1c1c', transform: hovered ? 'scale(1.02)' : 'scale(1)' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <div style={{ ...vcStyles.thumb, background: thumbBg }}>
        <span style={{ ...vcStyles.typeBadge, background: badgeBg }}>{type}</span>
      </div>
      <div style={vcStyles.info}>
        <div style={vcStyles.name}>{name}</div>
        <div style={vcStyles.region}>{region}</div>
        <div style={vcStyles.stats}>
          <span style={vcStyles.stat}>영상 <b style={{ color: '#888' }}>{videoCount}</b></span>
          <span style={vcStyles.stat}>체험 <b style={{ color: '#888' }}>{expCount}</b></span>
        </div>
      </div>
    </div>
  );
};

const vcStyles = {
  card: {
    width: '140px', flexShrink: 0,
    borderRadius: '8px', overflow: 'hidden',
    cursor: 'pointer',
    transition: 'transform 150ms ease, background 150ms ease',
    boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
  },
  thumb: {
    width: '100%', aspectRatio: '4/3',
    display: 'flex', alignItems: 'flex-end', padding: '8px',
  },
  typeBadge: {
    fontSize: '10px', fontWeight: 600, letterSpacing: '.04em',
    color: '#fff', padding: '2px 7px',
    borderRadius: '999px',
  },
  info: { padding: '8px 8px 10px' },
  name:   { fontSize: '13px', fontWeight: 600, color: '#fff', marginBottom: '2px' },
  region: { fontSize: '11px', color: '#888888', marginBottom: '6px' },
  stats:  { display: 'flex', gap: '8px' },
  stat:   { fontSize: '10px', color: '#555555' },
};

export default VillageCard;
