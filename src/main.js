import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router'

new VueRouter({
    router,
    render: h => h(App)
}).mount('#app')

//createApp(App).mount('#app')

