<template>
  <div class="container">
    <p>{{ item.product.name }}</p>
    <img :src="item.product.image" alt="" />
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style></style>
