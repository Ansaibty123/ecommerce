<template>
  <div class="container-fluid vh-100 py-4 text-bg-primary ">
    <div class="d-flex justify-content-center flex-column align-items-center gap-3 gap-md-4 ">

      <div class="fs-1 py-3 fw-bold">LOGIN</div>

      <div class="fs-3 col-9  d-flex justify-content-center">
        <form @submit.prevent="handleLogin" class="d-flex flex-column gap-4 gap-md-5  w-100 custom-max-width">
          <div class="d-flex flex-column fw-bold ">

            <label for="emailInput">Email :</label>
            <input type="email" v-model="email" placeholder="Enter your email" id="emailInput"
              class="fs-5 form-control py-3 " autocomplete="on" required>
          </div>

          <div class="d-flex flex-column fw-bold ">
            <label for="passwordInput">Password :</label>
            <input type="password" v-model="password" placeholder="Enter your password" id="passwordInput"
              class="fs-5 form-control py-3" autocomplete="on" required>
          </div>

          <div class="d-flex gap-3 justify-content-between  ">
            <button type="submit" class="border-0 fs-5 py-2 px-4 text-bg-success">Login</button>

            <RouterLink to="/signup">

              <div class="text-light fs-6 py-2 text-decoration-underline">Create Account</div>
            </RouterLink>

            <RouterLink to="/reset-password">

              <div class="text-light fs-6 py-2 text-decoration-underline">Forgot Password?</div>
            </RouterLink>
          </div>
        </form>
      </div>
    </div>
    <div class="text-center text-warning mt-5 fw-bold">
      {{ statusResponse }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      email: null,
      password: null,
      statusResponse: ""
    }
  },
  methods: {
    async handleLogin() {
      const email = this.email;
      const password = this.password;
      try {
        const response = await axios.post('https://expressbackend-for-ecomerce.onrender.com/api/auth/login', {
          email,
          password
        });
        console.log(response)
        if (response && response.data && response.data.token) {
          localStorage.setItem('token', response.data.token)
          this.redirectToHome()
        } else {
          alert('login failed : invalid credentials')
        }

      } catch (error) {
        console.error("error during login", error)
        alert("login error : " + (error.response?.data?.message || "unexpected error"))
        this.statusResponse = "Invalid credentials, Please try again!!"

      }
    },
    redirectToHome() {
      this.$router.push("/")
    }
  }
}
</script>

<style scoped>
.custom-max-width {
  max-width: 500px;
}
</style>