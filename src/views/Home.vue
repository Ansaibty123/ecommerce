<template>
    <div>
        <!-- <Login/> -->
         <!-- <SignUp/> -->

         <HomePage/>
    </div>
</template>

<script>
import HomePage from '@/components/HomePage.vue';
import Login from '@/components/Login.vue';
import SignUp from '@/components/SignUp.vue';



export default {
    components: {
        Login,
        SignUp,
        HomePage
    }
}
</script>

<style scoped></style>