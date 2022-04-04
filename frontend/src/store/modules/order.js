import axios from 'axios'

export default {
    state: {
        orders: [],
        order: {}
    },
    getters: {
        orders: state => state.orders,
        order: state => state.order

    },
    mutations: {
        SET_ORDERS: (state, orders) => {
            state.orders = orders
        },
        CREATE_ORDER: (state, order) => {
            state.order = order
        },
        SET_ORDER: (state, order) => {
            state.order = order
        },

    },
    actions: {
        async getMyOrders({ commit }) {
            let config = {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            }
            try {
                const res = await axios.get("http://localhost:4000/orders/myorders", config)
                console.log('res', res)
                commit('SET_ORDERS', res.data)


            } catch (error) {
                console.log(error)

            }

        },
        async createOrder({ commit }, order) {
            let config = {
                headers: {

                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            }
            try {
                const res = await axios.post("http://localhost:4000/orders", order, config)
                commit('CREATE_ORDER', res.data)


            } catch (error) {
                console.log(error)

            }

        },
        async getOrderById({ commit }, id) {
            let config = {
                headers: {

                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            }
            const res = await axios.get(`http://localhost:4000/orders/${id}`,config)
            console.log('orderres', res)
            commit('SET_ORDER', res.data)

        }
    }
}