<template>
  <v-card
      elevation="12"
      raised
  >
    <v-navigation-drawer
      v-model="sidebarMenu"
      app
      floating
      :permanent="sidebarMenu"
      :mini-variant.sync="mini"
      color="#004aff"
      width="230"
  >
    <v-list-item @click="toggleMini = !toggleMini">
      <v-list-item-content class="text-truncate">
<!--        <img src="/img/logo_origi.png" width="10%" alt="">-->
      </v-list-item-content>
<!--      <v-btn icon small>-->
<!--        <v-icon>mdi-chevron-left</v-icon>-->
<!--      </v-btn>-->
    </v-list-item>
    <v-divider></v-divider>
    <v-list-item link to="/">
      <v-list-item-icon>
        <v-icon color="accent">mdi-home-outline</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title class="accent--text">Inicio</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list v-for="group in groups" :key="group.title">
      <v-list-item class="group-subtitle">
        <v-list-item-content>
          <v-list-item-subtitle>
            {{group.title}}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-for="item in group.links" :key="item.title" link :to="item.href">
        <v-list-item-icon>
          <v-icon color="accent">{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="accent--text">{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    sidebarMenu: true,
    toggleMini: false,
    groups: [
      {
        title: 'Cadastros',
        links: [
          { title:"Pessoas", href:"/pessoas", icon:"mdi-account-multiple" },
          { title:"Produtos", href:"/produtos", icon:"mdi-barcode" },
          { title:"Serviços", href:"/servicos", icon:"mdi-screwdriver" },
          { title:"Pagamentos", href:"/pagamentos", icon:"mdi-cash-multiple" },
        ]
      },
      {
        title: 'Movimentações',
        links: [
          { title:"Ordem de serviço", href:"/ordem-de-servico", icon:"mdi-file-document-multiple-outline" },
        ]
      },
      {
        title: 'Configurações',
        links: [
          { title:"Usuários", href:"/detections", icon:"mdi-shield-account" },
          { title:"Impressão", href:"/comp", icon:"mdi-palette-swatch" },
        ]
      },
    ],
  }),
  computed: {
    mini() {
      return (this.$vuetify.breakpoint.smAndDown) || this.toggleMini
    },
    buttonText() {
      return !this.$vuetify.theme.dark ? 'Go Dark' : 'Go Light'
    }
  },
}
</script>

<style scoped>
.v-card {
  border-radius: 0px!important;
}

.v-application .accent--text {
  color: #fff !important;
  caret-color: #fff !important;
}

.v-application--is-ltr .v-list-item__action:first-child, .v-application--is-ltr .v-list-item__icon:first-child {
  margin-right: 15px;
}

.v-list-item .v-list-item__title, .v-list-item .v-list-item__subtitle {
  font-size: 12px!important;
}

.v-list {
   padding: 0!important;
}

.v-list-item__icon {
  align-self: flex-start;
  margin: 10px 0;
}

.group-subtitle {
  min-height: 10px!important;
}

.group-subtitle .v-list-item__content {
  padding: 5px 0 0 0;
}
</style>
