import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import colors from 'vuetify/util/colors'
import '@mdi/font/css/materialdesignicons.css'

const BrunaTheme = {
  dark: false,
  colors: {
    primario: colors.amber.accent3,
    'primario-claro': colors.amber.accent1,
    secundario: colors.lightGreen.darken2,
    'secundario-claro': colors.green.lighten1,
    white: '#f3f3f3',
    muted: colors.grey.lighten3,
    error: colors.red.lighten2,
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}
const vuetify = createVuetify({
  theme: {
    defaultTheme: 'BrunaTheme',
    themes: {
      BrunaTheme
    }
  },
  components,
  directives,
})

//
const app = createApp(App)
import './assets/app.css'

app.use(router)
app.use(vuetify)

app.mount('#app')
