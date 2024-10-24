<template>
  <div class="container-fluid vh-100 py-4 text-bg-primary">
    <div class="d-flex flex-column justify-content-center align-items-center">

      <div class="fs-1 py-3 fw-bold">Create an account</div>

      <div class="fs-3 col-6 custom-max-width d-flex justify-content-center">
        <form @submit.prevent="handleSignup" class="d-flex flex-column gap-4 w-100">
          <div class="d-flex flex-column fw-bold">

            <label for="nameInput">Name </label>
            <input type="text" v-model="name" placeholder="Enter your name" id="nameInput"
              class="fs-5 form-control py-2 " autocomplete="on" required>
          </div>

          <div class="d-flex flex-column fw-bold">

            <label for="emailInput">Email :</label>
            <input type="email" v-model="email" placeholder="Enter your email" id="emailInput"
              class="fs-5 form-control py-2" autocomplete="on" required>
          </div>

          <div class="d-flex flex-column fw-bold">

            <label for="passwordInput">Password :</label>
            <input type="password" v-model="password" placeholder="Enter your password" id="passwordInput"
              class="fs-5 form-control py-2" autocomplete="on" required>
          </div>

          <div class="d-flex gap-3 flex-column">
            <button type="submit" class="border-0 fs-6 py-3 px-4 text-bg-success w-100 rounded">Create Account</button>
            <button type="button" @click="handleGoogleSignup"
              class="border-0 fs-6 py-3 px-4 text-bg-info w-100 rounded">Sign up with Google</button>

          </div>

          <div class="d-flex gap-3 fs-6 justify-content-between px-1">
            <div>Already have account?  ---></div>
            <RouterLink to="/login">

              <div class="text-light text-decoration-underline">Log in</div>
            </RouterLink>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: null,
      email: null,
      password: null,
    }
  },
  methods: {
    async handleSignup() {
    const name = this.name;
    const email = this.email;
    const password = this.password;
    try {
      const response = await axios.post('http://localhost:3000/api/auth/signup', {
        name,
        email,
        password
      });
      // console.log(response);

      // Ensure response contains data
      if (response && response.data) {
        this.redirectToLogin();
      } else {
        alert("Signup Failed");
      }
    } catch (error) {
      // Handle potential errors
      if (error.response && error.response.data) {
        console.error('error during signup', error.response.data);
        alert("Signup error: " + error.response.data.message);
      } else {
        console.error('Unexpected signup error', error);
        alert("Unexpected signup error occurred.");
      }
    }
  },
    redirectToLogin() {
      // Redirection logic after successful signup
      this.$router.push('/login');
    },
  }
}
</script>
<style scoped>
.custom-max-width {
  max-width: 500px;
}
</style>