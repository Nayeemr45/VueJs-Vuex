<template>
  <div class="">
    <h1>
      Posts
    </h1>
    <ul>
      <li v-for="Post in allPost" :key="Post.id">
        <router-link :to="'/post/' + Post.id">
          <div class="post">
            <h3>
              {{ Post.title }}
            </h3>
            <p>
              {{ Post.body }}
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Posts",
  computed: {
    ...mapGetters(["allPost"]),
  },
  methods: {
    ...mapActions(["fetchPost"]),
  },
  created() {
    this.fetchPost();
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
