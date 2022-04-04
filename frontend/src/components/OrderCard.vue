<template>
  <!-- <div>
    <h1>{{order.orderItems[0].product}}</h1> 
    <p>{{order.user}}</p>
    <P>{{order._id}}</P>  
  </div> -->

  <tr :key="order._id">
    <td>{{ order._id }}</td>
    <td>{{ order.createdAt }}</td>
    <td><button class="btn">Details</button></td>
  </tr>
</template>

<script>
export default {
  props: ["order"],
};
</script>

<style></style>
