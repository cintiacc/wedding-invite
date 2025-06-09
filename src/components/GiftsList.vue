<template>
  <div class="bg-white p-4 rounded-lg shadow">
    <h2 class="text-lg font-semibold mb-4">Presentes Cadastrados</h2>
    <ul class="space-y-2 text-gray-700">
      <li v-for="presente in presentes" :key="presente.id" class="flex justify-between items-center">
        <span>🎁 {{ presente.nomePresente }}</span>
        <button
          @click="abrirSite(presente)"
          class="text-blue-600 hover:underline"
        >
          Visualizar site
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

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
  // Supondo que você tenha uma propriedade com a URL do site do presente, ex: presente.siteUrl
  if (presente.siteUrl) {
    window.open(presente.siteUrl, '_blank')
  } else {
    alert('URL do site não disponível')
  }
}

onMounted(() => {
  carregarPresentes()
})
</script>
