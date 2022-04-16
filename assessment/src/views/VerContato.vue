<template>
  <div>
  <div class="container">
    <div class="row">
      <div class="col">
        <p class="h3 text-succes fw-bold">Ver Contato</p>
        <p class="fst-italic">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus soluta illum, fugiat numquam veniam eos! Ullam sed error perspiciatis in excepturi iusto quod. Repudiandae doloribus rem fugit officia asperiores dignissimos.</p>
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
          <p class="h3 text-danger fw-bold">{{ errorMessage }}</p>
        </div>
      </div>
    </div>
  </div>



  <div class="container" v-if="!loading && isDone">
    <div class="row align-items-center">
      <div class="col-md-4">
          <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="" class="contact-img">
      </div>
         <div class="col-md-6">
           <ul class="list-group">
                  <li class="list-group-item">Nome<span class="fw-bold">{{contato.nome}}</span></li>
                  <li class="list-group-item">Email<span class="fw-bold">{{contato.email}}</span></li>
                  <li class="list-group-item">Telefone<span class="fw-bold">{{contato.telefone}}</span></li>
                 <li class="list-group-item">Empresa<span class="fw-bold">{{contato.empresa}}</span></li>
                  <li class="list-group-item">Cargo<span class="fw-bold">{{contato.cargo}}</span></li>
                  <li class="list-group-item">Grupo<span class="fw-bold">{{contato.grupo}}</span></li>
            </ul>
         </div>
      </div>
      <div class="row mt-2">
        <div class="col">
          <router-link to="/" class="btn btn-success"><i class="fa fa-arrow-alt-circle-left"></i> Voltar </router-link>
        </div>
      </div>
    </div>
    <pre>{{contatoId}}</pre>
  </div>
  

  
</template>

<script>
import {ContatoService} from "@/services/ContatoService"
import Spinner from "@/components/Spinner"


export default {
  name: "VerContato",
  data: function() {
    return{
      contatoId: this.$route.params.contatoId,
      loading: false,
      contato: {},
      errorMessage: null,
      grupo: {}
    }
  },
  created : async function(){
    try{
      this.loading= true;
      let response = await ContatoService.getContato(this.contatoId);
      let grupoResponse = await ContatoService.getGrupo(response.data);
      this.contato = response.data;
      this.grupo = grupoResponse.data;
      this.loading = false;

    }
    catch (error){
      this.errorMessage = error;
      this.loading = false;
    }
  },
  methods: {
    isDone : function(){
      return Object.keys(this.contato).length > 0 && Object.keys(this.grupo).length > 0
    }
    
  },
  components: {
    Spinner
  }

}
</script>
