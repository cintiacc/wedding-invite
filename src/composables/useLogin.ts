import { ref } from 'vue'
import { showAlert } from '../utils/alert';

export function useLogin() {
  const error = ref('')
  const loading = ref(false)

  async function login(email: string, senha: string): Promise<boolean> {
    loading.value = true
    error.value = ''

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim(), senha: senha.trim() })
      })

      const data = await response.json()

      if (!response.ok) {
        showAlert('error', 'Falha no login', data.mensagem || 'Erro desconhecido');
        return false
      }

      // Armazena o token JWT e dados do usuário no localStorage
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))

      showAlert('success', 'Login realizado', 'Bem-vindo!');

      return true
    } catch (err: any) {
      showAlert('error', 'Erro', 'Não foi possível conectar ao servidor');
      return false
    } finally {
      loading.value = false
    }
  }

  return { login, error, loading }
}
