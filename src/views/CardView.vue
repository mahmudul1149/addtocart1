<template>
  <div>
    <div class="cart container" v-if="carts.length">
      <ul>
        <li v-for="item in carts" :key="item.id">
          <div class="items">
            <div>
              <img :src="item.image" alt="" />
            </div>
            <!-- <div class="item">
              <h3>{{ item.title }}</h3>
            </div> -->
            <div class="item">
              <h3>$ {{ item.price }}</h3>
            </div>
            <div class="item">
              <button class="btn-reduce" @click="reduceQty(item.id)">-</button>
            </div>
            <div class="item">
              <h4>{{ item.quantity }}</h4>
            </div>
            <div>
              <button class="btn-reduce btn-plus" @click="addQty(item.id)">
                +
              </button>
            </div>
          </div>
        </li>
        <h1>Total: {{ total }}</h1>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    carts() {
      return this.$store.getters.carts;
    },
    total() {
      return this.$store.getters.total;
    },
  },
  methods: {
    addQty(id) {
      this.$store.dispatch("addQuantity", id);
    },
    reduceQty(id) {
      this.$store.dispatch("reduceQuantity", id);
    },
  },
  created() {
    if (this.$route.params.id !== undefined)
      localStorage.setItem("details", JSON.stringify(this.$route.params));
  },
  mounted() {
    this.details = JSON.parse(localStorage.getItem("details"));
  },
};
</script>

<style>
.cart img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 0.6rem;
}
.cart .items {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  justify-content: space-between;
}
.item {
  width: 20%;
}
.btn-plus {
  margin-right: 0.6rem;
}
.btn-reduce {
  padding: 0.3rem 1rem;
  background: red;
  font-size: 1.3rem;
  color: wheat;
}
.btn-plus {
  padding: 0.3rem 1rem;
  background: green;
  font-size: 1.3rem;
  color: wheat;
}
</style>