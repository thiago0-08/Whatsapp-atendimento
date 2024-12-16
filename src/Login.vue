<template>
    <div class="container-principal">
        <div class="card">
            <img src="../src/assets/carro.avif" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Login</h5>
                <form @submit="cadastroUsuario" class="row">
                        <label for="email" class="text-center">Email</label>
                        <input class="col-10 m-auto text-center rounded-2" name="email" id="email" type="text" required>
                        <br><br>
                        <label for="senha" class="text-center">Senha</label>
                        <input class="col-10 m-auto text-center rounded-2" name="senha" id="senha" type="password" required>
                        <br><br>
                        <button class="col-10 m-auto text-center rounded-2" type="submit">Enviar</button>
                    </form>
            </div> 
        </div>
    </div>
</template>


<script scoped>

import CryptoJS from 'crypto-js';
import { useRouter } from 'vue-router';
import endPoints from '../src/config';


export default {
    name: 'MyComponent',

    setup(){
        const router = useRouter(); // Obtém a instância do router

        const hashPassword = (senha) => {
            return CryptoJS.MD5(senha).toString();
        };

        const hashBasic64 = (data) => {
            return btoa(data);
        };
        
        const cadastroUsuario = (e) => {
            e.preventDefault();
            // const urlLogin = 'http//192.168.70.240:9000/login';
            let email = document.getElementById("email").value;
            let senha = hashPassword(document.getElementById("senha").value);
            let basicAuth = 'basic '+ hashBasic64(email+':'+senha);
            console.log(basicAuth);
            fetch(endPoints.postLogin, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':basicAuth
            },
            body: JSON.stringify({ username: email, password: senha }),
            //credentials: 'include'  // Inclui cookies ou outros mecanismos de autenticação
            })
            .then(response => response.json())
            .then(data  => {
            if ( data.status) {
               // console.log(data.dados);
                localStorage.setItem('dados', JSON.stringify(data.dados));
                router.push({ name: 'Home' }); // Redireciona para Home
                // alert('passei do routes');
            } else {
                alert('Login falhou')
                router.replace({ name: 'Login' });
                console.error('Login falhou', data.message);
            }
        })
            //.then(data => console.log(data))
            .catch(error => console.error('Erro:', error));
        };

        return {
            cadastroUsuario,
        };
    }
    
    
}
   
</script>


<style scoped>
.container-principal {
    background-color: black;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    display: flex;
    align-items: center;
    
}

 .card {
    margin-left: 40%;  
    border: 2px solid;
    border-color:  #f8f8f8; 
    border-radius: 4px;
    box-shadow: 0 4px 8px #ff7200; /* sombra nas mensagem */
}
.divformulario {
    
    margin-left: 30px;
    margin-top: 50%;
    width: 250px;
}

.btn-primary {
    margin-top: 20px;
}

.card-img-top{
    height: 200px;
    width: 350px;
}
.card-body{
    color: white;
    background-color: rgb(15, 14, 14);
    height: 280px;
    width: 350px;
    border-radius: 0 0 4px 4px;
    
}
.btn-outline-primary{
    color: black;
    background-color: aliceblue;
    margin-top: 20px;
    height: 50px;
    width: 100px;
    margin-left: 34%;
}





</style>