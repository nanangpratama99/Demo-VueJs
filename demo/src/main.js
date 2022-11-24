import Vue from 'vue'
// import { BootstrapVue, IconPlugins } from 'bootstrap-vue'
import App from './App.vue'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

// Vue.use(bootstrap)
// Vue.use(IconPlugins)

new Vue({
  render: h => h(App),
}).$mount('#app')
