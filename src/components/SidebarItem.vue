<template>
  <component
    :is="to ? 'router-link' : 'div'"
    :to="to"
    class="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-100 text-gray-700 cursor-pointer transition"
  >
    <span class="text-lg">{{ icon }}</span>
    <span v-if="!collapsed" class="text-sm font-medium">{{ label }}</span>
  </component>
</template>

<script setup>
defineProps({
  icon: String,
  label: String,
  collapsed: Boolean,
  to: [String, Object]
})
</script>
