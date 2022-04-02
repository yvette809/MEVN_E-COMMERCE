import { createStore } from 'vuex'
import products from './modules/products'
import cart from './modules/cart'
import user from './modules/user'
import order from './modules/order'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products,
    cart,
    user,
    order
  }
})
