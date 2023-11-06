<template>
    <div>
      <navbar-component></navbar-component>
  
      <!-- Conteúdo do seu componente de cadastro de aluno -->
      <div class="container mt-4">
        <!-- Gráficos -->
        <div class="row">
          <div class="col-md-6">
            <canvas ref="graficoAlunos"></canvas>
          </div>
          <div class="col-md-6">
            <canvas ref="graficoSalas"></canvas>
          </div>
        </div>
  
        <!-- Botões -->
        <div class="row mt-4 justify-content-center">
          <div class="col-md-3 mb-2">
            <button @click="openModal('aluno')" class="btn btn-primary w-100" v-show="!modalShow">Cadastro de Aluno</button>
          </div>
          <div class="col-md-3 mb-2">
            <button @click="openModal('sala')" class="btn btn-primary w-100" v-show="!modalShow">Cadastro de Sala</button>
          </div>
          <div class="col-md-3">
            <button @click="iniciarJogo" class="btn btn-primary w-100" v-show="!modalShow">JOGAR</button>
          </div>
        </div>
  
        <!-- Modal para o cadastro de aluno -->
        <div class="modal" tabindex="-1" role="dialog" v-if="modalShow">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">{{ modalType === 'aluno' ? 'Cadastro de Aluno' : 'Cadastro de Sala' }}</h5>
                <button type="button" class="close" @click="fecharModal">
                  <span>&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form @submit.prevent="modalType === 'aluno' ? salvarAluno() : salvarSala()">
                  <div class="form-group">
                    <label for="nome">Nome:</label>
                    <input type="text" class="form-control" id="nome" v-model="nome" required>
                  </div>
                  <div class="form-group">
                    <label for="idade">Idade:</label>
                    <input type="number" class="form-control" id="idade" v-model="idade" required>
                  </div>
                  <div v-if="modalType === 'aluno'" class="form-group">
                    <label for="turma">Turma:</label>
                    <input type="text" class="form-control" id="turma" v-model="turma" required>
                  </div>
                  <button type="submit" class="btn btn-primary">Salvar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import NavbarComponent from '@/components/NavBarComponent.vue';
  import Chart from 'chart.js/auto';
  
  export default {
    components: {
      NavbarComponent
    },
    data() {
      return {
        modalShow: false,
        modalType: '', // 'aluno' ou 'sala' - indica qual tipo de modal será aberta
        nome: '',
        idade: null,
        turma: ''
      };
    },
    mounted() {
      // Inicializar gráficos
      this.inicializarGraficoAlunos();
      this.inicializarGraficoSalas();
    },
    methods: {
      openModal(type) {
        this.modalType = type;
        console.log(`Modal de ${type} aberta`);
        this.modalShow = true;
      },
      fecharModal() {
        this.modalShow = false;
        // Limpar os campos do formulário ao fechar a modal
        this.nome = '';
        this.idade = null;
        this.turma = '';
      },
      salvarAluno() {
        // Lógica para salvar aluno
        // Fechar a modal após o salvamento usando this.fecharModal()
      },
      salvarSala() {
        // Lógica para salvar sala
        // Fechar a modal após o salvamento usando this.fecharModal()
      },
      iniciarJogo() {
        // Lógica para iniciar o jogo
      },
      inicializarGraficoAlunos() {
        const ctx = this.$refs.graficoAlunos.getContext('2d');
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Turma A', 'Turma B', 'Turma C'],
            datasets: [{
              label: 'Acerto total das Salas',
              data: [10, 15, 8],
              backgroundColor: ['red', 'green', 'blue'],
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      },
      inicializarGraficoSalas() {
        const ctx = this.$refs.graficoSalas.getContext('2d');
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Sala 1', 'Sala 2', 'Sala 3'],
            datasets: [{
              label: 'Contagem de erros',
              data: [70, 50, 90],
              backgroundColor: ['orange', 'yellow', 'purple'],
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Suas regras de estilo aqui */
  </style>
  