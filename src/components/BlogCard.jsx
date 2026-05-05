import React from 'react';

const BlogCard = ({ title, category, date, thumbBg, onClick }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      style={{ ...blogStyles.card, background: hovered ? '#262626' : '#1c1c1c', transform: hovered ? 'scale(1.02)' : 'scale(1)' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <div style={{ ...blogStyles.thumb, background: thumbBg || '#1a1a1a' }}></div>
      <div style={blogStyles.info}>
        <div style={blogStyles.cat}>{category}</div>
        <div style={blogStyles.title}>{title}</div>
        <div style={blogStyles.date}>{date}</div>
      </div>
    </div>
  );
};

const blogStyles = {
  card: {
    width: '160px', flexShrink: 0,
    borderRadius: '8px', overflow: 'hidden',
    cursor: 'pointer',
    transition: 'transform 150ms ease, background 150ms ease',
    boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
  },
  thumb:  { width: '100%', aspectRatio: '16/9' },
  info:   { padding: '10px 10px 12px' },
  cat:    { fontSize: '10px', fontWeight: 600, color: '#E8593C', letterSpacing: '.04em', marginBottom: '5px' },
  title:  { fontSize: '12px', fontWeight: 500, lineHeight: 1.5, color: '#fff', marginBottom: '6px' },
  date:   { fontSize: '10px', color: '#555555' },
};

const RegionCard = ({ name, count, onClick }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      style={{ ...regionStyles.card, background: hovered ? '#262626' : '#1c1c1c', transform: hovered ? 'scale(1.02)' : 'scale(1)' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <div style={regionStyles.thumb}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="1.5" strokeLinecap="round">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
          <circle cx="12" cy="9" r="2.5"/>
        </svg>
      </div>
      <div style={regionStyles.info}>
        <div style={regionStyles.name}>{name}</div>
        <div style={regionStyles.count}>마을 {count}개</div>
      </div>
    </div>
  );
};

const regionStyles = {
  card: {
    width: '90px', flexShrink: 0,
    borderRadius: '8px', overflow: 'hidden',
    cursor: 'pointer', textAlign: 'center',
    transition: 'transform 150ms ease, background 150ms ease',
    boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
  },
  thumb:  { width: '100%', aspectRatio: '1/1', background: '#141414', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  info:   { padding: '8px 6px 10px' },
  name:   { fontSize: '13px', fontWeight: 600, color: '#fff' },
  count:  { fontSize: '10px', color: '#888888', marginTop: '2px' },
};

export { BlogCard, RegionCard };
