export default {
  pages: [
    'pages/home/index',
    'pages/honor/index',
    'pages/news/index',
    'pages/user/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/home/index',
        text: '้ฆ้กต',
        iconPath: './assets/tab/home.png',
        selectedIconPath: './assets/tab/home-active.png',
      },
      {
        pagePath: 'pages/user/index',
        text: 'ๆ็',
        iconPath: './assets/tab/user.png',
        selectedIconPath: './assets/tab/user-active.png',
      },
    ],
    color: '#888',
    selectedColor: '#2ACF7B',
    backgroundColor: '#fff',
    borderStyle: 'black',
  },
}
