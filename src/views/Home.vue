<template>
    <div>
        <div v-if="isAuthenticated">
        <Navbar/>
        <HomePage/>
         
    </div>
    <div v-else>
    <p> Please log in.</p>
  </div>
    </div>
  

</template>

<script>
import HomePage from '@/components/HomePage.vue';
import Navbar from '@/components/Navbar.vue';




export default {
    components: {
        Navbar,
        HomePage,
    },
    data() {
    return {
      isAuthenticated: !!localStorage.getItem('token'), // Check if the user is authenticated
    };
  },
  mounted() {
    this.isAuthenticated = !!localStorage.getItem('token');
  },
}
</script>

<style scoped></style>