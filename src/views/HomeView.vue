<template>
  <menuComponent></menuComponent>
  <div class="content">
    <acountManagement></acountManagement>
  </div>
</template>

<script setup lang="ts">
import menuComponent from "@/components/menuComponent.vue";
import acountManagement from "@/components/accountManagement.vue"
</script>

<style scoped lang="scss">
.content {
  margin-top: 90px;
}
</style>
