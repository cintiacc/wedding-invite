import { ref } from 'vue'

export function useRegister() {
  const error = ref<string | null>(null)
  const loading = ref(false)

  async function register(nome: string, email: string, senha: string): Promise<boolean> {
    error.value = null
    loading.value = true

    const data = { nome, email, senha }
    console.log('Dados enviados para o backend:', data)

    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, email, senha })
      })

      if (!response.ok) {
        // Tenta pegar a mensagem de erro da API
        const errorData = await response.json().catch(() => null)
        console.log('Erro da API:', errorData)
        error.value = errorData?.mensagem || 'Erro desconhecido ao registrar'
        loading.value = false
        return false
      }

      loading.value = false
      return true

    } catch (err) {
      error.value = 'Erro na comunicação com o servidor'
      loading.value = false
      return false
    }
  }

  return {
    register,
    error,
    loading
  }
}
