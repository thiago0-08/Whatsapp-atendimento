<template>
  <div >
    <canvas id="GraficoStatusEntrega"></canvas>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import Chart from 'chart.js/auto';

export default {
  name: "GraficoStatusEntrega",
  setup() {
    onMounted(() => {
      // Gráfico de Pizza
      new Chart(document.getElementById("GraficoStatusEntrega"), {
        type: "doughnut",
        data: {
          labels: ["No Prazo", "Atrasado", "Antecipado"],
          
          datasets: [ 
            {
              data: [70, 20, 10],
              backgroundColor: ["green", "red", "blue"],
              
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