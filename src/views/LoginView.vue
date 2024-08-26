<template>
    <menuComponent></menuComponent>
    <div class="about">
      <h1>This is an login page</h1>
    </div>
  </template>
  
  <script setup>
  import menuComponent from "@/components/menuComponent.vue";
  </script>
  
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  