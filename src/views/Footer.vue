<template>
  <footer class="footer">
    <div class="footer__nav">
      <img
        src="../assets/images/footerImage.png"
        alt="logo TuNerd blanco"
        class="footer__img"
      />
      <ContactRedes />
      <div class="footer__services">
        <h5>Servicios</h5>
        <ul class="services__list">
          <li>Consultoría y Asesoramiento</li>
          <li>Integración de Proyectos</li>
          <li>Administración y Monitoreo</li>
          <li>Soporte Técnico Certificado</li>
        </ul>
      </div>
      <div class="footer__services">
        <h5>Plataformas</h5>
        <ul class="services__list">
          <li>Tu Control</li>
          <li>Tu Fan</li>
          <li>Tu Tech</li>
        </ul>
      </div>
    </div>
    <div class="footer__terms">
      <span>© 2021, Tu Nerd S. de R.L. De C.V. |</span>
      <a> Términos y condiciones.</a>
    </div>
  </footer>
</template>

<script>
import ContactRedes from "@/components/footer/ContactRedes";
export default {
  name: "footer",
  components: {
    ContactRedes,
  },
};
</script>

<style>
.footer {
  width: 100%;
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer__nav {
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
}
.footer__img {
  /* align-self: center; */
  margin-top: 2rem;
}
.footer__services {
  color: #fff;
}
.footer__services > h5 {
  font-size: var(--step--1);
  font-weight: normal;
  margin: 1rem 0;
}
.services__list > li {
  font-size: var(--step--2);
  margin: 0.8rem 0;
  cursor: pointer;
}
.footer__terms {
  margin: 2rem 0;
  width: 80%;
}
.footer__terms > span {
  color: #fff;
}
.footer__terms > a {
  color: var(--blue);
}
@media screen and (min-width: 38.5em) {
  .footer__nav {
    justify-items: center;
  }
}
</style>
