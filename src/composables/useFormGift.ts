import { ref } from 'vue'

export function useFormGift() {
  const error = ref<string | null>(null)
  const loading = ref(false)
  const presentes = ref<Array<{ id: number; nomePresente: string; imagemPresente: string; linkPresente: string }>>([])

  async function salvarPresente(presenteData: {
    nomePresente: string
    imagemPresente: string
    linkPresente: string
  }) {
    loading.value = true
    error.value = null

    try {
      const response = await fetch('http://localhost:3000/presentes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: presenteData.nomePresente,
          imagem: presenteData.imagemPresente,
          link: presenteData.linkPresente
        })
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.mensagem || 'Erro ao cadastrar presente')
      }

      loading.value = false
      return true
    } catch (err: any) {
      error.value = err.message || 'Erro desconhecido'
      loading.value = false
      return false
    }
  }

  async function carregarPresentes() {
    loading.value = true
    error.value = null

    try {
      const response = await fetch('http://localhost:3000/presentes')

      if (!response.ok) {
        throw new Error('Erro ao carregar presentes')
      }

      const data = await response.json()
      // Supondo que o backend já retorne o array no formato esperado:
      // [{ id, nomePresente, imagemPresente, linkPresente }, ...]
      presentes.value = data
      loading.value = false
    } catch (err: any) {
      error.value = err.message || 'Erro desconhecido'
      loading.value = false
    }
  }

  return {
    salvarPresente,
    carregarPresentes,
    presentes,
    error,
    loading
  }
}
