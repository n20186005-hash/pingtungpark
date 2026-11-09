import { TOPICS_TRANSPORT } from './topics-transport';
import { TOPICS_FOOD } from './topics-food';
import { TOPICS_NEARBY } from './topics-nearby';
import { TOPICS_FAMILY } from './topics-family';
import { TOPICS_ITINERARY } from './topics-itinerary';
import { SOURCE } from './topic-sources';

/** 單一園區事實來源，與既有 guide.json 及 BaseLayout 保持一致。 */
export const SITE_URL = 'https://pingtungpark.com';
export const MAPS_URL = 'https://maps.app.goo.gl/EDkUSZQMdvhaWmhK6';
export const REVIEWED = '2026-11-09';

export type TopicGroup = 'transport' | 'food' | 'nearby' | 'family' | 'itinerary';
export type PillarKey =
  | 'index' | 'events' | 'christmas' | 'transport' | 'history' | 'family'
  | 'food' | 'attractions' | 'night' | 'photo' | 'itinerary' | 'faq';

export interface TopicFaq { q: string; a: string; }
export interface TopicFact { label: string; value: string; }
export interface TopicSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  note?: string;
}
export interface TopicStep { title: string; body: string; }
export interface TopicSource { label: string; url: string; }
export interface TopicPlace {
  name: string;
  description: string;
  address?: string;
  alternateName?: string;
}
export interface TopicEvent {
  name: string;
  startDate: string;
  endDate: string;
  organizer: string;
  description: string;
}
export interface Topic {
  /** 完整路徑（不含前綴斜線），可含多段，例如 transport/bus。 */
  slug: string;
  group: TopicGroup;
  /** 會在主題集群區塊列出本頁的既有支柱頁。 */
  pillars: PillarKey[];
  title: string;
  description: string;
  h1: string;
  lead: string;
  facts: TopicFact[];
  sections: TopicSection[];
  steps?: TopicStep[];
  faqs: TopicFaq[];
  /** 2–4 個真正相關的專題 slug。 */
  related: string[];
  sources: TopicSource[];
  /** 只有各自地點已查證的詳頁才輸出 Place 節點；不含未查證的座標。 */
  place?: TopicPlace;
  /** 已查證的活動（如聖誕節），用於輸出 Event 結構化資料；無則不輸出。 */
  event?: TopicEvent;
}

export const GROUP_META: Record<TopicGroup, { label: string; pillar: PillarKey; pillarPath: string; color: string; order: number }> = {
  transport: { label: '交通、停車與實用資訊', pillar: 'transport', pillarPath: '/transport', color: '#1f7a52', order: 1 },
  food: { label: '附近美食、咖啡與餐飲', pillar: 'food', pillarPath: '/food', color: '#b5702e', order: 2 },
  nearby: { label: '周邊景點與歷史文化', pillar: 'attractions', pillarPath: '/attractions', color: '#2f6f8f', order: 3 },
  family: { label: '親子、自然與拍照', pillar: 'family', pillarPath: '/family', color: '#7d4f86', order: 4 },
  itinerary: { label: '實用行程與路線', pillar: 'itinerary', pillarPath: '/itinerary', color: '#a8433b', order: 5 }
};
export const GROUP_ORDER: TopicGroup[] = ['transport', 'food', 'nearby', 'family', 'itinerary'];

export const PILLAR_META: Record<PillarKey, { zh: string; en: string; zhPath: string; enPath: string }> = {
  index: { zh: '首頁', en: 'Home', zhPath: '/', enPath: '/en/' },
  events: { zh: '活動與市集', en: 'Events & markets', zhPath: '/events', enPath: '/en/events' },
  christmas: { zh: '聖誕節', en: 'Christmas', zhPath: '/christmas', enPath: '/en/christmas' },
  transport: { zh: '交通停車', en: 'Transport', zhPath: '/transport', enPath: '/en/transport' },
  history: { zh: '歷史', en: 'History', zhPath: '/history', enPath: '/en/history' },
  family: { zh: '親子與無障礙', en: 'Family & access', zhPath: '/family', enPath: '/en/family' },
  food: { zh: '附近美食', en: 'Food', zhPath: '/food', enPath: '/en/food' },
  attractions: { zh: '附近景點', en: 'Around', zhPath: '/attractions', enPath: '/en/attractions' },
  night: { zh: '夜間', en: 'After dark', zhPath: '/night', enPath: '/en/night' },
  photo: { zh: '照片', en: 'Photos', zhPath: '/photo', enPath: '/en/photo' },
  itinerary: { zh: '行程', en: 'Itinerary', zhPath: '/itinerary', enPath: '/en/itinerary' },
  faq: { zh: '常見問題', en: 'FAQ', zhPath: '/faq', enPath: '/en/faq' }
};

export const TOPICS: Topic[] = [
  ...TOPICS_TRANSPORT,
  ...TOPICS_FOOD,
  ...TOPICS_NEARBY,
  ...TOPICS_FAMILY,
  ...TOPICS_ITINERARY
];

export const TOPIC_SLUGS: string[] = TOPICS.map(t => t.slug);

export function topicPath(slug: string): string { return '/' + slug; }

export function getTopic(slug: string | undefined): Topic | undefined {
  if (!slug) return undefined;
  return TOPICS.find(t => t.slug === slug);
}

export function topicsForPillar(pillar: PillarKey): Topic[] {
  return TOPICS.filter(t => t.pillars.includes(pillar));
}

export function topicsByGroup(group: TopicGroup): Topic[] {
  return TOPICS.filter(t => t.group === group);
}

/** 首頁／集群頁使用的精選入口，避免一次堆出全部連結。 */
export const FEATURED_SLUGS: string[] = [
  'parking', 'transport/from-pingtung-station', 'transport/bus',
  'food/park-road', 'food/local-snacks', 'food/pingtung-night-market',
  'nearby/shengli-star-village', 'nearby/pingtung-county-park', 'history/ahou-park',
  'family/playground', 'photo/christmas-lights',
  'itinerary/30-minutes', 'itinerary/half-day', 'itinerary/one-day'
];

/** SOURCE 定義在 topic-sources.ts，避免與五個專題模組形成循環依賴。 */
export { SOURCE };
