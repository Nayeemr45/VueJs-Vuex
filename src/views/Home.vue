<template>
  <div class="">
    <ProductListOne />
    <ProductListTwo />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductListOne from "../components/ProductListOne";
import ProductListTwo from "../components/ProductListTwo";
export default {
  name: "Home",
  components: {
    ProductListOne,
    ProductListTwo,
  },
};
</script>
