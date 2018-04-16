<template>
    <div class="goods">
      <div class="item" v-for="item in goodsData" :key="item.key"  @click="shopping(item);changePoint()">
          {{item.name}}
          {{item.price}}
      </div>
      <div class="load" v-if="loading">
        <img :src="loadPng" alt="loading" class="loading-png">
      </div>
    </div>    
</template>
<script>
  import store from '../pages/counter/store.js'
  export default {
      created(){
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
              loadPng: require('../../dist/static/imges/loading.png'),
          }
      },
      methods:{
        getData(){
            store.commit('getData')
        },
        shopping(data){
            store.commit('shopping',[data])
        },
        changePoint(){
            wx.setTabBarBadge({
              index: 1,
              text: this.redPoint
            })
        }
      },
      computed: {
          loading : () => {
            return store.getters.loading
          },
          goodsData : () => {
            return store.state.showData
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
      margin-top:30rpx;
      background: #eee
    }
    .load{
        width: 100%;
        text-align: center;
        background: #fff
    }
    .loading-png{
        height: 60rpx;
        width: 60rpx;
        margin: 0 auto;
        animation: load-rotate 2s infinite;
    }
  .item{
      width: 750rpx/2 - 28rpx;
      height: 400rpx;
      background: #fff;
      margin: 14rpx;
      border-radius: 6rpx
  }
  @keyframes load-rotate {
      from {transform: rotate(0)}
      to {transform: rotate(360deg)}
  }
</style>
