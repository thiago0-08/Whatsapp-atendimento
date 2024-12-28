<template>
    <div>
      <canvas id="GraficoVendasPlataforma"></canvas>
    </div>
  </template>
  
  <script>
  import { onMounted } from 'vue';
  import Chart from 'chart.js/auto';
  
  export default {
    name: "GraficoBar",
    setup() {
      onMounted(() => {
        // Gráfico de Barras na Vertical
        new Chart(document.getElementById("GraficoVendasPlataforma"), {
          type: "bar",
          data: {
            labels: ["C01", "C02", "C03", "C04"],
            datasets: [
              {
                label: "Entregas",
                data: [8000, 6000, 4000, 2000],
                backgroundColor: "purple",
              },
            ],
          },
          options: {
            indexAxis: "y", // Define o gráfico de barras na orientação vertical
          },
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