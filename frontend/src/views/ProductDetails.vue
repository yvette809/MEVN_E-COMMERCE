<template>
  <router-link to="/products"
    ><button class="btn btn-info mb-3">Go Back</button></router-link
  >
  <div v-if="product">
    <div class="row">
      <div class="col-md-6">
        <img :src="product.image" class="img-fluid" />
      </div>
      <div class="col-md-6">
        <h3>{{ product.name }}</h3>
        <hr />
        <p>price: ${{ product.price }}</p>
        <hr />
        <p>
          Status: {{ product.countInStock > 0 ? "In stock" : "Not in Stock" }}
        </p>
        <hr />

        <p>{{ product.description }}</p>

        <button
          @click="addToCart({ product, quantity })"
          class="btn btn-info"
          :disabled="product.countInStock === 0"
        >
          <i class="fa-solid fa-cart-plus"></i> Add to cart
        </button>
      </div>

      <!-- <div class="col-lg-6 text-center text-lg-start">
        <h2>{{ product.name }}</h2>
        <p class="h3 text-danger">{{ product.price }} SEK</p>
        <div class="mt-5">
          <p>{{ product.description }}</p>
        </div>
      </div>
      <div class="text-end mt-5">
        <button @click="addToCart({ product, quantity})" class="btn btn-info">
          <i class="fa-solid fa-cart-plus"></i> Add to cart
        </button>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["id"],
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    ...mapActions(["getProductById", "addToCart"]),
  },
  computed: {
    ...mapGetters(["product"]),
  },
  created() {
    this.getProductById(this.id);
  },
};
</script>

<style scoped></style>
