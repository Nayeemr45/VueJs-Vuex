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

<style></style>
