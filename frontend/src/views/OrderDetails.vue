<template>
  <h1>Orders</h1>

  <div :key="order._id">
    <!-- v-if="order.orderItems"
    :v-for="item in order.orderItems"
    key="order._id"
  
    <p>{{ item.product.name }}</p>
    <img :src="item.product.image" alt="" /> -->

    <OrderDetailsCard
      v-for="item in order.orderItems"
      :key="item.product._id"
      :item="item"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import OrderDetailsCard from "../components/OrderDetailsCard.vue";
export default {
  components: { OrderDetailsCard },
  props: ["id"],

  methods: {
    ...mapActions(["getOrderById"]),
  },
  computed: {
    ...mapGetters(["order"]),
  },
  created() {
    this.getOrderById(this.id);
  },
};
</script>

<style></style>
