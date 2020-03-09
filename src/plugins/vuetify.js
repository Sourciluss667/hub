import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes:
        {
          light: {
            primary: '#9c27b0',
            secondary: '#673ab7',
            accent: '#3f51b5',
            error: '#f44336',
            warning: '#ffc107',
            info: '#00bcd4',
            success: '#4caf50',
            background: '#6699cc'
          }
        }
  }
})
