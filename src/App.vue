<template>
  <div id="app" class="min-h-screen">

    <div>
      <router-view />
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from './components/HeaderComponent.vue';
import Footer from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>
