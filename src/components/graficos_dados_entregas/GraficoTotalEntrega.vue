<template>
  <div>
    <canvas id="GraficoTotalEntrega"></canvas>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import Chart from 'chart.js/auto';

export default {
  name: "GraficoBar",
  setup() {
    onMounted(() => {
      // Gráfico de Barras
      new Chart(document.getElementById("GraficoTotalEntrega"), {
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