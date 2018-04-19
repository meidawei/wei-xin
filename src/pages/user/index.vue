<template>
  <div class="container">
<!-- 用户信息 -->
    <div class="user-info">
      <div>
        <div class="img-box">
        <img :src="userImgUrl" alt="info-image" class="info-img">
        </div>
      </div>
      <div>
        <span class="span">{{showPay}}元</span>
      </div>
      <div @click="getLocation">
        <img :src="addressIcon" class="addressIcon" alt="">
      </div>
      <div @click="pay"><span class="span">支付</span></div>
    </div>
<!-- 收货地址 -->
    <div class="address">
      <h3 @click="addressHidden">
        <img :src="addressIcon" class="tradeIcon" alt="">
        收货地址
      </h3>
      <radio-group v-if="addressShow">
        <div class="item item-address" v-for="item in location" :key="item.key">
            {{item.value}} <input type="radio" :value="item.value" :name="item.key" :checked="item.checked">
        </div>
      </radio-group>
    </div>
<!-- 购物车 -->
    <div class="sp-car">
      <h3 @click="goodsHidden">
        <img :src="tradeIcon" class="tradeIcon" alt="">
         购物车
      </h3>
      <div class="msg" :class="{active : !goodsData.length}">
        <span>购物车为空！</span>
      </div>
      <div class="item goods-list" v-for="item in goodsData" :key="item.key" v-if="goodsShow">
        <div class="img-small">
          <img :src="item.images.small" alt="">
        </div>
        <div class="goods-info">
          商品名：{{item.title}}<br />
          商品单价：{{item.price}}<br />
          商品数量：{{item.number}}
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import store from '@/vuex/store.js'
  export default {
    data(){
      return {
        name : 'user',
        location : [],
        tradeIcon: require('../../images/trade.png'),
        addressIcon: require('../../images/address.png'),
        addressShow: true,
        goodsShow: true
      }
    },
    computed: {
        goodsData: () => {
          console.log(store.state.shopping)
            return store.state.shopping
        },
        showPay: () => {
          return store.getters.allPay
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
                this.location.push({value:data.address,key:this.location.length,checked:this.location.length === 0})
                console.log(this.location)
              }
            })
          }
        })
      },

      pay(){
        console.log('to pay!')
      },

      addressHidden(){
        this.addressShow = !this.addressShow
      },

      goodsHidden(){
        this.goodsShow = !this.goodsShow
      }
    }
  }
</script>
<style lang="less" scoped>
@maxW: 750rpx;
h3 {
  position: relative;
  height: 120rpx;
  border: 1px solid #eee;
  width: @maxW;
  background: #fff;
  line-height: 120rpx;
  text-align: center;
  border-left: 2rpx solid #ccc;
  border-right: 2rpx solid #ccc
}
.user-info {
  display: flex;
  flex-flow: row nowrap;
  width: @maxW;
  height: 200rpx;
  div {
    box-sizing: border-box;
    width: @maxW / 4;
    height: 100%;
    border: 4rpx solid #fff;
    color: #000;
    text-align: center;
    font-size: 32rpx;
  }
  .img-box {
    &:extend(.circle);
    display: inline-block;
    width: 100rpx;
    height: 100rpx;
    margin-top: 50rpx;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.sp-car {
  display: flex;
  flex-flow: row wrap;
  width: @maxW;
  background: #eee;
}
.address {
  display: flex;
  flex-flow: row wrap;
  width: @maxW;
  background: #eee;
}
.addressIcon {
  margin-top: 50rpx;
  width: 80rpx;
  height: 80rpx;
}
.item {
  width: @maxW - 28rpx;
  height: 200rpx;
  background: #fff;
  margin: 14rpx;
  border-radius: 6rpx;
}
.item-address {
  height: 80rpx;
  line-height: 80rpx;
  font-size: 28rpx;
  input {
    width: 32rpx;
    height: 32rpx;
    float: right;
    margin-right: 32rpx;
  }
}
.goods-list {
  display: flex;
  flex-flow: row nowrap;
}
.img-small {
  width: 200rpx;
  height: 200rpx;
  text-align: center;
  img {
    margin-top: 20rpx;
    height: 160rpx;
    width: 130rpx;
  }
}
.goods-info {
  width: @maxW - 200rpx;
}
.msg {
  display: none;
  text-align: center;
  width: 100%;
}
.active {
  display: block;
  span {
    text-align: center;
    display: block;
    color: red;
    font-size: 36rpx;
  }
}
.circle {
  border-radius: 50%;
}
.span {
  display: inline-block;
  height: 100%;
  width: 100%;
  line-height: 200rpx;
}
.tradeIcon {
  position: absolute;
  width: 60rpx;
  height: 60rpx;
  left: 30rpx;
  top: 30rpx;
}
</style>
