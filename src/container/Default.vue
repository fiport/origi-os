<template>
  <div>
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  name: 'container-default',
  components: {
    'app-header': Header,
    'app-footer': Footer
  }
}
</script>
