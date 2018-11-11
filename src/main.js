import Vue from "vue";
import App from "./App.vue";
import "reset-css/reset.css";
import "./assets/style/index.css";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
