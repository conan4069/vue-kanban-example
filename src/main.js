import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import { store } from './store';
import vueKanban from 'vue-kanban';

Vue.use(vueKanban);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
