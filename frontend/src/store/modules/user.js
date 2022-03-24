import axios from 'axios'
import router from '@/router'

export default {

  state: {
    userToken: null,
    loggedIn: false,
    user:null
  
    
  },
  getters: {
    loggedIn: state => state.loggedIn,
    register:state=> state.user
    
  },
  mutations: {
    SET_USER: (state, token) => {
      if(token) {
        state.userToken = token
        state.loggedIn = true
      } else {
        state.loggedIn = false,
        state.userToken = null
      }
    },
    REGISTER_USER:(state,user)=>{
        state.user= user
    }
  },
  actions: {
    login: async ({commit}, payload) => {
      const res = await axios.post('http://localhost:4000/users/login', payload.user)
      console.log(res)
      if(res.status === 200) {
        localStorage.setItem('token', res.data.token)
        commit('SET_USER', res.data.token)

        if(payload.route) {
          router.push(payload.route)
        } else {
          router.push({ name: 'home' })
        }

      }
    },
    logout: ({commit}) => {
      try {
        localStorage.removeItem('token')
        commit('SET_USER', null)
      } catch {
        console.log('not logged in')
      }
    },
    checkUser: ({commit}) => {
      let token = localStorage.getItem('token')
      if(token) {
        commit('SET_USER', token)
      }
    },
    register: async ({commit}, payload) => {
        let config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        const res = await axios.post('http://localhost:4000/users/register', payload)
        console.log('res',res.data)
        if(res.status === 200) {
          localStorage.setItem('user', res.data.token)
          commit('REGISTER_USER', res.data)
          router.push("/")
  
        }
      },
  }
}
