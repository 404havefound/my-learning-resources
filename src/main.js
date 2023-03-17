import { createApp } from "vue";
import App from "./App.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import BaseButton from "./components/UI/BaseButton.vue";
const app = createApp(App);
app.component("base-card", BaseCard); //注册为全局组件
app.component("base-button", BaseButton);
app.mount("#app");
