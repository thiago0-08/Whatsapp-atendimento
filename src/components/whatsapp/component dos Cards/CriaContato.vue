
<template>
    <div container>
        <h2 class="titulo">Adicionar Contato</h2>
        <label for="nomeContato" class="form-label">Nome do Contato</label>
        <input  v-model="nomeContato" class="form-control" list="datalistOptions" id="nomeContato" placeholder="Digite o nome...">

        <label for="numeroContato" class="form-label">Número do Contato</label>
        <input  v-model="numeroContato"
            class="form-control" 
            list="datalistOption" 
            id="numeroContato" 
            placeholder="Digite o número..." 
            type="number" 
            oninput="this.value = this.value.replace(/[^0-9]/g, '');" />

          <button class="btn btn-primary" @click="submitCriaContato" id="botao-enviar">Enviar</button>
    </div>
</template>
  
  <script>
 import api from '@/views/api.js'
  export default {
   

    data() {
      return {
        numeroContato: '',
        nomeContato: '',
        criaContato: []
      };
    },
    methods: {
      async submitCriaContato() {
        const formData = new FormData();

        formData.append('numeroContato', this.numeroContato);
        formData.append('nomeContato', this.nomeContato);

        try {
          const response = await api.postCriaContato(formData);
          console.log('Contato criado com Sucesso', response.data);
        } catch (error) {
          console.error('Erro ao cria contato')
          alert('Erro ao cria contato')
        }
      }
    }
  };
  </script>
  
  <style scoped>
#botao-fechar {
    background: #2b2b2b;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 8px 12px;
    cursor: pointer;
    transition: 0.3s;
}
#botao-fechar:hover {
    background: #444;
}

#botao-enviar{
  margin-left:40% ;
  margin-top: 10px;
  display: block;
  font-size: 16px;
}

.titulo {
    text-align: center;
    margin-bottom: 20px;
}
.form-label {
    margin-left: 10px;
    font-weight: bold;
}
.container {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: rgb(228, 228, 228);
    padding: 20px;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}
.form-control {
    margin-bottom: 15px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

.form-control:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}
  </style>
