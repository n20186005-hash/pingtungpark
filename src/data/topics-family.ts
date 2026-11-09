import type { Topic } from './topics';
import { SOURCE } from './topic-sources';

export const TOPICS_FAMILY: Topic[] = [
  {
    slug: 'family/playground',
    group: 'family',
    pillars: ['family', 'photo'],
    title: '屏東公園共融遊戲場｜紅尾伯勞溜滑梯與設施',
    description: '屏東公園共融遊戲場的官方設施：6 公尺紅尾伯勞溜滑梯、三層難度與八條探索路徑，適齡、安全與無障礙確認重點。',
    h1: '屏東公園共融遊戲場',
    lead: '屏東公園的共融遊戲場以屏東縣鳥「紅尾伯勞」為主題，官方旅遊網介紹其有約 6 公尺高溜滑梯、三層難度與八條探索路徑；適齡與安全請看現場與主管機關說明。',
    facts: [
      { label: '主題', value: '紅尾伯勞（屏東縣鳥）' },
      { label: '溜滑梯', value: '約 6 公尺高（官方）' },
      { label: '難度', value: '三層（官方）' },
      { label: '探索路徑', value: '八條（官方）' },
      { label: '無障礙', value: '官方遊戲場頁「無障礙設施：無」' }
    ],
    sections: [
      {
        heading: '遊具與設計',
        paragraphs: [
          '交通部觀光署屏東旅遊網的屏東公園共融遊戲場介紹，列有以紅尾伯勞為主題的遊具、約 6 公尺高溜滑梯、三層難度與八條探索路徑。這些是已發布的官方設施資訊。',
          '「共融」設計目標是照顧不同能力的兒童一起遊戲，但個別設施的適齡建議與安全規則，仍以現場告示與主管機關說明為準。'
        ]
      },
      {
        heading: '安全與陪同',
        paragraphs: [
          '高溜滑梯與多層設施需要家長陪同與看顧；雨天設施濕滑、人多時應控管輪流使用。官方遊戲場頁的「無障礙設施」欄列「無」，若需輪椅或嬰兒車動線，請另確認園區路面與入口。'
        ]
      }
    ],
    faqs: [
      { q: '適合幾歲？', a: '官方列三層難度與八條路徑，適齡建議以現場告示與主管機關為準。' },
      { q: '要門票嗎？', a: '園區公共空間多免費；遊戲場收費與否以現場與主管機關公告為準。' },
      { q: '有遮蔭嗎？', a: '園區有樹蔭與涼亭，但遊戲場本身遮蔭與防曬請現場確認，晴日建議自備飲水。' }
    ],
    related: ['family/with-toddlers', 'accessibility', 'photo/spots'],
    sources: [SOURCE.playground, SOURCE.tourism, SOURCE.maps]
  },
  {
    slug: 'family/with-toddlers',
    group: 'family',
    pillars: ['family'],
    title: '屏東公園親子遊｜幼兒路線、休息與嬰兒車',
    description: '帶幼兒到屏東公園：適齡路線、休息點、嬰兒車與廁所確認，以及遊戲場與園路的陪同重點。',
    h1: '帶幼兒遊屏東公園',
    lead: '屏東公園結合百年地景與共融遊戲場，適合帶幼兒散步；但園路、廁所與遊具適齡細節請以現場為準，並預留休息與補給時間。',
    facts: [
      { label: '適合', value: '散步、遊戲場、涼亭休息' },
      { label: '攜帶', value: '飲水、防曬、替換衣物' },
      { label: '確認', value: '廁所、嬰兒車動線、遊具適齡' }
    ],
    sections: [
      {
        heading: '幼兒行程怎麼排',
        paragraphs: [
          '以遊戲場與鄰近涼亭為中心安排短停留，避免長距離連走；晴日樹蔭與飲水要預留。遊具的適齡與安全以現場告示為準。'
        ]
      },
      {
        heading: '嬰兒車與廁所',
        paragraphs: [
          '園路多為步道，但個別路段坡度與入口不一；廁所位置以現場為準。若需要無障礙動線，參考「屏東公園無障礙」頁先確認。'
        ]
      }
    ],
    faqs: [
      { q: '有哺乳或換尿布空間嗎？', a: '本站未核實專用空間；園內公廁以現場為準。' },
      { q: '嬰兒車好推嗎？', a: '園路多平整，但個別路段與入口坡度不一，請現場確認。' }
    ],
    related: ['family/playground', 'accessibility', 'itinerary/30-minutes'],
    sources: [SOURCE.tourism, SOURCE.maps]
  },
  {
    slug: 'nature/trees',
    group: 'family',
    pillars: ['family'],
    title: '屏東公園樹木｜常見樹種、遮蔭與自然觀察',
    description: '屏東公園的樹木與遮蔭：常見樹種觀察、遮蔭區域與自然教育重點，實地觀察請以現場為準。',
    h1: '屏東公園的樹木與遮蔭',
    lead: '屏東公園作為百年城市公園，園內有老樹與綠蔭；本頁整理觀察方向，但不把整個屏東縣常見物種直接寫成園內已記錄物種。',
    facts: [
      { label: '特色', value: '百年公園綠蔭、老樹景觀' },
      { label: '用途', value: '遮蔭、散步、自然觀察' },
      { label: '確認', value: '實地觀察、園內解說' }
    ],
    sections: [
      {
        heading: '樹木與遮蔭',
        paragraphs: [
          '園區綠蔭來自長年栽植的喬木與開闊草坪，是晴日散步與休息的依據。本站不逐一列舉未經實地核實的物種名錄，建議以現場解說牌與園方資料為準。'
        ]
      }
    ],
    faqs: [
      { q: '有樹木解說牌嗎？', a: '以園內現場解說與主管機關資料為準。' },
      { q: '哪裡遮蔭最多？', a: '喬木集中處與涼亭周邊；實際以現場為準。' }
    ],
    related: ['family/playground', 'family/with-toddlers', 'photo/spots'],
    sources: [SOURCE.tourism, SOURCE.maps]
  },
  {
    slug: 'nature/birds',
    group: 'family',
    pillars: ['family'],
    title: '屏東公園鳥類｜觀察、生態教育與注意',
    description: '屏東公園的鳥類觀察：園區綠地吸引的常見鳥類、生態教育重點與不干擾原則，物種以現場觀察為準。',
    h1: '屏東公園的鳥類觀察',
    lead: '屏東公園的綠地與水域提供城市鳥類棲息環境；本站提供觀察與生態教育方向，不把整個屏東縣常見鳥種直接寫成園內已記錄物種。',
    facts: [
      { label: '環境', value: '綠地、草坪、水域' },
      { label: '活動', value: '觀察、攝影、生態教育' },
      { label: '原則', value: '不餵食、不驚擾、保持距離' }
    ],
    sections: [
      {
        heading: '觀察與教育',
        paragraphs: [
          '園區常見的城市鳥類可在清晨與傍晚觀察；具體物種以現場觀察與公民科學資料為準，本站不列出未經核實的鳥種名錄。',
          '帶兒童觀察時，強調不餵食、不放鞭炮、不進入禁入草叢，保持距離讓鳥類自然活動。'
        ]
      }
    ],
    faqs: [
      { q: '什麼時候鳥最多？', a: '清晨與傍晚常見度較高；物種與數量以現場為準。' },
      { q: '可以餵鳥嗎？', a: '建議不要餵食，以免改變習性或影響生態。' }
    ],
    related: ['nature/trees', 'family/with-toddlers', 'photo/spots'],
    sources: [SOURCE.tourism, SOURCE.maps]
  },
  {
    slug: 'photo/spots',
    group: 'family',
    pillars: ['family', 'photo'],
    title: '屏東公園拍照景點｜機位、時間與取景',
    description: '屏東公園的拍照機位：池畔、涼亭、老樹與遊戲場的取景方向，拍攝時間與實地確認重點。',
    h1: '屏東公園拍照景點',
    lead: '屏東公園的池畔、涼亭、老樹與共融遊戲場都是常見取景處；本頁提供機位與時段方向，實際構圖以現場與光線為準。',
    facts: [
      { label: '常見機位', value: '池畔、涼亭、老樹、遊戲場' },
      { label: '時段', value: '清晨、傍晚、藍調時刻' },
      { label: '注意', value: '勿入禁入區、留意其他遊客' }
    ],
    sections: [
      {
        heading: '取景方向',
        paragraphs: [
          '池畔與拱橋是園區具辨識度的畫面；涼亭與老樹適合安靜的人像與地景。遊戲場以紅尾伯勞溜滑梯為主題，適合親子紀實，但請尊重其他家庭與現場秩序。'
        ]
      },
      {
        heading: '拍攝時間',
        paragraphs: [
          '清晨與傍晚光線柔和、人潮較少；夜間除聖誕節燈飾展期外，園區照明有限，請以現場與活動公告為準。'
        ]
      }
    ],
    faqs: [
      { q: '哪裡最適合拍照？', a: '池畔、涼亭、老樹與遊戲場都具辨識度；構圖以現場為準。' },
      { q: '夜景能拍嗎？', a: '聖誕節燈飾展期有夜間照明；平日夜間照明有限，請現場確認。' }
    ],
    related: ['photo/christmas-lights', 'family/playground', 'nature/trees'],
    sources: [SOURCE.tourism, SOURCE.maps]
  },
  {
    slug: 'photo/christmas-lights',
    group: 'family',
    pillars: ['family', 'photo'],
    title: '2026屏東聖誕節拍照｜燈區與夜拍機位',
    description: '2026屏東聖誕節的夜拍：12 組燈飾、主燈與星光聖誕樹、拍攝時段與機位方向，以及活動期間的人潮與安全。',
    h1: '2026屏東聖誕節拍照',
    lead: '2026屏東聖誕節已於11月6日開幕，園區規劃12組燈飾、10公尺主燈與同高星光聖誕樹，展期至2027年1月3日、每日17:30–22:00；夜拍請以現場燈區與人潮為準。',
    facts: [
      { label: '活動', value: '2026屏東聖誕節（已開幕）' },
      { label: '燈飾', value: '12 組、主燈與星光聖誕樹' },
      { label: '時間', value: '即日起至 2027-01-03，17:30–22:00' },
      { label: '主辦', value: '屏東縣政府' }
    ],
    sections: [
      {
        heading: '燈區與機位',
        paragraphs: [
          '官方活動以「樂園聖誕派對」為主題，園區佈置12組燈飾，主燈「璀璨驚喜盒」與「星光聖誕樹」都是辨識度高的拍攝主體。具體燈區位置以現場與主辦公告為準。',
          '5組燈光秀每15至30分鐘輪番演出，可抓場次間隔拍攝；人多時保持距離，避免阻塞動線。'
        ]
      },
      {
        heading: '夜拍建議',
        paragraphs: [
          '17:30亮燈後的藍調時刻光線較平衡；三腳架與長曝光請留意周圍人潮與園方規範。雨天或強風可能影響燈飾，出發前重查主辦公告。'
        ]
      }
    ],
    faqs: [
      { q: '幾點亮燈？', a: '活動期間每日17:30–22:00；實際以現場公告為準。' },
      { q: '主燈在哪裡？', a: '主燈與星光聖誕樹為主要燈區；位置以現場與主辦公告為準。' }
    ],
    related: ['photo/spots', 'itinerary/christmas-night', 'nearby/pingtung-night-market'],
    sources: [SOURCE.christmas, SOURCE.countyNews, SOURCE.cna, SOURCE.maps],
    event: {
      name: '2026屏東聖誕節',
      startDate: '2026-11-06',
      endDate: '2027-01-03',
      organizer: '屏東縣政府',
      description: '2026屏東聖誕節於屏東公園舉辦，主題「樂園聖誕派對」，設12組燈飾、主燈「璀璨驚喜盒」與「星光聖誕樹」，每日17:30–22:00。'
    }
  },
  {
    slug: 'guides/rainy-day',
    group: 'family',
    pillars: ['family', 'itinerary'],
    title: '屏東公園下雨天｜適遊性、設施與替代安排',
    description: '屏東公園雨天適遊性：戶外設施、遊戲場濕滑、遮蔭與室內替代，以及聖誕節活動遇雨的確認重點。',
    h1: '屏東公園的下雨天',
    lead: '屏東公園以戶外園區為主，雨天會影響遊戲場、園路與夜間燈飾；本頁整理適遊判斷與替代安排，實際以天候與現場公告為準。',
    facts: [
      { label: '性質', value: '戶外城市公園' },
      { label: '影響', value: '遊具濕滑、園路積水、燈飾可能調整' },
      { label: '替代', value: '室內景點、市區展館、咖啡休憩' },
      { label: '查核', value: '中央氣象署、主辦公告' }
    ],
    sections: [
      {
        heading: '雨天怎麼判斷',
        paragraphs: [
          '園區主要為戶外開放空間，雨天時遊戲場設施濕滑、園路可能有積水，遊園舒適度下降。出發前看中央氣象署預報，並以現場狀況決定是否改期。'
        ]
      },
      {
        heading: '替代與調整',
        paragraphs: [
          '若遇雨，可改排屏東美術館、勝利星村室內展區，或市區咖啡與用餐。聖誕節活動期間，燈飾可能因天候調整，請以主辦公告為準。'
        ]
      }
    ],
    faqs: [
      { q: '雨天空開嗎？', a: '園區戶外空間多開放，但設施與動線受天候影響，請現場確認。' },
      { q: '下雨燈飾還亮嗎？', a: '以主辦單位現場公告為準，可能視天候調整。' }
    ],
    related: ['nearby/pingtung-art-museum', 'nearby/shengli-star-village', 'family/playground'],
    sources: [SOURCE.cwa, SOURCE.christmas, SOURCE.maps]
  }
];
