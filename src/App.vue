<template>
  <div id="app">
    <Nevbar/>
    <router-view/>
  </div>
</template>

<script>
import Nevbar from './components/Nevbar'
export default {
  name: 'App',
  components:{
    Nevbar
  }
}
</script>

<style>

</style>
