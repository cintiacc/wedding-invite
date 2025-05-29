<template>
  <header class="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
      <!-- Logo / nome do casal -->
      <div class="text-2xl font-extrabold text-pink-600">
        Nosso Casamento
      </div>

      <!-- Menu desktop -->
      <nav class="hidden md:flex space-x-8">
        <a href="#inicio" class="text-gray-700 hover:text-pink-600 transition">Início</a>
        <a href="#sobre" class="text-gray-700 hover:text-pink-600 transition">Sobre</a>
        <a href="#historia" class="text-gray-700 hover:text-pink-600 transition">História</a>
        <a href="#presentes" class="text-gray-700 hover:text-pink-600 transition">Presentes</a>
        <a href="#confirmacao" class="text-gray-700 hover:text-pink-600 transition">Confirmação</a>
        <a href="#local" class="text-gray-700 hover:text-pink-600 transition">Local</a>
      </nav>

      <!-- Botão hamburger mobile -->
      <button
        @click="isOpen = !isOpen"
        class="md:hidden flex items-center focus:outline-none"
        aria-label="Abrir menu"
      >
        <svg
          v-if="!isOpen"
          class="w-6 h-6 text-pink-600"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          viewBox="0 0 24 24"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
        <svg
          v-else
          class="w-6 h-6 text-pink-600"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          viewBox="0 0 24 24"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>

    <!-- Menu mobile -->
    <nav
      v-show="isOpen"
      class="md:hidden bg-white border-t border-pink-200"
    >
      <a
        href="#inicio"
        class="block px-4 py-3 text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition"
        @click="isOpen = false"
      >Início</a>
      <a
        href="#sobre"
        class="block px-4 py-3 text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition"
        @click="isOpen = false"
      >Sobre</a>
      <a
        href="#historia"
        class="block px-4 py-3 text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition"
        @click="isOpen = false"
      >História</a>
      <a
        href="#presentes"
        class="block px-4 py-3 text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition"
        @click="isOpen = false"
      >Presentes</a>
      <a
        href="#confirmacao"
        class="block px-4 py-3 text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition"
        @click="isOpen = false"
      >Confirmação</a>
      <a
        href="#local"
        class="block px-4 py-3 text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition"
        @click="isOpen = false"
      >Local</a>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>
