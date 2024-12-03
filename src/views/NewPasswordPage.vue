<template>
    <div class="container-fluid vh-100 py-4 text-bg-primary d-flex justify-content-center align-items-sm-center ">
        <div class="d-flex justify-content-center col-9 py-5">

            <form @submit.prevent="resetPassword" class=" w-100 custom-max-width">
                <div class="d-flex flex-column gap-5">

                    <div class="d-flex flex-column gap-2 fw-bold">
                        <label for="new-password" class="fw-bold fs-1">New Password</label>
                        <input :type="showNewPassword ? 'text' : 'password'" v-model="newPassword"
                            placeholder="Enter new password" name="new-password" class="fs-5 form-control py-3 "
                            autocomplete="on" required>

                        <button type="button" class="border-0 fs-5 py-2 px-4 text-bg-info" @click="toggleNewPassword">
                            {{ showNewPassword ? 'Hide' : 'Show' }}
                        </button>



                    </div>
                    <div class="d-flex flex-column gap-2 fw-bold">
                        <label for="confirm-password" class="fw-bold fs-1"> Confirm Password</label>
                        <input :type="showConfirmPassword ? 'text' : 'password'" v-model="confirmPassword"
                            placeholder="Confirm new password" name="confirm-password" class="fs-5 form-control py-3 "
                            autocomplete="on" required>
                        <button type="button" class="border-0 fs-5 py-2 px-4 text-bg-info"
                            @click="toggleConfirmPassword">
                            {{ showConfirmPassword ? 'Hide' : 'Show' }}
                        </button>

                    </div>

                    <div>
                        <button type="submit" class="border-0 fs-5 py-2 px-4 text-bg-success" :disabled="loading">

                            Reset Password</button>
                    </div>


                </div>

            </form>

        </div>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            newPassword: null,
            confirmPassword: null,
            showNewPassword: false,
            showConfirmPassword: false,
            loading: false,
            statusResponse: "",
            token: null,

        }
    },
    mounted() {
        this.token = this.$route.params.id
        // console.log(this.token)
    },
    methods: {
        toggleNewPassword() {
            this.showNewPassword = !this.showNewPassword;
        },
        toggleConfirmPassword() {
            this.showConfirmPassword = !this.showConfirmPassword;

        },
        async resetPassword() {
            const { newPassword, confirmPassword, token } = this;
            // Ensure new password and confirm password match
            if (newPassword !== confirmPassword) {
                this.statusResponse = "Passwords do not match!";
                return;
            }

            this.loading = true;

            try {
                const response = await axios.post("https://expressbackend-for-ecomerce.onrender.com/api/reset/reset-password", {
                    newPassword,
                    token
                })
                this.statusResponse = "Password reset successful!";
                this.$router.push("/login");
            } catch (error) {
                if (error.response) {
                    this.statusResponse = error.response.data.message || "Error resetting password.";
                } else {
                    // Network error
                    this.statusResponse = "An error occurred. Please try again.";
                }
            } finally {
                this.loading = false;
            }
        }
    }

}
</script>

<style scoped>
.custom-max-width {
    max-width: 500px;
}
</style>