// Header.jsx - BurningUncle top navigation
const Header = ({ onSearch }) => {
  return (
    <header style={headerStyles.header}>
      <div style={headerStyles.logo}>
        <span style={{ color: '#E8593C' }}>Burning</span>
        <span style={{ color: '#ffffff' }}>Uncle</span>
      </div>
      <div style={headerStyles.icons}>
        <button style={headerStyles.iconBtn} onClick={onSearch} aria-label="검색">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7"/><path d="m21 21-4.35-4.35"/>
          </svg>
        </button>
        <button style={headerStyles.iconBtn} aria-label="메뉴">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12h18M3 6h18M3 18h18"/>
          </svg>
        </button>
      </div>
    </header>
  );
};

const headerStyles = {
  header: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 16px', height: '52px',
    background: 'rgba(13,13,13,0.92)',
    backdropFilter: 'blur(8px)',
    borderBottom: '1px solid #1f1f1f',
    position: 'sticky', top: 0, zIndex: 200,
  },
  logo: {
    fontSize: '18px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1,
  },
  icons: { display: 'flex', gap: '12px', alignItems: 'center' },
  iconBtn: {
    background: 'none', border: 'none', cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: '4px',
  },
};

export default Header;
