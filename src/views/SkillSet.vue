<template>
  <div class="skills page">
    <div>
      <dl v-for="(item, idx) in skills" :key="idx">
        <div class="name">
          <dt>{{ item.name }}</dt>
        </div>
        <div class="caption">
          <dd>
            <span v-for="i in item.progress" :key="i"
              ><font-awesome-icon icon="fa-solid fa-star" /></span
            ><span v-for="j in 5 - item.progress" :key="j * 100"
              ><font-awesome-icon icon="fa-regular fa-star" />
            </span>
          </dd>
          <dd>{{ item.caption }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts">
import skills from "@/assets/skillset.json";
</script>

<style scoped>
.skills {
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
}
dl {
  margin: 30px;
}
dd {
  text-align: left;
}
.name {
  float: left;
}
dt::after {
  content: "：";
}
.ps {
  height: 95vh;
  width: 100vw;
  border: 2px solid #000;
}
</style>
