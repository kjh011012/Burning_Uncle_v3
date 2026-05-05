import { BlogCard } from './BlogCard.jsx';
import ContentRow from './ContentRow.jsx';
import StoryCard, { CATEGORY_BG } from './StoryCard.jsx';
import { TYPE_BADGE_BG } from './VillageCard.jsx';

// VillagePage.jsx - village detail screen
const VillagePage = ({ village, onBack, onNavigate }) => {
  const bg = CATEGORY_BG[village.type] || '#1a1008';
  const badgeBg = TYPE_BADGE_BG[village.type] || 'rgba(100,100,100,0.4)';

  const stories = [
    { title: '감자전이 익어가던 오후', village: village.name, region: village.region, badge: '시네마', category: village.type },
    { title: '처음 와도 익숙한 하루', village: village.name, region: village.region, badge: '드라마', category: village.type },
    { title: '먹고, 만들고, 같이 웃는 시간', village: village.name, region: village.region, badge: '픽션', category: village.type },
  ];

  const experiences = [
    { title: '전통 장작불 요리 체험', village: village.name, region: village.region, badge: '체험', category: village.type },
    { title: '메밀 반죽 손 만들기', village: village.name, region: village.region, badge: '프로그램', category: village.type },
    { title: '계절 채소 수확 + 요리 패키지', village: village.name, region: village.region, badge: '패키지', category: village.type },
  ];

  return (
    <div style={vpStyles.wrap}>
      {/* Hero */}
      <div style={{ ...vpStyles.hero, background: bg }}>
        <div style={vpStyles.heroOverlay}></div>
        <button style={vpStyles.backBtn} onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <div style={vpStyles.heroContent}>
          <div style={vpStyles.heroBadges}>
            <span style={{ ...vpStyles.typePill, background: badgeBg }}>{village.type}</span>
            <span style={vpStyles.regionPill}>{village.region}</span>
          </div>
          <div style={vpStyles.heroName}>{village.name}</div>
          <div style={vpStyles.heroTagline}>{village.tagline}</div>
        </div>
      </div>

      {/* Tagline quote */}
      <div style={vpStyles.quoteBlock}>
        <div style={vpStyles.quoteMark}>"</div>
        <div style={vpStyles.quoteText}>{village.tagline}</div>
      </div>

      {/* Story videos */}
      <ContentRow title="이 마을의 이야기" linkLabel="전체" onViewAll={() => {}}>
        {stories.map((s, i) => (
          <StoryCard key={i} {...s} onClick={() => {}} />
        ))}
      </ContentRow>

      {/* Experiences */}
      <ContentRow title="이 마을에서 할 수 있는 것들" linkLabel="전체" onViewAll={() => {}}>
        {experiences.map((e, i) => (
          <StoryCard key={i} {...e} onClick={() => onNavigate('experience')} />
        ))}
      </ContentRow>

      {/* Blog */}
      <ContentRow title="이 마을에 대해 쓴 이야기" linkLabel="블로그 전체" onViewAll={() => {}}>
        <BlogCard title={`장작불 냄새가 남는 곳, ${village.name}의 하루`} category="마을 이야기" date="2025.04.21" thumbBg={bg} onClick={() => {}} />
        <BlogCard title="처음 와도 익숙한 하루" category="체험 후기" date="2025.04.15" thumbBg="#0f1f0a" onClick={() => {}} />
      </ContentRow>

      <div style={{ height: '80px' }}></div>
    </div>
  );
};

const vpStyles = {
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
  heroBadges: { display: 'flex', gap: '6px', marginBottom: '8px' },
  typePill: { fontSize: '10px', fontWeight: 600, color: '#fff', padding: '2px 8px', borderRadius: '999px' },
  regionPill: { fontSize: '10px', fontWeight: 500, color: 'rgba(255,255,255,0.6)', padding: '2px 8px', borderRadius: '999px', background: 'rgba(255,255,255,0.1)' },
  heroName: { fontSize: '22px', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', marginBottom: '4px' },
  heroTagline: { fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 },
  quoteBlock: { padding: '20px 20px 16px', borderBottom: '1px solid #1f1f1f', marginBottom: '24px' },
  quoteMark: { fontSize: '32px', color: '#E8593C', lineHeight: 0.8, marginBottom: '8px', fontFamily: 'Georgia, serif' },
  quoteText: { fontSize: '15px', fontWeight: 400, lineHeight: 1.75, color: '#fff', letterSpacing: '0.01em' },
};

export default VillagePage;
