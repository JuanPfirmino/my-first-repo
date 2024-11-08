<template>

    <!-- verifica a existencia da personagem -->
    <div class="container" v-if="character">

        <!-- Card com detalhes do personagem -->
        <div class="card text-center my-4">

            <div class="card-body">

                <div class="row">

                    <div class="col-3">
                        <img :src="character.images[0]" class="img-thumbnail">
                    </div>

                    <div class="col-9">
                        <h2 class="card-title">{{ character.name }}</h2>
                        <!-- hmm falta algo aqui -->
                    </div>

                </div>

            </div>

        </div>

    </div>

    <div class="text-center mt-4" v-else-if="loading">
        <p>Carregando...</p>
    </div>

    <div class="text-center mt-4" v-else>
        <p>Erro ao carregar personagem.</p>
    </div>

</template>

<script>

export default{

    //aqui a gente pode criar propiedade ara se usar no componete
    props: ['id'],

    //aqui vão as váriaveis do componente
    data(){
        return {
            character: null,
            loading: true,
            error: false, 
        }
    },

    //aqui vão os comportamentos/metodos do componente
    methods: {
        fetchCharacter(){
            fetch(`https://dattebayo-api.onrender.com/characters/${this.id}`)
                .then(response => {
                    return response.json();
                })
                .then(data =>{
                    this.character = data;
                    this.loading = false;
                })
                .catch(() => {
                    this.error = true;
                    this.loading = false;
                })
        }
    },

    //mexe com o ciclo de vida do componente, nesse caso quando o componente já foi montado, assim definindo o depois o que é pra fazer depois do ciclo de vida começar e tal
    mounted() {
        this.fetchCharacter()
    },

    //essa é uma propriedade que vai escutar as mudanças que podem acontecer com esse componente, como mudanças de váriaveis e componentes
    watch: {
        id(){
            this.fetchCharacter()
        }
       
    }
}

</script>

<style>

</style>