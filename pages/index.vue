<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">hsgm</h1>
    </div>
    <div>
      <LeaguesList />
    </div>
  </div>
</template>

<script>
import Team from "@/models/Team";
import Stats from "@/models/Stats";
import Player from "@/models/Player";
import data from "@/data";
import LeaguesList from "@/components/LeaguesList";
export default {
  /*  async fetch() {
    const initialData = await data();
    Team.$create({ data: initialData });

    console.log(Team.query().with("players").all());
    console.log(Player.query().with("stats").all());
  }, */
};
</script>