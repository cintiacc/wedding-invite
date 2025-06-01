<template>
  <div class="min-h-screen flex items-center justify-center py-10 px-4">
    <div class="grid md:grid-cols-2 gap-10 w-full max-w-6xl items-stretch">

      <!-- Formulário -->
      <div>
        <div class="flex items-center mb-6">
          <BackButtonComponent />
          <h2 class="text-3xl font-bold text-rose-800 mb-4">Cadastro de Presente</h2>
        </div>

        <form @submit.prevent="enviarFormulario"
          class="bg-white rounded-2xl shadow-lg p-8 space-y-6 border border-neutral-100">

          <div>
            <label for="nomePresente" class="block text-gray-700 font-medium mb-2">Nome do presente</label>
            <input v-model="form.nomePresente" id="nomePresente" type="text"
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
              required />
          </div>

          <div>
            <label for="imagemPresente" class="block text-gray-700 font-medium mb-2">Imagem do presente (URL)</label>
            <input v-model="form.imagemPresente" id="imagemPresente" type="url"
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
              required />
          </div>

          <div>
            <label for="linkPresente" class="block text-gray-700 font-medium mb-2">Link para comprar o presente</label>
            <input v-model="form.linkPresente" id="linkPresente" type="url"
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
              required />
          </div>

          <div class="pt-4">
            <ButtonComponent type="submit" class="w-full" :disabled="loading">
              Cadastrar Presente
            </ButtonComponent>
          </div>
        </form>
      </div>

      <!-- Lista de presentes -->
      <div class="space-y-6 overflow-y-auto max-h-[500px]">
        <h2 class="text-3xl font-bold text-rose-800 mb-4 sticky bg-[#fffaf0] top-0 z-10 py-2">Presentes Cadastrados</h2>
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
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import ButtonComponent from '../../components/ButtonComponent.vue'
import BackButtonComponent from '../../components/BackButtonComponent.vue'
import CardComponent from '../../components/CardComponent.vue'
import { useFormGift } from '../../composables/useFormGift'
import { showAlert } from '../../utils/alert'

const form = reactive({
  nomePresente: '',
  imagemPresente: '',
  linkPresente: ''
})

const { salvarPresente, carregarPresentes, presentes, error, loading } = useFormGift()

async function enviarFormulario() {
  const sucesso = await salvarPresente(form)
  if (sucesso) {
    showAlert('success', 'Sucesso', 'Presente cadastrado com sucesso!')
    form.nomePresente = ''
    form.imagemPresente = ''
    form.linkPresente = ''
    await carregarPresentes() // atualiza a lista de presentes
  } else {
    showAlert('error', 'Erro', 'Erro ao cadastrar o presente')
  }
}

onMounted(() => {
  carregarPresentes()
})
</script>
