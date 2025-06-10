// composables/usePresenca.ts
export const usePresenca = () => {
  const carregarConvidado = async (id: string | number) => {
    try {
      const response = await fetch(`http://localhost:3000/convidados/${id}`)
      if (!response.ok) throw new Error('Convidado não encontrado')
      return await response.json()
    } catch (error) {
      console.error('Erro ao carregar convidado:', error)
      throw error
    }
  }

  const confirmarPresenca = async (id: string | number) => {
    try {
      const response = await fetch(`http://localhost:3000/confirmar-presenca/${id}`, {
        method: 'PUT',
      })
      if (!response.ok) throw new Error('Erro ao confirmar presença')
      return await response.json()
    } catch (error) {
      console.error('Erro ao confirmar presença:', error)
      throw error
    }
  }

  return {
    carregarConvidado,
    confirmarPresenca
  }
}
