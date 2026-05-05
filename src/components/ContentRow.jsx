// ContentRow.jsx - horizontal scroll card row
const ContentRow = ({ title, linkLabel, children, onViewAll }) => {
  return (
    <div style={crStyles.section}>
      <div style={crStyles.header}>
        <span style={crStyles.title}>{title}</span>
        {linkLabel && (
          <button style={crStyles.link} onClick={onViewAll}>
            {linkLabel}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '3px' }}>
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        )}
      </div>
      <div style={crStyles.row}>
        {children}
      </div>
    </div>
  );
};

const crStyles = {
  section: { marginBottom: '28px' },
  header:  {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 16px', marginBottom: '12px',
  },
  title: { fontSize: 'clamp(14px, 2vw, 16px)', fontWeight: 600, color: '#ffffff' },
  link:  {
    display: 'flex', alignItems: 'center',
    fontSize: '12px', fontWeight: 500, color: '#888888',
    background: 'none', border: 'none', cursor: 'pointer',
    fontFamily: 'inherit', padding: 0,
    transition: 'color 150ms ease',
  },
  row: {
    display: 'flex', gap: '10px',
    padding: '0 16px 4px',
    overflowX: 'auto', scrollbarWidth: 'none',
  },
};

export default ContentRow;
