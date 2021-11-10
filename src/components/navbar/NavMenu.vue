<template>
  <ul class="nav__menu">
    <li class="nav__item">
      <a href="#">Nosotros</a>
    </li>
    <li class="nav__item">
      <a href="#">Soluciones</a>
    </li>
    <li class="nav__item">
      <a href="#">Servicios</a>
    </li>
    <li class="nav__item">
      <a href="#">Noticias</a>
    </li>
    <li class="nav__item">
      <div class="cta">Contacto</div>
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
  right: 0;
  top: 3.75rem;
  width: 13rem;
  z-index: 1;
}
.nav__item {
  margin: 1.8rem 0;
}
.nav__item > a {
  color: #000;
  padding: 1rem;
  text-decoration: none;
}
.nav__item > .cta {
  background: #0079ff;
  border-radius: 0.62rem;
  color: #fff;
  cursor: pointer;
  display: grid;
  font-size: 0.89rem;
  height: 2.18rem;
  place-items: center;
  width: 7.75rem;
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
  }
}
/* @media screen and (max-width: 750px)  */
</style>
