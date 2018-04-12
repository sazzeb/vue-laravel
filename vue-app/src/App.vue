<template>
  <div id="app">
    <navbar></navbar>
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/navs/Navbar'
import Login from './components/authentication/Login'
export default {
  name: 'App',
  components: {
    'navbar': Navbar,
    'login': Login
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
