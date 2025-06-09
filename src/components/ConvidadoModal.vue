<template>
  <div class="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
      <!-- Botão fechar -->
      <button
        @click="$emit('fechar')"
        class="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
        aria-label="Fechar"
      >
        ×
      </button>

      <h2 class="text-xl font-semibold mb-4 text-center">Cadastrar Convidado</h2>

      <form @submit.prevent="cadastrarConvidadoHandler">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">Nome</label>
          <input
            v-model="form.nome"
            type="text"
            required
            class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-300"
          />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
          <input
            v-model="form.Telefone"
            type="tel"
            class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-300"
          />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">Confirmado</label>
          <select
            v-model="form.Confirmado"
            required
            class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-300"
          >
            <option value="1">Sim</option>
            <option value="0">Não</option>
          </select>
        </div>

        <div class="flex justify-end">
            <ButtonComponent type="submit" class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
                Salvar
            </ButtonComponent>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import ButtonComponent from '../components/ButtonComponent.vue'
import { useInvite } from '../composables/useInvite'
import { showAlert } from '../utils/alert' // 👈 importa seu alerta

const form = reactive({
  nome: '',
  Telefone: '',
  Confirmado: '1', // Não está sendo usado na API ainda
})

const { cadastrarConvidado, loading, error, success } = useInvite()

const cadastrarConvidadoHandler = async () => {
  await cadastrarConvidado({
    nome: form.nome,
    telefone: form.Telefone,
  })
    if (success.value) {
    showAlert('success', 'Sucesso!', 'Convidado cadastrado com sucesso!').then(() => {
        form.nome = ''
        form.Telefone = ''
        form.Confirmado = '1'
    })
    } else if (error.value) {
        showAlert('error', 'Erro ao cadastrar', error.value)
    }
}
</script>

