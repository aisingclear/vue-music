<template>
    <div class="topheader">
        <div class="topheader-center"><img src="./image/logo.png" alt="萌牛音乐"></div>
        <div class="topheader-right"></div>
    </div>
</template>

<script type="text/javascript">
  export default {
      data () {
          return {
              author: '微信公众号 jinkey-love'
          }
      }
  }
</script>

<style>
    .topheader{
        width:100%;
        height:44px;
        background:#000;
        position:fixed;
        top:0px;
    }
    .topheader .topheader-center{
        background:#000;
        height:30px;
        line-height:44px;
        top:22px;
        padding-top:8px;
    }
    .topheader .topheader-center img{
        width:100px;
        height:28px;
    }
</style>
