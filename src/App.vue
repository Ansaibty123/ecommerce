<template>
  <div>
    <RouterView/>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import 'font-awesome/css/font-awesome.css';


export default{
  components : {
    Navbar
  }
}

  
</script>

<style scoped>

</style>