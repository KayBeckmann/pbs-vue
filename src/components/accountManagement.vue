<template>
    <h1>AccountManagement</h1>
    <input type="text" v-model="name" placeholder="Kontobezeichnung">
    <input type="text" v-model="iban" placeholder="IBAN">
    <input type="text" v-model="bic" placeholder="BIC">
    <input type="number" v-model="startkapital" placeholder="Startkapital">
    <button @click="addAccount" >Hinzufügen</button>
</template>

<script setup>
import {Account} from "@/models/account"
import {useAccountStore} from "@/stores/account"

const accountStore = useAccountStore()

let name = ""
let iban = ""
let bic = ""
let startkapital = 0

function addAccount(){
    accountStore.addAccount({name, iban, bic, startkapital})
}
</script>

<style scoped lang="scss">
h1 {
  color:red;
}
</style>