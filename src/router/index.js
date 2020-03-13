import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const User = () => import('../components/user.vue')
const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessage = () => import('../components/HomeMessage.vue')
const Profile = () => import('../views/Profile.vue')

Vue.use(VueRouter)

const routes = [{
    path: '',
    // 重定向
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [{
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/user/:id',
    name: 'User',
    component: User

  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/profile',
    name:'Profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

export default router