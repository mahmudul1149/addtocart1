<template>
  <div>
    <div class="flex">
      <div>
        <div class="box" @click="cartDetails(product)">
          <div class="image-box">
            <img :src="product.image" alt="" />
          </div>
          <div class="title-box">
            <p>{{ product.title }}</p>
            <h4>${{ product.price }}</h4>
            <h4>{{ product.category }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product"],

  methods: {
    cartDetails(item) {
      this.$router.push({ name: "product", params: item });
    },
  },
};
</script>

<style>
.flex {
  margin: 1rem 0;
  padding: 1.3rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.box:hover {
  box-shadow: 0 5px 5px 5px rgba(0, 0, 0, 0.3);
}
.box {
  margin: 0.3rem;
  border: 1px solid rgba(58, 17, 207, 0.3);
  height: 500px;
  width: 300px;
  border-radius: 5px;
  text-align: center;
}
.image-box img {
  width: 200px;
  height: 200px;
  padding: 0.5rem;
}
.title {
  font-size: 1.5rem;
  font-weight: 700;
  color: red;
}
.title-box {
  padding: 1rem;

  background: white;
}
.title-box p {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.btn-cart {
  display: inline-block;
  padding: 0.5rem 1.3rem;
  background: green;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 40px;
}
</style>
