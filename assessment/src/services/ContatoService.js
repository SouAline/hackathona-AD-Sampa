import axios from "axios";

export class ContatoService {
  static serverURL = `http://localhost:9000`;

  //getAllContacts
  static getTodosContatos() {
    let dataURL = `${this.serverURL}/contatos`;
    return axios.get(dataURL);
  }

  static getContatos(contatoId) {
    let dataURL = `${this.serverURL}/contatos/${contatoId}`;
    return axios.get(dataURL);
  }

  static createContato(contato) {
    let dataURL = `${this.serverURL}/contatos/`;
    return axios.post(dataURL, contato);
  }
  static updateContato(contato, contatoId) {
    let dataURL = `${this.serverURL}/contatos/${contatoId}`;
    return axios.put(dataURL, contato);
  }
  static deleteContato(contatoId) {
    let dataURL = `${this.serverURL}/contatos/${contatoId}`;
    return axios.delete(dataURL);
  }
  //getAllGroups
  static getGrupos() {
    let dataURL = `${this.serverURL}/grupos/`;
    return axios.get(dataURL);
  }

  static getGrupo(contato) {
    let grupoId = contato.grupoId;
    let dataURL = `${this.serverURL}/grupos/${grupoId}`;
    return axios.get(dataURL);
  }
}
