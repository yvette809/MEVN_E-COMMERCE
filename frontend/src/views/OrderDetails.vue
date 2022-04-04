<template>
  <h1 class="text-center mb-3">OrderItems</h1>

  <div :key="order._id">
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
