<template>
  <div class="flex bg-white shadow-md rounded-xl p-4 gap-4 items-start">
    <!-- Imagem -->
    <img :src="imageSrc" alt="Imagem do presente" class="w-24 h-24 object-cover rounded-lg" />

    <!-- Conteúdo e botões -->
    <div class="flex flex-1 justify-between items-start">
      <!-- Título -->
      <div class="flex flex-col">
        <h3 class="text-lg font-semibold text-gray-800">{{ title }}</h3>
        <!-- <p class="text-sm text-gray-500 truncate">{{ subtitle }}</p> -->
      </div>

      <!-- Botões -->
      <div class="flex gap-2">
        <button @click="$emit('editar')" class="text-blue-600 hover:text-blue-800">
          <span class="material-icons">edit</span>
        </button>
        <button @click="$emit('deletar')" class="text-red-600 hover:text-red-800">
          <span class="material-icons">close</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  imageSrc: string
  title: string
  subtitle?: string
}>()

defineEmits(['editar', 'deletar'])
</script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
</style>
