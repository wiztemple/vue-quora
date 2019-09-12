<template>
  <div>
    <Nav />
    <div class="container">
      <div class="columns">
        <div class="col-3">
          <Sidemenu />
        </div>
        <div class="col-9">
          <div class="mt-30">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Nav from '../../../components/Nav'
import Sidemenu from './SideMenu'
import Card from './Card.vue'

export default {
     components: {
      Sidemenu,
      Card,
      Nav
    },
     data() {
       return {}
     },
     computed: {},
     methods: {}
  }
</script>