

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
      theme: "light2",
      backgroundColor: "transparent",
      title: {
        text: "Motivos dos Atendimentos ",
        fontColor: "#fff",
      },
      axisY: {
        title: "Número de Itens",

      },
      axisX: {
        labelFontColor: "#FFF"  
      },
      data: [{
        type: "pie",

        yValueFormatString: "#,##0 itens",
        dataPoints: [
          { label: "Incompativel", y: 40, Color:"#fff" },
          { label: "Insatisfação", y: 35 },
          { label: "Compra Incorreta", y: 15 },
          { label: "Envio Errado", y: 9 },
          { label: "Avaria", y: 5 }],
          
    
        
        
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
  