<template>
  <div class="text-center" v-if="user">
    <h1 ><span class="text-info">{{ user.name }} </span> below is a sumary of your order</h1>
  </div>
  <div class="container text-center">
   
    <div v-if="orders.length === 0">
      <h2 class="mt-3">There is no order for this user</h2>
    </div>
    <div v-else>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Date</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
          <OrderCard v-for="order in orders" :key="order._id" :order="order" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import OrderCard from "../components/OrderCard.vue";
export default {
  components: {
    OrderCard,
  },
  computed: {
    ...mapGetters(["user", "loggedIn", "orders"]),
  },
  methods: {
    ...mapActions(["getUserDetails", "getMyOrders"]),
  },
  created() {
    this.getUserDetails();
    this.getMyOrders();
  },
};
</script>

<style></style>
