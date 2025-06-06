<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-[#fffaf0] px-4 py-8">
    
    <!-- Título com ícone acima da caixa -->
    <div class="flex items-center mb-6">
      <span class="material-symbols-rounded">login</span>
      <h2 class="text-3xl font-bold text-rose-800">Login</h2>
    </div>

    <!-- Formulário -->
    <div class="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-neutral-100">
      <form @submit.prevent="enviarFormulario" class="space-y-6">
        <div>
          <label for="email" class="block text-gray-700 font-medium mb-2">E-mail</label>
          <input v-model="form.email" id="email" type="email" autocomplete="email" required
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500 transition" />
        </div>

        <div>
          <label for="senha" class="block text-gray-700 font-medium mb-2">Senha</label>
          <input v-model="form.senha" id="senha" type="password" autocomplete="current-password" required
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500 transition" />
        </div>

        <div class="pt-4">
          <ButtonComponent type="submit" class="w-full">
            Entrar
          </ButtonComponent>
        </div>
      </form>
    </div>
  </div>
</template>


<script setup lang="ts">
import { reactive } from 'vue'
import ButtonComponent from '../../components/ButtonComponent.vue'
import BackButtonComponent from '../../components/BackButtonComponent.vue'
import { useLogin } from '../../composables/useLogin'
import { showAlert } from '../../utils/alert'   
import { useRouter } from 'vue-router'

const router = useRouter()

const form = reactive({
  email: '',
  senha: ''
})

const { login, error, loading } = useLogin()


async function enviarFormulario() {
  const sucesso = await login(form.email, form.senha)
  if (sucesso) {
    showAlert('success', 'Login realizado com sucesso!')
    router.push({ name: 'AddGift' })
 
  } else {
    console.log('Falha no login:', error.value)
    showAlert('error', 'Erro ao fazer login', error.value || '')
  }
}
</script>

