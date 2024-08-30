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

    <div class="buttonContainer">
      <button @click="createAccount()">Create Account</button>
      <button @click="login()">Login</button>
      <button @click="seeCurrentUser()">See user</button>
      <button @click="logout()">Logout</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
// connect inputs
let email = ref("");
let password = ref("");

// create inputs
function createAccount() {
  alert("Create Account");
}

// login
function login() {
  alert("LOGIN");
}

// seeCurrentUser
function seeCurrentUser() {
  alert("seeCurrentUser");
}

// logout
function logout() {
  alert("LOGOUT");
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
