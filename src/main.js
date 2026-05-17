// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.css"; // Bootstrap styles

createApp(App).use(router).mount("#app");