<template>
<div>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-succes fw-bold"> Gerenciamento de contatos
          <router-link to="/contatos/adicionar" class="btn btn-success btn-sm"><i class="fa fa-plus-circle"></i>
        New</router-link>
        </p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae ad quidem aut, officiis, fugiat eaque numquam quae reiciendis laborum ut! Minus quidem praesentium perferendis officia nam asperiores necessitatibus nostrum.</p>
        <form>
          <div class="row">
            <div class="col-md-6">
              <div class="row">
              <div class="col">
                <input type="text" class="form-control" placeholder="Buscar Nome"/>
             </div>
              <div class="col">
                <input type="submit" class="btn btn-outline-dark"/>
              </div>
            </div>
          </div>
        </div>       
        </form>
      </div>
    </div>
  </div>
  <!-- Spinner -->
  <div v-if="loading">
    <div class="container">
      <div class="row">
        <div class="col">
          <Spinner/>
        </div>
      </div>
    </div>
  </div>

  <!-- Mensagem de erro -->
  <div v-if="!loading && errorMessage">
    <div class="container mt-2">
      <div class="row">
        <div class="col">
          <p class="h3 text-danger fw-bold">
            {{ errorMessage }}

          </p>
        </div>
      </div>
    </div>

  </div>
    <div class="container mt-3" v-if="contatos.length > 0">
    <div class="row">
      <div class="col-md-6" v-for="contato of contatos" :key="contato">
        <div class="card my-4 list-group-item-success" >
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-sm-4">
                <img src="https://cajamar.sp.gov.br/noticias/wp-content/uploads/sites/2/2021/07/site-vacinacao-33-anos.png" alt="" 
                class="contact-img">
              </div>
              <div class="col-sm-7">
                <ul class="list-group">
                  <li class="list-group-item">Nome: <span class="fw-bold">{{ contato.nome}}</span></li>
                  <li class="list-group-item">Email: <span class="fw-bold">{{contato.email}}</span></li>
                  <li class="list-group-item">Telefone: <span class="fw-bold">{{contato.telefone}}</span></li>
                 </ul>

              </div>
              <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center my-1">
                <router-link :to="`/contatos/view/${contato.id}` " class="btn btn-warning my-1">
                <i class="fa fa-eye"></i>
                </router-link>
                <router-link :to="`/contatos/editar/${contato.id}` " class="btn btn-primary my-1">
                <i class="fa fa-pen"></i>
                </router-link>
                <button class="btn btn-danger my-1">
                  <i class="fa fa-trash"></i>
                </button>

              </div>
            </div>
          </div>
        </div>
    
      </div>
    </div>
  </div>
  </div>

</template>

<script>
import { ContatoService} from "@/services/ContatoService";
import Spinner from '../components/Spinner.vue';

export default {
  components: { Spinner },
  name: "Contato",
  data : function(){
    return {
      loading : false,
      contatos : [ ],
      errorMessage : null
    };
  },

  created : async function(){
    try {
      this.loading = true;
      let response = await  ContatoService.getTodosContatos(); 
      this.contatos = response.data;
      this.loading = false;
    }
    catch (error) {
      this.errorMessage = error;
      this.loading = false;
    }
  },

methods: {
  
  }
}

</script>
<style>

</style>
