import type { Topic } from './topics';
import { SOURCE } from './topic-sources';

export const TOPICS_FOOD: Topic[] = [
  {
    slug: 'food/park-road',
    group: 'food',
    pillars: ['food'],
    title: '公園路美食｜屏東公園散步後找餐廳的方法',
    description: '屏東公園路一帶的美食與早餐、早午餐：沿線店家怎麼找、與公園的相對位置、適合遊園前或後安排，以及店家營業資訊的查核方式。',
    h1: '公園路沿線美食',
    lead: '屏東公園位於屏東市公園路，周邊以公園路、仁愛路一帶的餐飲店家最集中；本頁整理「沿線找店」的方法，不逐一列舉未經當日核實的店名與價格。',
    facts: [
      { label: '主範圍', value: '屏東公園周邊公園路、仁愛路一帶' },
      { label: '常見選擇', value: '早餐、早午餐、正餐、咖啡甜點' },
      { label: '距離', value: '以地圖步行分鐘數為準' },
      { label: '查核', value: '店家營業時間與價格以地圖／現場為準' }
    ],
    sections: [
      {
        heading: '怎麼找沿線店家',
        paragraphs: [
          '公園路與仁愛路是公園周邊最密集的餐飲帶，從公園任一入口出來都能接到市區店家。出發前用地圖以「公園入口」為中心搜尋餐飲，比直接相信固定名單更可靠。',
          'GSC 資料顯示「公園路美食」「公園路早餐」「公園路早午餐」都有搜尋需求，說明旅客多半在遊園前後就地用餐，而非專程遠赴。'
        ]
      },
      {
        heading: '遊園前還是遊園後',
        paragraphs: [
          '早餐與早午餐適合遊園前補給；正餐與咖啡甜點適合遊園後休息。聖誕節燈飾展期夜間另有園內販賣屋與週邊市集，但那是活動限定，不等同全年店家。'
        ]
      }
    ],
    faqs: [
      { q: '公園路上有哪些店？', a: '店家名單與評價變動快，本站不列固定清單；請用地圖以公園入口為中心即時搜尋。' },
      { q: '遊園後適合吃什麼？', a: '周邊以日常餐飲與咖啡甜點為主，依當日店家營業狀態選擇，並確認營業時間。' }
    ],
    related: ['food/breakfast', 'food/brunch', 'food/restaurants', 'food/cafes'],
    sources: [SOURCE.maps, SOURCE.tourism]
  },
  {
    slug: 'food/breakfast',
    group: 'food',
    pillars: ['food'],
    title: '屏東公園附近早餐｜店家、時段與交通',
    description: '屏東公園附近的早餐選擇：適合遊園前補給的店家類型、營業時段與交通位置，以及為什麼以地圖當日查詢為準。',
    h1: '屏東公園附近的早餐',
    lead: '許多旅客選在遊園前吃早餐；公園周邊公園路、仁愛路一帶有早餐店與早班餐飲，但店名、價格與營業時間變動快，請以地圖當日資訊為準。',
    facts: [
      { label: '適合', value: '遊園前補給' },
      { label: '主範圍', value: '公園路、仁愛路一帶' },
      { label: '查核', value: '地圖店家頁的營業時間與評論' },
      { label: '注意', value: '部分店家週休或早收' }
    ],
    sections: [
      {
        heading: '遊園前早餐怎麼安排',
        paragraphs: [
          '若打算一早遊園，先在公園入口附近用地圖搜尋「早餐」並確認當日營業；部分店家週休或早收，名單式推薦容易過時。'
        ]
      }
    ],
    faqs: [
      { q: '有推薦早餐店嗎？', a: '店家變動快，本站不列固定名單；請以地圖當日搜尋與評論為準。' },
      { q: '早餐店離入口近嗎？', a: '公園路、仁愛路都在園區周邊，實際步行以地圖為準。' }
    ],
    related: ['food/park-road', 'food/brunch', 'transport/from-pingtung-station'],
    sources: [SOURCE.maps]
  },
  {
    slug: 'food/brunch',
    group: 'food',
    pillars: ['food'],
    title: '屏東公園附近早午餐｜選擇與時段',
    description: '屏東公園周邊的早午餐：店家類型、適合人群與用餐時間，店名與價格以地圖當日資訊為準。',
    h1: '屏東公園附近的早午餐',
    lead: '「公園路早午餐」是實際出現的搜尋詞；公園周邊有提供早午餐時段的店家，但營業時段與供應項目以當日店家公告為準。',
    facts: [
      { label: '適合', value: '上午遊園前後的輕食' },
      { label: '主範圍', value: '公園路、仁愛路一帶' },
      { label: '查核', value: '地圖店家頁的供應時段' }
    ],
    sections: [
      {
        heading: '早午餐怎麼選',
        paragraphs: [
          '若行程在上午，可把早午餐安排在遊園前補給或遊園後休息；用地圖以「早午餐」＋公園入口搜尋，並確認當日是否供應與營業時間。'
        ]
      }
    ],
    faqs: [
      { q: '有確定的早午餐店嗎？', a: '店家與供應時段變動，請以地圖當日資訊為準。' }
    ],
    related: ['food/park-road', 'food/breakfast', 'food/cafes'],
    sources: [SOURCE.maps]
  },
  {
    slug: 'food/local-snacks',
    group: 'food',
    pillars: ['food'],
    title: '屏東公園附近小吃｜在地覓食方向',
    description: '屏東市區的小吃覓食：從屏東公園出發可順路的店家類型、特色方向與查核方式，不列未核實的單價與評分。',
    h1: '屏東公園附近的小吃',
    lead: '屏東市以在地小吃見長，公園周邊與市區老街一帶有傳統小吃；本頁提供覓食方向，具體店名、價格與評分請以地圖與現場為準。',
    facts: [
      { label: '方向', value: '公園周邊＋市區老街' },
      { label: '類型', value: '傳統小吃、市場周邊飲食' },
      { label: '查核', value: '地圖店家頁、縣府觀光資訊' }
    ],
    sections: [
      {
        heading: '從公園順路覓食',
        paragraphs: [
          '屏東公園距離火車站與市區商業區不遠，散步或搭接駁公車都能接上小吃聚集處。出發前以地圖規劃「公園→小吃」的步行或公車動線，比記固定名單更穩。'
        ]
      }
    ],
    faqs: [
      { q: '有必吃小吃名單嗎？', a: '本站不列固定清單以避免過時；請用地圖以公園為中心搜尋並看近期評論。' }
    ],
    related: ['food/park-road', 'nearby/pingtung-station', 'nearby/pingtung-night-market'],
    sources: [SOURCE.maps, SOURCE.tourism]
  },
  {
    slug: 'food/restaurants',
    group: 'food',
    pillars: ['food'],
    title: '屏東公園附近餐廳｜正餐選擇與位置',
    description: '屏東公園周邊的正餐餐廳：選擇類型、與公園的相對位置、消費與營業資訊查核，適合遊園後用餐。',
    h1: '屏東公園附近的餐廳',
    lead: '遊園後想坐下来吃正餐，公園路、仁愛路與市區一帶都有餐廳；店名、價位與營業時間請以地圖當日資訊為準，本站不寫入未核實單價。',
    facts: [
      { label: '適合', value: '遊園後正餐' },
      { label: '主範圍', value: '公園路、仁愛路、市區' },
      { label: '查核', value: '地圖店家頁營業時間與價位' }
    ],
    sections: [
      {
        heading: '用餐安排在遊園後',
        paragraphs: [
          '把正餐安排在遊園後，可在地圖上以「公園入口」為中心搜尋餐廳，並確認當日營業與是否需候位；聖誕節等人潮日建議避開尖峰。'
        ]
      }
    ],
    faqs: [
      { q: '有適合家庭的餐廳嗎？', a: '請在地圖以「餐廳＋公園」篩選並看評論與供應項目，以當日資訊為準。' }
    ],
    related: ['food/park-road', 'food/cafes', 'itinerary/half-day'],
    sources: [SOURCE.maps]
  },
  {
    slug: 'food/cafes',
    group: 'food',
    pillars: ['food'],
    title: '屏東公園附近咖啡廳｜咖啡、甜點與休憩',
    description: '屏東公園周邊的咖啡與甜點：休憩點選擇、適合人群與營業資訊查核，適合遊園後放鬆。',
    h1: '屏東公園附近的咖啡廳',
    lead: '遊園後想休息，公園周邊有咖啡與甜點店；店名、營業時間與座位狀況請以地圖當日資訊為準。',
    facts: [
      { label: '適合', value: '遊園後休憩' },
      { label: '主範圍', value: '公園路、仁愛路、市區' },
      { label: '查核', value: '地圖店家頁營業時間' }
    ],
    sections: [
      {
        heading: '咖啡休憩怎麼安排',
        paragraphs: [
          '在地圖以「咖啡」＋公園入口搜尋，確認當日營業與是否適合久坐；若帶長輩或幼兒，優先選有座位與廁所便利的店。'
        ]
      }
    ],
    faqs: [
      { q: '有安靜的咖啡廳嗎？', a: '以地圖評論與當日狀態為準，本站不列固定清單。' }
    ],
    related: ['food/park-road', 'food/restaurants', 'nearby/shengli-star-village'],
    sources: [SOURCE.maps]
  },
  {
    slug: 'food/pingtung-night-market',
    group: 'food',
    pillars: ['food'],
    title: '屏東觀光夜市｜地址、營業與順路行程',
    description: '屏東觀光夜市的介紹：地點、營業資訊查核、與屏東公園的順路安排，以及為什麼以縣府與現場公告為準。',
    h1: '屏東觀光夜市',
    lead: '屏東觀光夜市是屏東市知名的夜間飲食去處；具體位置、營業日與攤位以縣府與現場公告為準，本站不寫入未核實的日期或價格。',
    facts: [
      { label: '性質', value: '屏東市觀光夜市' },
      { label: '查核', value: '縣府公告、地圖、現場公告' },
      { label: '與公園', value: '可安排在同一日市區行程' },
      { label: '注意', value: '營業日與攤位會變動' }
    ],
    sections: [
      {
        heading: '與屏東公園怎麼排',
        paragraphs: [
          '屏東觀光夜市與屏東公園都在屏東市區，可安排在同一日行程：白天遊園、夜間逛夜市。具體距離與交通以地圖為準，不要把兩者預設為步行直達。',
          '2026屏東聖誕節展期間，園內另有販賣屋與週邊市集，但那是活動限定，不等同屏東觀光夜市的常態營業。'
        ]
      }
    ],
    faqs: [
      { q: '夜市每天開嗎？', a: '營業日以縣府與現場公告為準，本站不寫入未核實的日期。' },
      { q: '從公園怎麼去？', a: '以地圖規劃「公園→夜市」的步行或公車動線，距離依路線而異。' }
    ],
    related: ['nearby/pingtung-night-market', 'food/park-road', 'itinerary/one-day'],
    sources: [SOURCE.maps, SOURCE.tourism, SOURCE.christmas]
  }
];
