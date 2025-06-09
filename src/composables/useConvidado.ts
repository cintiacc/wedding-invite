// composables/useConvidado.ts
import { ref } from 'vue'

export function useConvidado() {
  const convidados = ref([])

  async function carregarConvidados() {
    try {
      const res = await fetch('http://localhost:3000/convidados')
      convidados.value = await res.json()
      console.log('Convidados carregados:', convidados.value)
    } catch (error) {
      console.error('Erro ao carregar convidados:', error)
    }
  }

  return {
    convidados,
    carregarConvidados,
  }
}
