<template>
    <div v-if="addressList && addressList.length"  class="d-flex flex-column w-100 align-items-center justify-content-center p-5 fw-bold">
      <div class="row w-100 gap-4 justify-content-between">
        <div
          v-for="(address, index) in addressList"
          :key="index"
          class="border col-md-5 d-flex flex-column p-4 fs-6 text-bg-secondary custom-width "
        >
          <div>{{ address.name }}</div>
          <div>{{ address.phoneNumber }}</div>
          <div>{{ address.pincode }}</div>
          <div>{{ address.state }}</div>
          <div>{{ address.city }}</div>
          <div>{{ address.streetName }}</div>
          <button @click="deleteAddress(index)" class="w-50 py-2 fw-bold fs-5 btn btn-success">DELETE</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters ,mapActions} from "vuex";
  
  export default {
    computed: {
      ...mapGetters(["addressList"]),
    },
    methods: {
    ...mapActions(["removeAddress"]),

    deleteAddress(index) {
      this.removeAddress(index);
    },
  },
    watch : {
        
    }
  };
  </script>
  
  <style scoped>
  .custom-width {
    max-width: 900px;
  }
  </style>
  