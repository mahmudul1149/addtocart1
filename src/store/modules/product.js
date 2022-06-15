import axios from "axios";

const state = {
  products: [],
  cart: [],
};

const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  ADD_CART(state, { cartId, price, image, title, quantity }) {
    const itemInCart = state.cart.find((el) => el.id === cartId.id);
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      state.cart.push({
        id: cartId,
        price: price,
        image: image,
        title: title,
        quantity: quantity,
      });
    }
  },
  ADD_QTY(state, id) {
    const record = state.cart.find((el) => el.id == id);
    if (record) {
      record.quantity++;
    }
  },
  REDUC_QTY(state, id) {
    const record = state.cart.find((el) => el.id == id);
    if (record.quantity > 1) {
      record.quantity--;
    } else {
      state.cart.splice(state.cart.indexOf(record), 1);
    }
  },
  REMOVE_CART(state, { quantity }) {
    const record = state.cart.find((el) => el.id == quantity.id);
    if (record) {
      record.quantity--;
    } else {
      state.cart.splice(state.cart.indexOf(record), 1);
    }
  },
};

const actions = {
  setProduct({ commit }) {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res);
      commit("SET_PRODUCTS", res.data);
    });
  },
  async filterTodos({ commit }, e) {
    // Get selected number
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    );
    console.log(limit);

    axios
      .get(`https://fakestoreapi.com/products?limit=${limit}`)
      .then((res) => {
        console.log(res);
        commit("SET_PRODUCTS", res.data);
      })
      .catch((errr) => {
        console.log(errr);
      });
  },
  addCarts({ commit }, item) {
    commit("ADD_CART", item);
  },
  addQuantity({ commit }, id) {
    commit("ADD_QTY", id);
  },
  reduceQuantity({ commit }, id) {
    commit("REDUC_QTY", id);
  },
  removeCarts({ commit }, id) {
    commit("REMOVE_CART", id);
  },
};

const getters = {
  products: (state) => {
    return state.products;
  },

  carts(state) {
    return state.cart;
  },

  total: (state) => {
    return state.cart.reduce((acc, val) => acc + val.quantity * val.price, 0);
  },
  countItem: (state) => {
    return state.cart.reduce((acc, val) => acc + val.quantity, 0);
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
