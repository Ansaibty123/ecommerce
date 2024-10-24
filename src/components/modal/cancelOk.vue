<template>
    <div>
        <div v-if="showModal" class="modal-overlay">
            <div class="modal-content d-flex gap-4">
                <div class="text-center fw-bold fs-4">
                    <div>Do you want to Logout??</div>
                </div>
                <div class="d-flex justify-content-around">
                    <button class="btn btn-success fw-bold custom-btn-width" @click="$emit('cancel')">Cancel</button>
                    <button class="btn btn-primary fw-bold custom-btn-width" @click="$emit('confirm-logout')">Ok</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        showModal: {
            type: Boolean,
            required: true,
        },
    },
};
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 90%;
    
}

.custom-btn-width{
  width: 90px;
}
</style>