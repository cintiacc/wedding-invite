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

  async function enviarFormulario() {
    try {
      const response = await fetch('http://localhost:3000/confirmar-presenca', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      const data = await response.json();
      console.log('Resposta da API:', data);
      alert('Formulário enviado com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Erro ao enviar o formulário.');
    }
  }

  return {
    form,
    adicionarAcompanhante,
    removerUltimoAcompanhante,
    enviarFormulario,
  }
}

/* // useFormulario.ts
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
 */