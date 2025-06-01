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
        <p class="text-xs text-gray-500">{{ subtitle }}</p>
      </div>
      <div class="mt-2">
        <ButtonComponent>
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
    subtitle: String
  }
};
</script>
