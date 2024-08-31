<template>
  <h1>AccountManagement</h1>
  <div class="wrapper">
    <input type="text" v-model="account.bank" placeholder="Kontobezeichnung" />
    <input type="text" v-model="account.iban" placeholder="IBAN" />
    <input type="text" v-model="account.bic" placeholder="BIC" />
    <input type="number" v-model="account.balance" placeholder="Startkapital" />
  </div>
  <button @click="addAccount">Hinzufügen</button>
</template>

<script setup>
import { Account } from "@/models/account";
import { useAccountStore } from "@/stores/account";

const accountStore = useAccountStore();
let account = new Account();

function addAccount() {
  accountStore.saveAccount(account);
}
</script>

<style scoped lang="scss">
h1 {
  color: red;
}
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
