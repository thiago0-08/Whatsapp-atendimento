import axios from "axios";

const apiClient = axios.create({
async mounted() {
    try {
        const response = await axios.get('URl-api'); 
        console.log(response.data)
        this.dataFromApi = response.data; 
    } catch (error) {
        console.error("Erro ao buscar os dados:", error);
    }
},
});

export default{
    getUsuario() {
        return apiClient.get('/usuario')
    },
    getContatos() {
        return apiClient.get('/conversas')  // Whatsviwe 
    },
    getConversaEncerrada() {
        return apiClient.get('/ConversaEncerrada')   //conversaEncerrada
    },
    getFilaEspera() {
        return apiClient.get('/FilaEspera')
    },
    getMensagemConversa(idAtendimento) {
        return apiClient.get(`/MensagemConversa?id=${idAtendimento}`) // filaEspera
    },
    getInfoConversaUsuario() {
        return apiClient.get('/InfoConversaUsuario')
    },

    postTicket(data){
        return apiClient.post('/cadastroTicket', data) // ticketComponent
    },
    postCriaContato(data){
        return apiClient.post('/criaContato', data)  // addContato
    },
    postFechaChamado(data){
        return apiClient.post('/fechaChamado',data) // FechaChamado
    },
    getTicketContar(id) {
        //return apiClient.get(`/ticketcContar?id=${id}`)
        if (id){
            console.log(id);
        }
        return 2;
    },
    getTicketListar(id) {
        return apiClient.get(`/ticketcListar?id=${id}`)
    }
    

}