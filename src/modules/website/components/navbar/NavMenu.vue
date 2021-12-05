<template>
  <ul class="nav__menu">
    <li class="nav__item">
      <router-link to="/#home" class="nav__link">Nosotros</router-link>
    </li>
    <li class="nav__item">
      <router-link to="/#tuControl" class="nav__link">Tu Control</router-link>
    </li>
    <li class="nav__item">
      <router-link to="/#noticias" class="nav__link">Noticias</router-link>
    </li>
    <li class="nav__item">
      <router-link to="/#contacto" class="cta">Contacto</router-link>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style>
.nav__menu {
  align-items: center;
  background: #fff;
  display: flex;
  list-style: none;
  height: 3.75rem;
  overflow-x: scroll;
}
.nav__link {
  color: #000;
  padding: 0 1.5rem;
  text-decoration: none;
}
.nav__item > .cta {
  background: #0079ff;
  border-radius: 0.62rem;
  color: #fff;
  display: grid;
  height: 2.18rem;
  place-items: center;
  width: 7.75rem;
  text-decoration: none;
}

@media screen and (min-width: 40.5em) {
  .nav__menu {
    overflow-x: hidden;
  }
}
</style>
