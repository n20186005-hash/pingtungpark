import type { Topic } from './topics';
import { SOURCE } from './topic-sources';

export const TOPICS_ITINERARY: Topic[] = [
  {
    slug: 'itinerary/30-minutes',
    group: 'itinerary',
    pillars: ['itinerary'],
    title: '屏東公園30分鐘散步｜重點景觀與短暫停留',
    description: '屏東公園30分鐘散步路線：從入口到池畔、涼亭與阿猴城門的短暫停留安排，適合轉車或等人。',
    h1: '屏東公園 30 分鐘散步',
    lead: '若只有半小時，可從公園入口快速走到池畔與涼亭，並經過阿猴城門；路線以地圖選定入口為準，請預留步行與拍照緩衝。',
    facts: [
      { label: '建議時長', value: '約 30 分鐘' },
      { label: '重點', value: '池畔、涼亭、阿猴城門' },
      { label: '適合', value: '轉車、等人、短暫散步' }
    ],
    sections: [
      {
        heading: '半小時怎麼走',
        paragraphs: ['以地圖選定最近入口，沿園路接到池畔與涼亭，再經過阿猴城門後折返，控制在30分鐘內。']
      },
      {
        heading: '停留與休息',
        paragraphs: ['園區戶外綠蔭有限，午後氣溫較高，建議備水與防曬；雨天部分磚石步道易濕滑，放慢腳步、留意安全。']
      }
    ],
    steps: [
      { title: '入口', body: '以地圖選定距離你最近的入口，確認當日開放。' },
      { title: '池畔與涼亭', body: '沿園路走到池畔與涼亭，停留拍照。' },
      { title: '阿猴城門', body: '經過園內阿猴城門古蹟遺構後折返。' }
    ],
    faqs: [
      { q: '30分鐘夠嗎？', a: '適合短暫散步；深度遊園建議半日或一日。' }
    ],
    related: ['itinerary/one-hour', 'family/with-toddlers', 'transport/from-pingtung-station'],
    sources: [SOURCE.maps, SOURCE.heritage]
  },
  {
    slug: 'itinerary/one-hour',
    group: 'itinerary',
    pillars: ['itinerary'],
    title: '屏東公園一小時｜散步、歷史與親子',
    description: '屏東公園一小時路線：歷史景點、遊戲場與休息安排，適合順遊與親子短遊。',
    h1: '屏東公園 1 小時遊',
    lead: '一小時可串起園內歷史遺構、開闊草坪與共融遊戲場，並保留休息；路線以地圖與現場動線為準。',
    facts: [
      { label: '建議時長', value: '約 60 分鐘' },
      { label: '重點', value: '阿猴城門、草坪、遊戲場' },
      { label: '適合', value: '順遊、親子短遊' }
    ],
    sections: [
      {
        heading: '一小時路線',
        paragraphs: ['從入口接園內歷史遺構與老樹，再到草坪與共融遊戲場，最後在涼亭休息後離開。']
      },
      {
        heading: '停留與休息',
        paragraphs: ['園區戶外綠蔭有限，午後氣溫較高，建議備水與防曬；帶兒童可在涼亭與遊戲場之間彈性分配時間，避免正午曝曬。']
      }
    ],
    steps: [
      { title: '歷史遺構', body: '先到阿猴城門等園內歷史景點。' },
      { title: '草坪與老樹', body: '走過開闊草坪與綠蔭，拍照休息。' },
      { title: '共融遊戲場', body: '帶兒童可安排遊戲場停留，注意適齡與安全。' }
    ],
    faqs: [
      { q: '有時間去遊戲場嗎？', a: '一小時可含短暫遊戲場停留；若孩子要玩久一點，建議半日。' }
    ],
    related: ['itinerary/30-minutes', 'itinerary/half-day', 'family/playground'],
    sources: [SOURCE.maps, SOURCE.playground]
  },
  {
    slug: 'itinerary/half-day',
    group: 'itinerary',
    pillars: ['itinerary'],
    title: '屏東公園半日遊｜公園與勝利星村',
    description: '屏東公園半日行程：上午或下午遊園，再接勝利星村或市區景點，含休息與用餐建議。',
    h1: '屏東公園半日遊',
    lead: '半日可把屏東公園與鄰近的勝利星村排入同程；園內保留歷史、遊戲場與綠蔭，再延伸到市區文化園區。',
    facts: [
      { label: '建議時長', value: '約 3–4 小時' },
      { label: '組合', value: '屏東公園＋勝利星村' },
      { label: '適合', value: '半日文化與散步' }
    ],
    sections: [
      {
        heading: '半日怎麼排',
        paragraphs: ['上午遊屏東公園（含歷史遺構、遊戲場、休息），中午在園周邊或市區用餐，下午轉勝利星村的文化園區。']
      }
    ],
    steps: [
      { title: '屏東公園', body: '以入口開始，走歷史遺構、草坪、遊戲場與涼亭。' },
      { title: '午餐', body: '在公園路、仁愛路或市區選餐，確認當日營業。' },
      { title: '勝利星村', body: '下午轉往勝利星村，逛日式宿舍群與文創店家。' }
    ],
    faqs: [
      { q: '半日夠去兩個地方嗎？', a: '園區與星村都在市區，半日可行；細玩則建議各留一段。' }
    ],
    related: ['itinerary/one-day', 'nearby/shengli-star-village', 'itinerary/30-minutes'],
    sources: [SOURCE.maps, SOURCE.victory]
  },
  {
    slug: 'itinerary/one-day',
    group: 'itinerary',
    pillars: ['itinerary'],
    title: '屏東市一日遊｜公園、美食與夜市',
    description: '屏東市一日遊：屏東公園、美食、文化景點與夜市的城市路線，含交通與用餐安排。',
    h1: '屏東市一日遊',
    lead: '一日可串起屏東公園、市區美食、文化景點與夜間夜市；交通以步行與505/509/516公車為主，距離以地圖為準。',
    facts: [
      { label: '建議時長', value: '全日' },
      { label: '組合', value: '公園＋美食＋文化＋夜市' },
      { label: '交通', value: '步行、公車、自駕' }
    ],
    sections: [
      {
        heading: '一日路線',
        paragraphs: ['白天遊屏東公園與市區文化景點，午餐與咖啡安排於市區，夜間轉屏東觀光夜市收尾。']
      }
    ],
    steps: [
      { title: '上午公園', body: '屏東公園散步、歷史遺構與遊戲場。' },
      { title: '中午市區', body: '在公園周邊或市區用餐與咖啡休憩。' },
      { title: '下午文化', body: '勝利星村或屏東美術館等市區景點。' },
      { title: '夜間夜市', body: '晚間轉屏東觀光夜市，注意營業日以公告為準。' }
    ],
    faqs: [
      { q: '一天會太趕嗎？', a: '以市區移動為主不遠；若細玩可拆成兩個半日。' }
    ],
    related: ['itinerary/half-day', 'itinerary/family-day', 'food/pingtung-night-market'],
    sources: [SOURCE.maps, SOURCE.tourism]
  },
  {
    slug: 'itinerary/family-day',
    group: 'itinerary',
    pillars: ['itinerary'],
    title: '屏東親子一日遊｜遊戲場、午餐與周邊',
    description: '屏東親子一日遊：以共融遊戲場為核心，安排午餐、休息與周邊活動的親子路線。',
    h1: '屏東親子一日遊',
    lead: '親子一日以屏東公園共融遊戲場為核心，搭配午餐、涼亭休息與周邊輕活動；注意遊具適齡、防曬與補給。',
    facts: [
      { label: '核心', value: '共融遊戲場' },
      { label: '配套', value: '午餐、休息、周邊' },
      { label: '適合', value: '帶幼兒與學齡兒童' }
    ],
    sections: [
      {
        heading: '親子怎麼排',
        paragraphs: ['以遊戲場為主停留，周圍安排涼亭休息與午餐，避免在午後高溫連走；若孩子體力佳，再加市區輕活動。']
      }
    ],
    steps: [
      { title: '遊戲場', body: '上午到遊戲場，注意適齡與陪同。' },
      { title: '午餐休息', body: '在園周邊或市區用餐，回涼亭休息。' },
      { title: '輕活動', body: '下午可加市區散步或咖啡休憩，視體力調整。' }
    ],
    faqs: [
      { q: '適合幾歲？', a: '遊戲場有三層難度與八條路徑；適齡以現場告示為準。' }
    ],
    related: ['family/playground', 'family/with-toddlers', 'itinerary/one-day'],
    sources: [SOURCE.playground, SOURCE.tourism]
  },
  {
    slug: 'itinerary/christmas-night',
    group: 'itinerary',
    pillars: ['itinerary'],
    title: '2026屏東聖誕節夜間行程｜散步、晚餐與賞燈',
    description: '2026屏東聖誕節夜間一日：白天散步、晚餐與17:30後賞燈的行程安排，含人潮與散場確認。',
    h1: '2026屏東聖誕節夜間行程',
    lead: '2026屏東聖誕節已於11月6日開幕，展期至2027年1月3日、每日17:30–22:00；可行安排是白天遊園、晚餐後賞燈，並預留散場交通。',
    facts: [
      { label: '活動', value: '2026屏東聖誕節（已開幕）' },
      { label: '亮燈', value: '17:30–22:00' },
      { label: '重點', value: '主燈、星光聖誕樹、5組燈光秀' },
      { label: '注意', value: '人潮、停車、返程' }
    ],
    sections: [
      {
        heading: '夜間行程',
        paragraphs: ['白天先遊園認識園區，傍晚晚餐，17:30後回到燈區賞燈與看燈光秀；人多時保持距離、預留停車與公車散場時間。']
      }
    ],
    steps: [
      { title: '白天遊園', body: '先認識園區動線與歷史遺構。' },
      { title: '晚餐', body: '在園周邊或市區用餐，確認當日營業。' },
      { title: '亮燈賞燈', body: '17:30後進燈區，拍主燈與星光聖誕樹、看燈光秀。' },
      { title: '散場', body: '預留停車與公車時間，查返程車次。' }
    ],
    faqs: [
      { q: '幾點到最好？', a: '17:30亮燈後人潮集中；想避人潮可早點到或平日前往。' },
      { q: '活動到幾號？', a: '展期至2027年1月3日，每日17:30–22:00，以現場為準。' }
    ],
    related: ['photo/christmas-lights', 'food/pingtung-night-market', 'transport/bus'],
    sources: [SOURCE.christmas, SOURCE.countyNews, SOURCE.cna],
    event: {
      name: '2026屏東聖誕節',
      startDate: '2026-11-06',
      endDate: '2027-01-03',
      organizer: '屏東縣政府',
      description: '2026屏東聖誕節於屏東公園舉辦，主題「樂園聖誕派對」，設12組燈飾、主燈「璀璨驚喜盒」與「星光聖誕樹」，每日17:30–22:00。'
    }
  },
  {
    slug: 'itinerary/walking-tour',
    group: 'itinerary',
    pillars: ['itinerary'],
    title: '屏東市區散步路線｜歷史建築與街區',
    description: '屏東市區散步：以屏東公園為起點的歷史建築、街區與實際步行路線，地圖距離以現場為準。',
    h1: '屏東市區散步路線',
    lead: '以屏東公園為起點，可串起市區歷史建築與街區；本頁提供散步方向，具體路線與距離以地圖為準。',
    facts: [
      { label: '起點', value: '屏東公園' },
      { label: '方向', value: '歷史建築、街區、車站周邊' },
      { label: '交通', value: '步行、公車' }
    ],
    sections: [
      {
        heading: '市區怎麼走',
        paragraphs: ['從屏東公園出發，經市區老街、車站周邊與文化園區形成環狀散步；實際距離與可走性以地圖與當日施工為準。']
      }
    ],
    steps: [
      { title: '公園出發', body: '從選定入口開始市區散步。' },
      { title: '市區街區', body: '走公園路、仁愛路一帶的商業與歷史街區。' },
      { title: '車站周邊', body: '延伸到屏東車站周邊，作為返程點。' }
    ],
    faqs: [
      { q: '全程走多久？', a: '依涵蓋範圍與步伐而定；請以地圖步行估算為準。' }
    ],
    related: ['nearby/pingtung-station', 'history/ahou-park', 'itinerary/half-day'],
    sources: [SOURCE.maps, SOURCE.culture]
  }
];
