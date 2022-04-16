import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AdicionarContato from "../views/AdicionarContato.vue";
import EditarContato from "../views/EditarContato.vue";
import VerContato from "../views/VerContato.vue";
import Contato from "../views/Contato.vue";
import PaginaNotFound from "../views/PaginaNotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/contatos",
    component: Home,
  },
  {
    path: "/contatos",
    name: "contato",
    component: Contato, //ContactManager
  },
  {
    path: "/contatos/adicionar",
    name: "AdicionarContato",
    component: AdicionarContato,
  },
  {
    path: "/contatos/editar/:contatoId",
    name: "EditarContato",
    component: EditarContato,
  },
  {
    path: "/contatos/view/:contatoId",
    name: "VerContato",
    component: VerContato,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "PaginaNotFoud",
    component: PaginaNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
