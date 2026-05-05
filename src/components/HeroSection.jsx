import { CATEGORY_BG } from './StoryCard.jsx';

// HeroSection.jsx - fullscreen hero with gradient overlay, play button, CTA
const HeroSection = ({ badge, title, logline, category, onPlay, onDetail }) => {
  const bg = CATEGORY_BG[category] || '#1a1008';
  return (
    <div style={{ ...hsStyles.hero, background: bg }}>
      {/* scan-line texture */}
      <div style={hsStyles.scanlines}></div>
      {/* gradient overlay */}
      <div style={hsStyles.overlay}></div>
      {/* center play */}
      <div style={hsStyles.playWrap}>
        <button style={hsStyles.playBtn} onClick={onPlay}>
          <svg width="18" height="20" viewBox="0 0 18 20" fill="white"><path d="M0 0l18 10L0 20z"/></svg>
        </button>
      </div>
      {/* bottom content */}
      <div style={hsStyles.content}>
        <span style={hsStyles.badge}>{badge || '시네마'}</span>
        <div style={hsStyles.title}>{title}</div>
        <div style={hsStyles.logline}>{logline}</div>
        <div style={hsStyles.actions}>
          <button style={hsStyles.btnPrimary} onClick={onPlay}>
            <svg width="10" height="12" viewBox="0 0 10 12" fill="white"><path d="M0 0l10 6-10 6z"/></svg>
            예고편 보기
          </button>
          <button style={hsStyles.btnGhost} onClick={onDetail}>이야기 보기</button>
        </div>
      </div>
    </div>
  );
};

const hsStyles = {
  hero: {
    position: 'relative', width: '100%', aspectRatio: '16/9',
    overflow: 'hidden', display: 'flex', alignItems: 'flex-end',
  },
  scanlines: {
    position: 'absolute', inset: 0, pointerEvents: 'none',
    background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.008) 3px, rgba(255,255,255,0.008) 4px)',
  },
  overlay: {
    position: 'absolute', inset: 0, pointerEvents: 'none',
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.82) 100%)',
  },
  playWrap: {
    position: 'absolute', top: '50%', left: '50%',
    transform: 'translate(-50%, -50%)', zIndex: 2,
  },
  playBtn: {
    width: '52px', height: '52px', borderRadius: '50%',
    background: 'rgba(255,255,255,0.15)',
    backdropFilter: 'blur(6px)',
    border: '2px solid rgba(255,255,255,0.38)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer',
  },
  content: {
    position: 'relative', zIndex: 2,
    padding: '0 16px 18px', width: '100%',
  },
  badge: {
    display: 'inline-block',
    fontSize: '10px', fontWeight: 600, letterSpacing: '.06em',
    color: '#E8593C', background: 'rgba(232,89,60,0.18)',
    borderRadius: '4px', padding: '3px 8px', marginBottom: '8px',
  },
  title: {
    fontSize: 'clamp(18px, 5vw, 28px)', fontWeight: 600,
    lineHeight: 1.2, letterSpacing: '-0.02em',
    color: '#fff', marginBottom: '6px', textWrap: 'pretty',
  },
  logline: {
    fontSize: '12px', color: 'rgba(255,255,255,0.62)',
    lineHeight: 1.5, marginBottom: '12px',
    display: '-webkit-box', WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical', overflow: 'hidden',
  },
  actions: { display: 'flex', gap: '8px' },
  btnPrimary: {
    display: 'flex', alignItems: 'center', gap: '5px',
    background: '#E8593C', color: '#fff',
    fontSize: '12px', fontWeight: 600,
    border: 'none', borderRadius: '4px', padding: '7px 14px',
    cursor: 'pointer', fontFamily: 'inherit',
  },
  btnGhost: {
    display: 'flex', alignItems: 'center',
    background: 'rgba(255,255,255,0.1)', color: '#fff',
    fontSize: '12px', fontWeight: 600,
    border: '1px solid rgba(255,255,255,0.18)',
    borderRadius: '4px', padding: '7px 14px',
    cursor: 'pointer', fontFamily: 'inherit',
  },
};

export default HeroSection;
