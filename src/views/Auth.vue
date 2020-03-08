<template>
  <div class="auth">
    <input type="password" name="pass" id="pass" placeholder="P@sSW0rd" v-model="pass">
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
        document.getElementById('pass').style.borderColor = '#00FF00'
        setTimeout(_ => {
          this.$parent.auth = true
          document.cookie = 'auth=true;path=/'
        }, 500)
      } else {
        document.getElementById('pass').style.borderColor = '#FF0000'
      }
    }
  }
}
</script>

<style scoped>
#pass {
  color: #345995;
  position: absolute;
  display: block;
  font-size: 25px;
  height: 50px;
  border-radius: 31px;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
