<template>
  <div class="box">
    <h1>Login</h1>
    <div class="inputContainer">
      <label for="email">Email: </label>
      <input type="email" name="email" id="email" />
    </div>
    <div class="inputContainer">
      <label for="password">Password: </label>
      <input type="password" name="password" id="password" />
    </div>

    <div class="buttonContainer">
      <button>Create Account</button>
      <button>Login</button>
      <button>See user</button>
      <button>Logout</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
// connect inputs

// create inputs

// login

// seeCurrentUser

// logout
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
}
</style>
