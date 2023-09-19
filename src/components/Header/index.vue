<template>
  <div class="header-box">
    <div class="logo">
      <img src="@a/img/logo.png" alt="">
      <span class="title">
        首页
      </span>
    </div>
    <div class="center">center</div>
    <div class="user">user</div>
  </div>
</template>

<script setup lang="ts" name="Header">

</script>
<style lang="less" scoped>
.header-box {
  width: 100%;
  height: 60px;
  background: #e5eaf8;
  display: flex;
  justify-content: space-between;

  >div {
    height: 100%;
    display: flex;
    align-items: center;
    border-right: 1px solid #333;
  }

  .logo {
    width: 100px;

    img {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }

    >.title {
      font-size: 14px;
    }
  }

  >.center {
    flex: 1;
  }

  >.user {
    width: 200px;
    float: right;
  }
}
</style>
<style lang="less"></style>