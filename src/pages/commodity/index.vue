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
    <div class="trade">
      <div class="remind">
          <span :class="{active1 : animation1}">{{bookNumber}}</span>        
      </div>
      <img :src="tradeIcon" alt="加入购物车"  @click="toTrade">
    </div>
  </div>
</template>
<script>
  import store from '@/vuex/store'
  export default {
    created(){
      console.log("商品详情页数据加载完成！")
    },
    mounted(){
      console.log('商品详情页DOM渲染完成！')
    },
    destroyed(){
      console.log('商品详情页destroyed!')
    },    
    data(){
        return {
            name: 'commodity',
            tradeIcon: require('../../images/trade.png'),
            animation1: false,
            animation2: true
        }
    },
    methods: {
      toTrade: function(){
        this.animation1 = !this.animation1
        setTimeout(() => {
        this.animation1 = !this.animation1
        }, 1000);
        store.commit('shopping','toTrade')
      }
    },
    computed: {
      info: () => {
        return store.state.bookInfo
      },
      bookNumber: () => {
        return store.getters.bookNumber
      }
    },
  }
</script>
<style lang="less" scoped>
div {
  margin-top: 20rpx;
}
h2 {
  text-align: center;
}
p {
  font-size: 36rpx;
  text-indent: 2em;
}
.red {
  color: brown;
}
.image-box {
  height: 600rpx;
  width: 100%;
  text-align: center;
  img {
    height: 600rpx;
    width: 480rpx;
  }
}
.trade {
  position: fixed;
  width: 100rpx;
  height: 100rpx;
  bottom: 60rpx;
  right: 60rpx;
  border-radius: 50%;
  text-align: center;
  img {
    width: 100rpx;
    height: 100rpx;
  }
}
.remind {
  position: absolute;
  width: 100rpx;
  height: 100rpx;
  top: -120rpx;
  font-size: 24rpx;
  background: #000;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 100rpx;
  overflow: hidden;
  span {
    position: absolute;
    display: block;
    width: 100rpx;
    height: 100rpx;
    text-align: center;
    line-height: 100rpx;
    top: 0;
  }
}
.active1 {
  animation: up1 1s ease-out;
  animation-fill-mode:forwards 
}
@keyframes up1 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
