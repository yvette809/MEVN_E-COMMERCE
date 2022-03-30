<template>
  <div class="container">
    <h1>Products</h1>
    <div v-if="products.length > 0" class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
      <ProductCard
        v-for="product in products"
        :key="product._id"
        :product="product"
      />
    </div>
    <div v-else>Products not Found</div>
  </div>
</template>

<script>
import ProductCard from "../components/products/ProductCard.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { ProductCard },
  methods: {
    ...mapActions(["getProducts"]),
  },
  created() {
    this.getProducts();
  },
  computed: {
    ...mapGetters(["products", "loading"]),
  },
};
</script>

<style scoped></style>
