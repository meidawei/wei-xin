<template>
  <div class="container">
    <div class="image-box"><img :src="info[0].images.large" alt="info[0].title"></div>
    <div class="red">{{info[0].title}}</div>
    <div>出版时间：{{info[0].pubdate}}</div>
    <div>出版时间：{{info[0].publisher}}</div>
    <div> 页数：{{info[0].pages}}</div>
    <div class="red">{{info[0].price}}</div>
    <div>作者：<span v-for="item in info[0].author" :key="item" class="red">{{item}}</span></div>
    <div>
      <h2>作者简介</h2>
      <p>
        {{info[0].author_intro}}
      </p>
    </div>
    <div>
      <h2>书本简介</h2>
      <p>
        {{info[0].summary}}
      </p>
    </div>
    <div class="trade" @click="toTrade">
      <img :src="tradeIcon" alt="加入购物车">
    </div>
  </div>
</template>
<script>
  import store from '@/vuex/store'
  export default {
    data(){
        return {
            name: 'commodity',
            tradeIcon: require('../../images/trade.png')
        }
    },
    methods: {
      toTrade: () => {
        const data = 'toTrade'
        store.commit('shopping',data)
      }
    },
    computed: {
      info: () => {
        return store.state.bookInfo
      }
    }
  }
</script>
<style lang="less" scoped>
div{
  margin-top:20rpx;
}
h2{
  text-align: center
}
p {
  font-size: 36rpx;
  text-indent: 2em
}
.red{
  color: brown
}
.image-box{
  height: 600rpx;
  width: 100%;
  text-align: center;
  img{
    height:600rpx;
    width: 480rpx;
    box-shadow: 4rpx 4rpx 6rpx #ccc
  }
}
.trade{
  position: fixed;
  width: 100rpx;
  height: 100rpx;
  background:rgba(0,0,0,0.1);
  bottom: 60rpx;
  right: 60rpx;
  border-radius: 50%;
  text-align: center;
  img{
    width: 100rpx;
    height: 100rpx;
  }
}
</style>
