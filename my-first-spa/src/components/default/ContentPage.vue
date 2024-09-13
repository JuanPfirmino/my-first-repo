<template>
    <section>
        <div>
            <p>Meu contéudo</p>
            <div>
                <input v-model="nome" placeholder="Digite seu Nome" type="text">
                <p>Seu nome é: {{ nome }}</p>
                <button @click="submeterFormulario">Procurar Usuário</button>

                <p v-if="url">
                    {{ url }}
                </p>
                <p v-else>
                    Você não procurou nenhum usuário seu mongol
                </p>
            </div>
        </div>
    </section>
</template>
<script>

    export default{
        name:'ContentPage',
        data(){
            return{
                nome: ' ',
                url: ''
            };
        },
        methods:{
            submeterFormulario(){
                fetch(`https://api.github.com/users/${this.nome} `).then((data)=>{
                    this.url = data.url;
                    console.log(data.url);
                });
            }
        }
    }
</script>

<style>

</style>