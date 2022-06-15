

<template>
  <div class="product container">
    <div class="image-box">
      <img :src="details.image" alt="" />
    </div>
    <div class="title-box">
      <div class="btn-container">
        <h3>{{ details.title }}</h3>
        <h3>{{ details.price }}</h3>
        <button class="btn-secondery" @click="addCart()">Add to cart</button>
        <button class="btn-darks" @click="goTo()">Go To Cart</button>
        <button class="btn-primary" @click="removeCart()">Remove Cart</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      details: this.$route.params,
    };
  },
  methods: {
    addCart() {
      const order = {
        quantity: 1,
        cartId: this.details.id,
        price: this.details.price,
        image: this.details.image,
        title: this.details.title,
      };
      this.$store.dispatch("addCarts", order);
    },
    goTo() {
      this.$router.push("/cart");
    },
    removeCart() {
      const order = {
        quantity: 1,
      };
      this.$store.dispatch("removeCarts", order);
      console.log("Click");
    },
  },
};
</script>

<style>
.flex-2 {
  display: flex;
  align-items: center;
  padding: 1rem;
}
.box-2 {
  padding: 1rem;
}
.input-box {
  display: flex;
  align-items: center;
}
input[type="checkbox"] {
  height: 1.8rem;
  width: 1.8rem;
}
.btn-dark {
  padding: 0.5rem 1.2rem;
  cursor: pointer;
  color: white;
  background: green;
  outline: none;
  border: none;
}
.title-box {
  margin-top: 3rem;
}
.product {
  margin-top: 4rem;
  display: flex;
  align-items: center;
}
.product img {
  width: 250px;
  height: 250px;
}
.container {
  max-width: 1200px;
  margin: 50px auto;
}
</style>

