<script>
import store from './vuex/store.js'
export default {
  beforeCreate(){
    console.log('beforeCreate')
  },
  created () {
    store.commit('getData')
    wx.login({
      success: (data) => {
      }
    })
    wx.authorize({
      scope: 'scope.userInfo',
      success: (data) => {
      }
    })
    wx.getUserInfo({
      success: (data) => {
        store.state.userName = data.userInfo.nickName
        store.state.userImgUrl = data.userInfo.avatarUrl
      }
    })
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
