import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home";
// import About from "../components/About";

// 1. 安装插件
Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		redirect: "/home"
	},
	{
		path: "/home",
		component: Home
	},
	{
		path: "/resume",
		component: () => import("../views/Resume.vue")
	},
	{
		path:"/works",
		component:()=>import("../views/Works.vue")
	},
	{
		path:"/life",
		component:()=>import("../views/Life.vue")
	},
	{
		path:"/other",
		component:()=>import("../views/Other.vue")
	}

	// {
	//   path: "/about",
	//   component: About
	// }
]

// 2. 创建路由对象
const router = new VueRouter({
	routes
});

// 3. 导出router
export default router;
