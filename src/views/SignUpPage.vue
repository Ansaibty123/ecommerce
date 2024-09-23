<template>
    <div class="container-fluid vh-100 py-4 text-bg-primary">
      <div class="d-flex flex-column justify-content-center align-items-center">
  
        <div class="fs-1 py-3 fw-bold">Create an account</div>
  
        <div class="fs-3 col-6 custom-max-width d-flex justify-content-center">
          <form @submit.prevent="handleLogin" class="d-flex flex-column gap-4 w-100">
            <div class="d-flex flex-column fw-bold">
  
              <label for="nameInput">Name </label>
              <input type="text" placeholder="Enter your name" id="nameInput" class="fs-5 form-control py-2 " required>
            </div>
  
            <div class="d-flex flex-column fw-bold">
  
              <label for="emailInput">Email :</label>
              <input type="email" placeholder="Enter your email" id="emailInput" class="fs-5 form-control py-2" required>
            </div>
  
            <div class="d-flex flex-column fw-bold">
  
              <label for="passwordInput">Password :</label>
              <input type="password" placeholder="Enter your password" id="passwordInput" class="fs-5 form-control py-2" required>
            </div>
             
            <div class="d-flex gap-3 flex-column">
              <button type="submit" class="border-0 fs-6 py-3 px-4 text-bg-success w-100 rounded" >Create Account</button>
              <button type="submit" class="border-0 fs-6 py-3 px-4 text-bg-info w-100 rounded" >Sign up with Google</button>
  
            </div>

            <div class="d-flex gap-3 fs-6 justify-content-between px-1">
                <div>Already have account?</div>
                <div class=" text-decoration-underline">Log in</div>
            </div>
          </form>
        </div>
      </div>
  
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
   <style scoped>
   .custom-max-width {
     max-width: 500px;
   }
  </style>