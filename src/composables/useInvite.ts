// composables/useInvite.ts
import { ref } from 'vue'

export function useInvite() {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const success = ref(false)

  const cadastrarConvidado = async (dados: { nome: string; telefone: string }) => {
    loading.value = true
    error.value = null
    success.value = false

    try {
      const response = await fetch('http://localhost:3000/cadastrar-convidado', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.mensagem || 'Erro desconhecido')
      }

      success.value = true
      return await response.json()
    } catch (err: any) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return {
    cadastrarConvidado,
    loading,
    error,
    success,
  }
}
