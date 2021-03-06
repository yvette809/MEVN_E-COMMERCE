import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView'
import ProductDetails from '../views/ProductDetails'
import LoginView from '../views/LoginView'
import RegisterView from '../views/RegisterView'
import MyProfile from '../views/MyProfile'
import MyOrders from '../views/ShoppingCart'
import OrderDetails from '../views/OrderDetails'
import PlaceOrder from '../views/PlaceOrder'
import ShoppingCart from '../views/ShoppingCart'
import NotFound from '../views/NotFound'
import store from '../store'


const requireAuth = (to, from, next) => {
  let loggedIn = store.getters.loggedIn
  if (!loggedIn) next({ name: 'login', query: { redirect: to.fullPath } })
  else next()
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView

  },
  {
    path: '/products/:id',
    name: 'productDetails',
    component: ProductDetails,
    props: true
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/myprofile',
    name: 'myprofile',
    component: MyProfile,
    // meta: { authorize: true }
    beforeEnter: requireAuth
  },
  {
    path: '/shoppingcart',
    name: 'shoppingcart',
    component: ShoppingCart,

  },
  {
    path: '/order/:id',
    name: 'orderDetails',
    component: OrderDetails,
    beforeEnter: requireAuth,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound

  },

  // {
  //   path: '/myorders',
  //   name: 'myOrders',
  //   component: MyOrders,
  //   beforeEnter: requireAuth,
  //   props: true
  // },
  {
    path: '/placeorder',
    name: 'placeorder',
    component: PlaceOrder,
    beforeEnter: requireAuth,

  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//  router.beforeEach((to, from, next) => {
//     let loggedIn = store.getters.loggedIn

//     const { authorize } = to.meta

//     if(authorize) {
//       if(!loggedIn) next({ name: 'login' , query: { redirect: to.fullPath }})
//       else next()
//     } else {
//       next()
//     }
//   })



export default router
