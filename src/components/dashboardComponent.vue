<template>
  <h1>Dashboard</h1>
  <ul>
    <li v-for="account in accounts" :key="account.id">
      {{ account.bank }} - {{ account.balance }} - {{ account.owner }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { supabase } from "@/supabase";
import { ref, onMounted } from "vue";
import { Account } from "@/models/account";

let accounts: Account[] = ref("Accounts");

async function load() {
  let { data, error } = await supabase.from("accounts").select("*");

  if (error) {
    console.error("Fehler beim Laden der Daten:", error);
  } else {
    accounts.value = data;
  }
}

onMounted(() => {
  load();
});
</script>

<style scoped lang="scss"></style>
