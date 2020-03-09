<template>
  <div class="index">
    <v-btn class="mx-2 settings" fab dark color="#8A2BE2" v-on:click="settingsShow()">
      <v-icon>mdi-settings</v-icon>
    </v-btn>

    <v-alert type="warning" class="settings-alert" v-if="settings">
      No settings...
    </v-alert>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Index',
  data () {
    return {
      settings: false
    }
  },
  methods: {
    settingsShow () {
      this.settings = true
      setTimeout(() => {
        this.settings = false
      }, 5000)
    }
  }
}
</script>

<style scoped>
.settings {
  position: absolute;
  top: 10px;
  right: 10px;
}

.settings-alert {
  position: absolute;
  bottom: 0%;
  width: 95%;
  left: 50%;
  transform: translateX(-50%);
}
</style>
