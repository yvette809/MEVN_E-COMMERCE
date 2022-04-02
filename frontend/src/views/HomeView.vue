<template>
  <div class="img-container">
    <div class="pt-5 text-center text-white">
      <h1>Best Offers just for you</h1>
      <p>Sign in to your account to find out </p>
      <router-link to="/products"
        ><button class="btn bg-primary text-white mt-3">
          Shop Now<i class="fa-solid fa-arrow-right-long"></i></button
      ></router-link>
    </div>
  </div>
  <div class="container mt-5 text-info">
    <h1 class="mb-4">Descover your favourite products</h1>
    <div
      v-if="products.length > 0"
      class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4"
    >
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

<style scoped>
.img-container {
  background: url("https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")
    no-repeat center center/cover;
  height: 60vh;
}

button.btn {
  position: relative;
  border-radius: 10px;
  padding: 0.8rem 3rem;
  font-size: 1.2rem;
}

button.btn:hover {
  color: aquamarine;
  background: red;
}

i {
  position: absolute;
  right: 20px;
  top: 15px;
}

div p {
  font-size: 1.1rem;
}
</style>
