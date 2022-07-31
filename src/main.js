import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuesax from "vuesax";
import Vuetify from "vuetify";
import "vuesax/dist/vuesax.css";

Vue.config.productionTip = false;
Vue.use(Vuesax,Vuetify);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
