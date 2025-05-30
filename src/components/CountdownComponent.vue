<template>
  <section class="bg-[#fffaf0] py-16 px-4 text-center">
    <h3 class="text-3xl font-playfair mb-10">Contagem Regressiva</h3>

    <div class="flex justify-center space-x-4 text-gray-800 text-lg md:text-2xl font-medium">
      <div class="flex flex-col items-center">
        <span class="text-4xl font-bold">{{ countdown.days }}</span>
        <span>Dias</span>
      </div>
      <div class="flex flex-col items-center">
        <span class="text-4xl font-bold">{{ countdown.hours }}</span>
        <span>Horas</span>
      </div>
      <div class="flex flex-col items-center">
        <span class="text-4xl font-bold">{{ countdown.minutes }}</span>
        <span>Min</span>
      </div>
      <div class="flex flex-col items-center">
        <span class="text-4xl font-bold">{{ countdown.seconds }}</span>
        <span>Seg</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CountdownComponent',
  data() {
    return {
      countdown: {
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
      },
      targetDate: new Date('2026-05-30T00:00:00')
    };
  },
  mounted() {
    this.updateCountdown();
    this.interval = setInterval(this.updateCountdown, 1000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    updateCountdown() {
      const now = new Date();
      const distance = this.targetDate - now;

      if (distance <= 0) {
        clearInterval(this.interval);
        this.countdown = { days: '00', hours: '00', minutes: '00', seconds: '00' };
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      this.countdown = {
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0')
      };
    }
  }
};
</script>
