<template>
  <header>
    <nav class="navbar">
      <a href="#home" class="logo"
        ><img src="../../assets/images/logoTuNerd.jpg" alt="logo-tu-nerd"
      /></a>
      <transition name="mobile-nav">
        <NavMenu :class="{ 'menu-active': isOpen }" v-if="isOpen" />
      </transition>

      <uil-bars
        class="burger burger-none"
        @click="menuOpen"
        :class="{ 'burger-active': isOpen }"
      />
    </nav>
  </header>
</template>

<script>
import NavMenu from "@/components/navbar/NavMenu";
import { UilBars } from "@iconscout/vue-unicons";
import { ref } from "@vue/reactivity";
export default {
  name: "Navbar",
  components: {
    NavMenu,
    UilBars,
  },
  setup() {
    let isOpen = ref(true);

    const windowWhidth = window.innerWidth;
    if (windowWhidth < 750) {
      isOpen.value = false;
    }

    const menuOpen = () => {
      isOpen.value = !isOpen.value;
    };

    return {
      isOpen,
      menuOpen,
    };
  },
};
</script>

<style>
header {
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  max-width: 85.25rem;
  position: fixed;
  top: 0;
  z-index: 11;
}
.navbar {
  width: 80%;
  height: 3.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.4s ease-in-out;
}

.burger {
  font-size: 2rem;
  cursor: pointer;
}
.burger-active {
  transform: rotate(180deg);
  transition: all 0.5s ease;
}
.menu-active {
  display: flex;
}
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 0.8s ease;
}
.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(220px);
}
.mobile-nav-enter-to {
  transform: translateX(0px);
}

@media screen and (min-width: 46.875em) {
  .burger-none {
    display: none;
  }
}
</style>
