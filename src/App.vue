<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div class="appPage">
    <picture-control :imgSrc="imgSrc"></picture-control>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  },
  data(){
    return {
      imgSrc: require("./assets/logo.png")
    }
  },
}
</script>

<style lang="less">
html,body{
  width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
  width: 100%;
  height: 100%;
  .appPage{
    width: 100%;
    height: 100%;
  }
}
</style>
