<template>
  <div class="center">
    <menuComponent></menuComponent>
  </div>
  <div class="content">
    <acountManagement></acountManagement>

    <dashboardComponent></dashboardComponent>
  </div>
  <footerComponent></footerComponent>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import menuComponent from "@/components/menuComponent.vue";
import acountManagement from "@/components/accountManagement.vue";
import footerComponent from "@/components/footerComponent.vue";
import dashboardComponent from "@/components/dashboardComponent.vue";
import { useAccountStore } from "@/stores/account";

const accountStore = useAccountStore();

onMounted(() => {
  accountStore.fetchAccounts();
});
</script>

<style scoped lang="scss">
.center {
  display: flex;
  justify-content: center;
  left: auto;
  right: auto;
}
.content {
  margin-top: 85px;
}
</style>
