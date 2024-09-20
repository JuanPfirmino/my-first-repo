<template>

<form @submit.prevent.='addPerson'>

    <input type="text" v-model="name" placeholder="nome">
    <input type="text" v-model="age" placeholder="idade">
    <input type="text" v-model="documents" placeholder="documentos">

    <button type="button" @click="addPerson"> Adicionar</button>
</form>

<div v-for="(person, index) in personList " :key="index">
    <p>ID: {{ index + 1 }} </p>
    <p>Nome: {{ person.name }} </p>
    <p>Idade: {{ person.age }} </p>
    <p>Documento: {{ person.document }} </p>
  
</div>

</template>


<script>
export default {

    data() {
        return {
            personList: [],
            name: '',
            age: '',
            documents: ''
            
        }
    },
    methods: {
        addPerson(){
            let person = {
                name: this.name,
                age: this.age,
                document: this.documents 
            }
            this.personList.push(person)



        }
    }
}

</script>

<style>
</style>