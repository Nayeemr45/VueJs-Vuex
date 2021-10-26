<template>
  <div class="">
    <h1>PostDetails</h1>
    <div class="postDetails">
      <h3>
        {{ getPostDetails.title }}
      </h3>
      <p>
        {{ getPostDetails.body }}
      </p>
    </div>
    <!-- {{ $route.params.id }} -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "PostDetails",
  computed: {
    post() {
      return this.$store.state.post;
    },
    ...mapGetters(["getPostDetails"]),
  },
  methods: {
    ...mapActions(["postDetails"]),
  },
  created() {
    this.postDetails(this.$route.params.id);
  },
};
</script>

<style>
.postDetails {
  background: rgb(75, 206, 127);
  border-radius: 10px;
  margin: 10px;
  padding: 5px;
}
</style>
