<template>
    <div class="bg-black vh-100 d-flex justify-content-center align-items-center">
      <div v-if="isAdmin" class="text-white fw-bold fs-1">
        Hi!!! Welcome Admin
      </div>
      <div v-else class="text-white fw-bold fs-1">
        Hi!!! You don't have admin access
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'; 
  
  export default {
    data() {
      return {
        isAdmin: false, 
      };
    },
    methods: {
      async fetchUserRole() {
        try {
          const response = await axios.get("https://expressbackend-for-ecomerce.onrender.com/api/role/admin", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`, 
            },
          });

          console.log(response.data)
  
          this.isAdmin = response.data.role.includes("admin");
        } catch (error) {
          console.error("Error fetching role:", error.response?.data || error.message);
        }
      },
    },
    mounted() {
      this.fetchUserRole(); 
    },
  };
  </script>
  
  <style lang="scss" scoped>
 
  </style>
  