<template>
  <nav>
    <div class="left">
      <h1><abbr title="Personal Bilance Software">PBS</abbr></h1>
    </div>
    <div class="right">
      <h2 :class="{ alert: totalBalance < 0 }">{{ totalBalance }}€</h2>
      <button @click="logout">Logout</button>
      <!-- <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> -->
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useAccountStore } from "@/stores/account";
import { useRouter } from "vue-router";
import { supabase } from "@/supabase";

// Zugriff auf den Router
const router = useRouter();

// Store initialisieren
const accountStore = useAccountStore();

// Zugriff auf die Summe
const totalBalance = computed(() => accountStore.sum());

// logout
async function logout() {
  const { data, error } = await supabase.auth.signOut();
  accountStore.reset();
  router.push("/login");
}
</script>

<style scoped lang="scss">
nav {
  --_heightStart: 85px;
  --_heightEnd: 70px;
  --_widthStart: 100dvw;
  --_widthEnd: clamp(18.75rem, 7.386rem + 56.82vw, 50rem);
  --_borderRadius: 25px;
  --_animationStartsAfter: 75dvh;
  --_animationDistance: 250px;
  --_surfaceColorStart: rgb(20, 29, 47);
  --_surfaceColorEnd: rgba(20, 29, 47, 0.25);
  --_textColorStart: hsl(0 10% 90%);
  --_textColorEnd: hsl(0 10% 90%);

  z-index: 999;
  background-color: var(--_surfaceColorStart);
  color: var(--_textColorStart);
  width: var(--_widthStart);
  height: var(--_heightStart);
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  animation: stickyNav linear forwards;
  backdrop-filter: blur(0.15rem);
  animation-timeline: view();
  animation-range-start: calc(100dvh + var(--_animationStartsAfter));
  animation-range-end: calc(
    100dvh + var(--_animationStartsAfter) + var(--_animationDistance)
  );
}

a {
  display: inline-block;
  white-space: nowrap;
  text-decoration: none;
  color: white;
}

h1 {
  font-size: clamp(2.5rem, 2.833rem + -1.78vw, 1.5rem);

  animation: logoDisapear linear forwards;
  animation-timeline: view();
  animation-range-start: calc(100dvh + var(--_animationStartsAfter));
  animation-range-end: calc(
    100dvh + var(--_animationStartsAfter) + var(--_animationDistance)
  );
}

.left {
  padding-left: 37px;
}

.right {
  padding-right: 37px;
  display: flex;
  gap: 15px;

  a {
    text-decoration: none;
    font-size: clamp(0.75rem, 0.386rem + 1.82vw, 1.75rem);
    color: var(--_textColorStart);

    &:hover {
      color: var(--background-color-hover);
    }
  }

  .active {
    border-bottom: 3px solid #4b47ff;
  }
}

.d-none {
  display: none;
}

.alert {
  color: #ef0000;
}

@keyframes stickyNav {
  100% {
    top: 1rem;
    height: var(--_heightEnd);
    width: var(--_widthEnd);
    background-color: var(--_surfaceColorEnd);
    color: var(--_textColorEnd);
    box-shadow: 0 0 0.75rem hsl(0 0% 0% / 0.3);
    border-radius: var(--_borderRadius);
  }
}

@keyframes logoDisapear {
  100% {
    font-size: clamp(2rem, 2.333rem + -1.78vw, 1rem);
  }
}
</style>
