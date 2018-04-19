import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import getters from './getter'
console.log(mutations)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userName: '',
    userImgUrl: '',
    count: 0,
    goodsData: [],
    loading: true,
    canGet: true,
    showData: [],
    sKey: '',
    oldSkey: '',
    shopping: [],
    showPay: 0,
    bookInfo:[],
    searchKey: 'javascript'
  },

  mutations,

  getters
})

export default store
