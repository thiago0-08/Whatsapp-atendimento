<template>
  <div>
    <canvas id="GraficoEntregaNoMes"></canvas>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import Chart from 'chart.js/auto';

export default {
  name: "GraficoLine",
  setup() {
    onMounted(() => {
      // Gráfico de Linhas
      new Chart(document.getElementById("GraficoEntregaNoMes"), {
        type: "line",
        data: {
          labels: ["Jan", "Fev", "Mar", "Abr"],
          datasets: [
            {
              label: "Entregas por Mês",
              data: [3000, 4000, 3500, 5000],
              borderColor: "green",
              fill: false,
            },
          ]},
        });
      });
    },
  };
</script>

<style>

#GraficoEntregaNoMes {
  width: 250px;
  height: 300px; /* Ajuste conforme necessário */
}
</style>