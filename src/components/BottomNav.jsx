// BottomNav.jsx - BurningUncle mobile bottom navigation
const BottomNav = ({ active, onNavigate }) => {
  const items = [
    {
      id: 'home', label: '홈',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="M9 21V12h6v9"/>
        </svg>
      )
    },
    {
      id: 'villages', label: '마을·농장',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>
        </svg>
      )
    },
    {
      id: 'experiences', label: '체험',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
        </svg>
      )
    },
    {
      id: 'blog', label: '블로그',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        </svg>
      )
    },
    {
      id: 'more', label: '더보기',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0 1 12 0v2"/>
        </svg>
      )
    },
  ];

  return (
    <nav style={bnStyles.nav}>
      {items.map(item => (
        <button
          key={item.id}
          style={{
            ...bnStyles.item,
            color: active === item.id ? '#E8593C' : '#555555',
          }}
          onClick={() => onNavigate(item.id)}
        >
          {item.icon}
          <span style={bnStyles.label}>{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

const bnStyles = {
  nav: {
    display: 'flex',
    background: 'rgba(13,13,13,0.92)',
    backdropFilter: 'blur(8px)',
    borderTop: '1px solid #1f1f1f',
    position: 'fixed', bottom: 0, left: '50%',
    transform: 'translateX(-50%)',
    width: '100%', maxWidth: '430px',
    zIndex: 200,
  },
  item: {
    flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
    justifyContent: 'center', gap: '3px', padding: '8px 0 10px',
    background: 'none', border: 'none', cursor: 'pointer',
    transition: 'color 150ms ease',
  },
  label: { fontSize: '10px', fontWeight: 500 },
};

export default BottomNav;
