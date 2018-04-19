<template>
  <div class="wrap">

    <input type="text"  ref="searchInput" v-model="value" @blur="toBlur(),setCookie()" @focus="toBlur">

    <div class="search-icon" @click="setKey(),sGoods()"><img :src="searchIcon" alt=""></div>

    <div class="keepOut" :class="{none : !show}">
      {{!value ? DEFAULT_MSG : ''}}
    </div>

    <div class="cookie" :class="{none : show}">
        <div class="item-cookie" v-for="(item,index) in cookie" :key="index" @click="setValue(item),sGoods()">{{item}}</div>
    </div>

  </div>
</template>
<script>
  import store from '../vuex/store.js'
  export default {
      data(){
          return {
              DEFAULT_MSG: '搜索商品',
              value: '',
              show: true,
              cookie: [],
              searchIcon: require('../images/search.png')
          }
      },
      methods:{
          toBlur(){
              this.show = !this.show 
          },
          setValue(data){
              this.value = data
              store.commit('setSkey',data)
          },
          setKey(){
              store.commit('setSkey',this.value)
          },
          setCookie(){
              const cookie = this.cookie
              const value = this.value
              const index = this.cookie.length
              let set = 0
              if(value === '') return
              cookie.map((item)=>{
                  if(item === value){
                      set++
                  }
              })
                if(set === 0){
                   this.$set(cookie,index,value)
              }
          },
          sGoods(){
              store.commit('getData')
          }
      }
  }
</script>
<style lang="less" scoped>
  .wrap{
      position: relative;
      display: flex;
      flex-flow: column nowrap;
      box-sizing: border-box;
      width: 100%;
      height: 80rpx;
      text-align: center;
      padding: 10rpx 20rpx;
      z-index: 9
  }
  input{
      height: 60rpx;
      width: 100%;
      line-height: 60rpx;
      font-size: 32rpx;
      outline:none;
      background:rgba(255, 255, 255, 0)
  }
  .keepOut{
      position: absolute;
      top: 10rpx;
      box-sizing: border-box;
      height: 60rpx;
      width: 750rpx - 40rpx;
      line-height: 60rpx;
      font-size: 32rpx;
      background: #eee;
      border-radius: 30rpx
  }
  .cookie{
      position: absolute;
      width: 750rpx - 40rpx;
      top: 80rpx
  }
  .item-cookie{
    height: 60rpx;
    width: 100%;
    line-height: 60rpx;
    margin-top: 8rpx;
    border-radius: 30rpx;
    background: rgba(117, 117, 117,0.2)
  }
  .none{
      display: none
  }
  .search-icon{
      position: absolute;
      width: 50rpx;
      height: 50rpx;
      right: 60rpx;
      z-index: 9;
      img{
          width: 100%;
          height: 100%;
      }
  }
</style>