<template>
  <section class="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden">
    <div class="absolute inset-0">
      <img
        src="/images/hero-section.jpg"
        alt="Fundo"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black opacity-60"></div>
    </div>

    <div class="relative z-10 text-center px-4">
      <h2 class="text-4xl md:text-6xl">Convite<br> de Casamento</h2>
      <br>
      <p class="text-lg md:text-xl mb-6">Gabrielle e Jonas</p>

      <div class="flex justify-center mt-8">
        <svg
        class="w-8 h-8 text-white animate-bounce"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        >
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </div>
  </section>

  <!-- Nova seção Nossa História -->
  <section
    ref="historia"
    class="mx-auto px-6 py-20 bg-[#eddfd4] opacity-0 translate-y-10 transition-opacity transition-transform duration-700"
  >
    <h3 class="text-3xl font-playfair mb-6 text-center">Nossa História</h3>
    <p class="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </section>

<section 
   ref="noivos"
   class="relative max-w-5xl mx-auto px-6 py-20 opacity-0 translate-y-10 transition-opacity transition-transform duration-700"
 >
  <h3 class="text-3xl font-playfair mb-16 text-center">Os Noivos</h3>

  <div class="relative flex justify-center items-start space-y-32">
    <!-- Noiva -->
    <div class="relative z-20 text-center">
      <img
        src="/images/couple1.jpg"
        alt="Noiva"
        class="w-72 h-auto rounded-lg shadow-lg mx-auto"
      />
      <h4 class="text-xl font-semibold mt-4">Gabrielle</h4>
      <p class="text-sm text-gray-500">A Noiva</p>
    </div>

    <!-- Noivo (com sobreposição) -->
    <div class="relative z-10 text-center md:-ml-16">
      <img
        src="/images/couple2.jpg"
        alt="Noivo"
        class="w-72 h-auto rounded-lg shadow-lg mx-auto"
      />
      <h4 class="text-xl font-semibold mt-4">Jonas</h4>
      <p class="text-sm text-gray-500">O Noivo</p>
    </div>
  </div>
</section>

<section 
  id="nosso-casamento"
  class="max-w-5xl mx-auto px-6 py-20 text-center"
>
  <h3 class="text-3xl font-playfair mb-16">Nosso Casamento</h3>

  <div class="flex md:flex-row md:divide-y-0 md:divide-x divide-gray-300">
    <div class="md:w-1/2 px-6 py-4">
      <h4 class="text-xl font-semibold mb-2">
        <span class="material-symbols-outlined">event</span>
         Quando
      </h4>
      <p class="text-gray-600">
        Sábado, XX de XXX de XXXX<br />
        Às 16h00
      </p>
    </div>

    <div class="md:w-1/2 px-6 py-4">
      <h4 class="text-xl font-semibold mb-2">
        <span class="material-symbols-outlined">location_on</span>
        Onde
      </h4>
      <p class="text-gray-600">
        Espaço Jardim do Sol<br />
        Rua das Flores, 123 - Porto Alegre, RS
      </p>
    </div>
  </div>
</section>
<section class="bg-[#eddfd4] py-20 px-6 text-center">
  <h3 class="text-3xl font-playfair mb-10">Confirmação de Presença</h3>

  <div class="bg-[#fffaf0] relative max-w-md mx-auto bg-white border border-gray-300 rounded-xl shadow-lg p-10">
    <p class="mb-6 text-gray-700">
      Por favor, confirme sua presença até 01/09/2025
    </p>
    <ButtonComponent as="router-link" :to="'/contato'">
      Confirmar Presença
    </ButtonComponent>
  </div>
</section>

<section class="py-20 text-center">
    <InstagramGallery />
</section>

<section class="bg-[#eddfd4] py-20 px-6 text-center">
  <h3 class="text-3xl font-playfair mb-10">Quer nos presentar?</h3>
    <p class="mb-6 text-gray-700">
      Veja nossa lista de presentes e contribua com o que desejar.
    </p>
    <ButtonComponent as="router-link" :to="'/contato'">
      Visualizar lista
    </ButtonComponent>
</section>


</template>
<script>
import InstagramGallery from '../components/InstagramGallery.vue';
import ButtonComponent from '../components/ButtonComponent.vue';


export default {
  name: 'Home',
  mounted() {
    const reveal = (el) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.remove('opacity-0', 'translate-y-10');
            el.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(el);
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(el);
    };

    reveal(this.$refs.historia);
    reveal(this.$refs.noivos); // nova seção
  },
  components: {
    InstagramGallery,
    ButtonComponent
  }
};
</script>


