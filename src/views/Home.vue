<template>
    <div>
        <!-- <LoginPage/> -->
        <SignUpPage/>
        <!-- <HomePage/> -->

    </div>
</template>

<script>
import HomePage from '@/components/HomePage.vue';
import LoginPage from './LoginPage.vue';
import SignUpPage from './SignUpPage.vue';




export default {
    components: {
        LoginPage,
        SignUpPage,
        HomePage
    }
}
</script>

<style scoped></style>