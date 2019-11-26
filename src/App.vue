<template>
  <div id="app">
    <Nav v-bind:navItems="routes"/>
    <Home/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Home from '@/views/Home.vue'

//css framework import
import 'bulma/css/bulma.css'
import routes from '@/routes.js'


export default {
  name: 'app',
  components: {
    Nav,
    Home
  },
  data () {
    return {
      routes: routes
    }
  }
}
</script>

<style>
</style>
