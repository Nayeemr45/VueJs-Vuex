<template>
  <div class="">
    <h1>Product Form</h1>
    <div class="p_from">
      <form @submit.prevent="Submit">
        <div class="form">
          <label>Name</label>
          <input type="text" name="name" v-model="product.name" />
          <label>Price</label>
          <input type="text" name="price" v-model="product.price" />
          <label>InStock</label>
        </div>
        <div class="radio">
          <input
            type="radio"
            name="inStock"
            id="instock"
            v-model="product.inStock"
            value="true"
          />
          <label for="instock">Yes</label>
          <input
            type="radio"
            name="inStock"
            id="instock"
            v-model="product.inStock"
            value="false"
          />
          <label for="instock">No</label>
        </div>
        <div class="checkbox">
          <input
            type="checkbox"
            id="available"
            name="available"
            v-model="product.available"
          />
          <label for="available"> Available</label><br />
        </div>
        <div class="select">
          <label for="discount">Discount:</label>
          <select name="discount" id="discount" v-model="product.discount">
            <option value="5%">5%</option>
            <option value="10%">10%</option>
            <option value="30%">30%</option>
            <option value="50%">50%</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ProductEditPage",
  data() {
    return {
      name: "",
      price: "",
      inStock: "",
      available: "",
      discount: "",
    };
  },
  computed: { ...mapGetters(["product"]) },
  methods: {
    ...mapActions(["getProduct", "editProduct"]),
    Submit() {
      this.editProduct(this.product);
    },
  },
  created() {
    this.getProduct(this.$route.params.id);
  },
};
</script>

<style>
.p_from {
  display: grid;
  justify-content: center;
}
.form {
  display: grid;
  justify-content: start;
  text-align: left;
}

label,
input {
  margin-bottom: 10px;
  margin-right: 10px;
}
.form input {
  width: 400px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #000;
}
.radio,
.checkbox,
.select {
  margin-bottom: 10px;
  text-align: left;
}
select {
  padding: 5px;
  border-radius: 5px;
}
button {
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #000;
  cursor: pointer;
}
button:hover {
  border: 1px solid #fff;
  background-color: rgb(84, 255, 161);
}
</style>
