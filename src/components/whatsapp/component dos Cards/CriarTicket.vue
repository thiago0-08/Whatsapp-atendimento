<template>
  <div container>
    <div class="mb-3">
      <h3 class="titulo">TICKET</h3>
      <label for="formFile" class="form-label">Adicione imagens</label>
      <input class="form-control" type="file" id="formFile" ref="fileInput">
    </div>

    <label for="subject" class="form-label">Assunto</label>
    <input class="form-control" v-model="subject" placeholder="Assunto do atendimento...">

    <p>Departamento</p>
    <select class="form-select" v-model="department">
      <option value="">Selecione o Departamento</option>
      <option value="1">Compra Incorreta</option>
      <option value="2">Insatisfação com o Produto</option>
      <option value="3">Incompatível com o veículo</option>
      <option value="4">Envio Incorreto</option>    
    </select>

    <label for="description" class="form-label">Descrição</label>
    <textarea class="form-control" v-model="description" placeholder="Descrição do atendimento...."></textarea>

    <button class="btn btn-primary" @click="submitTicket" id="botao-enviar">Enviar</button>
  </div>
</template>

<script>
import api from '@/views/api.js';

export default {
  data() {
    return {
      subject: '',
      department: '',
      description: '',
      tickets: [' '], // Exemplo de tickets existentes
    };
  },
  methods: {
    async submitTicket() {
  const formData = new FormData();
  const fileInput = this.$refs.fileInput.files[0];

  formData.append('file', fileInput);
  formData.append('subject', this.subject);
  formData.append('department', this.department);
  formData.append('description', this.description);

  try {
    const response = await api.postTicket(formData);
    console.log('Ticket Enviado com Sucesso', response.data);
    this.tickets.push(response.data); // Adiciona o novo ticket na lista
    console.log('Total de tickets:', this.tickets.length); // Debug
    this.emitirEvento(); // Emite o evento para atualizar a contagem
  } catch (error) {
    console.error('Erro ao enviar formulário');
    alert('Erro ao enviar formulário');
  }


    },
    emitirEvento() {
      this.$emit('atualizarQuantidadeTickets', this.tickets.length); // Emite o evento com a quantidade de tickets
    }
  }
}
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
