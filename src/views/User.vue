<template>
  <b-container>
    <div class="overflow-auto">
      <b-pagination
        v-model="currentPage"
        :total-rows="users.length"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>

      <p class="mt-3">Current Page: {{ currentPage }}</p>

      <b-table
        id="my-table"
        :fields="fields"
        :items="users"
        :per-page="perPage"
        :current-page="currentPage"
        small
      >
        <template #cell(edit)>
          <router-link :to="'/user/' + users[1].id">
            <b-button variant="info">
              Edit
            </b-button>
          </router-link>
        </template>
        <template #cell(delete)>
          <b-button variant="danger">
            Delete
          </b-button>
        </template>
      </b-table>
    </div>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "User",
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      fields: ["first_name", "last_name", "edit", "delete"],
    };
  },
  computed: {
    ...mapGetters(["users"]),
  },
  methods: {
    ...mapActions(["getUsers"]),
  },
  created() {
    this.getUsers();
  },
};
</script>
