import axios from 'axios'

export default {
    state: {
      orders: []
    },
    getters: {
     orders: state => state.orders,
      
    },
    mutations: {
        SET_ORDERS:(state,orders)=>{
            state.orders = orders
        }
    
    },
    actions: {
        async getMyOrders({commit}){
            try {
                const res = await axios.get("http://localhost:4000/orders/myorders")
                console.log('res',res)
                commit('SET_ORDERS',res.data)
              
                
            } catch (error) {
                console.log(error)
                
            }
          
    }
  }
}