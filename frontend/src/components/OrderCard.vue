<template>
  <tr :key="order._id">
    <td>{{ order._id }}</td>
    <td>{{ order.createdAt.substring(0, 10) }}</td>
    <td>
      <router-link :to="{ name: 'orderDetails', params: { id: order._id } }"
        ><button class="btn btn-info">Details</button></router-link
      >
    </td>
  </tr>
</template>

<script>
export default {
  props: ["order"],
};
</script>

<style></style>
