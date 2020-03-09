<template>
  <div class="auth">
    <v-text-field
      v-model="pass"
      label="P@sSW0rD"
      :counter="420"
      name="pass"
      color="purple"
      class="pass"
      type="password"
      required
      single-line
      outlined
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: 'Auth',
  data () {
    return {
      pass: ''
    }
  },
  watch: {
    pass: function () {
      if (this.pass === 'jojopass') {
        setTimeout(_ => {
          this.$parent.$parent.auth = true
          document.cookie = 'auth=true;path=/'
        }, 500)
      }
    }
  }
}
</script>

<style scoped>
.pass {
  position: absolute;
  display: block;
  width: 30%;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
