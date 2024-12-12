<template>
    <div class="text-bg-dark vh-100 py-5">
        <div class="row justify-content-center align-items-center h-100">
            <form action="" @submit.prevent="handlerAddAddress"
                class="text-bg-info w-75 d-flex flex-column gap-4 align-items-center ">
                <input type="text" name="name" v-model="fullName" id="" placeholder="Full Name (Required)*"
                    class="w-100 custom-width form-control py-3 fs-5" required>
                <input type="number" name="phonenumber" v-model="phoneNumber" id=""
                    placeholder="Phone number (Required)*" required class="w-100 custom-width form-control py-3 fs-5">
                <input type="number" name="pincode" v-model="pinCode" id="" placeholder="Pincode (Required)*" required
                    class="w-100 custom-width form-control py-3 fs-5">
                <input type="text" name="stateName" v-model="stateName" id="" placeholder="State (Required)*" required
                    class="w-100 custom-width form-control py-3 fs-5">
                <input type="text" name="city" v-model="city" id="" placeholder="City (Required)*" required
                    class="w-100 custom-width form-control py-3 fs-5">
                <input type="text" name="streetName" v-model="streetName" id="" placeholder="Street name (Required)*"
                    required class="w-100 custom-width form-control py-3 fs-5">
                <button type="submit"
                    class="w-50 custom-width form-control py-3 fw-bold fs-5 btn btn-success">Add</button>
            </form>
        </div>


    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    data() {
        return {
            fullName: "",
            phoneNumber: "",
            stateName: "",
            pinCode : "",
            city: "",
            streetName: ""
        }
    },
    methods: {
        ...mapMutations(["addAddress"]),
        handlerAddAddress(){
            const userAddress = {
                name : this.fullName,
                phoneNumber : this.phoneNumber,
                pincode : this.pinCode,
                state: this.stateName,
                city : this.city,
                streetName : this.streetName
            }
            this.addAddress(userAddress)
            this.fullName = "";
            this.phoneNumber = "";
            this.stateName ="";
            this.stateName = "";
            this.city = "";
            this.streetName = ""

        }
    }
}
</script>

<style scoped>
.custom-width {
    max-width: 900px;
}
</style>