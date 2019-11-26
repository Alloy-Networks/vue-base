import Home from './views/Home.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    navActive: true
  },
  {
    path: '/services',
    name: 'Services',
    navActive: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ './views/Services.vue')
  },
  {
    path: '/about',
    name: 'About',
    navActive: true,
    component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
  }
]

export default routes;