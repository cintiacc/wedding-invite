<template>
  <footer class="bg-[#eddfd4] py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">

      <!-- Coluna 1: Redes sociais -->
      <div class="flex justify-center md:justify-start space-x-6">
        <!-- Instagram Ana -->
        <a href="https://instagram.com/ana" target="_blank" rel="noopener" aria-label="Instagram Ana" class="hover:text-pink-600 transition">
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5z"/>
            <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zM17.5 6.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"/>
          </svg>
        </a>

        <!-- Instagram Lucas -->
        <a href="https://instagram.com/lucas" target="_blank" rel="noopener" aria-label="Instagram Lucas" class="hover:text-pink-600 transition">
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5z"/>
            <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zM17.5 6.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"/>
          </svg>
        </a>
      </div>

      <!-- Coluna 2: Contato Cerimonialista -->
      <div class="text-center md:text-left space-y-1">
        <p class="font-semibold">Contato Cerimonialista</p>
        <p>Email: <a href="mailto:cerimonialista@email.com" class="underline hover:text-pink-600">cerimonialista@email.com</a></p>
        <p>Tel: <a href="tel:+5511999999999" class="underline hover:text-pink-600">+55 11 99999-9999</a></p>
      </div>

      <!-- Coluna 3: Mensagem / copyright -->
      <div class="text-center md:text-right">
        <p>
          Noivo ou Noiva? 
          <router-link to="/login" class="underline hover:text-pink-800">
            Faça Login aqui
          </router-link>
        </p>
      </div>

    </div>
  </footer>
</template>
