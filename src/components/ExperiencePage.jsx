import ContentRow from './ContentRow.jsx';
import StoryCard, { CATEGORY_BG } from './StoryCard.jsx';

// ExperiencePage.jsx - experience detail screen
const ExperiencePage = ({ experience, onBack }) => {
  const bg = CATEGORY_BG[experience.category] || '#1a1008';

  const steps = [
    '마을 입구에서 직접 채취한 나뭇가지를 고른다',
    '할머니에게 장작 패는 법을 배운다',
    '불을 직접 피우고, 반죽을 올린다',
    '기다리는 시간 동안 이야기가 시작된다',
    '함께 먹고, 설거지하고, 웃는다',
  ];

  return (
    <div style={epStyles.wrap}>
      {/* Hero */}
      <div style={{ ...epStyles.hero, background: bg }}>
        <div style={epStyles.heroOverlay}></div>
        <button style={epStyles.backBtn} onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <div style={epStyles.heroContent}>
          <span style={epStyles.badge}>{experience.type || '체험'}</span>
          <div style={epStyles.title}>{experience.name}</div>
          <div style={epStyles.sub}>{experience.village} · {experience.region}</div>
        </div>
      </div>

      {/* Fiction story box */}
      <div style={epStyles.storyBox}>
        <div style={epStyles.storyLabel}>이 체험의 이야기</div>
        <div style={epStyles.storyText}>{experience.story}</div>
      </div>

      {/* Steps */}
      <div style={epStyles.section}>
        <div style={epStyles.sectionTitle}>무엇을 하게 되는가</div>
        {steps.map((step, i) => (
          <div key={i} style={epStyles.stepRow}>
            <div style={epStyles.stepDot}></div>
            <div style={epStyles.stepText}>{step}</div>
          </div>
        ))}
      </div>

      {/* Info chips */}
      <div style={epStyles.section}>
        <div style={epStyles.sectionTitle}>알아두면 좋은 것들</div>
        <div style={epStyles.chips}>
          {[['⏱', '90분'], ['👥', '가족·어린이'], ['🔢', '2–20명']].map(([icon, label], i) => (
            <div key={i} style={epStyles.chip}>{label}</div>
          ))}
        </div>
      </div>

      {/* Related */}
      <ContentRow title="함께 경험하면 좋은 것들" linkLabel="전체" onViewAll={() => {}}>
        <StoryCard title="메밀 반죽 손 만들기" village={experience.village} region={experience.region} badge="프로그램" category={experience.category} onClick={() => {}} />
        <StoryCard title="계절 채소 수확 체험" village={experience.village} region={experience.region} badge="체험" category="교육농장" onClick={() => {}} />
        <StoryCard title="숲속 치유 산책 프로그램" village="원대리마을" region="인제" badge="프로그램" category="치유마을" onClick={() => {}} />
      </ContentRow>

      <div style={{ height: '80px' }}></div>
    </div>
  );
};

const epStyles = {
  wrap: { background: '#0d0d0d', minHeight: '100%', overflowY: 'auto' },
  hero: {
    position: 'relative', width: '100%', aspectRatio: '16/9',
    display: 'flex', alignItems: 'flex-end', overflow: 'hidden',
  },
  heroOverlay: {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.88) 100%)',
  },
  backBtn: {
    position: 'absolute', top: '12px', left: '12px', zIndex: 3,
    background: 'rgba(0,0,0,0.35)', border: 'none', borderRadius: '50%',
    width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer',
  },
  heroContent: { position: 'relative', zIndex: 2, padding: '0 16px 16px', width: '100%' },
  badge: {
    display: 'inline-block', fontSize: '10px', fontWeight: 600,
    color: '#E8593C', background: 'rgba(232,89,60,0.18)',
    borderRadius: '4px', padding: '3px 8px', marginBottom: '7px',
  },
  title: { fontSize: '20px', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', marginBottom: '4px' },
  sub:   { fontSize: '12px', color: 'rgba(255,255,255,0.55)' },
  storyBox: {
    margin: '20px 16px',
    borderLeft: '4px solid #E8593C',
    background: '#1c1c1c',
    padding: '14px 16px',
    borderRadius: '0 8px 8px 0',
  },
  storyLabel: { fontSize: '10px', fontWeight: 600, color: '#E8593C', letterSpacing: '.06em', marginBottom: '8px' },
  storyText:  { fontSize: '14px', lineHeight: 1.75, color: '#fff', letterSpacing: '0.01em' },
  section: { padding: '0 16px', marginBottom: '24px' },
  sectionTitle: { fontSize: '15px', fontWeight: 600, color: '#fff', marginBottom: '12px' },
  stepRow: { display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '10px' },
  stepDot: { width: '7px', height: '7px', borderRadius: '50%', background: '#E8593C', marginTop: '6px', flexShrink: 0 },
  stepText: { fontSize: '13px', color: '#ccc', lineHeight: 1.6 },
  chips: { display: 'flex', flexWrap: 'wrap', gap: '8px' },
  chip: {
    fontSize: '12px', fontWeight: 500, color: '#888',
    padding: '5px 12px', borderRadius: '999px',
    background: '#1c1c1c', border: '1px solid #2a2a2a',
  },
};

export default ExperiencePage;
