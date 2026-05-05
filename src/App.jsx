import React from 'react';

const CAT_BG = {
  '체험마을': '#1a1008',
  '교육농장': '#0f1f0a',
  '치유마을': '#0a1020',
  '치유농장': '#0a1a10',
};

const CAT_ACCENT = {
  '체험마을': '#c8732a',
  '교육농장': '#7fb84a',
  '치유마을': '#5f7de8',
  '치유농장': '#4fb87b',
};

const CATEGORY_COLOR = {
  exp_edu: '#E8593C',
  heal: '#1D9E75',
};

const HERO_ITEMS = [
  {
    id: 'hero-1',
    title: '노아의숲\n속도가 사라진 곳',
    type: 'TOP 1',
    category: '치유마을',
    village: '노아의숲',
    region: '정선',
    duration: '3min 30sec',
    rating: '9.4',
    tags: ['강원 정선', '치유마을', '시네마', '숲과 치유'],
    poster: 'noah',
    titleClass: 'hero-title-noah',
    thumbnail: 'https://images.unsplash.com/photo-1542113028-b526238297f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
  },
  {
    id: 'hero-2',
    title: '장작불 아래\n모인 저녁',
    type: 'TOP 2',
    category: '체험마을',
    village: '고라데이마을',
    region: '횡성',
    duration: '3min',
    rating: '9.1',
    tags: ['강원 횡성', '체험마을', '드라마', '불과 음식'],
    poster: 'fire',
    titleClass: 'hero-title-fire',
    thumbnail: 'https://images.unsplash.com/photo-1549770157-a81070c9c023?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000',
    videoUrl: 'https://media.w3.org/2010/05/bunny/trailer.mp4',
  },
  {
    id: 'hero-3',
    title: '숲이 말을\n걸어오던 새벽',
    type: 'TOP 3',
    category: '치유마을',
    village: '노아의숲',
    region: '정선',
    duration: '2min 30sec',
    rating: '8.9',
    tags: ['강원 정선', '치유마을', '시네마', '자연·생태'],
    poster: 'forest',
    titleClass: 'hero-title-forest',
    thumbnail: 'https://images.unsplash.com/photo-1759220426258-16969da3ac74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000',
    videoUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
  },
  {
    id: 'hero-4',
    title: '돌목걸이의\n수천 년',
    type: 'TOP 4',
    category: '체험마을',
    village: '고라데이마을',
    region: '횡성',
    duration: '2min',
    rating: '8.8',
    tags: ['강원 횡성', '체험마을', '픽션', '손으로 만들기'],
    poster: 'stone',
    titleClass: 'hero-title-stone',
    thumbnail: 'https://images.unsplash.com/photo-1723744670542-b1296fbf2307?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  },
  {
    id: 'hero-5',
    title: '감자전이\n익어가던 오후',
    type: 'TOP 5',
    category: '체험마을',
    village: '고라데이마을',
    region: '횡성',
    duration: '1min 40sec',
    rating: '8.6',
    tags: ['강원 횡성', '체험마을', '픽션', '음식·요리'],
    poster: 'potato',
    titleClass: 'hero-title-potato',
    thumbnail: 'https://images.unsplash.com/photo-1761309101977-bc309d3d8668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  },
];

const villages = [
  {
    id: 'v1',
    name: '고라데이마을',
    type: '체험마을',
    main_category: 'exp_edu',
    region: '횡성',
    tagline: '불 앞에서 시작된 하루',
    description: '강원도 횡성 깊은 골짜기에 자리한 고라데이마을. 장작불이 타오르는 저녁, 마을의 이야기가 시작됩니다.',
    thumbnail_url: 'https://images.unsplash.com/photo-1549770157-a81070c9c023?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
    platform_info_url: '#',
    official_homepage_url: '#',
    available_services: ['experience', 'meal'],
    inquiry_type: 'online_booking',
    is_featured: true,
    display_priority: 1,
  },
  {
    id: 'v2',
    name: '황둔도깨비마을',
    type: '교육농장',
    main_category: 'exp_edu',
    region: '원주',
    tagline: '씨앗이 기억하는 봄',
    description: '아이들이 먼저 뛰어간 마을. 흙과 씨앗, 계절의 흐름을 온몸으로 배우는 교육농장.',
    thumbnail_url: 'https://images.unsplash.com/photo-1651623123214-654a846cc057?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
    platform_info_url: '#',
    official_homepage_url: '#',
    available_services: ['experience', 'education'],
    inquiry_type: 'online_booking',
    is_featured: true,
    display_priority: 2,
  },
  {
    id: 'v3',
    name: '삼척향촌마을',
    type: '체험마을',
    main_category: 'exp_edu',
    region: '삼척',
    tagline: '감자전이 익어가던 오후',
    description: '강원 삼척의 옛 향촌 문화가 살아있는 마을. 전통 음식과 공예가 하루를 채웁니다.',
    thumbnail_url: 'https://images.unsplash.com/photo-1761309101977-bc309d3d8668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
    platform_info_url: '#',
    available_services: ['experience', 'meal', 'stay'],
    inquiry_type: 'phone',
    is_featured: false,
    display_priority: 3,
  },
  {
    id: 'v4',
    name: '노아의숲',
    type: '치유마을',
    main_category: 'heal',
    region: '정선',
    tagline: '숲길이 속도를 바꿨다',
    description: '정선 깊은 산속, 소음이 닿지 않는 곳. 숲이 하루를 다시 배열해주는 치유마을입니다.',
    thumbnail_url: 'https://images.unsplash.com/photo-1542113028-b526238297f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
    platform_info_url: '#',
    official_homepage_url: '#',
    available_services: ['healing', 'stay', 'meal'],
    inquiry_type: 'online_booking',
    is_featured: true,
    display_priority: 1,
  },
  {
    id: 'v5',
    name: '초록손치유농장',
    type: '치유농장',
    main_category: 'heal',
    region: '춘천',
    tagline: '원예가 하루를 바꿨습니다',
    description: '손끝으로 흙을 만지는 순간, 생각이 멈춥니다. 춘천 초록손치유농장의 원예 치유 프로그램.',
    thumbnail_url: 'https://images.unsplash.com/photo-1681556706489-e96ff19ad9c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
    platform_info_url: '#',
    available_services: ['healing'],
    inquiry_type: 'online_booking',
    is_featured: true,
    display_priority: 2,
  },
  {
    id: 'v6',
    name: '명상골짜기',
    type: '치유마을',
    main_category: 'heal',
    region: '인제',
    tagline: '아무것도 안 해도 된 하루',
    description: '인제 깊은 골짜기, 명상과 침묵이 흐르는 곳. 가만히 있어도 뭔가 채워지는 하루.',
    thumbnail_url: 'https://images.unsplash.com/photo-1759220426258-16969da3ac74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
    official_homepage_url: '#',
    available_services: ['healing', 'stay'],
    inquiry_type: 'preparing',
    is_featured: false,
    display_priority: 3,
  },
];

const experiences = [
  {
    id: 'e1',
    village_id: 'v1',
    story_title: '돌목걸이의 수천 년',
    real_program_name: '돌목걸이 만들기 체험',
    type: '체험',
    main_category: 'exp_edu',
    theme_category: '공예·만들기',
    story_text: '버닝엉클은 돌이 되었습니다. 강바닥에서 수천 년을 기다린 돌 하나가 오늘, 사람의 손에 닿아 새로운 이야기를 시작합니다.',
    thumbnail_url: 'https://images.unsplash.com/photo-1723744670542-b1296fbf2307?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
    platform_info_url: '#',
    duration_minutes: 90,
    target_tags: ['아이', '가족', '커플'],
    season_tags: ['봄', '여름', '가을', '겨울'],
    genre_tags: ['손으로 만들기'],
    display_priority: 1,
  },
  {
    id: 'e2',
    village_id: 'v1',
    story_title: '장작불 아래 모인 저녁',
    real_program_name: '전통 모닥불 요리 체험',
    type: '체험',
    main_category: 'exp_edu',
    theme_category: '음식·요리',
    story_text: '불꽃이 춤추는 저녁, 냄비 속에서 뭔가가 끓기 시작합니다. 음식이 익어가는 시간은 그 마을에서만 느낄 수 있습니다.',
    thumbnail_url: 'https://images.unsplash.com/photo-1761309101977-bc309d3d8668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
    platform_info_url: '#',
    duration_minutes: 120,
    target_tags: ['가족', '단체'],
    season_tags: ['봄', '가을', '겨울'],
    genre_tags: ['음식과 불', '아이와 함께'],
    display_priority: 2,
  },
  {
    id: 'e3',
    village_id: 'v2',
    story_title: '씨앗이 기억하는 봄',
    real_program_name: '모내기·씨앗 파종 교육',
    type: '프로그램',
    main_category: 'exp_edu',
    theme_category: '자연·생태',
    story_text: '씨앗은 계절을 알고 있었습니다. 아이의 손이 씨앗을 심는 순간, 봄이 시작됩니다.',
    thumbnail_url: 'https://images.unsplash.com/photo-1651623123214-654a846cc057?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
    platform_info_url: '#',
    duration_minutes: 60,
    target_tags: ['아이', '가족'],
    season_tags: ['봄', '여름'],
    genre_tags: ['아이 주인공', '자연과 생태'],
    display_priority: 1,
  },
  {
    id: 'e4',
    village_id: 'v3',
    story_title: '흙 속에서 웃음이 먼저',
    real_program_name: '전통 옹기·토기 제작 체험',
    type: '체험',
    main_category: 'exp_edu',
    theme_category: '공예·만들기',
    story_text: '아무도 이 흙이 웃음을 담을 줄 몰랐습니다. 손에 묻어난 흙이 마르기 전, 삼척의 하루가 완성됩니다.',
    thumbnail_url: 'https://images.unsplash.com/photo-1615549518242-e48328333eb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
    duration_minutes: 120,
    target_tags: ['가족', '커플', '단체'],
    season_tags: ['봄', '여름', '가을', '겨울'],
    genre_tags: ['손으로 만들기'],
    display_priority: 1,
  },
  {
    id: 'e5',
    village_id: 'v4',
    story_title: '숲이 말을 걸어오던 새벽',
    real_program_name: '새벽 산림 치유 걷기',
    type: '프로그램',
    main_category: 'heal',
    theme_category: '자연·생태',
    story_text: '새벽 다섯 시, 안개 속 숲길. 아무 말도 하지 않아도 됩니다. 나무들이 먼저 말을 걸어옵니다.',
    thumbnail_url: 'https://images.unsplash.com/photo-1542113028-b526238297f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
    platform_info_url: '#',
    duration_minutes: 90,
    target_tags: ['커플', '단체'],
    season_tags: ['봄', '여름', '가을'],
    genre_tags: ['숲과 치유'],
    display_priority: 1,
  },
  {
    id: 'e6',
    village_id: 'v5',
    story_title: '원예가 손을 다시 열었다',
    real_program_name: '원예 치유 테라피 프로그램',
    type: '프로그램',
    main_category: 'heal',
    theme_category: '원예·웰니스',
    story_text: '흙이 손끝에 닿는 순간, 뭔가가 풀리기 시작했습니다. 초록손치유농장에서 보낸 세 시간.',
    thumbnail_url: 'https://images.unsplash.com/photo-1689624607683-2a659818f1ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
    platform_info_url: '#',
    duration_minutes: 180,
    target_tags: ['커플', '단체'],
    season_tags: ['봄', '여름', '가을', '겨울'],
    genre_tags: ['숲과 치유', '손으로 만들기'],
    display_priority: 1,
  },
];

const videos = [
  {
    id: 'vid1',
    village_id: 'v1',
    title: '장작불 아래 모인 저녁',
    logline: '횡성 고라데이마을, 불이 켜지면 이야기가 시작된다.',
    content_type: '드라마',
    thumbnail_url: 'https://images.unsplash.com/photo-1549770157-a81070c9c023?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
    duration_seconds: 180,
    is_featured: true,
    view_count: 3420,
  },
  {
    id: 'vid2',
    experience_id: 'e1',
    village_id: 'v1',
    title: '돌목걸이의 수천 년',
    logline: '강바닥의 돌이 목걸이가 되기까지, 수천 년의 시간이 압축된다.',
    content_type: '픽션',
    thumbnail_url: 'https://images.unsplash.com/photo-1723744670542-b1296fbf2307?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
    duration_seconds: 120,
    is_featured: true,
    view_count: 2180,
  },
  {
    id: 'vid3',
    village_id: 'v4',
    title: '노아의숲 — 속도가 사라진 곳',
    logline: '정선 깊은 산속, 시간이 다르게 흐른다.',
    content_type: '시네마',
    thumbnail_url: 'https://images.unsplash.com/photo-1542113028-b526238297f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
    duration_seconds: 210,
    is_featured: true,
    view_count: 4850,
  },
  {
    id: 'vid4',
    experience_id: 'e3',
    village_id: 'v2',
    title: '씨앗이 기억하는 봄',
    logline: '아이가 씨앗을 심는 순간, 봄이 기억을 되찾는다.',
    content_type: '픽션',
    thumbnail_url: 'https://images.unsplash.com/photo-1651623123214-654a846cc057?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
    duration_seconds: 90,
    is_featured: false,
    view_count: 1760,
  },
  {
    id: 'vid5',
    experience_id: 'e5',
    village_id: 'v4',
    title: '숲이 말을 걸어오던 새벽',
    logline: '다섯 시의 안개, 나무들이 먼저 인사를 건넨다.',
    content_type: '시네마',
    thumbnail_url: 'https://images.unsplash.com/photo-1759220426258-16969da3ac74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
    duration_seconds: 150,
    is_featured: false,
    view_count: 2930,
  },
  {
    id: 'vid6',
    village_id: 'v5',
    title: '원예가 하루를 바꿨습니다',
    logline: '흙에 손을 묻는 것, 그것으로 충분했다.',
    content_type: '드라마',
    thumbnail_url: 'https://images.unsplash.com/photo-1681556706489-e96ff19ad9c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
    duration_seconds: 165,
    is_featured: false,
    view_count: 1540,
  },
  {
    id: 'vid7',
    experience_id: 'e2',
    village_id: 'v1',
    title: '감자전이 익어가던 오후',
    logline: '기름이 튀는 소리, 그 소리가 향수가 된다.',
    content_type: '픽션',
    thumbnail_url: 'https://images.unsplash.com/photo-1761309101977-bc309d3d8668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
    duration_seconds: 100,
    is_featured: false,
    view_count: 1890,
  },
  {
    id: 'vid8',
    experience_id: 'e4',
    village_id: 'v3',
    title: '흙 속에서 웃음이 먼저',
    logline: '삼척 향촌의 흙, 웃음을 담는 방법을 알고 있다.',
    content_type: '픽션',
    thumbnail_url: 'https://images.unsplash.com/photo-1615549518242-e48328333eb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
    duration_seconds: 130,
    is_featured: false,
    view_count: 1230,
  },
];

const posts = [
  {
    id: 'p1',
    village_id: 'v1',
    title: '고라데이마을에서 보낸 하루, 돌이 목걸이가 되던 날',
    slug: 'goradae-stone-necklace',
    excerpt: '강바닥의 돌을 줍는 것이 이렇게 오래된 일인 줄 몰랐습니다. 손에 쥔 돌 하나가 수천 년의 이야기를 가지고 있었다는 것도.',
    content: '강원도 횡성 고라데이마을에서 보낸 하루는 돌 하나를 고르는 일에서 시작됩니다. 이야기는 작고 조용했지만, 손에 남는 감각은 오래 갔습니다.',
    category: '마을 이야기',
    thumbnail_url: 'https://images.unsplash.com/photo-1723744670542-b1296fbf2307?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=700',
    published_at: '2025-04-28',
  },
  {
    id: 'p2',
    village_id: 'v4',
    title: '노아의숲, 속도를 잃어버린 사람들이 가는 곳',
    slug: 'noahs-forest-slow',
    excerpt: '휴대폰 신호가 끊기는 곳에서 처음으로 숨을 제대로 쉬었습니다. 빠른 것이 좋은 것이라는 착각에서 잠시 벗어난 하루.',
    content: '정선 깊은 산속의 숲길은 사람에게 서두르지 말라고 말합니다. 노아의숲은 체험보다 먼저 호흡을 바꾸는 장소였습니다.',
    category: '치유 이야기',
    thumbnail_url: 'https://images.unsplash.com/photo-1542113028-b526238297f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=700',
    published_at: '2025-05-01',
  },
  {
    id: 'p3',
    village_id: 'v2',
    title: '봄에 씨앗을 심은 아이들이 가을에 배운 것',
    slug: 'seed-children-autumn',
    excerpt: '봄에 아이들이 심은 씨앗이 가을에 열매를 맺었습니다. 그 사이에 아이들도 조금 자랐고, 마을도 그대로였습니다.',
    content: '교육농장의 하루는 교실 바깥에서 완성됩니다. 씨앗을 심고 기다리는 법을 배우는 일은 아이들에게 오래 남는 수업이 됩니다.',
    category: '체험 후기',
    thumbnail_url: 'https://images.unsplash.com/photo-1651623123214-654a846cc057?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=700',
    published_at: '2025-04-15',
  },
  {
    id: 'p4',
    village_id: 'v5',
    title: '흙에 손을 넣은 것뿐인데 무언가가 달라졌다',
    slug: 'horticulture-therapy-greenhands',
    excerpt: '초록손치유농장의 원예 프로그램은 설명이 필요 없었습니다. 흙에 씨앗을 심는 세 시간이 무언가를 바꿔놓았습니다.',
    content: '원예 치유는 거창한 설명보다 손끝의 온도로 먼저 이해됩니다. 초록손치유농장에서 보낸 세 시간은 일상을 조용히 되돌려 놓았습니다.',
    category: '치유 이야기',
    thumbnail_url: 'https://images.unsplash.com/photo-1689624607683-2a659818f1ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=700',
    published_at: '2025-05-03',
  },
];

const genreTabs = [
  { id: 'all', label: '전체' },
  { id: 'kids', label: '아이와 함께' },
  { id: 'fire_food', label: '불과 음식' },
  { id: 'craft', label: '손으로 만들기' },
  { id: 'forest', label: '숲과 치유' },
  { id: 'season', label: '지금 이 계절' },
];

const navItems = [
  { label: '홈', page: 'home' },
  { label: '마을·농장', page: 'villages' },
  { label: '체험·프로그램', page: 'experiences' },
  { label: '블로그', page: 'blog' },
  { label: '버닝엉클', page: 'about' },
];

const mobileCategoryMenu = [
  { label: '홈', page: 'home' },
  { label: '체험·교육' },
  { label: '치유·힐링' },
  { label: '아이와 함께' },
  { label: '불과 음식' },
  { label: '손으로 만들기' },
  { label: '숲과 치유' },
  { label: '지금 이 계절' },
];

function getVillageById(id) {
  return villages.find((village) => village.id === id);
}

function getExperienceById(id) {
  return experiences.find((experience) => experience.id === id);
}

function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug);
}

