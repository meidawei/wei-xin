<template>
  <div class="container">
    <div class="user-info">
      <div>
        <img :src="userImgUrl" alt="info-image" class="info-img">
      </div>
      <div>
        <span class="span">{{showPay}}$</span>
      </div>
      <div @click="getLocation">
        <span class="span" v-if="!location">送货地址</span>
        {{location}}
        </div>
      <div @click="pay"><span class="span">支付</span>支付</div>
    </div>
    <div class="sp-car">
      <h3>购物车</h3>
      <div class="msg" :class="{active : !goodsData.length}">购物车为空！</div>
      <div class="item" v-for="item in goodsData" :key="item.key">
        商品名：{{item.name}}<br />
        商品单价：{{item.price}}<br />
        商品数量：{{item.number}}
      </div>
    </div>
  </div>
</template>
<script>
import store from '../counter/store.js'
  export default {
    onShow(){
      store.commit('allPay')
    },
    data(){
      return {
        name : 'user',
        location : ''
      }
    },
    computed: {
        goodsData: () => {
            return store.state.shopping
        },
        showPay: () => {
          return store.state.showPay
        },
        userName: () => {
          return store.state.userName
        },
        userImgUrl: () => {
          return store.state.userImgUrl
        }
    },
    methods: {
      getLocation(){
        wx.authorize({
          scope: 'scope.userLocation',
          success: (errMsg) => {
            wx.chooseLocation({
              success: (data) => {
                this.location = data.address
              }
            })
          }
        })
      },

      pay(){
        console.log('to pay!')
      }
    }
  }
</script>
<style lang="less" scoped>
@maxW: 750rpx;
  .user-info{
    display: flex;
    flex-flow: row nowrap;
    width: @maxW;
    height: 200rpx;
    background: #ccc;
    div{
      width:750rpx / 4;
      height: 100%;
      background: #eee;
      border: 4rpx solid #fff;
      color: #000;
      text-align: center;
      font-size: 32rpx
    }
  }
  .info-img{
    width: 100rpx;
    height: 100rpx;
    margin-top: 50rpx
  }
  .sp-car{
    display: flex;
    flex-flow: row wrap;
    width: @maxW;
    background: #eee;
    padding-bottom: 14rpx;
    h3{
        height: 120rpx;
        background: #fff;
        width: @maxW;
        line-height: 120rpx;
        text-align: center;
        margin-bottom: 14rpx;
    }
  }
  .item{
      width: @maxW - 28rpx;
      height: 200rpx;
      background: #fff;
      margin: 14rpx;
      border-radius: 6rpx
  }
  .msg{
    display: none
  }
  .active{
    display: block;
    text-align: center
  }
  .span{
    display: inline-block;
    height: 100%;
    width: 100%;
    background: #ccc;
    line-height: 200rpx
  }
</style>
