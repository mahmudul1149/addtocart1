<template>
  <div>
    <header>
      <nav>
        <ul>
          <li class="item">
            <router-link to="/">Home</router-link>
          </li>
        </ul>
      </nav>
      <div class="flex-3">
        <ul>
          <li>
            <router-link to="/cart">Shopping</router-link>
          </li>
        </ul>
        <div class="dropdown" @click="submit">
          <div class="drp">
            <img src="../assets/shoping.png" alt="" />
            <div class="icon">{{ countItem }}</div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isvisible: false,
    };
  },
  computed: {
    countItem() {
      return this.$store.getters.countItem;
    },
  },
  methods: {
    submit() {
      this.isvisible = !this.isvisible;
    },
  },
};
</script>

<style>
header {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background: #fff;
  box-shadow: rgba(25, 25, 25, 0.04) 0 0 1px 0, rgba(0, 0, 0, 0.1) 0 3px 4px 0;
}

li a {
  text-decoration: none;
  color: #333;
  font-size: 1.3rem;
}
ul li {
  list-style: none;
  padding: 0 1.5rem;
}

nav ul {
  text-decoration: none;
  display: flex;
  align-items: center;
}
.router-link-active {
  color: #000;
  font-weight: bold;
}
.dropdown {
  display: inline-block;
  padding-right: 2rem;
}
.dropdown-toggle {
  padding: 0.5rem 1.3rem;
  font-size: 1.3rem;
  border: none;
  outline: none;
  cursor: pointer;
}
.btn {
  border: none;
  outline: none;
}
.dropdown-content {
  min-width: 350px;
  position: absolute;
  right: 0;
  left: auto;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
}
.dropdown-content {
  border: none;
  outline: none;
  background-color: #f9f9f9;
}
.btn-secondary {
  display: flex;
  align-items: center;
}
.dropdown img {
  height: 30px;
  width: 30px;
  margin-left: 1rem;
}
.dropdown {
  display: inline-block;
}
.drp {
  position: relative;
}
.icon {
  width: 25px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  border-radius: 50%;
  background: red;
  color: white;
  position: absolute;
  right: -15px;
  top: -10px;
}
.flex-3 {
  display: flex;
  align-items: center;
}
@media (max-width: 500px) {
  nav ul {
    display: block;
    text-align: center;
  }
}
</style>