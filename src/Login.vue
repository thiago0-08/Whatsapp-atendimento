<template>
    <div class="container-principal">
        <div class="card">
            <img src="../src/assets/carro.avif" class="card-img-top" alt="Imagem de Login">
            <div class="card-body">
                <h5 class="card-title text-center">Login</h5>
                <form @submit="cadastroUsuario" class="form-login">
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input v-model="email" type="email" id="email" class="form-control" required>
                    </div>
                    <div class="mb-3">
                        <label for="senha" class="form-label">Senha</label>
                        <input v-model="senha" type="password" id="senha" class="form-control" required>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Enviar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import CryptoJS from 'crypto-js';
import { useRouter } from 'vue-router';
import endPoints from '../src/config';

const router = useRouter();
const email = ref('');
const senha = ref('');

// Função para encriptar a senha
const hashPassword = (senha) => {
    return CryptoJS.MD5(senha).toString();
};

// Função para codificar o básico (base64)
const hashBasic64 = (data) => {
    return btoa(data);
};

// Função para cadastro do usuário
const cadastroUsuario = (e) => {
    e.preventDefault();
    
    let hashedPassword = hashPassword(senha.value);
    let basicAuth = 'basic ' + hashBasic64(`${email.value}:${hashedPassword}`);
    
    fetch(endPoints.postLogin, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': basicAuth
        },
        body: JSON.stringify({ username: email.value, password: hashedPassword })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status) {
            localStorage.setItem('dados', JSON.stringify(data.dados));
            router.push({ name: 'Home' });
        } else {
            alert('Login falhou');
            router.replace({ name: 'Login' });
            console.error('Login falhou', data.message);
        }
    })
    .catch(error => console.error('Erro:', error));
};
</script>

<style scoped>
.container-principal {
    background-color: #000;
    background-image: url('../src/assets/carro.avif');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card {
    width: 100%;
    max-width: 400px;
    border: 2px solid #f8f8f8;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(255, 114, 0, 0.8); /* sombra destacada */
    background-color: rgb(15, 14, 14);
}

.card-img-top {
    height: 200px;
    object-fit: cover;
    border-radius: 4px 4px 0 0;
}

.card-body {
    padding: 20px;
    color: white;
}

.card-title {
    color: #ff7200;
}

.form-login .form-label {
    color: #fff;
    font-weight: bold;
}

.form-login .form-control {
    background-color: #333;
    border: 1px solid #555;
    color: white;
    border-radius: 4px;
    padding: 10px;
}

.form-login .form-control:focus {
    border-color: #ff7200;
    box-shadow: 0 0 5px rgba(255, 114, 0, 0.7);
}

.btn-primary {
    background-color: #ff7200;
    border: none;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 4px;
    color: white;
}

.btn-primary:hover {
    background-color: #e15b00;
}

@media (max-width: 768px) {
    .card {
        width: 90%;
    }
}
</style>
