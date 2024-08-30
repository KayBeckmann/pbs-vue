<template>
  <div class="box">
    <h1>Login</h1>
    <div class="inputContainer">
      <label for="email">Email: </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="E-Mail"
        v-model="email"
      />
    </div>
    <div class="inputContainer">
      <label for="password">Password: </label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        v-model="password"
      />
    </div>

    <div class="inputContainer">
      <label for="name">Name: </label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        v-model="name"
      />
    </div>

    <div class="buttonContainer">
      <button @click="createAccount()">Create Account</button>
      <button @click="login()">Login</button>
      <button @click="seeCurrentUser()">See user</button>
      <button @click="logout()">Logout</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { supabase } from "@/supabase";
import { ref } from "vue";

const router = useRouter();

// connect inputs
let email = ref("");
let password = ref("");
let name = ref("");

// create inputs
async function createAccount() {
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
    data: {
      name: name.value,
    },
  });
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
}

// login
async function login() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });

  if (error) {
    console.error(error);
  } else {
    router.push("/");
  }
}

// seeCurrentUser
async function seeCurrentUser() {
  const localUser = await supabase.auth.getSession();
  console.log(localUser);
}
</script>

<style scoped lang="scss">
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80dvh;
  width: 500px;
  border: 2px solid lightgray;
  border-radius: 15px;
  gap: 15px;

  h1 {
    font-size: 3rem;
  }
}
.inputContainer {
  display: flex;
  flex-direction: column;
  width: 80%;
}

.buttonContainer {
  display: flex;
  flex-direction: column;
  gap: 15px;

  button {
    height: 35px;
    width: 150px;
  }
}
</style>
