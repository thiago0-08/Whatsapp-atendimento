<template>
    <div id="app">
        <div class="row janela-principal">

            <!-- Coluna Esquerda -->
            <div class="col-md-4 lista-de-conversas p-0">
                <div class="search-section p-3 mb-4 shadow-sm rounded">
                    <form class="d-flex flex-column" role="search">
                        <input class="form-control mb-3" type="search" placeholder="Pesquisar conversas"
                            aria-label="Search">
                    </form>
                    <button type="button" class="btn btn-outline-primary btn-block mb-2 btn-sm" id="botoes"
                        @click="telaCriaContato">Contatos</button>
                    <button type="button" class="btn btn-outline-primary btn-block mb-2 btn-sm" id="botoes"
                        @click="telaConversasEncerrada">Conversas Encerradas</button>
                    <button type="button" class="btn btn-outline-primary btn-block mb-2 btn-sm" id="botoes"
                        @click="telaFiladeEspera">Fila de Espera</button>
                </div>

                <div class="contatos-lista">

                    <item-lista-de-conversa v-for="(conversa, indice) in conversas" :key="indice"
                        :mensagemAtiva="indice === indiceAtivo" :nomeDoUsuario="conversa.contato"
                        :ultimaMensagem="conversa.mensagens[0]?.conteudo" :foto="conversa.foto"
                        :temNotificacao="conversa.temNotificacao" @click.native="indiceAtivo = indice"/>
                </div>
            </div>

            <!-- Coluna Direita -->
            <div class="col-md-8 conversa-ativa p-0">
                <!-- Barra Superior -->
                <div
                    class="barra-superior bg-secondary text-white p-3 d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center">

                        <img v-if="conversas[indiceAtivo]" :src="conversas[indiceAtivo].foto" alt="Foto de perfil"
                            class="rounded-circle mr-2" width="40"/>
                        <span @click="mostraInformacoesContato">{{ conversas[indiceAtivo]?.contato }}</span>
                    </div>

                    <div class="d-flex">
                        <button class="btn btn-primary  btn-sm" @click="telaCriaContato" id="#botoes"> <i
                                class="bi bi-person-plus-fill"></i> Contato</button>
                        <button type="button" class="btn btn-primary btn-sm" @click="telaTicketsAberto">
                            <i class="bi bi-card-checklist" ></i>
                                Tickets em Aberto <span class="badge text-bg-secondary" style="background: red !important; "  >
                                {{ quantidadeDeTickets }} </span>
                        </button>
                        <button class="btn btn-primary  btn-sm" @click="telaCriarTicket"> <i class="bi bi-card-checklist"></i>
                            Criar Ticket</button>
                        <button class="btn btn-danger  btn-sm" @click="telaEncerrarTicket"><i class="bi bi-box-arrow-right"></i>
                            Encerrar</button>
                    </div>
                </div>

                <!-- Informações do contato -->
                <div v-if="mostraDetalhes" class="overlay" >
                    <div class="cards_Infos">
                        <p><strong>Nome:</strong> {{ conversas[indiceAtivo]?.contato }}</p>
                        <p><strong>Última Mensagem:</strong> {{ conversas[indiceAtivo]?.mensagens[0]?.conteudo }}</p>
                        <p><strong>Número de Mensagens:</strong> {{ conversas[indiceAtivo]?.mensagens.length }}</p>
                        <button @click="mostraInformacoesContato" id="botao-fechar">Fechar</button>
                    </div>
                </div>

                <!-- Cards -->
                <div v-if="showcriarticket" class="overlay">
                    <div class="cards_Infos">
                        <ticket-whatsapp @close="telaCriarTicket" />
                        <button @click="telaCriarTicket" id="botao-fechar">Fechar</button>
                    </div>
                </div>

                <div v-if="showcriacontato" class="overlay">
                    <div class="cards_Infos">
                        <cria-contato @close="telaCriaContato" />
                        <button @click="telaCriaContato" id="botao-fechar">Fechar</button>
                    </div>
                </div>

                <div v-if="showconversasencerrada" class="overlay">
                    <div class="cards_Infos">
                        <conversa-encerrada @close="telaConversasEncerrada" :dados="conversaEncerrada" />
                        <button @click="telaConversasEncerrada" id="botao-fechar">Fechar</button>
                    </div>
                </div>

                <div v-if="showfilaespera" class="overlay">
                    <div class="cards_Infos">
                        <fila-espera @close="telaFiladeEspera" :dados="filaDeEspera" @batatinha123="atendimento" />
                        <button @click="telaFiladeEspera" id="botao-fechar">Fechar</button>
                    </div>
                </div>

                <div v-if="showticketaberto" class="overlay">
                    <div class="cards_Infos">
                        <ticket-aberto @close="telaTicketsAberto" />
                        <button @click="telaTicketsAberto" id="botao-fechar">Fechar</button>
                    </div>
                </div>

                <div v-if="showfechachamado" class="overlay">
                    <div class="cards_Infos">
                        <fechar-chamado @close="telaEncerrarTicket" />
                        <button @click="telaEncerrarTicket" id="botao-fechar">Fechar</button>
                    </div>
                </div>

                <div class="lista-mensagens p-3"
                    style="display: flex; flex-direction: column; height: 400px; overflow-y: auto;">
                    <mensagem-da-conversa-ativa v-for="(mensagem, indice_) in conversas[indiceAtivo]?.mensagens"
                        :key="indice_" :conteudo="mensagem.conteudo" :horario="mensagem.horario"
                        :verde="mensagem.verde" />
                </div>


                <!-- Barra Inferior -->
                <div class="barra-inferior p-2">
                    <input type="text" class="form-control" v-on:keyup.enter="enviarMensagem"
                        placeholder="Insira sua mensagem" v-model="conteudoASerEnviado"
                        aria-label="Digite sua mensagem">
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import CriaContato from '@/components/whatsapp/component dos Cards/CriaContato.vue';
import CriaTicket from '@/components/whatsapp/component dos Cards/CriarTicket.vue';
import ItemDaListaDeConversa from './ItemDaListaDeConversa.vue';
import MensagemDaConversaAtiva from './MensagemDaConversaAtiva.vue';
import ConversaEncerrada from './component dos Cards/ConversaEncerrada.vue';
import Fila_Espera from '@/components/whatsapp/component dos Cards/FilaEspera.vue';
import EncerrarChamado from '@/components/whatsapp/component dos Cards/EncerrarChamado.vue';
import TicketAberto from './component dos Cards/TicketAberto.vue';
import apiClient from '@/views/api';
import { ref, onMounted } from 'vue';


