<template>
  <div>
    <h1 class="title-page">Produtos</h1>

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
  name: 'app-product',
  data() {
    return {
      headers: [
        {text: 'Nome', align: 'start', sortable: true, value: 'name'},
        {text: 'Marca', value: 'branch'},
        {text: 'Modelo', value: 'model'},
        {text: 'Cor', value: 'color'},
        {text: 'Preço', value: 'price'},
        {text: 'Qnt', value: 'quantity'},
      ],
      desserts: [
        {
          name: 'iPhone XR',
          branch: 'Apple',
          model: 'XR 128GB',
          color: 'Black',
          price: 4999.00,
          quantity: '1',
        },
        {
          name: 'iPhone 12',
          branch: 'Apple',
          model: '12 128GB',
          color: 'Gold',
          price: 7999.00,
          quantity: '1',
        },
        {
          name: 'Galaxy S20 Ultra',
          branch: 'Samsung',
          model: 'S20 Ultra',
          color: 'Azul',
          price: 7999.00,
          quantity: '1',
        },
        {
          name: 'Galaxy A50',
          branch: 'Samsung',
          model: 'A50',
          color: 'Branco',
          price: 2499.00,
          quantity: '1',
        },
        {
          name: 'Galaxy A30',
          branch: 'Samsung',
          model: 'A30',
          color: 'Branco',
          price: 1799.00,
          quantity: '1',
        },
        {
          name: 'Display Galaxy A30',
          branch: 'Samsung',
          model: 'A30',
          color: 'Branco',
          price: 399.00,
          quantity: '3',
        },
        {
          name: 'Display iPhone 7',
          branch: 'Apple',
          model: '7',
          color: 'Rose Gold',
          price: 499.00,
          quantity: '2',
        },
        {
          name: 'Cabo USB Apple',
          branch: 'Apple',
          model: '-',
          color: 'Branco',
          price: 199.00,
          quantity: '5',
        },
        {
          name: 'Cabo USB Samsung',
          branch: 'Samsung',
          model: 'USB-C',
          color: 'Preto',
          price: 89.90,
          quantity: '5',
        },
        {
          name: 'Fone de ouvido JBL',
          branch: 'JBL',
          model: 'AC50',
          color: 'Preto',
          price: 59.90,
          quantity: '10',
        },
      ],
    }
  },
}
</script>
