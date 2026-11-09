/** 常用資料來源，供各專題頁依主題選用；皆為官方或主辦單位頁面。 */
import type { TopicSource } from './topics';

export const SOURCE: Record<string, TopicSource> = {
  playground: { label: '交通部觀光署：屏東公園共融遊戲場', url: 'https://media.taiwan.net.tw/zh-tw/portal/travel/details/attraction_376530000a_000022' },
  countyPark: { label: '交通部觀光署：屏東縣民公園', url: 'https://media.taiwan.net.tw/zh-tw/portal/travel/details/attraction_376530000a_000002' },
  christmas: { label: '2026屏東聖誕節主辦方活動網站', url: 'https://www.amazing-pingtung.com/ptcm' },
  countyNews: { label: '屏東縣政府：2026屏東聖誕節新聞稿', url: 'https://www.pthg.gov.tw/News_Content.aspx?n=EC690F93E81FF22D&s=3F88BCF2D16CDB21' },
  cna: { label: '中央社：2026屏東聖誕節開幕報導', url: 'https://www.cna.com.tw/news/aloc/202611060330.aspx' },
  maps: { label: '屏東公園 Google 地圖導航', url: 'https://maps.app.goo.gl/EDkUSZQMdvhaWmhK6' },
  culture: { label: '屏東縣政府文化資料數位典藏', url: 'https://digitalarchive.cultural.pthg.gov.tw/' },
  memory: { label: '國家文化記憶庫：屏東公園', url: 'https://tcmb.culture.tw/zh-tw/detail?id=11000001465&indexCode=MOCCOLLECTIONS' },
  heritage: { label: '國家文化資產網：阿猴城門', url: 'https://nchdb.boch.gov.tw/assets/overview/monument/19851127000082' },
  victory: { label: '交通部觀光署：勝利星村', url: 'https://www.taiwan.net.tw/m1.aspx?id=A12-00501&sNo=0001016' },
  tourism: { label: '屏東旅遊網：遊戲場、交通及設施', url: 'https://www.i-pingtung.com/baby/ptpark' },
  cwa: { label: '中央氣象署：預報與警特報', url: 'https://www.cwa.gov.tw/' }
};
