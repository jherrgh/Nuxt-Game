<template>
  <b-container>
    <b-row>
      <h1>Leagues</h1>
    </b-row>
    <b-row>
      <p>This is where existing leagues will be displayed</p>
    </b-row>
    <b-row>
      <b-form>
        <b-input-group>
          <b-form-input
            id="input-1"
            v-model="league"
            type="text"
            required
            placeholder="Enter league name"
          ></b-form-input>
          <b-button @click="addLeague">Create New League</b-button>
        </b-input-group>
      </b-form>
    </b-row>
    <b-row>
      <b-table :items="leagues"></b-table>
    </b-row>
  </b-container>
</template>
<script>
import League from "@/models/League";
export default {
  data() {
    return {
      league: "",
    };
  },
  computed: {
    leagues() {
      return League.query().all();
    },
  },
  async mounted() {
    await League.$fetch();
  },
  methods: {
    addLeague() {
      if (this.league) {
        League.$create({
          name: this.league,
        });
      }
    },
  },
};
</script>