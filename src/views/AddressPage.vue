<template>
    <div>
        <Navbar />
        <div class="">
            <AddressList/>
            <AddressInput />
        </div>
       

    </div>
</template>

<script>
import AddressInput from '@/components/addressInput.vue';
import AddressList from '@/components/addressList.vue';
import Navbar from '@/components/Navbar.vue';

export default {
    components: {
        AddressInput,
        Navbar,
        AddressList
    }
}
</script>

<style lang="scss" scoped></style>