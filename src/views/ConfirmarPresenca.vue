<template>
  <div class="min-h-screen bg-[#fffaf0] flex items-center justify-center bg-gray-100 px-4">
    <div class="bg-white p-6 rounded-xl shadow-xl max-w-md w-full">
      <h1 class="text-xl font-bold mb-4 text-center">Confirme sua presença</h1>

      <div v-if="convidado">
        <p class="mb-4 text-center">Olá, {{ convidado.nome }}! Você foi convidado para o evento.</p>

        <ButtonComponent
          v-if="!convidado.confirmado"
          @click="confirmar"
          class="w-full"
        >
          Confirmar Presença
        </ButtonComponent>

        <p v-else class="text-green-600 font-semibold mt-4 text-center">
          Presença confirmada! Obrigado por confirmar 🎉
        </p>
      </div>

      <p v-else class="text-center">Carregando convidado...</p>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { usePresenca } from '../composables/usePresenca'
import ButtonComponent from '../components/ButtonComponent.vue'
import { showAlert } from '../utils/alert'


const { carregarConvidado, confirmarPresenca } = usePresenca()
const route = useRoute()
const convidado = ref<any>(null)

onMounted(async () => {
  try {
    const id = (route.params.id || route.query.id) as string
    if (!id) throw new Error('ID não fornecido')
    convidado.value = await carregarConvidado(id)
  } catch (error) {
    alert('Erro ao carregar convidado.')
  }
})

const confirmar = async () => {
  try {
    const id = (route.params.id || route.query.id) as string
    if (!id) throw new Error('ID não fornecido')
    await confirmarPresenca(id)
    convidado.value.confirmado = true

    await showAlert('success', 'Presença confirmada!', 'Obrigado por confirmar sua presença no evento.')
  } catch (error) {
    await showAlert('error', 'Erro', 'Erro ao confirmar presença.')
  }
}

</script>
