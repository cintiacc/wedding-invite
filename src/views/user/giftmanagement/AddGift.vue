<template>
  <div class="relative min-h-screen bg-[#fffaf0] py-10 px-4">

    <!-- Lista de presentes -->
    <div class="max-w-5xl mx-auto space-y-6">
      <h2 class="text-3xl font-bold text-rose-800 mb-4 text-left">Presentes Cadastrados</h2>
      <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        <CardComponent
          v-for="presente in presentes"
          :key="presente.id"
          :imageSrc="presente.imagemPresente"
          :title="presente.nomePresente"
          :subtitle="presente.linkPresente"
          :exibirBotao="false"
        />
      </div>
    </div>

    <!-- Botão redondo para abrir modal -->
    <button
      @click="abrirModal = true"
      class="fixed bottom-6 right-6 bg-rose-600 hover:bg-rose-700 text-white text-3xl rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition"
      aria-label="Adicionar presente"
    >
      +
    </button>

    <!-- Modal -->
    <div
      v-if="abrirModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-2xl shadow-xl p-6 w-full max-w-lg relative m-4">
        <button
          @click="fecharModal"
          class="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
        >
          &times;
        </button>

        <h2 class="text-2xl font-bold text-rose-800 mb-4">Cadastro de Presente</h2>

        <form @submit.prevent="enviarFormulario" class="space-y-4">
          <div>
            <label for="nomePresente" class="block text-gray-700 font-medium mb-1">Nome do presente</label>
            <input v-model="form.nomePresente" id="nomePresente" type="text" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-rose-500 outline-none" required />
          </div>

          <div>
            <label for="imagemPresente" class="block text-gray-700 font-medium mb-1">Imagem (URL)</label>
            <input v-model="form.imagemPresente" id="imagemPresente" type="url" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-rose-500 outline-none" required />
          </div>

          <div>
            <label for="linkPresente" class="block text-gray-700 font-medium mb-1">Link de compra</label>
            <input v-model="form.linkPresente" id="linkPresente" type="url" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-rose-500 outline-none" required />
          </div>

          <ButtonComponent type="submit" class="w-full" :disabled="loading">
            Cadastrar Presente
          </ButtonComponent>
        </form>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import ButtonComponent from '../../../components/ButtonComponent.vue'
import CardComponent from '../../../components/CardComponent.vue'
import { useFormGift } from '../../../composables/useFormGift'
import { showAlert } from '../../../utils/alert'

const abrirModal = ref(false)

const form = reactive({
  nomePresente: '',
  imagemPresente: '',
  linkPresente: ''
})

const { salvarPresente, carregarPresentes, presentes, error, loading } = useFormGift()

async function enviarFormulario() {
  const sucesso = await salvarPresente(form)
  if (sucesso) {
    await carregarPresentes()
    const resultado = await showAlert('success', 'Presente cadastrado com sucesso!', 'Deseja cadastrar outro presente?', {
      confirmButtonText: 'Cadastrar outro',
      cancelButtonText: 'Fechar',
      showCancelButton: true
    })

    if (resultado.isConfirmed) {
      form.nomePresente = ''
      form.imagemPresente = ''
      form.linkPresente = ''
    } else {
      fecharModal()
    }
  } else {
    showAlert('error', 'Erro', 'Erro ao cadastrar o presente')
  }
}

function fecharModal() {
  abrirModal.value = false
}
onMounted(() => carregarPresentes())
</script>

