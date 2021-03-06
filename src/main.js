import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main','pages/commodity/main','pages/user/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: 'white',
      navigationBarTitleText: '小程序',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#000',
      selectedColor: '#000',
      backgroundColor: '#fff',
      position: 'bottom',
      list: [{
        pagePath: 'pages/index/main',
        text: '首页',
        iconPath: './static/images/Home.png',
        selectedIconPath: './static/images/selectedHome.png'
      }, {
        pagePath: 'pages/user/main',
        text: '我的',
        iconPath: './static/images/User.png',
        selectedIconPath: './static/images/selectedUser.png'
      }]
    },
    debug: false,
    networkTimeout: {
      request: 40000
    }
  }
}
