<template>
  <div>
    <h1 class="title-page">Pessoas</h1>

    <v-btn color="#febe1b"
           fixed
           dark
           absolute
           top
           right
           fab>
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-card class="mx-auto mb-5">
      <v-card-text>
        <v-row
            no-gutters
            style="flex-wrap: nowrap;">

          <v-text-field label="Buscar pessoa"
                        clearable>
            <v-icon slot="append">
              mdi-magnify
            </v-icon>
            <v-icon slot="append-outer" @click="refreshList()">
              mdi-refresh
            </v-icon>
            <v-tooltip slot="prepend" bottom>
              <template #activator="{ on }">
                <v-icon slot="activator"
                        @click="openOtherFilter()"
                        color="primary"
                        v-on="on">mdi-filter</v-icon>
              </template>
              <span>Mais filtros</span>
            </v-tooltip>

          </v-text-field>
          <v-icon>
            mid-plus
          </v-icon>
        </v-row>
      </v-card-text>
    </v-card>

    <v-card class="mx-auto mb-5" v-if="otherFilter">
      <v-card-text>
        <v-row
            no-gutters
            style="flex-wrap: nowrap;">

            <v-select
                :items="items"
                label="Item"
                required
                class="mr-2"
            ></v-select>

            <v-select
                :items="items"
                label="Item"
                required
                class="mr-2"
            ></v-select>

            <v-select
                :items="items"
                label="Item"
                required
            ></v-select>
        </v-row>
      </v-card-text>
    </v-card>

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
  name: 'app-people',
  data() {
    return {
      filtro: false,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      headers: [
        {text: 'Nome', align: 'start', sortable: true, value: 'name'},
        {text: 'CPF/CNPJ', value: 'national_document'},
        {text: 'Telefone', value: 'phone'},
        {text: 'Celular', value: 'cell'},
        {text: 'E-mail', value: 'email'},
      ],
      desserts: [
        {
          name: 'José da Silva',
          national_document: '111.111.111-11',
          phone: '(49) 3444-4441',
          cell: '(49) 99999-9991',
          email:'jose.silva@teste.com',
        },
        {
          name: 'Maria Pereira',
          national_document: '111.111.111-12',
          phone: '(49) 3444-4442',
          cell: '(49) 99999-9992',
          email:'maria.pereira@teste.com',
        },
        {
          name: 'Rodrigo Fernandes',
          national_document: '111.111.111-13',
          phone: '(49) 3444-4443',
          cell: '(49) 99999-9993',
          email:'rodrigo@teste.com',
        },
        {
          name: 'Filipe Rocha',
          national_document: '111.111.111-15',
          phone: '(49) 3444-4445',
          cell: '(49) 99999-9995',
          email:'filipe_rocha@teste.com',
        },
        {
          name: 'David Santos',
          national_document: '111.111.111-16',
          phone: '(49) 3444-4446',
          cell: '(49) 99999-9996',
          email:'davidvrsantos@teste.com',
        },
        {
          name: 'Tiago Peretti',
          national_document: '111.111.111-17',
          phone: '(49) 3444-4447',
          cell: '(49) 99999-9997',
          email:'tiago@teste.com',
        },
        {
          name: 'William',
          national_document: '111.111.111-18',
          phone: '(49) 3444-4448',
          cell: '(49) 99999-9998',
          email:'william@teste.com',
        },
        {
          name: 'Welington',
          national_document: '111.111.111-19',
          phone: '(49) 3444-4449',
          cell: '(49) 99999-9999',
          email:'welington@teste.com',
        },
        {
          name: 'João',
          national_document: '111.111.111-10',
          phone: '(49) 3444-4440',
          cell: '(49) 99999-9990',
          email:'joao@teste.com',
        },
      ],
    }
  },
  methods: {
    openOtherFilter: () => {
      console.log(this.filtro);
      alert('Open');
    },

    refreshList: () => {
      alert('Update');
    }
  }
}
</script>
