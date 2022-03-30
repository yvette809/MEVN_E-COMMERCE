<template>
  <h1>my orders</h1>
  <!--   
  <div :v-for="order in orders" :key="order._id">
      <p>{{order.product.name}}</p>

  </div> -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["id"],
  data() {
    return {
      //  productId :$this.route.params.id,
      qty: location.search ? Number(location.search.split("=")) : 1,
    };
  },
  methods: {
    ...mapActions(["getMyOrders", "addToCart"]),
  },
  created() {
    // this.getMyOrders();
    this.addToCart(this.id, this.qty);
  },
  computed: {
    ...mapGetters(["orders"]),
  },
};
</script>

<style></style>
