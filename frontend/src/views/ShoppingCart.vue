<template>
  <ShoppingCartProduct
    v-for="item in shoppingCart"
    :key="item.product._id"
    :item="item"
  />
  <div v-if="shoppingCart.length < 1">
    <div class="p-2 d-flex justify-content-center align-items-center">
      Your shopping cart is empty
    </div>
    <div class="dropdown-divider"></div>
  </div>

  <div class="p-2 d-flex justify-content-between align-items-center">
    <div>
      <div>
        Totalt: <strong>${{ shoppingCartTotal }}</strong>
      </div>
      <small class="text-muted">inkl. moms</small>
    </div>

    <!-- <button
      class="btn btn-info"
      @click="createOrder({ orderItems: shoppingCart })"
      :disabled="shoppingCart.length === 0"
    >
      Save Order
    </button> -->
    <button class="btn btn-info" @click="checkOutHandler">Checkout</button>
  </div>
</template>

<script>
import ShoppingCartProduct from "../components/shoppingcart/ShoppingCartProduct.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      qty: 1,
      id: this.$route.params.id,
    };
  },
  components: { ShoppingCartProduct },
  computed: {
    ...mapGetters(["shoppingCart", "shoppingCartTotal", "loggedIn"]),
  },
  methods: {
    ...mapActions(["createOrder"]),
    checkOutHandler() {
      if (this.loggedIn) {
        this.createOrder({ orderItems: this.shoppingCart });
        alert("order saved in database");
        this.$router.push(`/order/${this.id}`);
      } else {
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style></style>
