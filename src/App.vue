<template>
  <div id="app" class="w-full h-full">
    <router-view />
    <Alert />
  </div>
</template>

<script>
import Alert from '@/components/Alert';
export default {
  components: {
    Alert,
  }
}
</script>

<style lang="scss">
@import './assets/tailwind.css';

</style>
