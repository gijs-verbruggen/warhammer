import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueGtag from "vue-gtag";

Vue.config.productionTip = false

Vue.use(VueGtag, {
  config: { id: "G-601TMXGS0J" },
  pageTrackerTemplate(to:{name:string, path:string}):{page_title:string, page_path:string} {
    return {
      page_title: to.name,
      page_path: to.path
    }
  }
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
