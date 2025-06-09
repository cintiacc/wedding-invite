// useFormGift.ts
import { reactive } from 'vue'
import { showAlert } from '../utils/alert'

export function useFormGift() {
  const form = reactive({
    nomePresente: '',
    imagemPresente: '',
    linkPresente: '',
  })

  async function criarPresente() {
    try {
      const response = await fetch('http://localhost:3000/presentes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await response.json()
      console.log('Resposta da API:', data)
      showAlert('success', 'Presente criado', 'O presente foi cadastrado com sucesso!')

      setTimeout(() => {
        window.location.href = '/Profile'
      }, 2000)
    } catch (error) {
      console.error('Erro ao criar presente:', error)
      showAlert('error', 'Erro', 'Não foi possível cadastrar o presente.')
    }
  }

  async function buscarPresente(id: number) {
    try {
      const response = await fetch(`http://localhost:3000/presentes/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })

      if (response.status === 404) {
        showAlert('error', 'Erro', 'Presente não encontrado.')
        return false
      }

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`)
      }

      // Agora é seguro parsear como JSON
      const data = await response.json()

      form.nomePresente = data.nomePresente
      form.imagemPresente = data.imagemPresente
      form.linkPresente = data.linkPresente

      return true
    } catch (error: any) {
      console.error('Erro ao buscar presente:', error)

      if (typeof error.message === 'string' && !error.message.includes('Presente não encontrado')) {
        showAlert('error', 'Erro', 'Não foi possível carregar os dados do presente.')
      }

      return false
    }
  }

  async function atualizarPresente(id: number) {
    try {
      const response = await fetch(`http://localhost:3000/presentes/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await response.json()
      console.log('Resposta da API:', data)
      showAlert('success', 'Presente atualizado', 'O presente foi atualizado com sucesso!')

      setTimeout(() => {
        window.location.href = '/Profile'
      }, 2000)
    } catch (error) {
      console.error('Erro ao atualizar presente:', error)
      showAlert('error', 'Erro', 'Não foi possível atualizar o presente.')
    }
  }

  async function deletarPresente(id: number) {
    try {
      const response = await fetch(`http://localhost:3000/presentes/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      })

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`)
      }

      const data = await response.json()
      console.log('Resposta da API:', data)
      showAlert('success', 'Presente excluído', 'O presente foi excluído com sucesso!')

      setTimeout(() => {
        window.location.reload()
      }, 2000)
    } catch (error) {
      console.error('Erro ao excluir presente:', error)
      showAlert('error', 'Erro', 'Não foi possível excluir o presente.')
    }
  }

  return {
    form,
    criarPresente,
    buscarPresente,
    atualizarPresente,
    deletarPresente,
  }
}
