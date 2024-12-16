<template>
    <h2 class="titulo"> Fila De Espera </h2>
    <div class="table-primary" >
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Cliente</th>
                    <th scope="col">Tempo de Espera</th>
                    <th></th>
                   
                </tr>
            </thead>
                <tbody >
                    <tr v-for="(cliente, index)  in this.dados" :key="cliente.atendimento_Id">

                        <td>{{ cliente.atendimento_Id }}</td>
                        <td>{{ cliente.contato }}</td>
                        <td>{{ cliente.tempo_espera }}</td>
                        <td v-if="!cliente.removido">
                            <td><button class="btn btn-primary"><i class="bi bi-headset" @click="iniciandoAtendimento(cliente, index)">  Atender</i></button></td>
                        </td>
                    </tr>
                </tbody>
        </table>
    </div>
</template>
<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import api from '@/views/api';

export default {
    data() {
        return {
        }
    },

    props:{
        dados:{
            type: Array,
            Required:true
        }
    },
   
    setup() {
    const count = ref(0);
    
    const intervalId = setInterval(() => {
      console.log("Tempo na fila de espera");
      count.value++; 
    }, 60000);

    onBeforeUnmount(() => {
      clearInterval(intervalId);
    });

    return { count };
  },
  methods:{
    iniciandoAtendimento(dadosCLiente, index){
        let conversa =
        {
            atendimento_Id: dadosCLiente.atendimento_Id,
            contato_Id: dadosCLiente.contato_Id,
            contato: dadosCLiente.contato,
            mensagens: [{ conteudo: "Bom dia!", horario: "13:45", verde: false },
            { conteudo: "alguem?", horario: "13:59", verde: false },
            { conteudo: "porr@", horario: "14:30", verde: false }
            ],
            foto: "https://via.placeholder.com/40",
            temNotificacao: false
        };
        this.$emit('batatinha123', conversa);

         // Remove o cliente da lista de dados
        this.dados.splice(index, 1);

        this.$emit('remove', conversa);
        
        this.$emit('close')
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



.table>:not(caption)>*>* {
    text-align: center;
    padding: .5rem .5rem;
    border-bottom: 1px solid #ff7200;
    color: white;
    background-color: #ffffff00;;
    box-shadow: inset 0 0 0 9999px var(--bs-table-bg-state, var(--bs-table-bg-type, var(--bs-table-accent-bg)));
}
</style>