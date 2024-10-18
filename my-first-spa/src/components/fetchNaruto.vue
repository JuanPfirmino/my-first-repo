<template>
    <div class="container">
        <div class="row">
            <!-- Exibe uma mensagem enquanto aguarda dados da API -->
            <div v-if="loading" class="col-12 text-center">
                <p>Carregando...</p>
            </div>

            <!-- Exibe uma mensagem de erro caso a api falhe -->
            <div v-if="error" class="col-12 text-center">
                <p>Ops... deu merda</p>
            </div>

            <!-- Exibe lista de personagens -->
            <div v-else v-for="character in characters" :key="character.id" class="col-md-4">
                <div class="card mb-4">

                    <img :src="character.images[0]" alt="imagem" class="card-img-top">

                    <div class="card-nody">
                        <h5 class="card-title"> {{ character.name }}</h5>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                characters: [],
                loading: true,
                error: false,

            }
        },
        methods: {
            fetchNaruto() {
                fetch('https://dattebayo-api.onrender.com/characters')
                    .then(response => {
                        if(!response.ok){
                            throw new Error("network error");
                        }
                        return response.json();
                    })
                    .then(data => {
                        

                        this.characters = data.characters;
                        console.log(data)
                        this.loading = false;

                    })
                    .catch(() => {
                        this.error = true;
                        this.loading = false;
                    })
            }
        },
        mounted() {
            this.fetchNaruto();
        },
    }
</script>

<style>

</style>