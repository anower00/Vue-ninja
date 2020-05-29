<template>
  <div>
    <h1>{{ title }}</h1>
    <ninjas></ninjas>  
  </div>
</template>

<script>
import Ninja from './Ninja.vue'

export default {
  components:{
    'ninjas':Ninja
  },
  data () {
    return {
     title: 'Ninja App'
    }
  }
}
</script>

<style>

</style>
