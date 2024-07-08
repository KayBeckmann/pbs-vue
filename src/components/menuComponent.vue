<template>
  <nav>
    <div class="left">
      <h1>PBS</h1>
      |
      <div>Personal Bilance Software</div>
    </div>
    <div class="right">
      <RouterLink to="/">HOME</RouterLink> |
      <RouterLink to="/about">About</RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
// Your setup code here
</script>

<style scoped lang="scss">
nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .left,
  .right {
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
  }
}
</style>
