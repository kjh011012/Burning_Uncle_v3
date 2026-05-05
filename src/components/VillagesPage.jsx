import React from 'react';
import VillageCard from './VillageCard.jsx';

// VillagesPage.jsx - browse/filter villages
const VillagesPage = ({ onSelect }) => {
  const [activeType, setActiveType] = React.useState('전체');
  const [activeRegion, setActiveRegion] = React.useState('전체');

  const types   = ['전체', '체험마을', '교육농장', '치유마을', '치유농장'];
  const regions = ['전체', '횡성', '평창', '홍천', '강릉', '인제', '춘천', '원주', '속초'];

  const villages = [
    { name: '서원마을',     region: '횡성', type: '체험마을', videoCount: 8,  expCount: 12, tagline: '장작불 냄새가 남는 곳' },
    { name: '하늘마루농장', region: '평창', type: '교육농장', videoCount: 5,  expCount: 9,  tagline: '아이들이 먼저 뛰어간 마을' },
    { name: '원대리마을',   region: '인제', type: '치유마을', videoCount: 6,  expCount: 7,  tagline: '숲길 끝에서 웃음이 남았다' },
    { name: '산들마을',     region: '춘천', type: '치유농장', videoCount: 4,  expCount: 11, tagline: '흙 속에서 웃음이 먼저 나왔다' },
    { name: '두메향기마을', region: '홍천', type: '체험마을', videoCount: 7,  expCount: 8,  tagline: '처음 와도 익숙한 하루' },
    { name: '감나무골농장', region: '강릉', type: '교육농장', videoCount: 3,  expCount: 6,  tagline: '먹고, 만들고, 같이 웃는 시간' },
    { name: '청산별곡마을', region: '원주', type: '치유마을', videoCount: 5,  expCount: 9,  tagline: '숲이 하루를 바꿔준 이야기' },
    { name: '별빛치유농원', region: '속초', type: '치유농장', videoCount: 4,  expCount: 5,  tagline: '지금 이 계절에만 보이는 것' },
  ];

  const filtered = villages.filter(v =>
    (activeType === '전체' || v.type === activeType) &&
    (activeRegion === '전체' || v.region === activeRegion)
  );

  return (
    <div style={vpsStyles.wrap}>
      {/* Filter: Type */}
      <div style={vpsStyles.filterSection}>
        <div style={vpsStyles.filterLabel}>유형</div>
        <div style={vpsStyles.filterRow}>
          {types.map(t => (
            <button key={t}
              style={{ ...vpsStyles.filterPill, ...(activeType === t ? vpsStyles.filterPillActive : {}) }}
              onClick={() => setActiveType(t)}
            >{t}</button>
          ))}
        </div>
      </div>
      {/* Filter: Region */}
      <div style={vpsStyles.filterSection}>
        <div style={vpsStyles.filterLabel}>지역</div>
        <div style={vpsStyles.filterRow}>
          {regions.map(r => (
            <button key={r}
              style={{ ...vpsStyles.filterPill, ...(activeRegion === r ? vpsStyles.filterPillActive : {}) }}
              onClick={() => setActiveRegion(r)}
            >{r}</button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div style={vpsStyles.grid}>
        {filtered.map((v, i) => (
          <VillageCard
            key={i}
            name={v.name} region={v.region} type={v.type}
            videoCount={v.videoCount} expCount={v.expCount}
            onClick={() => onSelect(v)}
          />
        ))}
        {filtered.length === 0 && (
          <div style={vpsStyles.empty}>해당 조건의 마을이 없습니다</div>
        )}
      </div>
      <div style={{ height: '80px' }}></div>
    </div>
  );
};

const vpsStyles = {
  wrap: { background: '#0d0d0d', minHeight: '100%', paddingTop: '4px' },
  filterSection: { padding: '10px 16px 4px' },
  filterLabel: { fontSize: '11px', fontWeight: 600, color: '#555', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: '8px' },
  filterRow: { display: 'flex', gap: '6px', flexWrap: 'wrap' },
  filterPill: {
    fontSize: '12px', fontWeight: 500,
    padding: '4px 12px', borderRadius: '999px',
    border: '1px solid #2a2a2a', color: '#888',
    background: 'transparent', cursor: 'pointer',
    fontFamily: 'inherit', transition: 'all 150ms ease',
  },
  filterPillActive: { background: '#E8593C', borderColor: '#E8593C', color: '#fff' },
  grid: {
    display: 'grid', gridTemplateColumns: '1fr 1fr',
    gap: '10px', padding: '16px',
  },
  empty: { gridColumn: '1/-1', textAlign: 'center', color: '#555', padding: '40px 0', fontSize: '14px' },
};

export default VillagesPage;
