<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/chat">Chat</router-link>
    </div>
    <router-view/>
    <KFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import KFooter from '@/components/KFooter.vue'

export default {
  name: 'app',
  components: {
    KFooter
  },
}
</script>

<style lang="scss">
html,body{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background: #83af9b;
  color: #f0f0f0;

  a {
    font-weight: bold;
    color: #f0f0f0;

    &.router-link-exact-active {
      color: #2c3e50;
    }
  }
}
</style>
