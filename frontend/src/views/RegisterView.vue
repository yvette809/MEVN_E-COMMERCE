<template>
  <form class="border p-3 shadow rounded" @submit.prevent="handleSubmit">
    <h2 class="text-center">Register</h2>
    <!-- name -->
    <div class="mb-4">
      <label class="form-label" for="form2Example1">names</label>
      <input
        type="name"
        id="form2Example1"
        class="form-control"
        v-model="user.name"
      />
    </div>

    <!-- email -->
    <div class="mb-4">
      <label class="form-label" for="form2Example2">email</label>
      <input
        type="email"
        id="form2Example2"
        class="form-control"
        v-model="user.email"
      />
    </div>
    <!-- Password input -->
    <div class="mb-4">
      <label class="form-label" for="form2Example3">Password</label>
      <input
        type="password"
        id="form2Example3"
        class="form-control"
        v-model="user.password"
      />
    </div>
    <div class="mb-4">
      <label class="form-label" for="form2Example4">Confirm Password</label>
      <input
        type="password"
        id="form2Example4"
        class="form-control"
        v-model="user.confirmPassword"
      />
    </div>

    <!-- Submit button -->
    <button type="submit" class="btn btn-primary btn-block mb-4">
      Register
    </button>

    <!-- Register buttons -->
    <div class="text-center">
      <p>Already a member?<router-link to="/login">Login</router-link></p>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    ...mapActions(["register"]),
    async handleSubmit() {
      if (this.user.password !== this.user.confirmPassword) {
        alert("passwords do not match");
      }

      this.register(this.user);
      this.user =""
    },
  },
};
</script>

<style></style>
