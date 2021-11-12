<template>
  <ul class="nav__menu">
    <li class="nav__item">
      <a href="#home" class="nav__link">Nosotros</a>
    </li>
    <li class="nav__item">
      <a href="#solutions" class="nav__link">Soluciones</a>
    </li>
    <li class="nav__item">
      <a href="#services" class="nav__link">Servicios</a>
    </li>
    <li class="nav__item">
      <a href="#news" class="nav__link">Noticias</a>
    </li>
    <li class="nav__item">
      <a href="#contact" class="cta">Contacto</a>
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
  display: none;
  flex-direction: column;
  list-style: none;
  position: absolute;
  transition: all 0.8s ease;
  right: 0;
  top: 3.75rem;

  width: 13rem;
  z-index: 1;
}

.nav__item {
  margin: 1.8rem 0;
}
.nav__link {
  color: #000;
  padding: 1rem;
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

@media screen and (min-width: 46.875em) {
  .nav__menu {
    display: flex;
    flex-direction: row;
    height: 3.75rem;
    margin: 0;
    position: relative;
    top: 0;
    width: auto;
    transform: scale(1);
  }
  .nav__link {
    padding: 1rem 1.5rem;
  }
}
</style>