function getVideosByVillage(id) {
  return videos.filter((video) => video.village_id === id);
}

function getVideosByExperience(id) {
  return videos.filter((video) => video.experience_id === id);
}

function getExperiencesByVillage(id) {
  return experiences.filter((experience) => experience.village_id === id);
}

function getPostsByVillage(id) {
  return posts.filter((post) => post.village_id === id);
}

function getDesktopSearchResults(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];

  const index = [
    ...videos.map((video) => {
      const village = video.village_id ? getVillageById(video.village_id) : undefined;
      const experience = video.experience_id ? getExperienceById(video.experience_id) : undefined;
      return {
        id: `video-${video.id}`,
        title: video.title,
        eyebrow: '영상',
        meta: [video.content_type, village?.name, village?.region, experience?.theme_category].filter(Boolean).join(' · '),
        target: video.experience_id ? { kind: 'experience', id: video.experience_id } : { kind: 'village', id: video.village_id },
        terms: [video.title, video.logline, video.content_type, village?.name, village?.region, village?.type, experience?.theme_category].filter(Boolean).join(' '),
      };
    }),
    ...villages.map((village) => ({
      id: `village-${village.id}`,
      title: village.name,
      eyebrow: '마을·농장',
      meta: `${village.type} · 강원 ${village.region}`,
      target: { kind: 'village', id: village.id },
      terms: [village.name, village.type, village.region, village.tagline, village.description, village.main_category].join(' '),
    })),
    ...experiences.map((experience) => {
      const village = getVillageById(experience.village_id);
      return {
        id: `experience-${experience.id}`,
        title: experience.story_title,
        eyebrow: '체험·프로그램',
        meta: [experience.theme_category, village?.name, `${experience.duration_minutes}분`].filter(Boolean).join(' · '),
        target: { kind: 'experience', id: experience.id },
        terms: [experience.story_title, experience.real_program_name, experience.theme_category, experience.type, experience.story_text, ...experience.target_tags, ...experience.season_tags, ...experience.genre_tags, village?.name, village?.region].filter(Boolean).join(' '),
      };
    }),
    ...posts.map((post) => ({
      id: `post-${post.id}`,
      title: post.title,
      eyebrow: '블로그',
      meta: `${post.category} · ${post.published_at}`,
      target: { kind: 'blog', id: post.slug },
      terms: [post.title, post.excerpt, post.category, post.content].join(' '),
    })),
  ];

  return index
    .filter((item) => item.terms.toLowerCase().includes(normalized))
    .slice(0, 6);
}

