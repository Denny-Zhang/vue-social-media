export interface ListItem {
  title: string
  icon: string
  color?: string
}

export interface TabItem {
  key: string
  name: string
  component: string
}

export const tags: string[] = [
  '富含創造力',
  '善於傾聽',
  '喜歡交流',
  '個性直接',
  '最小努力原則',
  '專注研究設計',
  '前端開發',
  'vue2/3',
  'DDD',
  '架構研究',
]

export const teams: ListItem[] = [
  {
    icon: 'emojione-monotone:letter-a',
    title: '英文',
    color: '#55d187',
  },
  {
    icon: 'solar:pen-bold',
    title: '畫畫',
    color: '#7c51b8',
  },
  {
    icon: 'icon-park-outline:muscle',
    title: '健身',
    color: 'orange',
  },
  {
    icon: 'fluent-emoji:water-wave',
    title: '游泳',
    color: '#00adf7',
  },
  {
    icon: 'logos:adobe-animate',
    title: '動漫',
    color: '#7c51b8',
  },
  {
    icon: 'material-symbols:mindfulness-outline',
    title: '心理學',
    color: '#ff4000',
  },
]

export const details: ListItem[] = [
  {
    icon: 'ic:outline-contacts',
    title: '交互專家',
  },
  {
    icon: 'grommet-icons:cluster',
    title: '前端教科書',
  },
  {
    icon: 'bx:bx-home-circle',
    title: '高雄市三民區',
  },
]

export const achieveList: TabItem[] = [
  {
    key: '1',
    name: '專案',
    component: 'Article',
  },
  {
    key: '2',
    name: 'Smeeth活動',
    component: 'Project',
  },
  // {
  //   key: '3',
  //   name: '關於',
  //   component: 'Application',
  // },
]

export const actions: any[] = [
  { icon: 'clarity:star-line', text: '156', color: '#018ffb' },
  { icon: 'bx:bxs-like', text: '156', color: '#459ae8' },
  { icon: 'bx:bxs-message-dots', text: '2', color: '#42d27d' },
]

export const projectList = (() => {
  const result: any[] = []
  result.push({
    title: 'SmeetH私覓',
    description: ['私密交友', '聊色軟體', '素人自拍短片', '18+'],
    content: '基於 Vue 2,vue-router, vuex 和 sass 構建完整的前台項目。',
    url: 'https://smeeth.in/',
    fullTitle: 'SmeetH私覓 - 私密交友｜聊色軟體｜素人自拍短片 | smeeth.in',
    fullDescription:
      'SmeetH私覓｜大尺度聊天交友網，眾多正妹的私密影片照片陪聊心事，水鑽解鎖素人動態永久收藏。OL、護理師、單身美人妻、女大生自拍線上看，亞洲最強聊色看片網，真人一對一親自回覆壞壞訊息。',
    imgUrl: 'https://smeeth.in/download/shareImage.png',
    docUrl: 'https://www.notion.so/Smeeth-5fe3a5a4e93941889757a84dda7937d6?pvs=4'
  }, {
    title: 'vue-social-world 專案',
    description: ['研究', '社交', '關於我'],
    content: '參照基於 vue-vben-admin 後台專案建構而成的前台，目前部署於Github pages上，作為展示用途。目前尚於研究中...',
    url: 'https://github.com/Denny-Zhang/vue-social-media',
    fullTitle: 'Github | vue-social-world',
    fullDescription:
      'GitHub is where people build software. More than 100 million people use GitHub to discover, fork, and contribute to over 420 million projects.',
    imgUrl: 'https://github.com/fluidicon.png',
    docUrl: 'https://www.notion.so/vue-social-media-6fe9a22b6dd6483cbeb11ff8b1b2617a?pvs=4'
  })
  return result
})()

const eventList = [
  {
    title: '全面啟動',
    content: '該任務看板適用對象為SG，也就是平台上的主播，目的是激勵主播多多活躍於平台上...',
    url: 'https://www.notion.so/Inception-93e2828d924748068a9dbb0f578b9197?pvs=4',
    imgUrl: 'events/inception.png'
  },
  {
    title: '水鑽瓜分池',
    content: '該活動開放給所有的用戶參與，不限身份，目的是消耗用戶身上的水鑽，因此，藉由猜...',
    url: 'https://www.notion.so/GuessNumber-d2b14e47a46545aa80a0b20fdef33cc2?pvs=4',
    imgUrl: 'events/guessNumber.png'
  },
  {
    title: '驚喜禮包',
    content: '該活動是配合App內的背包、折價券和禮物功能，用比較優惠的方式將一些小項目構成...',
    url: 'https://www.notion.so/GiftPackage-1ba43bb706f04244a9c5ccf94cd0be92?pvs=4',
    imgUrl: 'events/giftPackage.png'
  },
  {
    title: '奔跑倉鼠',
    content: '此活動通過一系列與倉鼠互動並展示相關動畫，主播一開始是可以創建倉鼠的，創建完...',
    url: 'https://www.notion.so/RunningHamster-a7c3289d3a274989b9dea753a1d6511d?pvs=4',
    imgUrl: 'events/runningHamster.png'
  },
  {
    title: '濃情中秋',
    content: '中秋節活動，讓用戶可以玩翻牌遊戲並獲得月餅與月神點，也可以直接透過水鑽購買玉兔...',
    url: 'https://www.notion.so/EnthusiasmMoonFestival-1a150e9dc7e54ed99a85f6eab7853741?pvs=4',
    imgUrl: 'events/moonFestival.png'
  },
  {
    title: '萌鬼出沒',
    content: '萬聖節活動，讓使用者進行遊戲賺取南瓜燈，並贈送給女神，也可以贈送金南瓜，幫女神...',
    url: 'https://www.notion.so/GhostAppearances-ea0d8448da244468a0ba25f3caaa42ec?pvs=4',
    imgUrl: 'events/ghostAppearances.png'
  },
  {
    title: '撩心趁現在',
    content: '在軟體內，與女神聊天是需要支付水鑽費用的，藉此新增一個可以讓使用者與女神有不同...',
    url: 'https://www.notion.so/WinHeartNow-c269679d5bbc4d528492f0c7b0d09f04?pvs=4',
    imgUrl: 'events/winHeartNow.png'
  },
]
export const smeethEventList = (() => {
  const result: any[] = []
  for (let i = 0; i < eventList.length; i++) {
    result.push(eventList[i])
  }
  return result
})()

export const aboutThisProject = (() => {
  const result: any[] = []
  for (let i = 0; i < 8; i++) {
    result.push({
      title: 'Denny Admin',
      icon: 'emojione-monotone:letter-a',
      color: '#1890ff',
      active: '100',
      new: '1,799',
      download: 'bx:bx-download',
    })
  }
  return result
})()
