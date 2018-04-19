const getters = {
  loading: (state) => {
    return state.loading
  },
  redPoint: (state) => {
    let pointNumber = 0
    const obj = state
    if (obj.shopping.length === 0) return 0
    obj.shopping.map((item) => {
      pointNumber += item.number
    })
    return pointNumber
  },
  allPay: (state) => {
    const obj = state
    let pay = 0;
    obj.shopping.map(item => {
      const price = parseFloat(item.price.match(/[\d.]/g).toString().replace(/,/g,'')) 
      console.log(price)
      pay += ( price * item.number)
    })
    return pay.toFixed(2)
  }
}
export default getters