function formatDuration(seconds) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
}

const Icon = ({ name, size = 18, color = 'currentColor' }) => {
  const paths = {
    bell: <><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /><path d="M4 17h16" /><path d="M18 17v-5a6 6 0 0 0-12 0v5l-2 2h16Z" /></>,
    play: <polygon points="5 3 19 12 5 21 5 3" />,
    plus: <><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m21 21-4.35-4.35" /></>,
    home: <><path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" /><path d="M9 21v-8h6v8" /></>,
    list: <><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M6 20v-2a6 6 0 0 1 12 0v2" /></>,
    cast: <><path d="M2 16.1A5 5 0 0 1 5.9 20" /><path d="M2 12.05A9 9 0 0 1 9.95 20" /><path d="M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" /></>,
    download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></>,
    chevronRight: <polyline points="9 18 15 12 9 6" />,
    chevronLeft: <polyline points="15 18 9 12 15 6" />,
    chevronDown: <polyline points="6 9 12 15 18 9" />,
    chevronUp: <polyline points="18 15 12 9 6 15" />,
    arrowRight: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
    arrowLeft: <><path d="M19 12H5" /><path d="m12 19-7-7 7-7" /></>,
    external: <><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></>,
    flame: <><path d="M8.5 14.5A4.5 4.5 0 0 0 17 12c0-3-2-5-4.2-7.7-.5 2.5-2.2 3.7-3.6 5.1C7.8 10.8 7 12.2 8.5 14.5Z" /><path d="M12 22a7 7 0 0 0 7-7c0-2.6-1.5-4.7-3.3-6.8.3 2.5-.8 4.2-2.1 5.4-1.3 1.2-2 2.5-1.2 4.4-1.7-.7-2.5-1.8-2.5-3.4-1.5 1.4-2.4 3.1-2.4 5A7 7 0 0 0 12 22Z" /></>,
    menu: <><path d="M3 6h18" /><path d="M3 12h18" /><path d="M3 18h18" /></>,
    x: <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>,
    check: <path d="m20 6-11 11-5-5" />,
    globe: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 0 20" /><path d="M12 2a15.3 15.3 0 0 0 0 20" /></>,
    star: <polygon points="12 2 15.1 8.4 22 9.3 17 14.2 18.2 21 12 17.7 5.8 21 7 14.2 2 9.3 8.9 8.4 12 2" />,
  };

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={name === 'star' ? color : 'none'} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
};

const BrandMark = ({ compact = false }) => (
  <span className={`burn-brand-mark ${compact ? 'is-compact' : ''}`}>
    <Icon name="flame" size={compact ? 16 : 18} color="#E8593C" />
    <span>BURNING UNCLE</span>
  </span>
);

const TrustBadge = ({ basis, contentType, category, size = 'sm' }) => (
  <div className={`burn-trust-badge ${size === 'md' ? 'is-md' : ''}`}>
    <span>{basis}</span>
    <i />
    <strong>{contentType}</strong>
    {category ? (
      <>
        <i />
        <strong>{category}</strong>
      </>
    ) : null}
  </div>
);

