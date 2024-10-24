<template>
    <div class="d-flex justify-content-around fw-bold ">
     <Filtering/>
     <Sorting/>
    </div>
</template>

<script>
import Filtering from './DataHandlers/filtering.vue';
import Sorting from './DataHandlers/sorting.vue';


    export default {
     components : {
        Filtering,
        Sorting
     }  
    }
</script>

<style lang="scss" scoped>

</style>