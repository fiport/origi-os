<template>
  <v-app>
    <Navigation elevation="7"></Navigation>
    <v-main sm4>
      <router-view />
    </v-main>
    <v-snackbar
        v-for="(snackbar, index) in snackbars.filter(s => s.showing)"
        :key="snackbar.text + Math.random()"
        v-model="snackbar.showing"
        :timeout="snackbar.timeout"
        :color="snackbar.color"
        :style="`bottom: ${(index * 60) + 8}px`"
    >
      {{snackbar.text}}

      <v-btn text @click="snackbar.showing = false">
        Close
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import Navigation from '../components/core/Navigation'

export default {
  name: 'container-default',
  components: {
    Navigation
  },
  computed: {
    ...mapState({
      snackbars: state => state.snackbar.snackbars
    })
  }
}
</script>

<style>
.v-main__wrap {
  margin: 10px;
}

.v-main__wrap {
  margin: 10px;
}
</style>
