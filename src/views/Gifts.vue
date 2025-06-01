<template>
<div class="min-h-screen flex items-center justify-center py-10 px-4">
  <div class="min-h-screen">    
    <div class="flex items-center mb-6">
        <BackButtonComponent />
        <h2 class="text-3xl font-bold text-rose-800 mb-4">Lista de presentes</h2>
    </div>
    <div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      <CardComponent
        v-for="(card, index) in cards"
        :key="index"
        :imageSrc="card.imageSrc"
        :title="card.title"
        :subtitle="card.subtitle"
        :itemCount="card.itemCount"
      />
    </div>
  </div>
</div>
</template>

<script>
import CardComponent from '../components/CardComponent.vue'
import BackButtonComponent from '../components/BackButtonComponent.vue'

export default {
  components: { CardComponent, BackButtonComponent },
  data() {
    return {
      cards: [
        {
          imageSrc: 'https://via.placeholder.com/150',
          title: 'Jogo de panelas antiaderente',
          subtitle: '',
        },
        {
          imageSrc: 'https://via.placeholder.com/150',
          title: "Kit de utensílios de cozinha",
          subtitle: '',
        },
        {
          imageSrc: 'https://via.placeholder.com/150',
          title: 'Kit de taças',
          subtitle: '',
        },
        {
          imageSrc: 'https://via.placeholder.com/150',
          title: 'Jogo de cama ou colcha de casal',
          subtitle: '',
        },
        {
          imageSrc: 'https://via.placeholder.com/150',
          title: 'Tapete para sala ou quarto',
          subtitle: '',
        },
        {
          imageSrc: 'https://via.placeholder.com/150',
          title: 'Faqueiro Inox',
          subtitle: '',
        },
        {
          imageSrc: 'https://via.placeholder.com/150',
          title: 'Toalhas de banho',
          subtitle: '',
        },
      ]
    }
  }
}
</script>
