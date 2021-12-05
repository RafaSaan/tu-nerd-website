<template>
  <header>
    <nav class="navbar">
      <router-link to="/#home" class="logo"
        ><img src="../../../../assets/images/logoTuNerd.jpg" alt="logo-tu-nerd"
      /></router-link>

      <NavMenu />
    </nav>
  </header>
</template>

<script>
import NavMenu from "../navbar/NavMenu";

export default {
  name: "Navbar",
  components: {
    NavMenu,
  },
  setup() {},
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
</style>
