<template>
  <div>
    <h1 class="title-page">Serviços</h1>

    <v-btn color="#febe1b"
           fixed
           dark
           absolute
           top
           right
           fab>
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="10"
        class="elevation-1"
        :loading="false"
        loading-text="Carregando dados..."
    ></v-data-table>
  </div>
</template>

<script>
export default {
  name: 'app-service',
  data() {
    return {
      headers: [
        {text: 'Nome', align: 'start', sortable: true, value: 'name'},
        {text: 'Descrição', value: 'description'},
        {text: 'Preço', value: 'price'},
      ],
      desserts: [
        {
          name: 'Mão de obra troca de display',
          description: 'Descrição para mão de obra realizada',
          phone: '70.00',
        },
        {
          name: 'Mão de obra troca de bateria',
          description: 'Descrição para mão de obra realizada',
          phone: '50.00',
        }
      ],
    }
  },
}
</script>
