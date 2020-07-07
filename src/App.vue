<template>
  <div id="app">
    <List />
    <router-view name="main"></router-view>
    <!-- <router-link name="main">helloworld</router-link> -->
    <!-- <HelloWorld msg="I am helloworld" :xxx="janson" @yyy="getFromSon"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import List from './components/list.vue';

export default {
  name: 'App',
  components: {
    List
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border: 3px solid gray;
}
</style>
