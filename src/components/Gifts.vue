<!-- Gifts.vue -->
<template>
  <div class="bg-white p-4 rounded-lg shadow-xl">
    <h2 class="text-lg font-semibold mb-2">Presentes Cadastrados</h2>
    <ul class="text-sm text-gray-600 space-y-2">
      <li
        v-for="(presente, index) in presentes.slice(0, 10)"
        :key="index"
        class="flex justify-between items-center"
      >
        <span>🎁 {{ presente.nomePresente }}</span>
        <button @click="abrirEditar(presente)" class="text-blue-500 hover:text-blue-700">✏️</button>
      </li>
    </ul>

    <p class="text-xs text-gray-400 mt-2">*Mostrando os 10 primeiros presentes</p>

    <ButtonComponent :as="'button'" @click="abrirCadastro" class="mt-4">
     Cadastrar Presente
    </ButtonComponent>

    <GiftsModal
      v-if="mostrarModal"
      :presente="presenteSelecionado"
      :editando="editando"
      @fechar="mostrarModal = false"
      @atualizar="carregarPresentes"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ButtonComponent from './ButtonComponent.vue'
import GiftsModal from './GiftsModal.vue'
import { useFormGift } from '../composables/useGift'

const presentes = ref<any[]>([])
const mostrarModal = ref(false)
const editando = ref(false)
const presenteSelecionado = ref<any | null>(null)

const { buscarPresente } = useFormGift()

const carregarPresentes = async () => {
  try {
    const response = await fetch('http://localhost:3000/presentes')
    presentes.value = await response.json()
  } catch (error) {
    console.error('Erro ao carregar presentes:', error)
  }
}

onMounted(() => {
  carregarPresentes()
})

const abrirCadastro = () => {
  presenteSelecionado.value = null
  editando.value = false
  mostrarModal.value = true
}

const abrirEditar = async (presente: any) => {
  console.log('Editando presente:', presente)

  const carregado = await buscarPresente(presente.id)
  if (!carregado) return

  presenteSelecionado.value = presente
  editando.value = true
  mostrarModal.value = true
}

</script>
