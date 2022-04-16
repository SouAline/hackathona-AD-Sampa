<template>
<div>
  <div class="container">
    <div class="row">
      <div class="col">
        <p class="h3 text-succes fw-bold">Adicionar Contato</p>
        <p class="fst-italic">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus soluta illum, fugiat numquam veniam eos! Ullam sed error perspiciatis in excepturi iusto quod. Repudiandae doloribus rem fugit officia asperiores dignissimos.</p>
      </div>
    </div>
  </div>

  <pre>{{ grupos}}</pre>

  <div class="container mt-3">
    <div class="row">
      <div class="col-md-4">
        <form @submit.prevent="submitCreate()">
          <div class="mb-2">
            <input v-model="contato.nome" type="text" class="form-control" placeholder="Nome">
          </div>
          <div class="mb-2">
            <input v-model="contato.foto"  type="text" class="form-control" placeholder="Link Foto">
          </div>
          <div class="mb-2">
            <input v-model="contato.email" type="email" class="form-control" placeholder="E-mail">
          </div>
          <div class="mb-2">
            <input v-model="contato.telefone"  type="number" class="form-control" placeholder="Celular">
          </div>
          <div class="mb-2">
            <input v-model="contato.empresa" type="text" class="form-control" placeholder="Empresa">
          </div>
          <div class="mb-2">
            <input v-model="contato.cargo" type="text" class="form-control" placeholder="Cargo">
          </div>
          <div class="mb-2">
            <select v-model=" contato.grupoId" class="form-control" v-if="grupos.length > 0">
            <option value="">Selecione Grupo</option>
            <option :value="grupo.id" v-for="grupo of grupos" :key="grupo.id">{{ grupo.nome }}</option>
            </select>
            <div class="mb-2">
            <input type="submit" class="btn btn-success mt-2" value="Criar">
          </div>
          </div>
        </form>
      </div>
     <div class="col-md-4">
       <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="" class="contact-img">
     </div>
    </div>

  </div>
</div>
</template>

<script>
import {ContatoService} from "@/services/ContatoService";
export default {
  name: "AdicionarContato",
  data: function (){
    return{
      contato :{
        nome : "",
        foto :"",
        email :"",
        telefone: "",
        empresa: "",
        cargo: "",
        grupoId: "",
      },
      grupos : []
    }
  },

  created : async function(){
    try{
      let response = await ContatoService.getTodosGrupos();
      this.grupos = response.data;
    }
    catch (error){
      console.log(error);
    }
  },

  methods: {
    submitCreate : async function (){
      try{
        let response= await ContatoService.createContato(this.contato);
        if(response){
          return this.$router.push('/');
        }
        else{
          return this.$router.push('/contatos/adicionar');
        }
      }
         catch (error){
      console.log(error);
    }
    }
 
  },
}
</script>
