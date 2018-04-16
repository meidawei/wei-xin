<script>
import store from './pages/counter/store.js'
export default {
  beforeCreate(){
    console.log('beforeCreate')
  },
  created () {
    console.log('created')
    store.commit('getData')
    wx.login({
      success: (data) => {
        console.log(data)
      }
    })
    wx.authorize({
      scope: 'scope.userInfo',
      success: (data) => {
        console.log(data)
      }
    })
    wx.getUserInfo({
      success: (data) => {
        console.log(data)
        store.state.userName = data.userInfo.nickName
        store.state.userImgUrl = data.userInfo.avatarUrl
      }
    })
  },
  mounted(){
    console.log('mounted')
    wx.hideToast()
  }
}
</script>

<style lang="less">
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
  margin: 0;
  padding: 0;
}
</style>
