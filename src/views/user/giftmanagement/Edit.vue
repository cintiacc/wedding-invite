<template>
  <form @submit.prevent="atualizarPresente" class="space-y-4">
    <!-- Campos idênticos ao cadastro -->
    <input v-model="form.nomePresente" />
    <input v-model="form.imagemPresente" />
    <input v-model="form.linkPresente" />
    <ButtonComponent type="submit">Salvar Alterações</ButtonComponent>
  </form>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  setup() {
    const form = ref({
      nomePresente: '',
      imagemPresente: '',
      linkPresente: ''
    })

    const route = useRoute()
    const router = useRouter()

    onMounted(async () => {
      const id = route.params.id
      // Buscar dados do presente
      const response = await fetch(`/api/presentes/${id}`)
      const data = await response.json()
      form.value = {
        nomePresente: data.nomePresente,
        imagemPresente: data.imagemPresente,
        linkPresente: data.linkPresente
      }
    })

    const atualizarPresente = async () => {
      const id = route.params.id
      await fetch(`/api/presentes/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form.value)
      })
      router.push('/caminho-apos-update') // Redireciona após atualizar
    }

    return { form, atualizarPresente }
  }
}
</script>
