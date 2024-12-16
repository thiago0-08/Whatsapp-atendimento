<template>
  <aside class="mini"> 
    <button id="toggle" style="display: none;"> <!-- Esconde o botão de toggle -->
      <i class="fi-rr-menu-burger"></i>
    </button>
    
    <div class="link">
      <ul>
        <RouterLink class="nav-link" to="/">
          <li>
            <i class="fi-rr-home"></i>
            <label>Home</label>
          </li>
        </RouterLink>

        <RouterLink class="nav-link" to="/WhatsApp">
          <li>
            <i class="bi bi-whatsapp"></i>
            <label>WhatsApp</label>
          </li>
        </RouterLink>

        <RouterLink class="nav-link" to='/login'>
          <li>
            <i class="bi bi-box-arrow-right"></i>
            <label>Sair</label>
          </li>
        </RouterLink>
      </ul>
    </div>

    <div class="user" style="margin-top: 550px;">
      <ul>
        <li>
          <i>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhl_zjFSX6iLpLMk8U65vEA_jY6gzFhC9FbA&s" alt="User Avatar" />
          </i>
          <label><strong>{{ jsonToken.nome }}</strong></label>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const jsonToken = ref({});

onMounted(() => {
  const dados = localStorage.getItem('dados');
  if (dados) {
    try {
      jsonToken.value = JSON.parse(dados);
      console.log(jsonToken.value.token);
    } catch (error) {
      console.error('Erro ao parsear o token:', error);
    }
  } else {
    console.log('Token não encontrado no NavBar');
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&display=swap');
@import url('https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: all 0.35s linear;
  font-family: 'barlow', sans-serif;
}

body {
  background-color: #ededed;
}

aside {
  position: fixed;
  background-color: #022535;
  color: white;
  width: 4rem; /* Largura fixa para o modo mini */
  height: 100vh;
  display: grid;
  grid-template-rows: 6rem 1fr; /* Remove a linha de rodapé para evitar espaçamento extra */
  padding: 0.5rem;
  transition: width 0.25s linear, padding 0.25s linear;
  z-index: 1000;
  border-right: 1px solid #ff7200;
}

button {
  background-color: transparent;
  border: none;
  height: 4rem;
  width: 4rem;
  font-size: 1.25rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  cursor: pointer;
}

button:hover {
  background-color: #ff7200;
  color: #242424;
}

ul {
  list-style: none;
}

ul li {
  display: grid;
  grid-template-columns: 4rem 1fr;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-block: 0.25rem;
  transition: width 0.2s linear;
  overflow: hidden;
}

ul li.active,
ul li:hover {
  background-color: #ff7200;
  color: #000;
}

ul li i {
  width: 4rem;
  height: 3.5rem;
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

ul li label {
  display: none; /* Mantenha oculto em modo mini */
  align-items: center;
  justify-content: flex-start;
  padding-left: 0.5rem;
  cursor: inherit;
}

ul li img {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #ffffff00;
}

ul li:hover img {
  border-color: #030303;
}

.mini {
  padding: 0;
}

.mini ul li {
  width: 4rem;
}

.mini ul li:hover {
  width: 12rem; /* Ajusta a largura dos itens ao passar o mouse */
  box-shadow: 0 0.5rem 0.5rem #24242436;
}

.mini ul li label {
  display: flex; /* Exibe o rótulo no hover */
  align-items: center;
  justify-content: flex-start;
  padding-left: 0.5rem;
  cursor: inherit;
}
</style>