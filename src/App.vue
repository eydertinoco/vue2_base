<template>
  <div id="app">
    <TheHeader/>
    <router-view/>
    <TheFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import TheFooter from '@/components/TheFooter.vue'
import TheHeader from "@/components/TheHeader";

export default {
  components: {
    TheHeader,
    TheFooter,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
}

</style>
