const conversasIniciais = [
    {
        "usuario": "Steve Jobs",
        "foto": "https://via.placeholder.com/50?text=SJ",
        "mensagens": [
            {
                "horario": "10:15",
                "conteudo": "Jobs, quando sai o novo Iphone?",
                "verde": true
            },
            {
                "horario": "10:15",
                "conteudo": "Em setembro de 2019",
                "verde": false
            },
        ],
        "temNotificacao": false
    },
    {
        "usuario": "Bill Gates",
        "foto": "https://via.placeholder.com/50?text=BG",
        "mensagens": [
            {
                "horario": "10:15",
                "conteudo": "Eu queria umas dicas suas para o próximo Windows!",
                "verde": false
            },
            {
                "horario": "10:15",
                "conteudo": "Não sei se consigo... Estou meio enrolado.",
                "verde": false
            },
       
        ],
        "temNotificacao": false
    },
    {
        "usuario": "Jeff Bezos",
        "foto": "https://via.placeholder.com/50?text=JB",
        "mensagens": [
            {
                "horario": "10:15",
                "conteudo": "O que você achou do novo recurso da AWS?!",
                "verde": false
            },
            {
                "horario": "10:15",
                "conteudo": "?!",
                "verde": false
            },
        ],
        "temNotificacao": false
    }
];
export default conversasIniciais;

// ---------------------------- teste ----------------------------
// import { ref, onMounted, } from 'vue';
// export default {
//     name: 'FilaEspera',
//     props: ['usuario', 'foto', 'mensagens', 'horario'],
//     data() {
//         return {
//             const conversasIniciais = [
//                 {
//                     usuario: this.usuario || "{{cliente.Nome}}",
//                     foto: this.foto || "Cliente.foto",
//                     "mensagens": [
//                         {
//                             horario: "mensagem.horario",
//                             conteudo: "mensagem.mensagens",
//                             verde: true
//                         },
//                         {
//                             horario: "cliente.horario",
//                             conteudo: "clienteMensagem.mensagemCliente",
//                             verde: false
//                         },
//                     ],
//                     "temNotificacao": false
//                 },
//             ]
//         };
//     },
// };
