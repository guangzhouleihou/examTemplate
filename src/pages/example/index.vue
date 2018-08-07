<template>
  <div class="hello">
    <p>hello everybody!</p>
    <p>hello everybody!</p>
    <p>hello everybody!</p>
    <p>hello everybody!</p>
  </div>
</template>
<script>
import { getOrgList } from '@/service'
export default {
  mounted () {
    // 接口调用示例
    getOrgList()
      .then()
      .catch()
  }
}
</script>
<style lang="less" scoped>
  .hello {
    margin-top: 50px;
    font-size: 30px;
    text-align: center;
  }
</style>
