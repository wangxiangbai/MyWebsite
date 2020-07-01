import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 星空特效
import VueParticles from 'vue-particles'  
Vue.use(VueParticles)
 
// 饿了么
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
