<template>
    <div>
        <Navbar/>
        <HomePage/>

    </div>
</template>

<script>
import HomePage from '@/components/HomePage.vue';
import Navbar from '@/components/Navbar.vue';




export default {
    components: {
        Navbar,
        HomePage
    }
}
</script>

<style scoped></style>