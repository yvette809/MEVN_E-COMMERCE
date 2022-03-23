<template>
  <div class="col">
    <div class="card h-100">
      <div>
        <img :src="product.image" class="card-img-top" />
        <router-link
          :to="{ name: 'productDetails', params: { id: product._id } }"
        >
          <div class="mask"></div>
        </router-link>
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">{{ product.description }}</p>
        <router-link type="button" class="btn btn-info ms-auto" to="{name:'productDetails',params:{id:Product._id}}"
          >Show product</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style></style>
