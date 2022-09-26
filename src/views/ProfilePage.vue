<template>
  <div class="about page">
    <dl v-for="(item, idx) in profile" :key="idx">
      <dt>{{ item.year + "年" }}</dt>
      <dd>{{ item.caption }}</dd>
    </dl>
  </div>
</template>

<script setup lang="ts">
import profile from "@/assets/profile.json";
</script>

<style scoped>
dl {
  text-align: left;
  margin-left: auto;
  margin-right: auto;
}
dt {
  float: left;
}
dt::after {
  content: "：";
}
</style>
