<template>
  <div class="containers">
    <app-sidebar></app-sidebar>
    <div class="flex">
      <app-product
        v-for="product in products"
        :key="product.id"
        :product="product"
      ></app-product>
    </div>
  </div>
</template>

<script>
import Product from "../views/HomeVue.vue";
import Side from "./SidebarView.vue";
export default {
  components: {
    appProduct: Product,
    appSidebar: Side,
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
  created() {
    this.$store.dispatch("setProduct");
  },
};
</script>

<style>
</style>

