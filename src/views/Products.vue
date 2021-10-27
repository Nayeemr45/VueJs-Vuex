<template
  ><div class="">
    <h1>Products</h1>
    <ul>
      <li
        v-for="product in products"
        :key="product.id"
        :style="{ background: !product.available ? '#ff6060' : '#4bce7f' }"
      >
        <router-link :to="'/edit/' + product.id">
          <div class="">
            <h3>
              {{ product.name }}
            </h3>
            <p>
              {{ product.price }}
            </p>
            <p>{{ product.discount }} off</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Products",

  computed: { ...mapGetters(["products"]) },
  methods: {
    ...mapActions(["editProduct"]),
    Submit() {
      this.editProduct(this.product);
    },
  },
};
</script>

<style scoped>
ul {
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  list-style: none;
  padding: 0;
}
li {
  display: grid;
  background: #4bce7f;
  border-radius: 10px;
  margin: 10px;
  padding: 5px;
}
h3 {
  color: rgb(28, 64, 43);
}
li a {
  text-decoration: none;
}
</style>
