<template>
    {{nome}}
    {{ rota }}
</template>
<script>
export default {
  name: 'OutraPagina',
  data() {
    return {
      nome: 'Outra Página',
      rota: String
    };
  },
  mounted() {
    this.nome = this.$route.params.nome;
    this.rota = window.location.href;
    
    console.log('Outra Página montada');
  }
};
</script>