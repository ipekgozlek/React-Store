<script setup>
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia';

const counter = useCounterStore()
</script>

<template>
  <div class="welcome">
    <h1>Welcome to Your Vue.js App</h1>

    <div class="counter">
      <p>Current Count: {{ counter.count }}</p>
      <p>Double Count: {{ counter.doubleCount }}</p>
      <button @click="counter.increment">Increment Count</button>
    </div>
  </div>
</template>
