<template>
 <div class="container">
   <h1>Products</h1>
   <div v-if="products.length">
      <div :v-for="product in products" :key="product.id">
     <p>{{product.name}}</p>

   </div>

   </div>
  
 </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  methods:{
    ...mapActions(['getProducts'])
  },
  created(){
    this.getProducts()
    
  },
  computed:{
    ...mapGetters(['products'])
  
  }

}
</script>

<style scoped>
.container{
 display: flex;
 justify-content: center;
 align-items: center;
}

</style>
