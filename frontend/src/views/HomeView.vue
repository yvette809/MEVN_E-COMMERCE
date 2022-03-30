<template>
  
  <div class="container">
    <h1>Products</h1>
    <div v-if="products.length > 0">  
      <ProductCarousel
        v-for="product in products"
        :key="product._id"
        :product="product"
      />
    </div>
    <div v-else>Products not Found</div>
  </div>
</template>

<script>
import ProductCarousel from "../components/ProuductCarousel.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { ProductCarousel },
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

<style></style>
