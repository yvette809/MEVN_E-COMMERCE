
export default {
  state: {
    cart: []
  },
  getters: {
    shoppingCart: state => state.cart,
    cartItemCount: state => {
      let items = 0
      state.cart.forEach(item => {
        items += item.quantity
      })
      return items
    },
    shoppingCartTotal: state => {
      let total = 0
      if (state.cart.length !== 0) {
        state.cart.forEach(item => {
          total += item.product.price * item.quantity
        })
      }
      return total
    }
  },
  mutations: {
    ADD_TO_CART: (state, { product, quantity }) => {
      let exist = state.cart.find(item => item.product._id === product._id)
      if (exist) {
        exist.quantity += quantity
        return
      }
      state.cart.push({ product, quantity })
    },

    REMOVE_FROM_CART: (state, id) => {
      state.cart = state.cart.filter(item => item.product._id !== id)

    },
    DECREMENT: (state, { product, quantity }) => {
      let pdt = state.cart.find(item => item.product._id === product._id)
      if (pdt.quantity > 0) {
        pdt.quantity -= 1
        return
      }
      state.cart.shift({ product, quantity })

    },
    INCREMENT: (state, { product, quantity }) => {
      let pdt = state.cart.find(item => item.product._id === product._id)
      if (pdt) {
        pdt.quantity += 1
        return
      }
      state.cart.unshift({ product, quantity })

    }

  },
  actions: {
    addToCart: ({ commit }, { product, quantity }) => {
      commit('ADD_TO_CART', { product, quantity })
    },
    removeFromCart: ({ commit }, id) => {
      commit("REMOVE_FROM_CART", id)
    },
    decrement: ({ commit }, { product, quantity }) => {
      commit('DECREMENT', { product, quantity })
    },
    increment: ({ commit }, { product, quantity }) => {
      commit('INCREMENT', { product, quantity })
    }
  }
}
