import Vue from "vue";
import store from "./store";
import DemoComponent from "./components/demo.vue";

Vue.component("demo-component", DemoComponent);
const app = new Vue({
    el: "#app",
    store,
});
