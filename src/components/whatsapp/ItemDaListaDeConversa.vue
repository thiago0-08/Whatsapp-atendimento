<template>
    <div class="item d-flex align-items-center" :class="{ ativo: mensagemAtiva }">
        <img :src="foto" alt="Foto de perfil" class="rounded-circle mr-3" width="40">
        <div>
            <div class="title is-6">{{ nomeDoUsuario }}</div>
            <div class="subtitle is-6">{{ ultimaMensagem }}</div>
            <div v-if="temNotificacao" class="notificacao">Nova Mensagem</div> 
        </div>
    </div>
</template>

<script>
import api from '@/views/api'

// onMounted(() => {
//     api.getInfoConversaUsuario().ten(response => {
//         infoconversausuario.value = response.data;
//     }).catch (error => {
//         console.error("erro ao busca informaçoes da conversa do usuario:", error)
//     });
// });

export default {
    name: 'ItemDaListaDeConversa',
    props: ['nomeDoUsuario', 'ultimaMensagem', 'mensagemAtiva', 'foto', 'temNotificacao'], // Adiciona o prop
};



const dados = localStorage.getItem('dados');
if (dados) {
    try{
        const jsonToken = JSON.parse(dados, 0);
        console.log(jsonToken.token);
    } catch (error){
        console.error('erro ao parsear o token:' ,error);
        }
}else{
    console.log('Token não encontrado item conversa')
}

</script>

<style>
.subtitle {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: gray;
}
.item {
    padding: 15px 20px;
    border-bottom: 1px solid #2a2f32;
    cursor: pointer;
    color: white;
}
.item:hover {
    background: #2a2f32;
}
.item.ativo {
    background: #33383b;
}
.notificacao {
    background: #02583f; /* Cor  da notificação */
    color: white;
    border-radius: 4px;
    padding: 2px 4px;
    font-size: 12px;
    margin-top: 5px;
}
</style>