import * as VueRouter from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'main__page',
		component: () => import('@/pages/Main__page.vue'),
	},
	{
		path: '/posts',
		name: 'posts__page',
		component: () => import('@/pages/Posts__page.vue'),
	},
	{
		path: '/about',
		name: 'about__page',
		component: () => import('@/pages/About__page.vue'),
	},
	{
		path: '/posts/:id',
		name: 'postItem__page',
		component: () => import('@/pages/PostItem__page.vue'),
	},
	// {
	// 	path: '/posts-vuex',
	// 	name: 'posts__page_vuex',
	// 	component: () => import('@/pages/Posts__page_vuex.vue'),
	// },
	{
		// page 404
		path: '/:pathMatch(.*)*',
		name: 'notFound__page',
		component: () => import('@/pages/NotFound__page.vue'),
	}
];

const router = VueRouter.createRouter({
	history: VueRouter.createWebHistory(),
	routes,
});

export default router;
