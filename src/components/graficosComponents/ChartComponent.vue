<template>
    <div ref="chartContainer" style="height: 370px; width: 100%;  "></div>
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
      theme: "light2",
      backgroundColor: "transparent",
      title: {
        text: "Exemplo de Gráfico de Barras",
        fontColor: "#fff",
      },
      axisY: {
        title: "Número de Itens",
        labelFontColor: "#FFF",
        fontColor: "#fff",
      },
      axisX: {
        labelFontColor: "#FFF"  
      },
      data: [{
        type: "column",
        // yValueFormatString: "#,##0 itens",
        dataPoints: [
          { label: "Janeiro", y: 50 },
          { label: "Fevereiro", y: 15 },
          { label: "Março", y: 25 },
          { label: "Abril", y: 40 },
          { label: "Maio", y: 28 }
        ]
      }]
    });
    chart.render();
  };
 
  onMounted(() => {
    renderChart();
  });


  </script>
-
  <style scoped>


  </style>
  