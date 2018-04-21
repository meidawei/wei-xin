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
      pay += ( price * item.number)
    })
    return pay.toFixed(2)
  },
  bookNumber: (state) => {
    const obj = state
    console.log(obj.shopping)
    let number = obj.shopping.length === 0 ? 0 : obj.shopping.filter((item)=>{
      return obj.bookInfo[0].id === item.id
    })
    if(!number.length){
      return 0
    }else{
      return number = number[0].number
    }
  }
}
export default getters
