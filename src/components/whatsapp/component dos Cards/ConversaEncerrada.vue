<template>
    <h2 class="titulo"> Ticket Encerrados</h2>
    <div class="table-responsive">
        <table class="table">
            <thead>
               
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Protocolo</th>
                    <th scope="col">Solicitante</th>
                    <th scope="col">Data Inicio</th>
                    <th scope="col">Data Fim</th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="ticket in this.dados" :key="ticket.atendimento_Id">
                        <td>{{ ticket.atendimento_Id }}</td>
                        <td>{{ ticket.protocolo }}</td>
                        <td>{{ ticket.contato }}</td>
                        <td>{{ ticket.data_Inicio }}</td>
                        <td>{{ ticket.data_Fim}}</td>
                        <td></td>
                    </tr>
               
            </tbody>
        </table> 
        
    </div>
</template>
<script>
import axios from 'axios';

import api from '@/views/api'

// onMounted(() => {
//     api.getConversaEncerrada().ten(response => {
//         conversaencerrada.value = response.data;
//     }).catch (error => {
//         console.error("erro ao busca conversas Encerrada:", error)
//     });
// });
export default {
  
    data() {
        return {
            // TicketEncerrado: [
            //     {
            //         atendimento_Id: 10,
            //         protocolo: 'exemplo',
            //         contato_Id: null,
            //         contato: "João Silva",
            //         data_Inicio:'13/10/2024',
            //         data_Fim:'14/10'
            //     }
            // ]
        }
    },
    props:{
        dados:{
            type:Object,
            Required:true
        }
    },
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
.titulo {
    text-align: center;
    margin-bottom: 20px;
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


