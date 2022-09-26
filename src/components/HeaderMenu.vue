<template>
  <header>
    <nav>
      <router-link to="/"><div class="tab">PROFILE</div></router-link>
      <router-link to="/skills"><div class="tab">SKILLS</div></router-link>
      <router-link to="/works"><div class="tab">WORKS</div></router-link>
      <router-link to="/social"><div class="tab">SOCIAL</div></router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderMenu",
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  background-color: #7df5bf;
}
nav a.router-link {
  font-weight: bold;
  color: #2c3e50;
}
.tab {
  width: 15%;
  display: inline-block;
  border-bottom: solid 1px rgba(0, 0, 0, 0.3);
  border-left: solid 1px rgba(0, 0, 0, 0.3);
  border-right: solid 1px rgba(0, 0, 0, 0.3);
  padding: 10px 0;
}
a:link,
a:visited,
a:active {
  color: black;
  text-decoration: none;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
