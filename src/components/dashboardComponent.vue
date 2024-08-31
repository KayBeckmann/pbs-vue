<template>
  <h1>Dashboard</h1>
  <ul>
    <li v-for="account in accounts" :key="account.id">
      {{ account.bank }} - {{ account.balance }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useAccountStore } from "@/stores/account";

// Zugriff auf den Account-Store
const accountStore = useAccountStore();

// Reaktive Bindung der Accounts aus dem Store
const accounts = computed(() => accountStore.accounts);
</script>

<style scoped lang="scss"></style>
