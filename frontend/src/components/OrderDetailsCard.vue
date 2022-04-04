<template>
  <div class="container">
    <div class="row">
      <div class="col col-md-1 mb-4">
        <img :src="item.product.image" alt="" class="img-fluid" />
      </div>
      <div class="col">
        <p>{{ item.product.name }}</p>
      </div>
      <div class="col col-md-4">
        <p>Price: ${{ item.product.price }}</p>
        <p>
          {{ item.product.qty }} X {{ item.product.price }} = ${{
            item.product.qty * item.product.price
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style scoped></style>
