<template>
  <div class="min-h-screen flex items-center justify-center py-10 px-4">
    <div class="min-h-screen">
      <div class="flex items-center mb-6">
        <BackButtonComponent />
        <h2 class="text-3xl font-bold text-rose-800 mb-4">Lista de presentes</h2>
      </div>

      <div v-if="loading" class="text-center text-gray-500">Carregando presentes...</div>
      <div v-if="error" class="text-red-600 text-center">{{ error }}</div>

      <div v-if="!loading && !error" class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <CardComponent
          v-for="presente in presentes"
          :key="presente.id"
          :imageSrc="presente.imagemPresente"
          :title="presente.nomePresente"
          :subtitle="presente.linkPresente"
          :showButton="true"
          @dar-presente="abrirModal(presente)"
        />
      </div>
    </div>

    <!-- Modal -->
    <div v-if="modalAberta" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-lg max-w-md w-full">
        <h3 class="text-xl font-bold mb-4 text-center">Dar presente</h3>
        <label class="block mb-2 text-sm font-medium">Seu nome:</label>
        <input v-model="nomeConvidado" class="w-full border rounded p-2 mb-4" />

        <p class="mb-4">Você está selecionando o presente: <strong>{{ presenteSelecionado?.nomePresente }}</strong></p>

        <div class="flex justify-end gap-2">
          <button @click="fecharModal" class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancelar</button>
          <button @click="confirmarPresente" class="px-4 py-2 bg-rose-600 text-white rounded hover:bg-rose-700">Confirmar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CardComponent from '../components/CardComponent.vue'
import BackButtonComponent from '../components/BackButtonComponent.vue'
import { useFormGift } from '../composables/useFormGift'

const { carregarPresentes, presentes, loading, error } = useFormGift()

const modalAberta = ref(false)
const presenteSelecionado = ref(null)
const nomeConvidado = ref('')

// abrir modal com dados do presente
function abrirModal(presente) {
  presenteSelecionado.value = presente
  nomeConvidado.value = ''
  modalAberta.value = true
}

// fechar modal
function fecharModal() {
  modalAberta.value = false
  presenteSelecionado.value = null
  nomeConvidado.value = ''
}

// confirmar e atualizar presente como selecionado
async function confirmarPresente() {
  if (!nomeConvidado.value || !presenteSelecionado.value) return

  try {
    await fetch(`http://localhost:3000/presentes/${presenteSelecionado.value.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        selecionado: true,
        nomeConvidado: nomeConvidado.value
      })
    })

    // Remove o presente da lista local
    const index = presentes.value.findIndex(p => p.id === presenteSelecionado.value.id)
    if (index !== -1) {
      presentes.value.splice(index, 1)
    }

    fecharModal()
  } catch (error) {
    console.error('Erro ao atualizar presente:', error)
  }
}

// carregar presentes na montagem
onMounted(() => {
  carregarPresentes()
})
</script>
