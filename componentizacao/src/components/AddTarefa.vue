<template>
  <input type="text" v-model="tarefa" />

  <button @click="adicionaTarefa">Adicionar</button>
</template>

<script>
export default {
  props: {
    listaUm: {
      required: true,
      type: Array || Object,
    },
  },
  data() {
    /* aqui declara variaveis que vão estar no v-model*/
    return {
      tarefa: "",
      recebeLista: this.listaUm,
      id: 4,
    };
  },
  methods: {
    adicionaTarefa() {
      if (this.tarefa) {
        this.recebeLista.push({
          id: this.id++,
          descricao:
            this
              .tarefa /* Descricao -> Quando não usa o "this" a variavel é criada no escopo do metodo*/,
          status: false,
        });
      }
      this.tarefa = "";
    },

    deletarTarefa() {},

    editarTarefa() {},
    /* aqui pode ser adiconado outro metodo*/
  },
};
</script>

<style>
</style>