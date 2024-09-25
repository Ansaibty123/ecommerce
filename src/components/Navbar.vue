<template>
    <div class="d-flex px-2 py-4 px-md-4 border justify-content-between">
        <div class="fw-bold text-success px-md-3">
            ShopHAVEN
        </div>
        <div class="d-flex gap-3 fw-bold ">
            <router-link to="/about" class="text-decoration-none text-info"> About</router-link>
            <router-link to="/home" class="text-decoration-none text-info"> Home</router-link>
            <router-link to="/contact" class="text-decoration-none text-info"> Contact</router-link>
        </div>

        <div class="fw-bold px-md-3">
            <RouterLink class="text-decoration-none text-secondary">Cart</RouterLink>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped></style>