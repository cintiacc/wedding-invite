<template>
  <div>
    <table class="w-full text-sm text-left text-gray-600">
      <thead>
        <tr class="bg-gray-100">
          <th class="p-2">Nome</th>
          <th class="p-2">Telefone</th>
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
              <svg xmlns="http://www.w3.org/2000/svg" 
                   viewBox="0 0 24 24" 
                   fill="currentColor" 
                   class="w-5 h-5 text-green-500 hover:text-green-700">
                <path d="M20.52 3.48A11.919 11.919 0 0012 0C5.373 0 0 5.373 0 12a11.96 11.96 0 001.56 6.04L0 24l5.96-1.56A11.969 11.969 0 0012 24c6.627 0 12-5.373 12-12 0-3.205-1.25-6.207-3.48-8.52zm-8.52 16.2a8.5 8.5 0 01-4.59-1.28l-.33-.2-3.54.93.94-3.44-.21-.34a8.5 8.5 0 1110.74 3.33 8.352 8.352 0 01-2.06 2.0z"/>
                <path d="M17.37 13.38l-2.4-.68a.628.628 0 00-.59.17l-1.14 1.1a7.67 7.67 0 01-3.53-3.54l1.09-1.14a.59.59 0 00.17-.59l-.67-2.42a.599.599 0 00-.56-.4H8.5a.59.59 0 00-.6.59c0 4.07 3.3 7.38 7.36 7.38a.594.594 0 00.59-.6v-1.52a.605.605 0 00-.48-.55z"/>
              </svg>
            </a>
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
</script>
