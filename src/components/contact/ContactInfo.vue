<template>
  <div class="contact__info">
    <h2>Contáctanos</h2>
    <p>
      Estamos listos para poder resolver los retos más innovadores de
      tecnología, deja que nos encarguemos de diseñar, implementar, y
      administrar todas tus necesidades de tecnología de información. Nuestro
      compromiso con una experiencia tecnológica satisfactoria es nuestra
      prioridad.
    </p>
    <div class="contact__redes">
      <a class="redes__item">
        <uil-facebook class="icon-contact" />
        <p>Tu Nerd</p>
      </a>
      <a class="redes__item">
        <uil-linkedin class="icon-contact" />
        <p>Tu Nerd</p>
      </a>
      <a class="redes__item">
        <uil-phone class="icon-contact" />
        <p>55 7577 1644</p>
      </a>
      <a class="redes__item">
        <uil-instagram class="icon-contact" />
        <p>Tu Nerd</p>
      </a>
    </div>
  </div>
</template>

<script>
import {
  UilFacebook,
  UilLinkedin,
  UilPhone,
  UilInstagram,
} from "@iconscout/vue-unicons";
export default {
  name: "contactInfo",
  components: {
    UilFacebook,
    UilLinkedin,
    UilPhone,
    UilInstagram,
  },
};
</script>

<style>
.contact__info {
  width: 100%;
  max-width: 34.375rem;
}
.contact__info > h2 {
  font-size: var(--step-1);
  padding: 1.8rem 0;
}
.contact__info > p {
  font-size: var(--step--1);
  padding-bottom: 1.8rem;
}
.redes__item {
  display: flex;
  align-items: center;
  margin: 0.8rem 0;
  cursor: pointer;
}
.icon-contact {
  font-size: 1.875rem;
}

.redes__item > p {
  font-size: var(--step--1);
  padding-left: 1rem;
}
</style>
