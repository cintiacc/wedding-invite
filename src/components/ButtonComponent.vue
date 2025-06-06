<!-- src/components/ButtonComponent.vue -->
<template>
  <component
    :is="as"
    :to="to"
    :type="type"
    @click="onClick"
    class="inline-flex items-center justify-center px-4 py-2 text-white bg-[#982529] rounded-full hover:bg-[#7a1e20] transition-colors duration-200"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    as: {
      type: String,
      default: 'button' // ou 'router-link' para navegação
    },
    to: {
      type: [String, Object],
      default: null
    },
    type: {
      type: String,
      default: 'button'
    },
    onClick: {
      type: Function,
      default: null
    }
  }
};
</script>
