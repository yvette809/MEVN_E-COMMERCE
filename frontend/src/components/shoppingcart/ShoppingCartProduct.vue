<template>
  <div class="p-2 d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
      <div class="image-container">
        <img :src="item.product.image" class="img-fluid mb-4" />
      </div>
      <div>
        <div>
          <strong class="mx-4">{{ item.product.name }}</strong>
        </div>
        <div>
          <small class="mx-4"
            >{{ item.quantity }} x {{ item.product.price }}</small
          >
        </div>
      </div>
    </div>
    <div>
      <div class="btn-group btn-group-sm me-2">
        <button
          class="btn btn-dark"
          @click.stop="
            decrement({ product: item.product, quantity: item.quantity })
          "
        >
          -
        </button>
        <button
          class="btn btn-dark"
          @click.stop="
            increment({ product: item.product, quantity: item.quantity })
          "
        >
          +
        </button>
      </div>
      <button
        class="btn btn-danger btn-sm"
        @click="removeFromCart(item.product._id)"
      >
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["item"],
  methods: {
    ...mapActions(["removeFromCart", "decrement", "increment"]),
  },
};
</script>

<style scoped>
.image-container {
  width: 90px;
}
</style>
