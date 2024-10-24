import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import ProductPage from "@/views/ProductPage.vue";
import SignUpPage from "@/views/SignUpPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import AboutPage from "@/views/AboutPage.vue";
import ContactPage from "@/views/ContactPage.vue";
import CartPage from "@/views/CartPage.vue";
import ForgotPasswordPage from "@/views/ForgotPasswordPage.vue";
import NewPasswordPage from "@/views/NewPasswordPage.vue";
import AdminPage from "@/views/AdminPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { requiresAuth: true },
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUpPage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactPage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminPage,
    },
    {
      path: "/cart",
      name: "cart",
      component: CartPage,
      meta: { requiresAuth: true },
    },

    {
      path: "/product/:id",
      name: "ProductPage",
      component: ProductPage,
      meta: { requiresAuth: true },
    },

    {
      path: "/reset-password",
      name: "reset-password",
      component: ForgotPasswordPage,
    },
    {
      path: "/new-password/:token",
      name: "new-password",
      component: NewPasswordPage,
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("token");
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // route requires auth and user not authenticated
    if (!isAuthenticated) {
      next({ name: "login" }); // Redirect to login page
    } else {
      next(); // Proceed to the route
    }
  } else {
    next(); // Proceed to the route
  }
});

export default router;
