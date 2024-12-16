
<template>
    <div class="titulo">
    <h1>Fechar Atendimento <i class="bi bi-exclamation-octagon"></i> </h1>
    <p>Você tem certeza que deseja fechar o Chamado? </p>
    </div>
    <div>
    <p>Assunto do Chamado</p>
    <select class="form-select" v-model="assunto"  aria-label="Default select example">
        <option selected>Assunto do Chamado</option>
        <option value="1">Compra Incorreta</option>
        <option value="2">Insatisfação com o Produto</option>
        <option value="3">Incompativel com o veiculo</option>
        <option value="4">Envio Incorreto </option>    
        </select>

    <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Resumo do atendimento</label>
        <textarea  v-model="description" class="form-control" id="exampleFormControlTextarea1" placeholder="resumo do 'Atendomento' " type="text" required rows="3"></textarea>
    </div>
    <button class="btn btn-primary" @click="submitFechaChamado" id="botao-enviar">Enviar</button>
    </div>
</template>
<script>
import api from '@/views/api.js'

export default {
    data() {
        return {
            assunto: '',
            description: '',
        };
    },
    methods: {
        async submitFechaChamado() {
            const formData = new FormData();

            formData.append('assuntoTicket', this.assunto);
            formData.append('descricao', this.description);

            try {
                const response = await api.postFechaChamado(formData);
                console.log('Chamado finalizado com Sucesso')
            } catch (error) {
                console.log('erro ao finalizar Chamado')
                alert('erro ao finalizar Chamado')
            }
        }
    }
}
</script>

<style>
#botao-enviar{
  margin-left:40% ;
  margin-top: 10px;
  display: block;
  font-size: 16px;
}
.titulo{
    text-align: center;
}
</style> 