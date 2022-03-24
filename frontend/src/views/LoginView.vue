<template>
  <form class="border p-3 shadow rounded" @submit.prevent="handleSubmit">
    <h2 class="text-center">Login</h2>
  <!-- Email input -->
  <div class=" mb-4">
    <label class="form-label" for="form2Example1">Email address</label>
    <input type="email" id="form2Example1" class="form-control" v-model="email" />
  </div>

  <!-- Password input -->
  <div class=" mb-4">
    <label class="form-label" for="form2Example2">Password</label>
    <input type="password" id="form2Example2" class="form-control" v-model="password" />
  </div>

  <!-- Submit button -->
  <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

  <!-- Register buttons -->
  <div class="text-center">
    
    <p>Not a member?<router-link to="/register">Register</router-link></p>
  </div>
</form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    async handleSubmit() {
      if(this.email.trim() === '' || this.password.trim() === '') {
        return
      }
      let user = {
        email: this.email,
        password: this.password
      }
      // await this.login(user)
      // if(this.$route.query.redirect) {
        //   this.$router.push(this.$route.query.redirect)
      // } else {
        //   this.$router.push({ name: 'home' })
      // }
        let route = this.$route.query.redirect
        this.login({user, route})
    }
  }
}
</script>

<style>
</style>