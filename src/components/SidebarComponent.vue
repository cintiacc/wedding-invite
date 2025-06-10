<template>
  <aside
    :class="[
      'bg-white border-r transition-all duration-300 flex flex-col justify-between',
      collapsed ? 'w-20' : 'w-64'
    ]"
    class="h-screen fixed z-30"
  >
    <!-- Topo -->
    <div>
      <!-- Logo + toggle -->
      <div class="flex items-center justify-between p-4 border-b">
        <span class="text-xl font-bold" v-if="!collapsed">Dashboard</span>
        <button @click="toggleSidebar" class="text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <!-- Menu -->
    <nav class="px-2 pt-4 space-y-1">
      <SidebarItem icon="fa-solid fa-house" label="Dashboard" to="/profile" :collapsed="collapsed" />
      <SidebarItem icon="fa-solid fa-user" label="Convite" to="/" :collapsed="collapsed" />
    </nav>
    </div>    
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import SidebarItem from './SidebarItem.vue'

const collapsed = ref(true)
const toggleSidebar = () => {
  collapsed.value = !collapsed.value
}
</script>
