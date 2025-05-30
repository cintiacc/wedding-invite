<template>
  <button @click="goBack" class="mr-3">
      <span class="material-symbols-outlined">arrow_back</span>
  </button>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goBack() {
  if (window.history.length > 1) {
    router.back();
  } else {
    router.push('/home'); // rota fallback, ajuste conforme seu app
  }
}
</script>
