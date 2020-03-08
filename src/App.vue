<template>
  <div id="app">
    <router-view v-if="auth" />
    <Auth v-else />
  </div>
</template>

<script>
/*  Color Palette
 *  #98c1d9 BG
 *  #345995
 *  #6969b3
 *  #4b244a
 *  #ca1551
 */
import Auth from '@/views/Auth.vue'

export default {
  name: 'App',
  components: {
    Auth
  },
  data () {
    return {
      auth: false
    }
  },
  created () {
    if (document.cookie.includes('auth=true')) {
      this.auth = true
    } else {
      document.cookie = 'auth=false'
    }
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
