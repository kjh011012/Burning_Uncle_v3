// CategoryBar.jsx - horizontal pill tabs
const CategoryBar = ({ active, onSelect, items }) => {
  const defaultItems = ['전체', '체험마을', '교육농장', '치유마을', '치유농장', '블로그'];
  const pills = items || defaultItems;

  return (
    <div style={cbStyles.bar}>
      {pills.map(pill => (
        <button
          key={pill}
          style={{
            ...cbStyles.pill,
            ...(active === pill ? cbStyles.pillActive : {}),
          }}
          onClick={() => onSelect && onSelect(pill)}
        >
          {pill}
        </button>
      ))}
    </div>
  );
};

const cbStyles = {
  bar: {
    display: 'flex', gap: '8px',
    padding: '10px 16px',
    overflowX: 'auto', scrollbarWidth: 'none',
    borderBottom: '1px solid #1f1f1f',
    background: '#0d0d0d',
  },
  pill: {
    whiteSpace: 'nowrap',
    fontSize: '12px', fontWeight: 500,
    padding: '5px 14px',
    borderRadius: '999px',
    border: '1px solid #2a2a2a',
    color: '#888888',
    background: 'transparent',
    cursor: 'pointer',
    flexShrink: 0,
    transition: 'all 150ms ease',
    fontFamily: 'inherit',
  },
  pillActive: {
    background: '#E8593C',
    borderColor: '#E8593C',
    color: '#ffffff',
  },
};

export default CategoryBar;
