<template>
    <div class="container-fluid vh-100 d-flex justify-content-start align-items-center bg-image">
        <div class="card glass-effect ms-5 text-start">
            <div class="card-body">
                <h2 class="card-title mb-4 text-left">Login</h2>
                <form @submit.prevent="submitForm">
                    <div class="mb-3">
                        <label for="username" class="form-label text-left">E-mail</label>
                        <input type="text" class="form-control" v-model="username" required>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label text-left">Senha:</label>
                        <input type="password" class="form-control" v-model="password" required>
                    </div>
                    <div class="text-center mb-3">
                        <a href="#" class="text-muted">Esqueci minha senha</a>
                    </div>
                    <button type="submit" class="btn roxo w-100">Entrar</button>
                </form>
                <div class="mt-3">
                    <span>Não tem conta ainda? </span>
                    <b><a href="#" class="text-decoration-none ">Cadastre-se agora</a></b>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    submitForm() {
      if (this.username === 'admin' && this.password === 'admin') {
        console.log('Login Efetuado');
        // Utilize o 'as any' para indicar que o TypeScript não precisa fazer a verificação de tipos aqui
        (this.$router as any).push({ name: 'Dashboard' });
      } else {
        console.log('Credenciais inválidas');
      }
    }
  }
});
</script>
  
<style scoped>
.bg-image {
    background-image: url('../assets/otherworldly-mystical-landscape-wallpaper-purple-tones.jpg');
    /* Substitua 'sua-imagem-de-fundo.jpg' pelo caminho da sua imagem de fundo */
    background-size: cover;
    background-position: center;
    height: 100%;
}

.glass-effect {
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    max-width: 400px;
    padding: 20px;
}

.card-title {
    font-size: 1.8rem;
    text-align: left;
}

.form-label {
    text-align: left;
}

.text-muted {
    text-align: center;
    display: block;
}

.text-decoration-none {
    font-weight: bold;
    text-decoration: none;
}

.btn-primary {
    width: 100%;
}

.roxo {
    background-color: #DA70D6;
    color: white;
}
</style>