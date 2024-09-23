<template>
    <div class="container-fluid vh-100 py-4 text-bg-primary">
      <div class="d-flex justify-content-center flex-column align-items-center gap-3 gap-md-4 ">
  
        <div class="fs-1 py-3 fw-bold">LOGIN</div>
  
        <div class="fs-3 col-6 d-flex justify-content-center">
          <form @submit.prevent="handleLogin" class="d-flex flex-column gap-4 gap-md-5  w-100 custom-max-width">
            <div class="d-flex flex-column fw-bold ">
  
              <label for="emailInput">Email :</label>
              <input type="email" placeholder="Enter your email" id="emailInput" class="fs-5 form-control py-3 " required>
            </div> 
  
            <div class="d-flex flex-column fw-bold ">
              <label for="passwordInput">Password :</label>
              <input type="password" placeholder="Enter your password" id="passwordInput" class="fs-5 form-control py-3" required>
            </div>
             
            <div class="d-flex gap-3 justify-content-between  ">
              <button type="submit" class="border-0 fs-5 py-2 px-4 text-bg-success">Login</button>
               <div class="text-light fs-6 py-2 text-decoration-underline">Forgot Password?</div>
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
  
  
  