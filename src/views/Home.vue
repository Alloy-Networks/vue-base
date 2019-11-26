<template>
  <div id="home" class="burgerMoves">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld v-bind:msgs="messages"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      messages: [
        "test",
        "test 2"
      ]
    }
  }
}
</script>
