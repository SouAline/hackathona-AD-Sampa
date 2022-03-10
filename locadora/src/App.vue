<template>
  <div id="App">
    <h1>Bem vindo a {{ title }}</h1>

    <h3 v-if="horas >= 9 && horas < 17" id="aberta">Aberta</h3>
    <h3 v-else-if="horas >= 17 && horas < 18" id="proxima-fechar">Proxima De Fechar</h3>
    <h3 v-else id="fechada">Fechada</h3>
  
    <div class="row">
      <div class="col">
        <h2>Filmes encontrados</h2>
        <button
          type="button"
          class="btn btn-primary btn-lg"
          @click="mostrarCarrinho"
        >Carrinho {{ quantidadeNoCarrinho }} filmes</button>
      </div>
    </div>

    <div class="row" v-if="mostrarFilmes">
      <div class="col-3" v-bind:key="filme.id" v-for="filme in filmesOrdenados">
        <div class="card">
          <img v-bind:src="filme.imagem" alt="imagem de filme" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">{{ filme.titulo }}</h5>
            <p class="card-text" v-html="filme.descricao"></p>
            <span class="mensagem-estoque"
              v-if="filme.estoqueDisponivel - quantidadeNoCarrinhoPorFilme( filme ) === 0">
              Indisponivel
            </span>
            <span class="mensagem-estoque" 
              v-else-if="filme.estoqueDisponivel - quantidadeNoCarrinhoPorFilme( filme )  <5">
              Apenas {{ filme.estoqueDisponivel - quantidadeNoCarrinhoPorFilme( filme ) }} itens no estoque.
            </span>
            <span class="mensagem-estoque" v-else> Alugue Agora </span>
              <p class="card-text">R$ {{ filme.valor }}</p>
            <div class="avaliacao">
              <span v-for="n in 5" :key="n"
                v-bind:class="{ 'avaliacao-active': checarAvaliacao(n, filme) }">
                <img src="./assets/logo.png" height="20" />
              </span>
            </div>
            <a
              href="#"
             @click="adicionarAoCarrinho( filme )"
              v-if="validarPermissãoAdiconarAoCarrinho( filme )"
             class="btn btn-primary"
             >ALUGAR</a>
            <a href="#" v-else class="btn btn-primary-disable">Alugar</a>
          </div>
       </div>
      </div>
    </div>
    <div class="row" v-else>
      <h2>Carrinho</h2>

      <div class="col-12">
        <form>
          <div class="form-group">
            <label for="pedido.primeiroNome">Primeiro nome</label>
            <input
              type="text"
              class="form-control"
              id="primeiroNome"
              placeholder="Digita o primeiro nome"
              v-model.trim.lazy="pedido.primeiroNome"
            > 
          </div> 
          <div class="form-group">
            <label for="ultimoNome">Ultimo nome</label>
            <input
              type="text"
              class="form-control"
              id="ultimoNome"
              placeholder="Digite o último nome"
              v-model.trim.lazy="pedido.ultimoNome"
            >
          </div>
          <div class="form-group">
            <label for="endereco">Endereço</label>
            <input
              type="text"
              class="form-control"
              id="endereco"
              placeholder="Digite o seu endereço"
              v-model.trim.lazy="pedido.endereco"
            >
          </div>
          <div class="form-group">
            <label for="cidade">Cidade</label>
              <input
              type="text"
              class="form-control"
              id="cidade"
              placeholder="Digite a Cidade"
              v-model.trim.lazy="pedido.cidade"
            >
          </div>
          <div class="form-group">
            <label for="estado">Estado</label>
            <select class="form-control" id="estado" v-model="pedido.estado">
              <option disable value>Escolha um estado</option>
              <option
                v-for="(estado, key ) in estados"
                v-bind:value="estado"
                v-bind:key="key">
                {{ key }}
              </option>
            </select>
          </div> 
          <div class="form-group">
            <label for="cep">CEP</label>
            <input
              type="text"
              id="cep"
              placeholder="Digite seu CEP"
              v-model.number="pedido.cep"
            >
          </div>
            
 

</template>

<script>
export default
methods: {
  mostrarCarrinho(){
    this.mostrarFilmes = this.mostrarFilmes ? false : true;
  },
  adicionarAoCarrinho: function (filme){
    this.carrinho.push(filme.id);
  },
  quantidadeNoCarrinhoPorFilme: function (filme){
    var quantidade = 0;
    for (var i = 0 ; i< this.carrinho.length; i++){
      if (filme.id == this.carrinho[i]){
        quantidade++;
      }
    }
      return quantidade
  },
  validaPermissaoParaAdicionarNoCarrinho: function (filme){
    return filme.estoqueDisponivel > this.quantidadeNoCarrinhoPorFilme (filme);
  }

import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
