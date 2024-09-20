<template>
    <div>
        <form @submit.prevent="addItem">
            <input type="text" v-model="inputValue" placeholder="Digite um item">
            <input type="submit" value="Adicionar">
        </form>

        <table style="border: 1px solid black;">
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Item</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in itens" :key="index">
                    <td>{{ index }}</td>
                    <td>{{ item }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            itens: [],
            inputValue: '' 
        };
    },
    methods: {
        addItem() {
            if (this.inputValue) {
                this.itens.push(this.inputValue);
                this.inputValue = '';
            }
        }
    }
}
</script>

<style>
table, td, th {
    border: 1px solid black;
}
</style>
