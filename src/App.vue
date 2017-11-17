<template>
    <div id="app">
        <topheader></topheader>
        <navigation></navigation>
        <router-view></router-view>
  </div>
</template>

<script>
import navigation from './components/navigation/navigation.vue'
import topheader from './components/topheader/topheader.vue'
export default {
    name: 'app',
    components: {
        navigation,
        topheader
    }
}
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    overflow:hidden;
}
</style>
