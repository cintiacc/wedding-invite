<template>
  <div id="app" class="min-h-screen bg-[#fffaf0] ">

    <div>
      <router-view />
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from './components/HeaderComponent.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>
