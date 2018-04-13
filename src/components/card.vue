<template>
  <div>
    <p class="card">
      <a href="">{{text}}</a>
    </p>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style lang="less" scoped>
  .card {
    padding: 10px;
    a{
      color: red
    }
  }
</style>



