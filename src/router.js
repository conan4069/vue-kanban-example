import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/HelloWorld.vue';
import Kanban from './components/board/KanbanTemplate.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props:{
        msg:"Bienvenido a la to-do de prueba",
        author:"Miguel Villamizar"    
      }
    },   
    {
      path: '/kanban',
      name: 'kanban',
      component: Kanban
    }   
  ],
  mode: "history",
});