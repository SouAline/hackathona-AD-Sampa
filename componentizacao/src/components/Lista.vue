<template>
  <div>
    <h2>Listas</h2>
    <ul>
      <li v-for="itens in listaUm" :key="itens.id">
        {{ itens.descricao }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    listaUm: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style scoped>
/*scoped é usado para garantir o style em todos os componentes sem receber interferencias de outros styles*/
</style>