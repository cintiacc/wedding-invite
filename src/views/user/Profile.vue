<template>
  <div class="flex">
    <!-- Sidebar -->
    <SidebarComponent />

    <!-- Conteúdo -->
    <main class="ml-20 w-full min-h-screen p-6 bg-[#fffaf0]">
      <h1 class="text-2xl font-bold text-gray-800 mb-6">Olá, noivos! 💍</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Card Convidados -->
        <div class="bg-white p-4 rounded-lg shadow">
          <h2 class="text-lg font-semibold mb-2">Convidados Cadastrados</h2>
          <ConvidadosTable :convidados="convidados" @cadastrar="abrirCadastroConvidado" />
        </div>

        <!-- Card Presentes -->
        <Gifts @cadastrar-presente="abrirCadastroPresente" />
      </div>

      <!-- Modal Convidado -->
      <ConvidadoModal
        v-if="mostrarModalCadastroConvidado"
        @fechar="mostrarModalCadastroConvidado = false"
        @sucesso="aoCadastrarConvidado"
      />

      <!-- Modal Presente -->
      <GiftsModal
        v-if="mostrarModalCadastroPresente"
        @fechar="mostrarModalCadastroPresente = false"
      />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import SidebarComponent from '../../components/SidebarComponent.vue'
import ConvidadosTable from '../../components/ConvidadosTable.vue'
import ConvidadoModal from '../../components/ConvidadoModal.vue'
import GiftsModal from '../../components/GiftsModal.vue'
import Gifts from '../../components/Gifts.vue'
import { useConvidado } from '../../composables/useConvidado'

const { convidados, carregarConvidados } = useConvidado()

const mostrarModalCadastroConvidado = ref(false)
const mostrarModalCadastroPresente = ref(false)

function abrirCadastroConvidado() {
  mostrarModalCadastroConvidado.value = true
}

function abrirCadastroPresente() {
  mostrarModalCadastroPresente.value = true
}

async function aoCadastrarConvidado() {
  mostrarModalCadastroConvidado.value = false
  await carregarConvidados()
}

onMounted(async () => {
  await carregarConvidados()
})
</script>
