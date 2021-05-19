<template>
  <div id="app" fluid>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routerName: null,
      loadingInit: false,
    };
  }
}
</script>

<style>
.v-notices .v-toast.is-top-right, .v-notices .v-toast.is-bottom-right {
  background-color: #323232;
  font-family: 'Roboto',serif;
  border-radius: 4px;
  color: #fff;
}

.v-notices .v-toast-default {
  background-color: #323232;
}

.v-btn--fab.v-size--default.v-btn--absolute.v-btn--top {
  top: 11px!important;
}

.title-page {
  margin: 15px auto;
}

.v-card__subtitle, .v-card__text, .v-card__title {
  padding: 0 10px!important;
}
</style>