export default {


    name: "App",
    data() {
        return {
            quantidadeDeTickets: 1,

            conversaEncerrada: [
                {
                    atendimento_Id: 10,
                    protocolo: 'exemplo',
                    contato_Id: null,
                    contato: "João Silva",
                    data_Inicio: '13/10/2024',
                    data_Fim: '14/10'
                }
            ],

            filaDeEspera: [
                {
                    atendimento_Id: 5,
                    contato_Id: 10,
                    contato: 'Joao',
                    tempo_espera: 23
                },
                {
                    atendimento_Id: 7,
                    contato: 'Maria',
                    tempo_espera: 35
                }
            ],

            conversas: [
                {
                    atendimento_Id: 10,
                    contato_Id: 9,
                    contato: "João Silva",
                    mensagens: [{ conteudo: "Olá, tudo bem?", horario: "7:99", verde: false }],
                    foto: "https://via.placeholder.com/40",
                    temNotificacao: false
                },
                {
                    atendimento_Id: 11,
                    contato_Id: 7,
                    contato: "Maria Souza",
                    mensagens:[{ conteudo: "Bom dia!", horario: "13:15", verde: false },
                    { conteudo: "Bom dia!", horario: "13:20", verde: false },
                    { conteudo: "Bom dia!", horario: "13:50", verde: false }],
                    foto: "https://via.placeholder.com/40",
                    temNotificacao: false
                }
            ],
            indiceAtivo: 0,
            conteudoASerEnviado: "",
            mostraDetalhes: false,
            showcriarticket: false,
            showcriacontato: false,
            showconversasencerrada: false,
            showfilaespera: false,
            showfechachamado: false,
            showticketaberto: false,
        };

    },

    components: {
        "item-lista-de-conversa": ItemDaListaDeConversa,
        "mensagem-da-conversa-ativa": MensagemDaConversaAtiva,
        "ticket-whatsapp": CriaTicket,
        "cria-contato": CriaContato,
        "conversa-encerrada": ConversaEncerrada,
        "fila-espera": Fila_Espera,
        "fechar-chamado": EncerrarChamado,
        "ticket-aberto": TicketAberto,

    },
    methods: {
        atendimento(conversas) {
            this.conversas.push(conversas);
            let contador = this.conversas.length;
            
            this.indiceAtivo = contador-1;
        },

        telaCriaContato() { this.showcriacontato = !this.showcriacontato; },
        telaCriarTicket() { this.showcriarticket = !this.showcriarticket },
        telaConversasEncerrada() { this.showconversasencerrada = !this.showconversasencerrada },
        telaFiladeEspera() { this.showfilaespera = !this.showfilaespera },
        telaEncerrarTicket() { this.showfechachamado = !this.showfechachamado },
        telaTicketsAberto() { this.showticketaberto = !this.showticketaberto },
        mostraInformacoesContato() { this.mostraDetalhes = !this.mostraDetalhes;},

        enviarMensagem() {
            if (this.conteudoASerEnviado.trim() === "") {
                alert("Por favor, insira uma mensagem.");
                return;
            }
            const horarioAtual = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            this.conversas[this.indiceAtivo].mensagens.push({ conteudo: this.conteudoASerEnviado, horario: horarioAtual, verde: true });
            this.conteudoASerEnviado = "";

            // Rolando para o fundo
            this.$nextTick(() => {
                const mensagensContainer = this.$el.querySelector('.lista-mensagens');
                mensagensContainer.scrollTop = mensagensContainer.scrollHeight;
            });
        },

        mounted() {
            // -------------------- descomenta quando a api tiver pronta 
            // apiClient.getconversas()
            //     .then(response => {
            //         this.conversas = response.data; // Atualiza as conversas com os dados recebidos
            //     })
            //     .catch(error => {
            //         console.error("Erro ao carregar os dados da API:", error);
            //     });
            // apiClient.getTicketContar(conversa.contato_Id);
        },

        setup() {
            setInterval(() => {
                console.log("tempo Whats ");
            }, 1000);
        }
    }
}
</script>

