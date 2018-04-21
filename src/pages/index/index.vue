<template>
  <div>
    
    <myInput></myInput>
    
    <goods></goods>

  </div>
</template>

<script>
import myInput from '@/components/myInput'
import goods from '@/components/goods'
export default {
  created(){
    console.log('首页数据加载完成！')
  },
  mounted(){
    console.log('首页DOM渲染完成！')
  },
  data () {
    return {
      name: 'index'
    }
  },
  components: {
    myInput,
    goods
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}

.loading-page{
  position: absolute;
  width: 750rpx;
  height: 100%;
  background: #000
}
</style>
