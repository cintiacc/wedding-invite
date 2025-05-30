<template>
  <div class="min-h-screen flex items-center justify-center py-10 px-4">
    <div class="grid md:grid-cols-2 gap-10 w-full max-w-6xl items-stretch">

      <div>
        <div class="flex items-center mb-6">
            <BackButtonComponent />
            <h2 class="text-3xl font-bold text-rose-800 mb-4">Confirmação de Presença</h2>
        </div>
        

        <form @submit.prevent="enviarFormulario"
          class="bg-white rounded-2xl shadow-lg p-8 space-y-6 border border-neutral-100">

          <div>
            <label for="nome" class="block text-gray-700 font-medium mb-2">Nome completo</label>
            <input v-model="form.nome" id="nome" type="text"
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
              required />
          </div>

          <div>
            <label class="block text-gray-700 font-medium mb-2">Vai levar acompanhante?</label>
            <select v-model="form.levarAcompanhante"
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500 transition">
              <option value="nao">Não</option>
              <option value="sim">Sim</option>
            </select>
          </div>

          <div v-if="form.levarAcompanhante === 'sim'">
            <div v-for="(nome, index) in form.acompanhantes" :key="index" class="mb-4">
              <label :for="`acompanhante-${index}`" class="block text-gray-700 font-medium mb-2">
                Nome do acompanhante {{ index + 1 }}
              </label>
              <input :id="`acompanhante-${index}`" v-model="form.acompanhantes[index]" type="text"
                class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500 transition" />
            </div>
            <div class="flex gap-4 text-sm">
              <button type="button" @click="adicionarAcompanhante" :disabled="form.acompanhantes.length >= 2"
                class="text-rose-600 hover:underline disabled:opacity-50">
                + Adicionar acompanhante
              </button>
              <button v-if="form.acompanhantes.length > 0" type="button" @click="removerUltimoAcompanhante"
                class="text-gray-500 hover:underline">
                Remover último
              </button>
            </div>
          </div>

          <div>
            <label class="block text-gray-700 font-medium mb-2">Possui alguma restrição alimentar?</label>
            <select v-model="form.temRestricao"
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500 transition">
              <option value="nao">Não</option>
              <option value="sim">Sim</option>
            </select>
          </div>

          <div v-if="form.temRestricao === 'sim'">
            <label for="restricao" class="block text-gray-700 font-medium mb-2">Especifique a restrição</label>
            <input v-model="form.restricao" id="restricao" type="text"
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
              required />
          </div>

          <div class="pt-4">
            <ButtonComponent type="submit" class="w-full">
              Confirmar Presença
            </ButtonComponent>
          </div>
        </form>
      </div>

      <div class="flex justify-center">
        <img src="/images/invite/invite.jpeg" alt="Casamento" class="rounded-2xl shadow-lg w-full max-w-md object-cover" />
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import useFormulario from '../composables/useFormulario'
import ButtonComponent from '../components/ButtonComponent.vue'
import BackButtonComponent from '../components/BackButtonComponent.vue'


const {
  form,
  adicionarAcompanhante,
  removerUltimoAcompanhante,
  enviarFormulario,
} = useFormulario()
</script>
