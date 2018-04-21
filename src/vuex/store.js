import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import getters from './getter'
console.log(mutations)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    //用户名
    userName: '',
    //用户头像
    userImgUrl: '',
    //豆瓣图书请求的总数据
    goodsData: [],
    loading: true,
    //数据是否可以加载下一页
    canGet: true,
    //搜索关键字
    sKey: '',
    //上一个搜索关键字
    oldSkey: '',
    //购物车数据
    shopping: [],
    //图书详情页数据
    bookInfo:[],
    //默认搜索key
    searchKey: '水彩'
  },

  mutations,

  getters
})

export default store
