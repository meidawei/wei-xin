const mutations = {
  getData: (state, onReachBottom) => {
    const obj = state
    let start = obj.goodsData.length
    if (obj.sKey !== obj.oldSkey) {
      start = 0
    }
    if (onReachBottom === 'onReachBottom') {
      start = obj.goodsData.length
    }
    if (obj.canGet) {
      obj.canGet = false
      obj.loading = true
      wx.request({
        url: 'http://localhost:8001/',
        data: {
          search: obj.sKey || obj.searchKey,
          start: start
        },
        success: (data) => {
          if (obj.sKey === obj.oldSkey || onReachBottom === 'onReachBottom') {
            obj.goodsData.push(...data.data.books)
          } else {
            obj.goodsData = []
            obj.goodsData.push(...data.data.books)
          }
        },
        complete: () => {
          obj.loading = false
          obj.canGet = true
          obj.showData = obj.goodsData
        }
      })
    }
  },

  setSkey: (state, data) => {
    state.oldSkey = state.sKey
    state.sKey = data
  },

  shopping: (state, data) => {
    const obj = state
    if (data === 'toTrade') {
      data = obj.bookInfo[0]
    }
    const canAnd = obj.shopping.filter(item =>
      item.id === data.id
    ).length
    if (canAnd === 0) {
      data.number = 1
      obj.shopping.push(...[data])
    } else {
      obj.shopping = obj.shopping.map(item => {
        if (item.id === data.id) {
          item.number++
        }
        return item
      })
    }
  },

  bookInfo: (state, data) => {
    const obj = state
    const target = data.toString()
    obj.bookInfo = obj.goodsData.filter((item) => {
      if (target === item.id) return true
    })
  }
}
export default mutations
