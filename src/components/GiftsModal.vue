<!-- GiftsModal.vue -->
<template>
  <div class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
      <!-- Botão fechar no canto superior direito -->
      <button
        @click="$emit('fechar')"
        class="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl font-bold"
        aria-label="Fechar"
      >
        ×
      </button>

      <h3 class="text-xl font-semibold mb-6 text-center">
        {{ editando ? 'Editar' : 'Cadastrar' }} Presente
      </h3>

      <form @submit.prevent="salvarPresente" class="space-y-5">
        <div>
          <input
            v-model="form.nomePresente"
            type="text"
            placeholder="Nome do presente"
            required
            class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-300"
          />
        </div>

        <div>
          <input
            v-model="form.imagemPresente"
            type="text"
            placeholder="Link da imagem"
            class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-300"
          />
        </div>

        <div>
          <input
            v-model="form.linkPresente"
            type="text"
            placeholder="Link do site do produto"
            required
            class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-300"
          />
        </div>

        <div class="flex justify-end">
          <ButtonComponent
            type="submit"
            class="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md"
          >
            {{ editando ? 'Atualizar' : 'Salvar' }}
          </ButtonComponent>

          <button type="button" class="btn btn-danger" @click="handleDelete">
            Excluir Presente
          </button>
        </div>
      </form>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, watch } from 'vue'
import { useFormGift } from '../composables/useGift'
import ButtonComponent from './ButtonComponent.vue'
import { showConfirm } from '../utils/alert';



const props = defineProps<{
  presente?: any
  editando: boolean
}>()

const emit = defineEmits(['fechar', 'atualizar'])

const { form, criarPresente, atualizarPresente, deletarPresente } = useFormGift()

const salvarPresente = async () => {
  if (props.editando && props.presente?.id) {
    await atualizarPresente(props.presente.id)
  } else {
    await criarPresente()
  }

  emit('atualizar')
  emit('fechar')
}

async function handleDelete() {
  if (!props.presente?.id) return;

  const result = await showConfirm('Tem certeza que deseja excluir este presente?');
  if (result.isConfirmed) {
    await deletarPresente(props.presente.id);
    emit('atualizar');
    emit('fechar');
  }
}

watch(
  () => props.presente,
  (presente) => {
    if (presente) {
      form.nomePresente = presente.nomePresente
      form.imagemPresente = presente.imagemPresente
      form.linkPresente = presente.linkPresente
    } else {
      form.nomePresente = ''
      form.imagemPresente = ''
      form.linkPresente = ''
    }
  },
  { immediate: true }
)
</script>
