<template>
  <section class="max-w-4xl mx-auto p-6 bg-[#fffaf0] min-h-screen flex flex-col">
    <header class="flex items-center mb-6">
      <BackButtonComponent class="mr-4" />
      <h1 class="text-3xl font-bold text-gray-800">Presentes Cadastrados</h1>
    </header>

    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <li
        v-for="presente in presentes"
        :key="presente.id"
        class="bg-white rounded-lg shadow p-5 flex justify-between items-center hover:shadow-lg transition-shadow"
      >
        <div class="flex items-center gap-3 text-gray-800 font-semibold text-lg">
          <span>🎁</span>
          <span>{{ presente.nomePresente }}</span>
        </div>
      <ButtonComponent
        v-if="presente.linkPresente"
        @click="abrirSite(presente)"
        class="px-4 py-2"
      >
        Visualizar site
      </ButtonComponent>

      </li>
    </ul>

    <p class="mt-auto text-center text-sm text-gray-500 mt-10">
      *Total de presentes: {{ presentes.length }}
    </p>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import BackButtonComponent from '../components/BackButtonComponent.vue'
import ButtonComponent from '../components/ButtonComponent.vue'

const presentes = ref([])

const carregarPresentes = async () => {
  try {
    const res = await fetch('http://localhost:3000/presentes')
    presentes.value = await res.json()
  } catch (error) {
    console.error('Erro ao carregar presentes:', error)
  }
}

const abrirSite = (presente) => {
  if (presente.linkPresente) {
    window.open(presente.linkPresente, '_blank')
  } else {
    alert('URL do site não disponível')
  }
}

onMounted(() => {
  carregarPresentes()
})
</script>
