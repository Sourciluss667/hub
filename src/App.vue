<template>
  <div id="app">
    <v-app style="background-color: #252525;">
      <router-view v-if="auth" />
      <Auth v-else />
    </v-app>
  </div>
</template>

<script>
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
.v-label {
  color: white!important;
  opacity: 1;
}
.v-counter {
  color: white!important;
  opacity: 1;
}
input {
  color: white!important;
  opacity: 1;
}
</style>
