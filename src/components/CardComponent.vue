<template>
  <div class="flex items-center bg-white rounded-2xl shadow-md overflow-hidden p-4 w-full max-w-md mx-auto h-40">
    <!-- Imagem -->
    <div class="w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden">
      <img :src="imageSrc" alt="Thumbnail" class="object-cover w-full h-full" />
    </div>

    <!-- Conteúdo -->
    <div class="ml-4 flex flex-col justify-between w-full">
      <div>
        <h2 class="text-base font-semibold text-gray-800">{{ title }}</h2>
      </div>

      <div v-if="showButton && subtitle" class="mt-2 flex gap-2">
        <a :href="subtitle" target="_blank" rel="noopener noreferrer">
          <ButtonComponent>
            Visualizar site
          </ButtonComponent>
        </a>

        <!-- Botão de dar presente -->
        <ButtonComponent @click="$emit('dar-presente')">
          Dar presente
        </ButtonComponent>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';

export default {
  name: 'CardComponent',
  components: {
    ButtonComponent,
  },
  props: {
    imageSrc: String,
    title: String,
    subtitle: String,
    showButton: {
      type: Boolean,
      default: false
    }
  },
  emits: ['dar-presente']
};
</script>
