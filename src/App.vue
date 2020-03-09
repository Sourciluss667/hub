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
