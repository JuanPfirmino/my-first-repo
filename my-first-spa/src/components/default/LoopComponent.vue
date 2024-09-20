<template>
    <div>
        <form @submit.prevent="addItem">
            <input type="text" v-model="inputValue">
            <input type="submit" value="Adicionar" @click="addItem()">
        </form>
        <table>
            <tr>
                <td>Index</td>
                <td>Key</td>
            </tr>
            <tr v-for="(item, index) in itens" :key="index">
                <td>{{ index }}</td>
                <td>{{ item }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default{
        data() {
            return{
                itens: [],
            }
        },
        methods: {
            addItem(){
                if(this.inputValue){
                    this.itens.push(this.inputValue)
                    this.inputValue = ''
                }
            }
        }
    }

</script>

<style>
 table, td, tr{
    border: 2px solid black;
    padding: 10px;
    margin: 5px auto 5px auto;
 }
</style>

