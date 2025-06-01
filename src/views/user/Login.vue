<template>
  <div class="min-h-screen flex items-center justify-center py-10 px-4">
    <div class="grid md:grid-cols-2 gap-10 w-full max-w-6xl items-stretch">

      <div>
        <div class="flex items-center mb-6">
          <BackButtonComponent />
          <h2 class="text-3xl font-bold text-rose-800 mb-4">Login</h2>
        </div>

        <form @submit.prevent="enviarFormulario"
          class="bg-white rounded-2xl shadow-lg p-8 space-y-6 border border-neutral-100">

          <!-- Texto de boas-vindas -->
          <h2>
            Sejam bem-vindos, noivos! Por favor, faça seu login para acessar as informações do casamento.
          </h2>

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

      <div class="flex justify-center">
        <img src="/images/hands-couple.jpeg" alt="Imagem de Login" class="rounded-2xl shadow-lg w-full max-w-md object-cover" />
      </div>

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
    setTimeout(() => {
      router.push({ name: 'AddGift' })
    }, 3000)
  } else {
    console.log('Falha no login:', error.value)
    showAlert('error', 'Erro ao fazer login', error.value || '')
  }
}
</script>

