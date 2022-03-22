import axios from 'axios'

export default ({
    state: {
        products: []
    },
    getters: {
        products: state => state.products
    },
    mutations: {
        GET_PRODUCTS:(state,newProducts)=>{
            state.products= newProducts
        }
    },
    actions: {
        async getProducts({commit}){
            const res = await axios.get("http://localhost:4000/products")
            commit('GET_PRODUCTS',res.data)

        }
    },
    modules: {
    }
})
