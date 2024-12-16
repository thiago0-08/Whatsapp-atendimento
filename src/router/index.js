
import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/HomeView.vue"; 
import Login from "../Login.vue";
import WhatsApp from "../views/WhatsApp.vue";
import endpoints from "../config";

const routes = [
    {
        path: '/', 
        name: 'Home',
        component: Home,
        // meta: { requiresAuth: true} ,
    },
    {
        path: '/WhatsApp', 
        name: 'WhatsApp',
        component: WhatsApp,
        // meta: { requiresAuth: true} , 
    },
    {
        path: '/Login',
        name: 'Login', 
        component: Login,
    },
   
];
console.log(routes)
const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next ) =>{
    if (to.matched.some(record => record.meta.requiresAuth)) {  // verifca se a rota precisa de autenticacao   (to.matched.some(record => record.meta.requiresAuth) 
        //to.matched retorna a rota que vc que acessar
        //.some verifica se precisa estar autenticado
        // verifica se o usuario esta autenticado
        const isAuthenticated = localStorage.getItem('dados');
        if(isAuthenticated) {
          let token = JSON.parse(isAuthenticated, true);
            const bearer = 'bearer '+token.token; 
            // console.log(bearer);
            fetch(endpoints.getValidation, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':bearer
                },
                //body: JSON.stringify({ username: email, password: senha }),
                //credentials: 'include'  // Inclui cookies ou outros mecanismos de autenticação
            })
            .then(response => response.json())
            .then(data => {
              console.log(data);
                if(data.isLogged){
                    next();
                }else{
                    next({path: '/Login'});
                }
            })
            .catch(error => console.error('Erro:', error));
        }
        else{
          next({path: '/Login'});
        }
    }else {
        next();
    }
});
export default router;
