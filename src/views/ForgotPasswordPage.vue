<template>
  <div class="container-fluid vh-100 py-4 text-bg-primary d-flex justify-content-center align-items-sm-center ">
    <div class="d-flex justify-content-center col-9 py-5">

      <form @submit.prevent="sendLinkToEmail" class=" w-100 custom-max-width">
        <div class="d-flex flex-column gap-5">

          <!-- Sending link to email -->
          <div class="d-flex flex-column gap-4 fw-bold">
            <label for="email" class="fw-bold fs-1">Email</label>
            <input type="email" v-model="email" placeholder="Enter email" name="email" class="fs-5 form-control py-3 "
              required>
            <div class="d-flex justify-content-between align-items-center">
              <button type="submit" class="border-0 fs-5 py-2 px-4 text-bg-success" :disabled="loading">{{ loading ?
                "Sending... link to gmail " : "Reset Password" }}</button>
              <div>
                {{ statusResponse }}
              </div>

            </div>

          </div>
        </div>

      </form>





      <!-- for otp "isOtpSent ? verifyOtp() : requestOtp()" -->
      <!-- <form @submit.prevent="requestOtp" class=" w-100 custom-max-width"> -->
      <!-- <div class="d-flex flex-column gap-5"> -->

      <!-- Sending Otp to email -->
      <!-- v-if="!isOtpSent" -->
      <!-- <div class="d-flex flex-column gap-2 fw-bold"> -->
      <!-- <label for="email" class="fw-bold fs-1">Email</label> -->
      <!-- <input type="email" v-model="email" placeholder="Enter email" name="email" class="fs-5 form-control py-3 " -->
      <!-- required> -->
      <!-- <div> -->
      <!-- <button type="submit" class="border-0 fs-5 py-2 px-4 text-bg-success" :disabled="loading">{{ loading ? -->
      <!-- "Sending... link to gmail " : "Reset Password" }}</button> -->
      <!-- </div> -->
      <!-- </div> -->

      <!-- Otp verification -->
      <!-- <div v-if="isOtpSent" class="d-flex flex-column gap-2 fw-bold">
            <label for="Otp" class="fw-bold fs-1">OTP</label>
            <input type="number" v-model="otp" placeholder="Enter Otp " name="Otp" class="fs-5 form-control py-3 "
              required>
            <div>
              <button type="submit" class="border-0 fs-5 py-2 px-4 text-bg-success" :disabled="loading"> {{ loading ?
                'Verifying...' :
                'Confirm OTP' }}
              </button>
            </div>
          </div> -->
      <!-- </div> -->
      <!-- </form> -->


    </div>

  </div>
</template>

<script>

import axios from "axios"
export default {
  data() {
    return {
      email: null,
      statusResponse: null,
      loading: false
      // isOtpSent : false ,
      // otp: null,
    }
  },
  methods: {
    async sendLinkToEmail() {
      this.loading = true
      const email = this.email
      try {
        // console.log("requesting")
        const response = await axios.post("https://expressbackend-for-ecomerce.onrender.com/api/reset/request-reset-password", { email });
        if (response.status === 200) {
          this.statusResponse = "Link sent succesfully to gmail"

        } else {
          this.statusResponse = "Link not sent. Please try again"

        }
      } catch (error) {
        this.statusResponse = "Failed to send link. Please check your email and try again.";

        console.error("Failed to send link:", error.response ? error.response.data : error.message);

      } finally {
        this.loading = false
      }
    }

    // request otp
    // async requestOtp() {
    //   console.log("Requesting OTP");
    //   this.loading = true;
    //   const email = this.email;
    //   try {
    //     const response = await axios.post("http://localhost:3000/api/otp/resetPassword", { email })   
    //     if (response.status === 200) {
    //       // this.isOtpSent = true
    //       this.statusResponse = "Otp sent succesfully"

    //     } else {
    //       this.statusResponse = "OTP not sent. Please try again"
    //     }
    //   } catch (error) {
    //     this.statusResponse = "Failed to send OTP. Please check your email and try again.";

    //     console.error("Failed to send OTP:", error.response ? error.response.data : error.message);

    //   } finally {
    //     this.loading = false
    //   }
    // },
    // Verify OTP Method
    // async verifyOtp() {
    //   this.loading = true;
    //   console.log("Verifying")
    //   const { email, otp } = this;
    //   try {
    //     const response = await axios.post("http://localhost:3000/api/otp/verify-otp", { email, otp: otp?.toString() });
    //     if (response.status === 200) {
    //       this.statusResponse = "OTP verified successfully.";
    //     } else {
    //       this.statusResponse = "Invalid OTP. Please try again.";
    //     }
    //   } catch (error) {
    //     this.statusResponse = "Failed to verify OTP. Please try again.";
    //     console.error("Failed to verify OTP:", error.response ? error.response.data : error.message);
    //   } finally {
    //     this.loading = false;
    //   }
    // }
  }
}
</script>

<style scoped>
.custom-max-width {
  max-width: 500px;
}
</style>