<style scoped>
/* Estilos de sobreposição para cards de informações */
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
}

/* Cards de informações sobre conversas, tickets e filas */
.cards_Infos {
    background: #022535;
    padding: 10px;
    border-radius: 12px;
    border: 1px solid #ff7200;
    width: 80%;
    max-width: 600px;
}

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

/* Estrutura principal da aplicação */
#app {
    display: flex;
    margin: 10px;
    height: 100vh;
    /* Garante que a aplicação ocupe a altura total da tela */
    overflow: hidden;
    /* Impede o estouro vertical */
}

#botoes {
    margin-left: 5px;
}
/* Ajustes de layout para botões */


.btn-danger {
    --bs-btn-color: white;
    --bs-btn-border-color: #022535;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: red;
    --bs-btn-hover-border-color: red;
    --bs-btn-focus-shadow-rgb: 220, 53, 69;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: red;
    --bs-btn-active-border-color: red;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: red;
    --bs-btn-disabled-bg: transparent;
    --bs-btn-disabled-border-color: red;
    --bs-gradient: none;
    background: red;
}

/* Estilos gerais da janela principal */
.janela-principal {
    margin: 0px 10px 10px 65px;
    height: calc(100vh - 20px);
    /* Reduz a altura em relação ao padding */
    box-shadow: 0 3rem 3rem -1rem rgba(10, 10, 10, .2);
    background: #1b1b1b;
    color: white;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    /* Impede o estouro do conteúdo para fora */
}

/* Barra Superior */
.barra-superior {
    background-color: #022535 !important;
    border-bottom: 1px solid #ff7200;
}

.barra-superior .btn {
    margin-left: 10px;
}

.barra-superior img {
    margin-right: 15px;
    border-radius: 50%;
}

.barra-superior span {
    font-weight: 500;
    font-size: 18px;
}

/* Coluna Direita: conversa ativa */
.conversa-ativa {
    background: #2b2b2b;
    border-radius: 0 10px 10px 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    /* Garante que a conversa ocupe a altura total */
    overflow: hidden;
    /* Evita que o conteúdo estoure para fora */
}

/* Lista de contatos na coluna esquerda */
.contatos-lista {
    height: calc(100vh - 120px);
    /* Ajuste a altura para evitar estouro */
    overflow-y: auto;
}

.contatos-lista::-webkit-scrollbar {
    width: 8px;
}

.contatos-lista::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.3);
    /* cor da scrollbar */
}

/* Barra Inferior: caixa de entrada */
.barra-inferior {
    background: #333;
    width: auto;
    height: 50px;
    padding: 10px;
    display: flex;
    align-items: center;
    bottom: 0;
    position: relative;
}

.barra-inferior input {
    border-radius: 25px;
    margin: 0;
    background: #444;
    color: rgb(255, 252, 252);
    padding: 10px;
    width: 100%;
}

/* Scroll customizado na lista de mensagens */
.lista-mensagens {
    flex-grow: 1;
    /* Ocupa o espaço restante da tela */
    overflow-y: auto;
    padding: 10px;
    max-height: calc(100vh - 170px);
    /* Limita a altura máxima da lista */
}

.lista-mensagens::-webkit-scrollbar {
    width: 8px;
}

.lista-mensagens::-webkit-scrollbar-thumb {
    background-color: rgba(53, 52, 52, 0.897);
    border-radius: 4px;
}

/* Estilos para itens da lista de conversas */
.item {
    padding: 15px 20px;
    border-bottom: 1px solid #ff7200;
    cursor: pointer;
}

.item:hover {
    background: rgb(37, 36, 36);
}

.item.ativo {
    background: rgb(49, 48, 48);
}

/* Estilos das mensagens na lista de conversas */
.mensagem {
    font-size: 14px;
    box-shadow: #ff7200 0px 1px 0.5px 0px;
    background: rgb(71, 63, 63);
    margin: 5px 0;
    padding: 5px 10px;
    border-radius: 10px;
    width: fit-content;
}

.mensagem.verde {
    background: rgb(220, 248, 198);
    align-self: flex-end;
    color: black;
}

.mensagem span {
    margin-left: 15px;
    font-size: 12px;
    color: gray;
}

/* Cor do subtítulo da última mensagem */
.subtitle {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: gray;
}
</style>
