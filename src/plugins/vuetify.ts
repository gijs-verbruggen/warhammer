import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
      iconfont: 'fa',
  },
  theme: {
    themes: {
      light:{
        primary: '#1A1A1D',
        secondary: '#4E4E50',
        accent: '#6F2232',
        error: '#950740',
        info: '#C3073F',
      },
      dark: {
        primary: '#1A1A1D',
        secondary: '#4E4E50',
        accent: '#6F2232',
        error: '#950740',
        info: '#C3073F',
      },
    }
  }
});
