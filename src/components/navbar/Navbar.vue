<template>
  <header>
    <nav class="navbar">
      <a href="#" class="logo"
        ><img src="../../assets/images/logoTuNerd.jpg" alt="logo-tu-nerd"
      /></a>
      <NavMenu :class="{ 'menu-active': isOpen }" />
      <uil-bars class="burger burger-none" @click="menuOpen" />
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
    let isOpen = ref(false);
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
}
.navbar {
  width: 80%;
  height: 3.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.burger {
  font-size: 2rem;
  cursor: pointer;
}
.menu-active {
  display: flex;
}
@media screen and (min-width: 46.875em) {
  .burger-none {
    display: none;
  }
}
</style>
