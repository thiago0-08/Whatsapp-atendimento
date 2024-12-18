<template>
  <aside class="mini" role="navigation" aria-label="Menu Lateral"> 
    <!-- Botão Toggle (invisível) -->
    <button id="toggle" style="display: none;" aria-label="Alternar Menu">
      <i class="fi-rr-menu-burger"></i>
    </button>
    
    <!-- Links de Navegação -->
    <div class="link">
      <ul>
        <RouterLink class="nav-link" to="/" active-class="active">
          <li>
            <i class="fi-rr-home"></i>
            <label>Home</label>
          </li>
        </RouterLink>

        <RouterLink class="nav-link" to="/WhatsApp" active-class="active">
          <li>
            <i class="bi bi-whatsapp"></i>
            <label>WhatsApp</label>
          </li>
        </RouterLink>

        <RouterLink class="nav-link" to="/login" active-class="active">
          <li>
            <i class="bi bi-box-arrow-right"></i>
            <label>Sair</label>
          </li>
        </RouterLink>
      </ul>
    </div>

    <!-- Informações do Usuário -->
    <div class="user">
      <ul>
        <li :title="jsonToken.nome || 'Usuário'">
          <i>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhl_zjFSX6iLpLMk8U65vEA_jY6gzFhC9FbA&s" alt="Avatar do Usuário" />
          </i>
          <label>{{ jsonToken.nome || 'Usuário' }}</label>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const jsonToken = ref({}); // Informações do usuário

onMounted(() => {
  const dados = localStorage.getItem('dados');
  if (dados) {
    try {
      jsonToken.value = JSON.parse(dados);
    } catch (error) {
      console.error('Erro ao parsear o token:', error);
    }
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&display=swap');
@import url('https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css');

/* Estilo global */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: all 0.35s linear;
  font-family: 'Barlow', sans-serif;
}

body {
  background-color: #ededed;
}

/* Estilo do menu lateral */
aside {
  position: fixed;
  background-color: #022535;
  color: white;
  width: 4rem; /* Largura fixa do menu mini */
  height: 100vh;
  display: flex;
  flex-direction: column;
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

/* Links do menu */
ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

ul li {
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 0.5rem;
  margin: 0.25rem 0;
  position: relative;
}

ul li.active,
ul li:hover {
  background-color: #ff7200;
  color: #000;
}

/* Ícones */
ul li i {
  width: 4rem;
  height: 3.5rem;
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Labels (ocultos por padrão, visíveis no hover) */
ul li label {
  display: none;
  position: absolute;
  left: 4.5rem; /* Espaço para exibir após o ícone */
  white-space: nowrap;
  background-color: #ff7200;
  color: rgb(0, 0, 0);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 1.5rem;
}

ul li:hover label {
  display: block;
}

/* Avatar do usuário */
ul li img {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid transparent;
  transition: border 0.3s, transform 0.3s;
}

ul li:hover img {
  transform: scale(1.1);
  border-color: #ff7200;
}

/* Área do usuário */
.user {
  margin-top: 35rem; /* Ajuste a margem superior para posicionar mais acima */
  padding-top: 1rem;
  border-top: 1px solid #ff7200;
}

</style>
