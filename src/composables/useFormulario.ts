// useFormulario.ts
import { reactive } from 'vue'
import { showAlert } from '../utils/alert';

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
      showAlert('success', 'Formulário enviado', 'Sua confirmação de presença foi registrada com sucesso!');

      //redireciona para a página de presentes após 3 segundos
      setTimeout(function() {
        window.location.href = '/Gifts';
      }, 2000); 

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

