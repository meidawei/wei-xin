<template>
    <div class="goods">
      <div class="item" v-for="item in goodsData" :key="item.id">
              <div>
              <a @click="bookInfo(item.id);linkTo()">
                <img :src="item.images.small" alt="">
              </a>
              </div> 
              <span>{{item.title}}</span>
              <span>{{item.price}}</span>
      </div>
      <div class="load" v-if="loading">
        <img :src="loadPng" alt="loading" class="loading-png">
      </div>
    </div>    
</template>
<script>
  import store from '../vuex/store.js'
  export default {
    created(){
      wx.setTabBarBadge({
        index: 1,
        text: this.redPoint
      })
    },
    onShow(){
      wx.setTabBarBadge({
        index: 1,
        text: this.redPoint
      })
    },
    onReachBottom(){
        this.getData()
    },
    data(){
        return {
            name: 'goodsCar',
            loadPng: require('../images/loading.png'),
        }
    },
    methods:{
      getData(){
          store.commit('getData','onReachBottom')
      },
      bookInfo: (id) => {
            store.commit('bookInfo',[id])
      },
      linkTo: () => {
        wx.navigateTo({
          url: '../../pages/commodity/main'
        })
      }
    },
    computed: {
        loading : () => {
          return store.getters.loading
        },
        goodsData : () => {
          return store.state.goodsData
        },
        redPoint: () => {
          return store.getters.redPoint.toString()
        }
    }
  }
</script>
<style lang="less" scoped>
.goods {
  display: flex;
  width: 750rpx;
  flex-flow: row wrap;
  margin-top: 30rpx;
  background: #eee;
}
.load {
  width: 100%;
  text-align: center;
  background: #fff;
}
.loading-png {
  height: 60rpx;
  width: 60rpx;
  margin: 0 auto;
  animation: load-rotate 2s infinite;
}
@keyframes load-rotate {
  0% {transform: rotate(0)}
  100% {transform: rotate(360deg)}
}
.item {
  display: flex;
  flex-flow: column nowrap;
  width: 750rpx/2 - 28rpx;
  height: 600rpx;
  background: #fff;
  margin: 14rpx;
  border-radius: 8rpx;
  padding-top: 18px;
  text-align: center;
  div {
    box-sizing: border-box;
    width: 100%;
    height: 480rpx;
    a {
      height: 100%;
      width: 100%;
      box-shadow: 4rpx 4rpx 4rpx #ccc;
      text-align: center;
      img {
        width: 90%;
        height: 90%;
      }
    }
  }
  span {
    padding-top:8rpx;
    font-size: 24rpx;
    height: 110rpx;
  }
}
</style>
