import axios from 'axios'

export default ({
    state: {
        products: [],
        product:{},
        loading:true
    },
    getters: {
        products: state => state.products,
        product:state=>state.product,
        loading:state=>state.loading
    },
    mutations: {
        SET_PRODUCTS:(state,products)=>{
            state.products= products
        },
        SET_PRODUCT:(state, product)=>{
            state.product =product
        },
        SET_LOADING:(state,loading)=>{
            state.loading= !loading
        }
    },
    actions: {
        // async getProducts({commit}){
        //     const res = await axios.get("http://localhost:4000/products")
        //     console.log(res.data)
        //     commit('SET_PRODUCTS',res.data)
        //     commit('SET_LOADING')
           

        // },
        async getProductById({commit}, id){
            const res = await axios.get(`http://localhost:4000/products/${id}`)
            commit('SET_PRODUCT', res.data)
            commit('SET_LOADING')
        }
    },
    modules: {
    }
})