const DesktopNav = ({ activePage, scrolled, onNavigate }) => (
  <header className={`burn-desktop-nav ${scrolled ? 'is-scrolled' : ''}`}>
    <div className="burn-nav-main">
      <button type="button" className="burn-logo-button" onClick={() => onNavigate('home')}>
        <BrandMark />
      </button>
      <nav>
        {navItems.map((item) => (
          <button
            type="button"
            key={item.page}
            className={activePage === item.page ? 'active' : ''}
            onClick={() => onNavigate(item.page)}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div className="burn-nav-actions">
        <button type="button" aria-label="검색">
          <Icon name="search" size={18} />
        </button>
        <button type="button" className="burn-contact-chip" onClick={() => onNavigate('contact')}>
          협업 문의
        </button>
      </div>
    </div>
  </header>
);

const DesktopHero = ({ onSelectDetail }) => {
  const [center, setCenter] = React.useState(0);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchTouched, setSearchTouched] = React.useState(false);
  const active = HERO_ITEMS[center];
  const searchResults = React.useMemo(() => getDesktopSearchResults(searchQuery), [searchQuery]);
  const showSearchResults = searchTouched && searchQuery.trim().length > 0;

  const move = (dir) => setCenter((value) => (value + dir + HERO_ITEMS.length) % HERO_ITEMS.length);
  const submitSearch = (event) => {
    event.preventDefault();
    setSearchTouched(true);
    if (searchResults[0]?.target) {
      selectSearchResult(searchResults[0].target);
    }
  };
  const selectSearchResult = (target) => {
    if (!target?.id) return;
    onSelectDetail(target);
    setSearchTouched(false);
  };
  const offsetFor = (index) => {
    let offset = index - center;
    if (offset > HERO_ITEMS.length / 2) offset -= HERO_ITEMS.length;
    if (offset < -HERO_ITEMS.length / 2) offset += HERO_ITEMS.length;
    return offset;
  };

  return (
    <section className="desktop-hero" style={{ '--accent': CAT_ACCENT[active.category] }}>
      <div className="desktop-hero-glow" />
      <div className="carousel-stage">
        {HERO_ITEMS.map((card, index) => {
          const offset = offsetFor(index);
          if (Math.abs(offset) > 2) return null;
          const isCenter = offset === 0;
          const absOffset = Math.abs(offset);
          const xOffset = isCenter
            ? '0px'
            : absOffset === 1
            ? `calc(${offset} * clamp(300px, 28vw, 560px))`
            : `calc(${offset < 0 ? '-' : ''}1 * clamp(390px, 40vw, 820px))`;
          const bg = isCenter ? CAT_BG[card.category] : sideBackground(card.category);

          return (
            <div
              role="button"
              tabIndex={0}
              className={`carousel-card ${isCenter ? 'is-center' : ''}`}
              key={card.id}
              onClick={() => setCenter(index)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setCenter(index);
                }
              }}
              style={{
                '--x': xOffset,
                '--scale': isCenter ? 1 : absOffset === 1 ? 1 : 0.86,
                '--rot': `${offset * -30}deg`,
                '--z': isCenter ? 10 : absOffset === 1 ? 6 : 3,
                '--opacity': isCenter ? 1 : absOffset === 1 ? 0.96 : 0.82,
                '--bg': bg,
                '--accent': CAT_ACCENT[card.category],
              }}
            >
              <div className="card-ambient" />
              <div className="card-shade" />
              <HeroCardMedia item={card} isCenter={isCenter} />
              {isCenter ? (
                <>
                  <div className="hero-meta">
                    <span>{card.type}</span>
                    <span>Duration: {card.duration}</span>
                  </div>
                  <div className="hero-copy">
                    <h1 className={card.titleClass}>{card.title}</h1>
                    <div className="rating-line">
                      <span><Icon name="star" size={13} color="#f5c842" /> {card.rating}</span>
                      {card.tags.map((tag) => <small key={tag}>{tag}</small>)}
                    </div>
                    <div className="hero-buttons">
                      <button type="button"><Icon name="play" size={13} /> WATCH</button>
                      <button type="button"><Icon name="plus" size={13} /> ADD LIST</button>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          );
        })}
        <button type="button" className="carousel-arrow prev" onClick={() => move(-1)}><Icon name="chevronLeft" /></button>
        <button type="button" className="carousel-arrow next" onClick={() => move(1)}><Icon name="chevronRight" /></button>
        <div className="dots">
          {HERO_ITEMS.map((item, index) => (
            <button type="button" key={item.id} className={index === center ? 'active' : ''} onClick={() => setCenter(index)} />
          ))}
        </div>
      </div>
      <div className="desktop-search-strip">
        <div className="app-hint">
          <span className="app-store-dot">●</span>
          <span className="android-dot">●</span>
          <div>
            <small>Burning Uncle Network</small>
            <small><b>It-on</b> 체험마을·교육농장</small>
            <small><b className="condition-note">Condition Note</b> 치유마을·치유농장</small>
          </div>
        </div>
        <form className="search-box" onSubmit={submitSearch}>
          <input
            value={searchQuery}
            onChange={(event) => {
              setSearchQuery(event.target.value);
              setSearchTouched(event.target.value.trim().length > 0);
            }}
            onFocus={() => setSearchTouched(searchQuery.trim().length > 0)}
            placeholder="SEARCH BY NAME OR GENRES"
            aria-label="콘텐츠 검색"
          />
          <button type="submit">SEARCH</button>
          {showSearchResults ? (
            <div className="search-results" role="listbox">
              {searchResults.length > 0 ? (
                searchResults.map((item) => (
                  <button type="button" key={item.id} onClick={() => selectSearchResult(item.target)}>
                    <span>{item.eyebrow}</span>
                    <strong>{item.title}</strong>
                    <small>{item.meta}</small>
                  </button>
                ))
              ) : (
                <p>검색 결과가 없습니다.</p>
              )}
            </div>
          ) : null}
        </form>
        <div className="socials">
          <span>follow us on social media</span>
          <div>
            {['f', 't', '▶', 'G+', '◎'].map((label) => <button type="button" key={label}>{label}</button>)}
          </div>
        </div>
      </div>
    </section>
  );
};

const HeroCardMedia = ({ item, isCenter }) => {
  if (isCenter) {
    return (
      <div className={`poster-art hero-video-art poster-${item.poster}`}>
        <video
          key={item.videoUrl}
          src={item.videoUrl}
          poster={item.thumbnail}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <img src={item.thumbnail} alt="" aria-hidden="true" />
      </div>
    );
  }

  return <PosterArt item={item} />;
};

const PosterArt = ({ item }) => (
  <div className={`poster-art poster-${item.poster} ${item.thumbnail ? 'has-thumbnail' : ''}`}>
    {item.thumbnail ? <img className="poster-thumb-image" src={item.thumbnail} alt="" aria-hidden="true" /> : null}
    {!item.thumbnail ? (
      <>
        <div className="poster-sky" />
        <div className="poster-subject one" />
        <div className="poster-subject two" />
      </>
    ) : null}
    <div className={`poster-title ${item.titleClass}`}>{item.title}</div>
  </div>
);

function sideBackground(category) {
  return {
    '체험마을': '#3a2510',
    '교육농장': '#1a3a12',
    '치유마을': '#101830',
    '치유농장': '#102a1a',
  }[category] || '#2a2a2a';
}

const ContentRail = ({ title, titleColor, viewPage, children, onNavigate }) => {
  const scrollRef = React.useRef(null);
  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -420 : 420, behavior: 'smooth' });
  };

  return (
    <section className="burn-rail">
      <div className="burn-rail-head">
        <h2 style={{ color: titleColor || undefined }}>{title}</h2>
        {viewPage ? (
          <button type="button" onClick={() => onNavigate(viewPage)}>
            전체 <Icon name="chevronRight" size={13} />
          </button>
        ) : null}
      </div>
      <button type="button" className="burn-rail-arrow left" onClick={() => scroll('left')} aria-label="왼쪽으로 이동">
        <Icon name="chevronLeft" size={18} />
      </button>
      <button type="button" className="burn-rail-arrow right" onClick={() => scroll('right')} aria-label="오른쪽으로 이동">
        <Icon name="chevronRight" size={18} />
      </button>
      <div className="burn-row-scroll" ref={scrollRef}>
        {children}
      </div>
    </section>
  );
};

const VideoCard = ({ video, width = 'clamp(170px, 18vw, 245px)', onClick }) => {
  const village = video.village_id ? getVillageById(video.village_id) : undefined;
  return (
    <article className="burn-video-card" style={{ width }} onClick={onClick}>
      <div className="burn-thumb is-video">
        <img src={video.thumbnail_url} alt={video.title} />
        <span className="burn-play-hover"><Icon name="play" size={17} color="#0d0d0d" /></span>
        <small>{formatDuration(video.duration_seconds)}</small>
      </div>
      <div className="burn-card-info">
        <TrustBadge basis="실제 마을 기반" contentType={video.content_type} />
        <h3>{video.title}</h3>
        {village ? <p>{village.name} · 강원 {village.region}</p> : null}
      </div>
    </article>
  );
};

const VillagePosterCard = ({ village, width = 'clamp(138px, 15vw, 184px)', onClick }) => {
  const color = CATEGORY_COLOR[village.main_category];
  return (
    <article className="burn-village-card" style={{ width, '--card-color': color }} onClick={onClick}>
      <div className="burn-thumb is-poster">
        <img src={village.thumbnail_url} alt={village.name} />
        <span className="burn-card-badge">{village.type}</span>
        <span className="burn-play-hover"><Icon name="play" size={15} color="#0d0d0d" /></span>
        <div className="burn-poster-copy">
          <h3>{village.name}</h3>
          <p>강원 {village.region}</p>
        </div>
      </div>
    </article>
  );
};

const ExperienceCard = ({ experience, width = 'clamp(170px, 17vw, 230px)', onClick }) => {
  const village = getVillageById(experience.village_id);
  return (
    <article className="burn-experience-card" style={{ width }} onClick={onClick}>
      <div className="burn-thumb is-experience">
        <img src={experience.thumbnail_url} alt={experience.story_title} />
        <span className="burn-play-hover"><Icon name="play" size={15} color="#0d0d0d" /></span>
        <small>{experience.duration_minutes}분</small>
      </div>
      <div className="burn-card-info">
        <TrustBadge basis="실제 체험 기반" contentType="픽션" />
        <h3>{experience.story_title}</h3>
        {village ? <p>{village.name} · 강원 {village.region}</p> : null}
      </div>
    </article>
  );
};

