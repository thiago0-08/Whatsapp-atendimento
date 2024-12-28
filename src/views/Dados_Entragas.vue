<template>
  <div class="container-principal">
    <div class="container-fluid bg-dark text-light p-5">
      <h1 class="text-center mb-5 display-4">Análise de Dados Logísticos</h1>

      <!-- Cards principais -->
      <div class="row mb-5">
        <div class="col-md-4">
          <div class="card shadow-lg border-0 card-hover">
            <div class="card-body text-center">
              <h4><i class="bi bi-truck me-2"></i>Total de Entregas no Mês</h4>
              <h2 class="display-5">54 Mil</h2>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card shadow-lg border-0 card-hover">
            <div class="card-body text-center">
              <h4><i class="bi bi-clock me-2"></i>Entregas no Prazo no Mês</h4>
              <h2 class="display-5">47 Mil</h2>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card shadow-lg border-0 card-hover">
            <div class="card-body text-center">
              <h4><i class="bi bi-geo-alt me-2"></i>Cidade com Mais Entregas no Mês</h4>
              <h2 class="display-5">Fortaleza</h2>
            </div>
          </div>
        </div>
      </div>

      <!-- Gráficos -->
      <div class="row mb-5">
        <div class="col-md-6">
          <div class="grafico-container shadow rounded p-4">
            <h6 class="text-center text-white mb-3">Gráfico Total de Entregas</h6>
            <GraficoTotalEntrega />
          </div>
        </div>
        <div class="col-md-6">
          <div class="grafico-container shadow rounded p-4">
            <h6 class="text-center text-white mb-3">Gráfico Entregas por Mês</h6>
            <GraficoEntregaNoMes />
          </div>
        </div>
      </div>

      <!-- Segunda seção: Mapa e Placeholder -->
      <div class="row mb-5">
        <div class="col-md-6">
          <div class="map-container rounded shadow text-center text-light p-4">
            <div class="mapa">
            <h4>Mapa (Exemplo Estático)</h4>
            <img src="../views/assets/mapa.png">
            </div>
          </div>
        </div>
        <div class="col">
          <div class="grafico-container shadow rounded p-4">
            <h6 class="text-white mb-3"><i class="bi bi-bar-chart me-2"></i>Status das Entregas</h6>
            <GraficoStatusEntrega />
          </div>
      </div>
      </div>

      <!-- Cards de Status -->
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="grafico-container shadow rounded p-4">
            <h6 class="text-white mb-3"><i class="bi bi-pie-chart me-2"></i>Gráfico de Vendas por Plataforma</h6>
            <GraficoVendasPlataforma />
          </div>
        </div>
        
    </div>
  </div>
  </div>
</template>
<script>

import GraficoStatusEntrega from "@/components/graficos_dados_entregas/GraficoStatusEntrega.vue";
import GraficoEntregaNoMes from "@/components/graficos_dados_entregas/GraficoEntregaNoMes.vue";
import GraficoTotalEntrega from "@/components/graficos_dados_entregas/GraficoTotalEntrega.vue";
import GraficoVendasPlataforma from "@/components/graficos_dados_entregas/GraficoVendasPlataforma.vue";


export default {
  components: {
    GraficoStatusEntrega,
    GraficoTotalEntrega,
    GraficoEntregaNoMes,
    GraficoVendasPlataforma,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

body {
  background-color: #1e1e2f;
  font-family: 'Roboto', sans-serif;
  color: #ffffff;
  margin: 0;
  padding: 0;
}

.container-principal {
  background-color: #121212;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  padding-left: 50px; /* Adiciona o espaçamento da borda esquerda */
}

.card {
  background: linear-gradient(145deg, #2b2b3b, #1d1d2b);
  color: #ffffff;
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-hover:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.1);
}

.grafico-container {
  background: #1e1e26;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  padding: 20px;
}

.map-container {
  background: #2a2a3c;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

h1, h4, h6 {
  font-weight: 700;
}
.mapa img {
  width: 100%; /* Ou defina um valor fixo, como 250px */
  height: auto; /* Mantém a proporção da imagem */
}

</style>
