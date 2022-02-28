<template>
  <div>
    <AddTarefa :listaUm="listaData"></AddTarefa>
    <Lista :listaUm="listaData"></Lista>
  </div>
</template>

<script>
import Lista from "./components/Lista.vue";
import AddTarefa from "./components/AddTarefa.vue";
export default {
  components: { Lista, AddTarefa },
  data() {
    return {
      listaData: [
        { id: 1, descricao: "lavar louça", status: false },
        { id: 2, descricao: "lavar roupa", status: false },
        { id: 3, descricao: "lavar chão", status: false },
      ],
    };
  },
};
</script>

<style>
</style>