const BlogCard = ({ post, width = 'clamp(170px, 18vw, 245px)', layout = 'vertical', onClick }) => (
  <article className={`burn-blog-card ${layout === 'horizontal' ? 'is-horizontal' : ''}`} style={{ width }} onClick={onClick}>
    <div className="burn-blog-image">
      <img src={post.thumbnail_url} alt={post.title} />
    </div>
    <div className="burn-blog-info">
      <span>{post.category}</span>
      <h3>{post.title}</h3>
      <p>{layout === 'horizontal' ? post.excerpt : post.published_at}</p>
    </div>
  </article>
);

const HomeContent = ({ onNavigate, onSelectDetail }) => {
  const [activeTab, setActiveTab] = React.useState('all');
  const [watchingVideo, setWatchingVideo] = React.useState(null);

  const latestVideos = [...videos].sort((a, b) => b.view_count - a.view_count).slice(0, 6);
  const filteredVideos = videos.filter((video) => {
    if (activeTab === 'all') return true;
    const exp = video.experience_id ? getExperienceById(video.experience_id) : undefined;
    const village = video.village_id ? getVillageById(video.village_id) : undefined;
    if (activeTab === 'kids') return exp?.target_tags.includes('아이') || exp?.genre_tags.includes('아이 주인공');
    if (activeTab === 'fire_food') return exp?.genre_tags.includes('음식과 불') || exp?.theme_category === '음식·요리';
    if (activeTab === 'craft') return exp?.theme_category === '공예·만들기';
    if (activeTab === 'forest') return village?.main_category === 'heal';
    if (activeTab === 'season') return ['vid5', 'vid6', 'vid7', 'vid8'].includes(video.id);
    return true;
  });
  const expEduVillages = villages.filter((village) => village.main_category === 'exp_edu');
  const healVillages = villages.filter((village) => village.main_category === 'heal');
  const expEduExperiences = experiences.filter((experience) => experience.main_category === 'exp_edu');
  const healExperiences = experiences.filter((experience) => experience.main_category === 'heal');

  return (
    <div className="burn-home-content">
      <ContentRail title="지금 올라온 이야기" viewPage="villages" onNavigate={onNavigate}>
        {latestVideos.map((video) => (
          <VideoCard key={video.id} video={video} onClick={() => setWatchingVideo(video)} />
        ))}
        {posts.slice(0, 2).map((post) => (
          <BlogCard key={post.id} post={post} onClick={() => onSelectDetail({ kind: 'blog', id: post.slug })} />
        ))}
      </ContentRail>

      <section className="burn-genre-section">
        <div className="burn-section-head">
          <h2>이야기로 찾기</h2>
        </div>
        <div className="burn-tab-row">
          {genreTabs.map((tab) => (
            <button
              type="button"
              key={tab.id}
              className={activeTab === tab.id ? 'active' : ''}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="burn-row-scroll is-inline">
          {(filteredVideos.length > 0 ? filteredVideos : videos).map((video) => (
            <VideoCard key={video.id} video={video} onClick={() => setWatchingVideo(video)} />
          ))}
        </div>
      </section>

      <ContentRail title="체험·교육의 이야기" titleColor="#E8593C" viewPage="villages" onNavigate={onNavigate}>
        {expEduVillages.map((village) => (
          <VillagePosterCard key={village.id} village={village} onClick={() => onSelectDetail({ kind: 'village', id: village.id })} />
        ))}
      </ContentRail>

      <ContentRail title="이 마을에서 할 수 있는 것" viewPage="experiences" onNavigate={onNavigate}>
        {expEduExperiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} onClick={() => onSelectDetail({ kind: 'experience', id: experience.id })} />
        ))}
      </ContentRail>

      <ContentRail title="치유·힐링의 이야기" titleColor="#1D9E75" viewPage="villages" onNavigate={onNavigate}>
        {healVillages.map((village) => (
          <VillagePosterCard key={village.id} village={village} onClick={() => onSelectDetail({ kind: 'village', id: village.id })} />
        ))}
      </ContentRail>

      <ContentRail title="이 마을에서 경험하는 치유" viewPage="experiences" onNavigate={onNavigate}>
        {healExperiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} onClick={() => onSelectDetail({ kind: 'experience', id: experience.id })} />
        ))}
      </ContentRail>

      <OperatorPanel onNavigate={onNavigate} />
      <HomeBottomCtas onNavigate={onNavigate} />

      {watchingVideo ? <VideoModal video={watchingVideo} onClose={() => setWatchingVideo(null)} /> : null}
    </div>
  );
};

const OperatorPanel = ({ onNavigate }) => (
  <section className="burn-operator-panel">
    <div>
      <p>운영자·마을 관계자에게</p>
      <h2>우리 마을도<br />한 편의 이야기로</h2>
      <span>버닝엉클이 마을의 이야기를 시네마틱 영상으로 만들고, 사람들이 방문하고 싶게 만듭니다.</span>
      <button type="button" onClick={() => onNavigate('for-villages')}>
        우리 마을도 소개하기 <Icon name="arrowRight" size={13} />
      </button>
    </div>
    <div className="burn-step-cards">
      {[
        { num: '01', title: '이야기 영상 제작', desc: '시네마·드라마·픽션 형식으로' },
        { num: '02', title: '버닝엉클 노출', desc: '감정을 만들고 트래픽을 전달' },
        { num: '03', title: '예약·운영 연결', desc: '홈페이지에서 실제 예약 운영' },
      ].map((step) => (
        <article key={step.num}>
          <small>{step.num}</small>
          <strong>{step.title}</strong>
          <span>{step.desc}</span>
        </article>
      ))}
    </div>
  </section>
);

const HomeBottomCtas = ({ onNavigate }) => (
  <section className="burn-bottom-ctas">
    <button type="button" onClick={() => onNavigate('villages')}>
      <span>방문자에게</span>
      <strong>더 많은 이야기가<br />있습니다</strong>
      <em>마을·농장 전체 탐색 <Icon name="chevronRight" size={13} /></em>
    </button>
    <button type="button" onClick={() => onNavigate('contact')}>
      <span>함께 만들고 싶다면</span>
      <strong>마을 브랜딩<br />협업 문의</strong>
      <em className="green">문의하기 <Icon name="chevronRight" size={13} /></em>
    </button>
  </section>
);

