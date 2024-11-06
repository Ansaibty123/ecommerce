<template>
  <div class="d-flex px-2 px-md-3 py-3 px-lg-5 py-lg-4 border justify-content-between shadow-sm gap-2 gap-md-5">

    <div class="d-flex gap-2 gap-sm-4 fw-bold text-success align-items-center">
      <button class="navbar-toggler d-block  " type="button" @click="toggleModal">
        <i class="fa-solid fa-burger fa-2x"></i>
      </button>
      <div class="fs-6 ">
        ShopHAVEN
      </div>
    </div>
    <div class="d-none d-lg-flex gap-2 gap-md-4 gap-lg-5 fw-bold">
      <router-link to="/admin" class="text-decoration-none text-info"> Admin</router-link>
      <router-link to="/" class="text-decoration-none text-info"> Home</router-link>
      <router-link to="/about" class="text-decoration-none text-info"> About</router-link>
      <router-link to="/contact" class="text-decoration-none text-info"> Contact</router-link>
    </div>
    <div class="d-flex gap-2" style="width:50%">
      <div class="flex-grow-1">
        <Search />
      </div>


      <div class="d-flex" style="width: 50%;">

        <div class="fw-bold px-2 px-md-3 px-lg-4 text-center" style="flex: 1;">
          <RouterLink to="/cart" class="text-decoration-none text-secondary"><i class="fa-solid fa-cart-plus fa-lg"></i>
          </RouterLink>
        </div>
        <div class="fw-bold px-2 px-md-3 px-lg-4  " style="flex: 1;">
          <RouterLink to="/wishlist" class="text-center">
            <i class="fa-solid fa-heart fa-lg"></i>
          </RouterLink>
        </div>
        <div class="d-none d-lg-flex fw-bold px-2 px-md-3 px-lg-4 text-center" style="flex: 1;">
          <div class="dropdown text-center">
            <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"
              aria-expanded="false">
              <i class="fa-solid fa-power-off fa-lg"></i>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a class="dropdown-item" href="#" @click="logout">
                  <i class="fa-solid fa-power-off fa-lg"></i> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
     

      </div>

    </div>

    <!-- Sliding Modal for small screens -->

    <div v-if="isModalVisible" class="modal-overlay" @click="toggleModal">
      <div class="modal-content" @click.stop>
        <button class="close-btn fw-bold fs-1" @click="toggleModal">&times;</button>
        <nav class="modal-nav">
          <router-link to="/admin" class="text-decoration-none text-info fw-bold" @click="toggleModal">
            Admin</router-link>
          <router-link to="/" class="text-decoration-none text-info fw-bold" @click="toggleModal"> Home</router-link>
          <router-link to="/about" class="text-decoration-none text-info fw-bold" @click="toggleModal">
            About</router-link>
          <router-link to="/contact" class="text-decoration-none text-info fw-bold" @click="toggleModal">
            Contact</router-link>
            <router-link to="/address" class="text-decoration-none text-info fw-bold" @click="toggleModal">
              Address</router-link>
          <div class="text-info fw-bold">
            <div @click="cancelOkModal" style="cursor: pointer;">Logout</div>
          </div>
        </nav>
      </div>
    </div>

    <!-- logout modal  -->
     <CancelOk v-if="showModal"  :show-modal="showModal" @confirm-logout="logout" @cancel="showModal = false"/>

  </div>
</template>

<script>
import Search from './DataHandlers/search.vue';
import CancelOk from './modal/cancelOk.vue';

export default {
  components: {
    Search,
    CancelOk
  },
  data() {
    return {
      isModalVisible: false,
      showModal: false,

    };
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push("/login")
      this.showModal = false;
    },
    toggleModal() {
      this.isModalVisible = !this.isModalVisible;
    },
    cancelOkModal(){
      this.showModal = true
      this.toggleModal()
    }
  }
}
</script>

<style scoped>
.router-link-active, .router-link:hover, .router-link:focus {
  position: relative;
  color: #17a2b8; 
}
.router-link-active::after, .router-link:hover::after, .router-link:focus::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px; 
  width: 100%;
  height: 2px; 
  background-color: #17a2b8;
  transition: width 0.3s ease-in-out;
}
.router-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 2px;
  background-color: #17a2b8;
  transition: width 0.3s ease-in-out;
}
.router-link:hover::after, .router-link:focus::after {
  width: 100%;
}


.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
}

.modal-content {
  background: white;
  width: 250px;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  box-shadow: -2px 0px 10px rgba(0, 0, 0, 0.1);
  transform: translateX(100%);
  animation: slideIn 0.3s forwards;
}

.close-btn {
  align-self: flex-end;
  /* font-size: 24px; */
  border: none;
  background: none;
  cursor: pointer;
}

.modal-nav {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
}

/* Modal Closing (for sliding out) */
.modal-leave-active {
  animation: slideOut 0.3s forwards;
}

@keyframes slideOut {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
}
</style>
