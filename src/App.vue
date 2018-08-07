<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
  /* mounted () {
    this.$message.success('welcome to oola-cms')
  } */
}
</script>
<style lang="scss">
  @import "./styles/config";
  @import "./styles/reset";
  @import "./styles/reset-ele";
  @import "./styles/common";
  @import "./styles/public";
</style>
