// useFormulario.ts
import { reactive } from 'vue'

export default function useFormulario() {
  const form = reactive({
    nome: '',
    levarAcompanhante: 'nao',
    acompanhantes: [] as string[],
    temRestricao: 'nao',
    restricao: '',
  })

  function adicionarAcompanhante() {
    if (form.acompanhantes.length < 2) {
      form.acompanhantes.push('')
    }
  }

  function removerUltimoAcompanhante() {
    form.acompanhantes.pop()
  }

  function enviarFormulario() {
    console.log('Formulário enviado:', { ...form })
    alert('Formulário enviado com sucesso!')
  }

  return {
    form,
    adicionarAcompanhante,
    removerUltimoAcompanhante,
    enviarFormulario,
  }
}
