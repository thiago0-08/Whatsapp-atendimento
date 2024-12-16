

<template>
    <div ref="chartContainer" style="height: 370px; width: 100%;"></div>
  </template>
  
  <script setup>
  
import { onMounted, ref } from 'vue';
  
  const chartContainer = ref(null);
  
  const renderChart = () => {
    if (typeof CanvasJS === 'undefined') {
      console.error('CanvasJS não está carregado.');
      return;
    }

    
  
    const chart = new CanvasJS.Chart(chartContainer.value, {
      animationEnabled: true,
      theme: "light2", // font
      backgroundColor: "transparent",  // cor fundo
      title: {
        text: "Atendimento Total no Mes",  // titulo
        fontColor: "#fff",
      },
    //   axisY: {
    //     title: "Número de Atendiment",

    //   },                                             // essas info nao usa nesse grafico
    //   axisX: {
    //     labelFontColor: "#FFF"  // cor do texto lateral  
    //   },
      data: [{
        type: "pie",

        yValueFormatString: "#,##0 itens",
        dataPoints: [
        
          { label: "AT 01", y: 803 },
          { label: "AT 02", y: 794 },
          { label: "AT 03", y: 843 },
          { label: "AT 04", y: 905 },
          { label: "AT 05", y: 840 }],
          
    
        
        
      }]
    });
    chart.render();
  };
  
  onMounted(() => {
    renderChart();
  });
  </script>
  
  <style scoped>
  /* Adicione estilos específicos para o ChartComponent.vue aqui, se necessário */
  </style>
  