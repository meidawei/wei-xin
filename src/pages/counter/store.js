import Vue from 'vue'
import Vuex from 'vuex'

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
    shopping: [],
    showPay: 0
  },
  mutations: {
    getData: (state) => {
      const obj = state
      if(obj.canGet){
        obj.canGet = false
        obj.loading = true
        setTimeout(() => {
          obj.goodsData.push(...[{
              key: '001',
              name: '商品1',
              price: '100$'
          },{
              key: '002',
              name: '商品2',
              price: '200$'
          },{
              key: '003',
              name: '商品3',
              price: '300$'
          },{
              key: '004',
              name: '商品4',
              price: '400$'
          },{
            key: '005',
            name: '商品5',
            price: '500$'
        },{
            key: '006',
            name: '商品6',
            price: '600$'
        }])
          obj.loading = false
          obj.canGet = true
          obj.showData = obj.goodsData
        }, 3000)
      }
    },

    setSkey: (state,data) => {
      state.sKey = data.data
    },

    setShow: (state) => {
      console.log(state)
      if(state.sKey === ''){
        state.showData = state.goodsData
      }else{
        state.showData = state.goodsData.filter( item => {
          const data = state.sKey
          return item.name.indexOf(`${data}`) > -1
        })
      }
    },

    shopping: (state,data) => {
      const obj = state
      const canAnd = obj.shopping.filter(item =>
       item.key === data[0].key
      ).length
      if(canAnd === 0){
        data[0].number = 1
        obj.shopping.push(...data)
      }else{
        obj.shopping.map(item => {
          if(item.key === data[0].key){
            item.number ++
            return
          }
        })
      }
    },

    allPay: (state) => {
      const obj = state
      let pay = 0;
      obj.shopping.map(item => {
         pay += (parseInt(item.price) * item.number)
      })
      state.showPay = pay
    }

  },

  getters: {
    loading: (state) => {
      return state.loading
    }
  }
})

export default store