const MobileTop = ({ activePage, onNavigate }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [categoryOpen, setCategoryOpen] = React.useState(false);

  const navigate = (page) => {
    onNavigate(page);
    setMenuOpen(false);
    setCategoryOpen(false);
  };

  return (
    <>
      <div className="mobile-status" />
      <header className="burn-mobile-top">
        <button type="button" onClick={() => navigate('home')}>
          <BrandMark compact />
        </button>
        <div>
          <button type="button" aria-label="검색"><Icon name="search" size={20} /></button>
          <button type="button" aria-label="메뉴" onClick={() => setMenuOpen(true)}><Icon name="menu" size={21} /></button>
        </div>
      </header>
      <div className="burn-mobile-filter-pills">
        <button type="button" onClick={() => navigate('home')}>시리즈</button>
        <button type="button" onClick={() => navigate('home')}>영화</button>
        <button type="button" onClick={() => setCategoryOpen(true)}>
          카테고리 <Icon name="chevronDown" size={16} />
        </button>
      </div>
      {categoryOpen ? (
        <div className="burn-category-overlay" role="dialog" aria-modal="true" aria-label="카테고리">
          <div className="burn-category-overlay-panel">
            {mobileCategoryMenu.map((item) => (
              <button
                type="button"
                key={item.label}
                className={item.page === activePage ? 'active' : ''}
                onClick={() => (item.page ? navigate(item.page) : setCategoryOpen(false))}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button type="button" className="burn-category-close" onClick={() => setCategoryOpen(false)} aria-label="카테고리 닫기">
            <Icon name="x" size={34} color="#111" />
          </button>
        </div>
      ) : null}
      {menuOpen ? (
        <div className="burn-mobile-menu">
          <div>
            <BrandMark compact />
            <button type="button" onClick={() => setMenuOpen(false)} aria-label="닫기"><Icon name="x" size={22} /></button>
          </div>
          <nav>
            {navItems.map((item) => (
              <button type="button" key={item.page} className={activePage === item.page ? 'active' : ''} onClick={() => navigate(item.page)}>
                {item.label}
              </button>
            ))}
            <button type="button" className="accent" onClick={() => navigate('for-villages')}>운영자 안내 →</button>
            <button type="button" onClick={() => navigate('contact')}>협업 문의</button>
          </nav>
        </div>
      ) : null}
    </>
  );
};

const MobileHero = () => {
  const [index, setIndex] = React.useState(0);
  const dragRef = React.useRef(null);
  const active = HERO_ITEMS[index];
  const advance = () => setIndex((value) => (value + 1) % HERO_ITEMS.length);
  const moveBy = (dir) => setIndex((value) => (value + dir + HERO_ITEMS.length) % HERO_ITEMS.length);
  const startDrag = (event) => {
    if (event.target.closest('button')) return;
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      handled: false,
    };
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };
  const moveDrag = (event) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId || drag.handled) return;
    const dx = event.clientX - drag.startX;
    const dy = event.clientY - drag.startY;
    if (Math.abs(dx) > 24 && Math.abs(dx) > Math.abs(dy) * 1.2) {
      event.preventDefault();
    }
    if (Math.abs(dx) >= 72 && Math.abs(dx) > Math.abs(dy) * 1.4) {
      drag.handled = true;
      moveBy(dx < 0 ? 1 : -1);
    }
  };
  const endDrag = (event) => {
    if (dragRef.current?.pointerId === event.pointerId) {
      event.currentTarget.releasePointerCapture?.(event.pointerId);
      dragRef.current = null;
    }
  };

  return (
    <section
      className="mobile-hero"
      style={{ '--bg': CAT_BG[active.category], '--accent': CAT_ACCENT[active.category] }}
      onPointerDown={startDrag}
      onPointerMove={moveDrag}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <video
        className="mobile-hero-video"
        key={active.videoUrl}
        src={active.videoUrl}
        poster={active.thumbnail}
        autoPlay
        muted
        playsInline
        preload="metadata"
        onEnded={advance}
      />
      <div className="mobile-hero-texture" />
      <div className="mobile-hero-glow" />
      <div className="mobile-hero-fade" />
      <div className="mobile-hero-copy">
        <div className="mobile-type">
          <span><Icon name="play" size={8} color="#fff" /></span>
          <strong>{active.type}</strong>
        </div>
        <h1 className={active.titleClass}>{active.title}</h1>
        <div className="mobile-tags">
          {active.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <div className="mobile-cta">
          <button type="button"><Icon name="play" size={14} /> 재생</button>
          <button type="button"><Icon name="plus" size={14} /> 찜하기</button>
        </div>
      </div>
      <div className="mobile-dots">
        {HERO_ITEMS.map((item, dotIndex) => (
          <button type="button" key={item.id} className={dotIndex === index ? 'active' : ''} onClick={() => setIndex(dotIndex)} />
        ))}
      </div>
    </section>
  );
};

const MobileBottomNav = ({ activePage, onNavigate }) => {
  const tabs = [
    { page: 'home', label: '홈', icon: 'home' },
    { page: 'villages', label: '마을·농장', icon: 'globe' },
    { page: 'experiences', label: '체험', icon: 'list' },
    { page: 'blog', label: '블로그', icon: 'book' },
    { page: 'about', label: '더보기', icon: 'user' },
  ];

  return (
    <nav className="mobile-bottom">
      {tabs.map((tab) => (
        <button type="button" key={tab.page} className={activePage === tab.page ? 'active' : ''} onClick={() => onNavigate(tab.page)}>
          <Icon name={tab.icon === 'book' ? 'list' : tab.icon} size={21} />
          <span>{tab.label}</span>
          {activePage === tab.page ? <i /> : null}
        </button>
      ))}
    </nav>
  );
};

const CatalogPage = ({ kind, onSelectDetail }) => {
  const [active, setActive] = React.useState('all');
  const isVillages = kind === 'villages';
  const source = isVillages ? villages : experiences;
  const filters = isVillages
    ? [
        { id: 'all', label: '전체' },
        { id: 'exp_edu', label: '체험·교육' },
        { id: 'heal', label: '치유·힐링' },
        { id: '체험마을', label: '체험마을' },
        { id: '교육농장', label: '교육농장' },
        { id: '치유마을', label: '치유마을' },
        { id: '치유농장', label: '치유농장' },
      ]
    : [
        { id: 'all', label: '전체' },
        { id: 'exp_edu', label: '체험·교육' },
        { id: 'heal', label: '치유·힐링' },
        { id: '공예·만들기', label: '손으로 만들기' },
        { id: '음식·요리', label: '음식·요리' },
        { id: '자연·생태', label: '자연·생태' },
        { id: '원예·웰니스', label: '원예·웰니스' },
      ];

  const filtered = source.filter((item) => {
    if (active === 'all') return true;
    if (active === 'exp_edu' || active === 'heal') return item.main_category === active;
    return isVillages ? item.type === active : item.theme_category === active;
  });

  return (
    <div className="burn-page">
      <PageIntro
        title={isVillages ? '마을·농장' : '체험·프로그램'}
        description={isVillages ? '강원도 마을과 농장의 이야기를 찾아보세요.' : '마을의 이야기가 담긴 체험과 프로그램들.'}
      />
      <FilterPills filters={filters} active={active} onChange={setActive} />
      <div className={`burn-grid ${isVillages ? 'poster-grid' : ''}`}>
        {filtered.map((item) => (
          isVillages ? (
            <VillagePosterCard key={item.id} village={item} width="100%" onClick={() => onSelectDetail({ kind: 'village', id: item.id })} />
          ) : (
            <ExperienceCard key={item.id} experience={item} width="100%" onClick={() => onSelectDetail({ kind: 'experience', id: item.id })} />
          )
        ))}
      </div>
    </div>
  );
};

const BlogPage = ({ onSelectDetail }) => {
  const [active, setActive] = React.useState('all');
  const filters = [
    { id: 'all', label: '전체' },
    { id: '마을 이야기', label: '마을 이야기' },
    { id: '체험 후기', label: '체험 후기' },
    { id: '치유 이야기', label: '치유 이야기' },
    { id: '계절 정보', label: '계절 정보' },
  ];
  const filtered = posts.filter((post) => active === 'all' || post.category === active);

  return (
    <div className="burn-page">
      <PageIntro title="블로그" description="마을과 체험에 관한 이야기들." />
      <FilterPills filters={filters} active={active} onChange={setActive} />
      <div className="burn-blog-grid">
        {filtered.map((post) => (
          <BlogCard key={post.id} post={post} width="100%" onClick={() => onSelectDetail({ kind: 'blog', id: post.slug })} />
        ))}
      </div>
    </div>
  );
};

const PageIntro = ({ title, description }) => (
  <div className="burn-page-intro">
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
);

const FilterPills = ({ filters, active, onChange }) => (
  <div className="burn-filter-row">
    {filters.map((filter) => (
      <button
        type="button"
        key={filter.id}
        className={active === filter.id ? 'active' : ''}
        onClick={() => onChange(filter.id)}
      >
        {filter.label}
      </button>
    ))}
  </div>
);

const AboutPage = ({ onNavigate }) => (
  <div className="burn-page burn-about-page">
    <section className="burn-about-hero">
      <BrandMark />
      <h1>버닝엉클은<br />예약하고 싶게 만드는 곳입니다</h1>
      <p>강원도 마을과 농장을 단순한 관광지로 소개하지 않습니다. 시네마틱 영상과 스토리 콘텐츠로 브랜딩하여, 사람들이 "한번 가보고 싶다"는 감정을 만들어냅니다.</p>
    </section>
    <section className="burn-narrative-section">
      <h2>3단계 사업 구조</h2>
      <div className="burn-stage-list">
        {[
          { stage: '1단계', title: '버닝엉클 (이 웹앱)', role: '광고·홍보·마케팅 본사', desc: '시네마·드라마·픽션 영상 + 스토리 블로그로 감정을 만듭니다.', color: '#E8593C' },
          { stage: '2단계', title: '분기 플랫폼', role: '체험·교육 / 치유·힐링 플랫폼', desc: '정상적인 정보 탐색, 프로그램 비교, 상세 안내를 제공합니다.', color: '#888' },
          { stage: '3단계', title: '마을 공식 홈페이지', role: '실제 예약·결제·운영', desc: '예약·결제 시스템, 운영 OS, AI ERP 자동화로 마을을 운영합니다.', color: '#1D9E75' },
        ].map((stage, index) => (
          <article key={stage.title} style={{ '--stage-color': stage.color }}>
            <span>{index + 1}</span>
            <div>
              <small>{stage.stage}</small>
              <strong>{stage.title}</strong>
              <em>{stage.role}</em>
              <p>{stage.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
    <section className="burn-quote-section">
      <p>"버닝엉클은 예약을 받는 곳이 아니라,<br />예약하고 싶게 만드는 곳이다."</p>
      <span>버닝엉클 서비스 정의 문장</span>
    </section>
    <section className="burn-type-section">
      <h2>강원도 마을·농장 유형</h2>
      <div>
        {[
          { name: '체험마을', cat: '체험·교육', color: '#E8593C', desc: '전통·문화·음식·공예' },
          { name: '교육농장', cat: '체험·교육', color: '#E8593C', desc: '농업·생태·동물 교육' },
          { name: '치유마을', cat: '치유·힐링', color: '#1D9E75', desc: '숲·명상·자연' },
          { name: '치유농장', cat: '치유·힐링', color: '#1D9E75', desc: '원예·웰니스' },
        ].map((item) => (
          <article key={item.name} style={{ '--type-color': item.color }}>
            <span>{item.cat}</span>
            <strong>{item.name}</strong>
            <p>{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
    <div className="burn-page-actions">
      <button type="button" onClick={() => onNavigate('home')}>이야기 탐색하기</button>
      <button type="button" className="ghost" onClick={() => onNavigate('for-villages')}>운영자 안내 <Icon name="arrowRight" size={14} /></button>
    </div>
  </div>
);

const ForVillagesPage = ({ onNavigate, onSelectDetail }) => {
  const [openFaq, setOpenFaq] = React.useState(null);
  const faqs = [
    ['비용은 어떻게 되나요?', '마을의 규모와 콘텐츠 구성에 따라 달라집니다. 기본 영상 제작부터 운영 OS 전체 패키지까지 다양한 구성이 가능합니다.'],
    ['영상 제작 기간은 얼마나 걸리나요?', '마을 소개 영상은 촬영 포함 평균 4~6주, 체험 영상은 2~4주입니다.'],
    ['우리 마을이 맞는지 어떻게 알 수 있나요?', '강원도 내 체험마을, 교육농장, 치유마을, 치유농장이라면 모두 대상입니다.'],
    ['예약·결제 시스템이 없어도 되나요?', '네. 버닝엉클은 1단계 홍보만 담당할 수도 있고, 공식 홈페이지와 예약 시스템은 선택 사항입니다.'],
  ];
  const featuredVillages = villages.filter((village) => village.is_featured).slice(0, 3);

  return (
    <div className="burn-page burn-for-page">
      <section className="burn-for-hero">
        <p>마을·농장 운영자에게</p>
        <h1>우리 마을도<br />한 편의 이야기로<br />소개하고 싶다면</h1>
        <span>강원도 마을·농장 브랜딩 본사, 버닝엉클</span>
        <button type="button" onClick={() => onNavigate('contact')}>상담 신청하기 <Icon name="arrowRight" size={16} /></button>
      </section>
      <section className="burn-narrative-section">
        <p className="burn-kicker">버닝엉클이 하는 일</p>
        <h2>마을의 이야기를 감정으로 만들고<br />사람들을 연결합니다</h2>
        <div className="burn-work-list">
          {[
            '마을·농장 스토리 영상 제작',
            '버닝엉클 홈페이지에서 노출',
            '체험·치유 플랫폼 연결',
            '마을 공식 홈페이지 구축',
            '예약·결제 + AI ERP 운영 OS',
          ].map((title, index) => (
            <article key={title}>
              <small>{String(index + 1).padStart(2, '0')}</small>
              <div>
                <strong>{title}</strong>
                <p>스토리 콘텐츠와 실제 운영 연결을 한 흐름으로 설계합니다.</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="burn-benefit-section">
        <h2>운영자가 얻는 것</h2>
        <div>
          {['시네마틱 홍보 영상 콘텐츠', '버닝엉클 플랫폼 노출', '공식 홈페이지', '예약·결제 시스템', '운영 관리 도구', 'AI 문의·정산·업무 자동화'].map((item) => (
            <span key={item}><Icon name="check" size={12} /> {item}</span>
          ))}
        </div>
      </section>
      <ContentRail title="함께하는 마을" onNavigate={onNavigate}>
        {featuredVillages.map((village) => (
          <VillagePosterCard key={village.id} village={village} onClick={() => onSelectDetail({ kind: 'village', id: village.id })} />
        ))}
      </ContentRail>
      <section className="burn-faq-section">
        <h2>자주 묻는 질문</h2>
        {faqs.map(([q, a], index) => (
          <article key={q}>
            <button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
              <span>{q}</span>
              <Icon name={openFaq === index ? 'chevronUp' : 'chevronDown'} size={16} />
            </button>
            {openFaq === index ? <p>{a}</p> : null}
          </article>
        ))}
      </section>
      <div className="burn-page-actions">
        <button type="button" onClick={() => onNavigate('contact')}>상담 신청하기</button>
        <button type="button" className="ghost" onClick={() => onNavigate('home')}>샘플 콘텐츠 더 보기</button>
      </div>
    </div>
  );
};

const ContactPage = ({ onNavigate }) => {
  const [type, setType] = React.useState('visitor');
  const [submitted, setSubmitted] = React.useState(false);

  if (submitted) {
    return (
      <div className="burn-page burn-contact-done">
        <span><Icon name="check" size={24} color="#1D9E75" /></span>
        <h1>문의가 접수되었습니다</h1>
        <p>빠른 시일 내에 연락드리겠습니다.</p>
        <button type="button" onClick={() => onNavigate('home')}>홈으로 돌아가기</button>
      </div>
    );
  }

  return (
    <div className="burn-page burn-contact-page">
      <button type="button" className="burn-back-link" onClick={() => onNavigate('home')}>
        <Icon name="arrowLeft" size={15} /> 뒤로
      </button>
      <PageIntro title="협업 문의" description="어떤 문의든 환영합니다." />
      <div className="burn-segmented">
        <button type="button" className={type === 'visitor' ? 'active' : ''} onClick={() => setType('visitor')}>방문자 문의</button>
        <button type="button" className={type === 'partner' ? 'active' : ''} onClick={() => setType('partner')}>운영자·마을 협업</button>
      </div>
      {type === 'partner' ? (
        <div className="burn-form-note">
          <strong>마을·농장 운영자 협업 문의</strong>
          <p>마을 규모, 현재 운영 방식, 희망하는 서비스를 간략하게 적어주세요.</p>
        </div>
      ) : null}
      <form className="burn-contact-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
        <label>
          <span>이름 또는 마을명</span>
          <input required placeholder={type === 'partner' ? '고라데이마을 홍길동' : '홍길동'} />
        </label>
        <label>
          <span>연락처 (이메일 또는 전화)</span>
          <input required placeholder="hello@example.com" />
        </label>
        <label>
          <span>문의 내용</span>
          <textarea required rows={5} placeholder={type === 'partner' ? '마을 이름, 위치, 현재 운영 현황, 원하는 서비스 등을 자유롭게 적어주세요.' : '궁금하신 점을 자유롭게 적어주세요.'} />
        </label>
        <button type="submit">{type === 'partner' ? '마을 브랜딩 상담 신청' : '문의 보내기'}</button>
      </form>
    </div>
  );
};

const VillageDetailPage = ({ village, onNavigate, onSelectDetail }) => {
  const [watchingVideo, setWatchingVideo] = React.useState(null);
  const villageVideos = getVideosByVillage(village.id);
  const villageExperiences = getExperiencesByVillage(village.id);
  const villagePosts = getPostsByVillage(village.id);
  const relatedVillages = villages.filter((item) => item.main_category === village.main_category && item.id !== village.id);
  const color = CATEGORY_COLOR[village.main_category];

  return (
    <div className="burn-detail-page">
      <DetailHero image={village.thumbnail_url} color={color} onBack={() => onNavigate('villages')}>
        <TrustBadge basis="실제 마을 기반" contentType="드라마" category={village.type} size="md" />
        <h1>{village.name}</h1>
        <p>강원 {village.region} · {village.type}</p>
        <em>"{village.tagline}"</em>
        {villageVideos[0] ? (
          <button type="button" onClick={() => setWatchingVideo(villageVideos[0])}><Icon name="play" size={14} /> 영상 보기</button>
        ) : null}
      </DetailHero>
      <section className="burn-detail-description" style={{ '--detail-color': color }}>
        {village.description}
      </section>
      {villageVideos.length ? (
        <ContentRail title="이 마을의 모든 영상" onNavigate={onNavigate}>
          {villageVideos.map((video) => <VideoCard key={video.id} video={video} onClick={() => setWatchingVideo(video)} />)}
        </ContentRail>
      ) : null}
      {villageExperiences.length ? (
        <ContentRail title="이 마을에서 할 수 있는 것들" onNavigate={onNavigate}>
          {villageExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} onClick={() => onSelectDetail({ kind: 'experience', id: experience.id })} />
          ))}
        </ContentRail>
      ) : null}
      {villagePosts.length ? (
        <section className="burn-related-blogs">
          <h2>이 마을에 대해 쓴 이야기</h2>
          {villagePosts.map((post) => (
            <BlogCard key={post.id} post={post} layout="horizontal" width="100%" onClick={() => onSelectDetail({ kind: 'blog', id: post.slug })} />
          ))}
        </section>
      ) : null}
      {relatedVillages.length ? (
        <ContentRail title="비슷한 이야기가 있는 곳" onNavigate={onNavigate}>
          {relatedVillages.map((item) => (
            <VillagePosterCard key={item.id} village={item} onClick={() => onSelectDetail({ kind: 'village', id: item.id })} />
          ))}
        </ContentRail>
      ) : null}
      <section className="burn-real-link-panel">
        <p>더 자세한 정보가 궁금하신가요?</p>
        <a href={village.platform_info_url || '#'}>실제 정보 플랫폼에서 보기 <Icon name="external" size={14} /></a>
      </section>
      {watchingVideo ? <VideoModal video={watchingVideo} onClose={() => setWatchingVideo(null)} /> : null}
    </div>
  );
};

const ExperienceDetailPage = ({ experience, onNavigate, onSelectDetail }) => {
  const [watchingVideo, setWatchingVideo] = React.useState(null);
  const village = getVillageById(experience.village_id);
  const expVideos = getVideosByExperience(experience.id);
  const moreVideos = village ? getVideosByVillage(village.id).filter((video) => video.experience_id !== experience.id) : [];
  const color = CATEGORY_COLOR[experience.main_category];

  return (
    <div className="burn-detail-page">
      <DetailHero image={experience.thumbnail_url} color={color} onBack={() => onNavigate('experiences')}>
        <TrustBadge basis="실제 체험 기반" contentType="픽션" category={experience.type} size="md" />
        <h1>{experience.story_title}</h1>
        {village ? <p>{village.name} · 강원 {village.region}</p> : null}
        {expVideos[0] ? (
          <button type="button" onClick={() => setWatchingVideo(expVideos[0])}><Icon name="play" size={14} /> 영상 보기</button>
        ) : null}
      </DetailHero>
      <section className="burn-story-box" style={{ '--detail-color': color }}>
        <p>이 체험의 이야기</p>
        <span>{experience.story_text}</span>
      </section>
      <section className="burn-basis-box">
        <p>이 이야기는 실제 체험을 바탕으로 만들어졌습니다</p>
        <div>
          <span><small>실제 체험명</small>{experience.real_program_name}</span>
          <span><small>마을명</small>{village?.name || '-'}</span>
          <span><small>지역</small>강원도 {village?.region || '-'}</span>
          <span><small>카테고리</small>{experience.main_category === 'exp_edu' ? '체험·교육' : '치유·힐링'}</span>
        </div>
      </section>
      <section className="burn-tag-box">
        <p>무엇을 하게 되는가</p>
        <div>{[...experience.target_tags, ...experience.season_tags, experience.theme_category].map((tag) => <span key={tag}>{tag}</span>)}</div>
      </section>
      {village ? (
        <section className="burn-source-village">
          <h2>이 이야기가 시작되는 곳</h2>
          <VillagePosterCard village={village} onClick={() => onSelectDetail({ kind: 'village', id: village.id })} />
        </section>
      ) : null}
      {[...expVideos, ...moreVideos].length ? (
        <ContentRail title="함께 보면 좋은 이야기" onNavigate={onNavigate}>
          {[...expVideos, ...moreVideos].map((video) => (
            <VideoCard key={video.id} video={video} onClick={() => setWatchingVideo(video)} />
          ))}
        </ContentRail>
      ) : null}
      {watchingVideo ? <VideoModal video={watchingVideo} onClose={() => setWatchingVideo(null)} /> : null}
    </div>
  );
};

const BlogDetailPage = ({ post, onNavigate }) => (
  <div className="burn-detail-page">
    <DetailHero image={post.thumbnail_url} color="#E8593C" onBack={() => onNavigate('blog')}>
      <TrustBadge basis="실제 마을 기반" contentType={post.category} size="md" />
      <h1>{post.title}</h1>
      <p>{post.published_at}</p>
    </DetailHero>
    <article className="burn-blog-detail">
      <p>{post.excerpt}</p>
      <span>{post.content}</span>
    </article>
  </div>
);

const DetailHero = ({ image, color, onBack, children }) => (
  <section className="burn-detail-hero" style={{ '--detail-color': color }}>
    <img src={image} alt="" />
    <div className="burn-detail-veil" />
    <button type="button" className="burn-detail-back" onClick={onBack}><Icon name="arrowLeft" size={16} /> 뒤로</button>
    <div className="burn-detail-copy">{children}</div>
  </section>
);

const VideoModal = ({ video, onClose }) => (
  <div className="burn-video-modal" role="dialog" aria-modal="true">
    <div className="burn-video-modal-card">
      <button type="button" onClick={onClose} aria-label="닫기"><Icon name="x" size={20} /></button>
      <div>
        <img src={video.thumbnail_url} alt={video.title} />
        <span><Icon name="play" size={30} color="#fff" /></span>
      </div>
      <section>
        <TrustBadge basis="실제 마을 기반" contentType={video.content_type} />
        <h2>{video.title}</h2>
        <p>{video.logline}</p>
      </section>
    </div>
  </div>
);

const PageRenderer = ({ page, detail, onNavigate, onSelectDetail }) => {
  if (detail?.kind === 'village') {
    const village = getVillageById(detail.id);
    return village ? <VillageDetailPage village={village} onNavigate={onNavigate} onSelectDetail={onSelectDetail} /> : null;
  }
  if (detail?.kind === 'experience') {
    const experience = getExperienceById(detail.id);
    return experience ? <ExperienceDetailPage experience={experience} onNavigate={onNavigate} onSelectDetail={onSelectDetail} /> : null;
  }
  if (detail?.kind === 'blog') {
    const post = getPostBySlug(detail.id);
    return post ? <BlogDetailPage post={post} onNavigate={onNavigate} /> : null;
  }

  if (page === 'villages') return <CatalogPage kind="villages" onSelectDetail={onSelectDetail} />;
  if (page === 'experiences') return <CatalogPage kind="experiences" onSelectDetail={onSelectDetail} />;
  if (page === 'blog') return <BlogPage onSelectDetail={onSelectDetail} />;
  if (page === 'about') return <AboutPage onNavigate={onNavigate} />;
  if (page === 'for-villages') return <ForVillagesPage onNavigate={onNavigate} onSelectDetail={onSelectDetail} />;
  if (page === 'contact') return <ContactPage onNavigate={onNavigate} />;

  return (
    <>
      <DesktopHero onSelectDetail={onSelectDetail} />
      <HomeContent onNavigate={onNavigate} onSelectDetail={onSelectDetail} />
    </>
  );
};

const DesktopApp = ({ page, detail, onNavigate, onSelectDetail }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const onScroll = () => setScrolled(el.scrollTop > 40);
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    ref.current?.scrollTo({ top: 0, behavior: 'instant' });
  }, [page, detail]);

  return (
    <main className="desktop-app burn-desktop-shell" ref={ref}>
      <DesktopNav activePage={page} scrolled={scrolled} onNavigate={onNavigate} />
      <PageRenderer page={page} detail={detail} onNavigate={onNavigate} onSelectDetail={onSelectDetail} />
    </main>
  );
};

const MobileApp = ({ page, detail, onNavigate, onSelectDetail }) => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    ref.current?.scrollTo({ top: 0, behavior: 'instant' });
  }, [page, detail]);

  return (
    <main className="mobile-app burn-mobile-shell">
      <div className="mobile-scroll" ref={ref}>
        <MobileTop activePage={page} onNavigate={onNavigate} />
        {page === 'home' && !detail ? (
          <>
            <MobileHero />
            <HomeContent onNavigate={onNavigate} onSelectDetail={onSelectDetail} />
          </>
        ) : (
          <PageRenderer page={page} detail={detail} onNavigate={onNavigate} onSelectDetail={onSelectDetail} />
        )}
      </div>
      <MobileBottomNav activePage={page} onNavigate={onNavigate} />
    </main>
  );
};

const App = () => {
  const [page, setPage] = React.useState('home');
  const [detail, setDetail] = React.useState(null);

  const navigate = (nextPage) => {
    setPage(nextPage);
    setDetail(null);
  };

  const selectDetail = (nextDetail) => {
    setDetail(nextDetail);
  };

  return (
    <>
      <DesktopApp page={page} detail={detail} onNavigate={navigate} onSelectDetail={selectDetail} />
      <MobileApp page={page} detail={detail} onNavigate={navigate} onSelectDetail={selectDetail} />
    </>
  );
};

export default App;
