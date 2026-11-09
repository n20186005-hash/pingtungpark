import type { Topic } from './topics';
import { SOURCE } from './topic-sources';

export const TOPICS_NEARBY: Topic[] = [
  {
    slug: 'nearby/shengli-star-village',
    group: 'nearby',
    pillars: ['attractions'],
    title: '勝利星村｜日式宿舍群與屏東公園行程',
    description: '勝利星村文化資產園區：日式宿舍群、文創店家與歷史脈絡，以及與屏東公園如何安排在同一日行程。',
    h1: '勝利星村文化資產園區',
    lead: '勝利星村是屏東市以日式宿舍群修復再利用的文創與文化園區，距離屏東公園不遠，可與公園排在同一日行程；開放與店家資訊以縣府與現場公告為準。',
    facts: [
      { label: '性質', value: '日式宿舍群修復的文化資產園區' },
      { label: '特色', value: '歷史建築、文創店家、綠蔭散步' },
      { label: '與公園', value: '同在屏東市區，可同日程' },
      { label: '查核', value: '屏東縣政府、地圖、現場公告' }
    ],
    sections: [
      {
        heading: '勝利星村是什麼',
        paragraphs: [
          '勝利星村以戰後的日式宿舍群為基礎修復再利用，現為結合歷史建築、文創店家與綠蔭散步的文化園區。交通部觀光署將其列為屏東的旅遊景點之一。',
          '與屏東公園同屬屏東市區的綠地與歷史資源，兩者風格不同：公園是百年城市公園，星村是宿舍群文化園區，請勿混用照片、地址或設施資料。'
        ]
      },
      {
        heading: '與屏東公園怎麼排',
        paragraphs: [
          '兩者距離以地圖為準；可行安排是上午公園、下午星村，或反向。星村的店家與展覽營業時間不一，出發前以縣府與地圖確認。'
        ]
      }
    ],
    faqs: [
      { q: '要門票嗎？', a: '園區戶外多可免費散步；個別店家、展覽或活動收費以現場為準。' },
      { q: '從公園怎麼去？', a: '以地圖規劃步行或公車動線，距離依路線而異。' }
    ],
    related: ['nearby/pingtung-station', 'history/ahou-park', 'itinerary/half-day'],
    sources: [SOURCE.victory, SOURCE.maps, SOURCE.culture]
  },
  {
    slug: 'nearby/ahou-city-gate',
    group: 'nearby',
    pillars: ['attractions', 'history'],
    title: '阿猴城門｜屏東公園內的古蹟參觀',
    description: '阿猴城門：位於屏東公園內的歷史城門、古蹟身分與參觀路線，以及與公園行程的安排。',
    h1: '屏東公園內的阿猴城門',
    lead: '阿猴城門是屏東公園園區內的歷史遺構，經列為古蹟（國家文化資產網登錄）；它位在公園內，遊園時可一併參觀，但開放細節以現場與主管機關公告為準。',
    facts: [
      { label: '位置', value: '屏東公園園區內' },
      { label: '身分', value: '古蹟（文化資產網登錄）' },
      { label: '與公園', value: '遊園動線可一併安排' },
      { label: '查核', value: '文化部文化資產局、現場公告' }
    ],
    sections: [
      {
        heading: '阿猴城門的來歷',
        paragraphs: [
          '阿猴城門為屏東公園內的歷史城門遺構，文化部文化資產局的資產網收錄其古蹟身分。它見證屏東市從舊地名「阿猴」到現代市區的變遷，是遊園時兼具歷史與拍照價值的地標。',
          '本站立即可查的來源說明其古蹟身分，但未提供完整開放時段；園區為公共空間，城門本體的近距離參觀是否受限，請以現場與主管機關公告為準。'
        ]
      }
    ],
    faqs: [
      { q: '阿猴城門要門票嗎？', a: '園區公共空間多免費開放；城門本體的參觀限制以現場公告為準。' },
      { q: '在公園哪裡？', a: '位於屏東公園園區內，請以地圖與園內指標定位。' }
    ],
    related: ['history/ahou-park', 'nearby/pingtung-county-park', 'nearby/shengli-star-village'],
    sources: [SOURCE.heritage, SOURCE.culture, SOURCE.maps]
  },
  {
    slug: 'nearby/pingtung-art-museum',
    group: 'nearby',
    pillars: ['attractions'],
    title: '屏東美術館｜展覽查詢與文化行程',
    description: '屏東美術館的參觀資訊：展覽查詢、開放時間與屏東公園的文化行程安排，營業細節以官方公告為準。',
    h1: '屏東美術館',
    lead: '屏東美術館是屏東市的文化展覽場館，適合與屏東公園排在同一日文化行程；當期展覽、開放時間與休館日請以官方公告為準。',
    facts: [
      { label: '性質', value: '市立美術展覽場館' },
      { label: '查核', value: '官方展覽資訊、地圖' },
      { label: '與公園', value: '同市區文化行程' }
    ],
    sections: [
      {
        heading: '參觀前確認',
        paragraphs: [
          '美術館的當期展覽、開放時間與休館日會變動，出發前先查官方展覽資訊與地圖定位。與屏東公園同屬市區文化資源，可安排半天文化行程。'
        ]
      }
    ],
    faqs: [
      { q: '要門票嗎？', a: '依展覽與場館公告而定；部分展覽可能收費，請以官方資訊為準。' }
    ],
    related: ['nearby/shengli-star-village', 'history/ahou-park'],
    sources: [SOURCE.maps, SOURCE.culture]
  },
  {
    slug: 'nearby/pingtung-night-market',
    group: 'nearby',
    pillars: ['attractions'],
    title: '屏東觀光夜市｜與公園的夜間行程',
    description: '屏東觀光夜市的位置、特色與夜間行程安排，與屏東公園的順路動線及查核重點。',
    h1: '屏東觀光夜市',
    lead: '屏東觀光夜市是屏東市夜間飲食與散步去處；具體位置、營業日與攤位以縣府與現場公告為準，本站不寫入未核實的日期或價格。',
    facts: [
      { label: '性質', value: '屏東市觀光夜市' },
      { label: '與公園', value: '可排同日夜間行程' },
      { label: '查核', value: '縣府公告、地圖、現場' }
    ],
    sections: [
      {
        heading: '夜間行程怎麼排',
        paragraphs: [
          '屏東觀光夜市與屏東公園同屬屏東市區，可行安排是白天遊園、夜間逛夜市。兩者距離與交通以地圖為準，勿預設步行直達。',
          '聖誕節展期間另有園內販賣屋與週邊活動市集，那是活動限定，不等同夜市常態營業。'
        ]
      }
    ],
    faqs: [
      { q: '夜市每天開嗎？', a: '營業日以縣府與現場公告為準。' },
      { q: '與公園距離？', a: '以地圖規劃動線，距離依路線而異。' }
    ],
    related: ['food/pingtung-night-market', 'itinerary/one-day', 'itinerary/christmas-night'],
    sources: [SOURCE.maps, SOURCE.tourism]
  },
  {
    slug: 'nearby/pingtung-county-park',
    group: 'nearby',
    pillars: ['attractions'],
    title: '屏東縣民公園｜與屏東公園不同地點',
    description: '屏東縣民公園與屏東公園是兩座不同公園：縣民公園以糖業工業遺構與水岸為特色，地址、設施與地圖座標不可混用。',
    h1: '屏東縣民公園（另一座公園）',
    lead: '屏東縣民公園是與屏東公園不同的景點，官方旅遊資料將其列為獨立景點，特色包含糖業工業遺構與水岸綠地；兩者地址、設施與地圖座標不可混用。',
    facts: [
      { label: '與本站主題', value: '不同地點，非屏東公園' },
      { label: '特色', value: '糖業工業遺構、水岸綠地（官方）' },
      { label: '來源', value: '交通部觀光署列為獨立景點' },
      { label: '注意', value: '勿混用照片、地址、座標' }
    ],
    sections: [
      {
        heading: '為什麼要分清楚',
        paragraphs: [
          '交通部觀光署將「屏東公園」與「屏東縣民公園」列為兩個不同景點。縣民公園以糖業工業遺構與水岸為特色，與本站主題「屏東市公園路的百年公園」是不同地點。',
          '兩者的照片、地址、設施與地圖座標不可互相套用；規劃行程時請確認你要去的是哪一座，再以該園的官方資訊與地圖對齊。'
        ]
      }
    ],
    faqs: [
      { q: '縣民公園離屏東公園近嗎？', a: '兩者是不同的地點，距離與交通以地圖為準，勿預設相近。' },
      { q: '縣民公園要門票嗎？', a: '以該園官方與現場公告為準；本站不寫入未核實資訊。' }
    ],
    related: ['nearby/shengli-star-village', 'nearby/pingtung-station', 'history/ahou-park'],
    sources: [SOURCE.countyPark, SOURCE.tourism, SOURCE.maps]
  },
  {
    slug: 'nearby/pingtung-station',
    group: 'nearby',
    pillars: ['attractions'],
    title: '屏東火車站周邊｜轉乘與順遊動線',
    description: '屏東火車站周邊散步與旅遊路線：與屏東公園、勝利星村的轉乘動線，以及市區順遊建議。',
    h1: '屏東火車站周邊',
    lead: '臺鐵屏東站是進入屏東市的主要門戶，周邊可接屏東公園、勝利星村與市區景點；具體步行與公車動線以地圖為準。',
    facts: [
      { label: '角色', value: '進入屏東市的主要門戶' },
      { label: '可接', value: '屏東公園、勝利星村、市區' },
      { label: '交通', value: '步行、505/509/516 公車' }
    ],
    sections: [
      {
        heading: '以車站為起點',
        paragraphs: [
          '從屏東站出發，可步行或搭接駁公車到屏東公園，再延伸到勝利星村與市區景點。地圖距離約 1 公里級，但實際步行時間依入口與步伐而異。',
          '若搭大眾運輸，先查返程車次與末班車，尤其聖誕節夜間散場人潮集中時。'
        ]
      }
    ],
    faqs: [
      { q: '車站到公園要走多久？', a: '地圖約 1 公里級，實際以地圖步行估算為準。' },
      { q: '有行李怎麼辦？', a: '優先選公車或平坦園路；車站與園區設施以現場為準。' }
    ],
    related: ['transport/from-pingtung-station', 'nearby/shengli-star-village', 'itinerary/walking-tour'],
    sources: [SOURCE.maps, SOURCE.tourism]
  },
  {
    slug: 'history/ahou-park',
    group: 'nearby',
    pillars: ['attractions', 'history'],
    title: '阿猴公園與中山公園｜屏東公園舊名與沿革',
    description: '屏東公園的舊名與歷史沿革：舊地名「阿猴」、戰後曾稱中山公園，以及縣志記載的早期建設年代與查證方式。',
    h1: '屏東公園的舊名與沿革',
    lead: '屏東公園在屏東市公園路，是具百年歷史的城市公園；舊地名「阿猴」與戰後曾使用的「中山公園」名稱，是理解其沿革的線索，但不同來源採用的歷史節點不同。',
    facts: [
      { label: '現名', value: '屏東公園' },
      { label: '舊地名', value: '阿猴（屏東舊稱）' },
      { label: '曾用名', value: '中山公園（戰後時期）' },
      { label: '早期建設', value: '縣志記載 1913 年起建、1915 年完成' }
    ],
    sections: [
      {
        heading: '名稱的演變',
        paragraphs: [
          '屏東在日治時期舊稱「阿猴」，公園所在城市隨後更名屏東；園區在戰後曾使用「中山公園」等名稱。查閱文獻時，這些舊名都指向同一座市區公園的不同階段。',
          '關於建園年份，不同來源採用的歷史節點不一。屏東縣志記載早期設施於 1913 年開始建設、1915 年完成，可視為園區現代化的重要節點；引用時建議說明依據，而非單一絕對年份。'
        ]
      },
      {
        heading: '查證來源',
        paragraphs: [
          '歷史與舊名可參考屏東縣政府文化資料數位典藏與國家文化記憶庫；具體年代與設施變遷，請以官方文化資料與縣志為準。'
        ]
      }
    ],
    faqs: [
      { q: '阿猴公園就是屏東公園嗎？', a: '「阿猴」是屏東舊地名，所指公園即今屏東公園；不同名稱反映不同年代。' },
      { q: '公園是哪一年建的？', a: '縣志記載早期設施 1913 年起建、1915 年完成；不同來源節點不同，請說明依據。' }
    ],
    related: ['nearby/ahou-city-gate', 'history/monuments', 'nearby/shengli-star-village'],
    sources: [SOURCE.culture, SOURCE.memory, SOURCE.heritage]
  },
  {
    slug: 'history/monuments',
    group: 'nearby',
    pillars: ['attractions', 'history'],
    title: '屏東公園內的歷史紀念碑｜位置與脈絡',
    description: '屏東公園內的歷史紀念碑與遺構：阿猴城門等遺構的參觀背景，以及為什麼個別碑文細節需以現場與文化資料核實。',
    h1: '屏東公園內的歷史紀念碑',
    lead: '屏東公園園區內留有阿猴城門等歷史遺構，是遊園時兼具歷史與拍照價值的地標；個別碑文、年代與解說細節請以現場與文化資料為準。',
    facts: [
      { label: '園內遺構', value: '阿猴城門等' },
      { label: '查核', value: '現場解說、文化資料、主管機關' },
      { label: '注意', value: '個別碑文與年代以現場為準' }
    ],
    sections: [
      {
        heading: '園內的歷史層次',
        paragraphs: [
          '屏東公園擁有百年歷史，園區內除阿猴城門外，也保留不同年代的紀念物與老樹景觀。這些遺構共同構成公園的歷史層次，但個別碑文、立碑年代與解說，請以現場與文化資料核實，避免轉述未確認細節。'
        ]
      }
    ],
    faqs: [
      { q: '園內還有什麼古蹟？', a: '以阿猴城門等為主要歷史遺構；其他紀念物細節請看現場解說與文化資料。' }
    ],
    related: ['nearby/ahou-city-gate', 'history/ahou-park'],
    sources: [SOURCE.heritage, SOURCE.culture, SOURCE.memory]
  }
];
