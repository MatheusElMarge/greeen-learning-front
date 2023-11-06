<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="../assets/logo.png" alt="Logo" height="30">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/salas-view" class="nav-link">Salas</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/alunos-view" class="nav-link">Alunos</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Dashboard" class="nav-link">Jogos</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="sair">Sair</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';
  
  interface NavBarComponent {
    $router: ReturnType<typeof useRouter>;
    sair(): void;
  }
  
  export default defineComponent({
    methods: {
      sair(this: NavBarComponent) {
        // Implemente lógica de logout, se necessário
        // Após o logout, redirecione para a página de login usando this.$router.push('/login')
        this.$router.push('/login');
      }
    }
  });
  </script>
  
  <style scoped>
  /* Adicione estilos personalizados para o seu navbar se necessário */
  </style>
  