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
      theme: "light2",  // fonte
      backgroundColor: "transparent", // cor de fundo
       title: {
        text: "Atendimento no dia", // texto principal
        fontColor: "#fff", // cor de texto
      },
      axisY: {          // info do grafico
        title: "Número de Itens",   // texto lateral
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
          { label: "AT 01", y: 25 },
          { label: "AT 02", y: 35 },
          { label: "AT 03", y: 20 },
          { label: "AT 04", y: 28 },
          { label: "AT 05", y: 33 }
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
  