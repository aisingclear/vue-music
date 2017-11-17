<template>
    <div id="navigation">
        <router-link tag="div" class="navigation-rec" to="/recommend">推荐</router-link>
        <router-link tag="div" class="navigation-rec" to="/singer">歌手</router-link>
        <router-link tag="div" class="navigation-rec" to="/ranking">排行</router-link>
        <router-link tag="div" class="navigation-rec" to="/search">搜索</router-link>
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
#navigation{
    width:100%;
    height:44px;
    display:flex;
    position:fixed;
    top:44px;
    background:#000;
}
#navigation div{
    height:30px;
    flex:1;
    color:rgb(144,144,144);
    padding-top:14px;
}
#navigation .router-link-active{
    color:rgb(231,221,61);
}
</style>
