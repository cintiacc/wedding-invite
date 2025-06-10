<template>
  <router-link
    :to="to"
    class="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded"
  >
    <i v-if="icon" :class="icon" class="text-lg"></i>
    <span v-if="!collapsed">{{ label }}</span>
  </router-link>
</template>

<script setup>
const props = defineProps({
  icon: String,
  label: String,
  to: String,
  collapsed: Boolean,
})
</script>
