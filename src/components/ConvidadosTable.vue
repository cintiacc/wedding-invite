<template>
  <div>
    <table class="w-full text-sm text-left text-gray-600">
      <thead>
        <tr class="bg-gray-100">
          <th class="p-2">Nome</th>
          <th class="p-2">Telefone</th>
          <th class="p-2 text-center">Link Convite</th> <!-- nova coluna -->
          <th class="p-2">Confirmados</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="convidado in convidados" :key="convidado.id" class="border-t">
          <td class="p-2">{{ convidado.nome }}</td>
          <td class="p-2 flex items-center space-x-2">
            <span>{{ convidado.Telefone ? convidado.Telefone : '-' }}</span>
            <a
              v-if="convidado.Telefone"
              :href="`https://wa.me/${formataTelefone(convidado.Telefone)}`"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enviar WhatsApp"
            >
            <i class="fab fa-whatsapp text-green-500 text-lg"></i>
            </a>
          </td>

          <td class="p-2 text-center">
            <button 
              v-if="convidado.id"
              @click="copiarLink(convidado.id)"
              class="text-blue-500 hover:text-blue-700"
              aria-label="Copiar link do convite"
            >
              📋 <!-- Pode ser um ícone SVG mais elaborado -->
            </button>
          </td>

          <td class="p-2">{{ convidado.Confirmado == 1 ? 'Sim' : 'Não' }}</td>
        </tr>
      </tbody>

    </table>
    
    <ButtonComponent @click="$emit('cadastrar')" class="mt-4">
      Cadastrar convidados
    </ButtonComponent>
  </div>
</template>

<script setup>
import ButtonComponent from './ButtonComponent.vue'
import { showAlert } from '../utils/alert' // Importe sua função de alerta

defineProps({
  convidados: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['cadastrar'])

// Função para formatar telefone para link do WhatsApp, remover espaços, parênteses, traços etc
function formataTelefone(numero) {
  return numero.replace(/\D/g, '')
}

// Função para copiar o link do convite para a área de transferência
function copiarLink(id) {
  const urlBase = window.location.origin  // exemplo: http://localhost:5173
  const link = `${urlBase}/?id=${id}`

  navigator.clipboard.writeText(link)
     .then(() => {
      showAlert('success', 'Link copiado!', link)
    })
    .catch(() => {
      showAlert('error', 'Falha ao copiar o link.')
    })
}
</script>

