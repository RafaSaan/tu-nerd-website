<template>
  <footer>
    <div class="footer__redes">
      <a
        href="https://www.facebook.com/tunerd.mx"
        rel="noopener noreferrer"
        target="_blank"
        class="redes__item"
      >
        <uil-facebook class="icon-redes" />
        <p>Tu Nerd</p>
      </a>
      <a rel="noopener noreferrer" target="_blank" class="redes__item">
        <uil-linkedin class="icon-redes" />
        <p>Tu Nerd</p>
      </a>
      <a rel="noopener noreferrer" target="_blank" class="redes__item">
        <uil-instagramAlt class="icon-redes" />
        <p>Tu Nerd</p>
      </a>
      <a rel="noopener noreferrer" target="_blank" class="redes__item">
        <uil-youtube class="icon-redes" />
        <p>Tu Nerd</p>
      </a>
    </div>
  </footer>
</template>

<script>
import {
  UilFacebook,
  UilLinkedin,
  UilYoutube,
  UilInstagramAlt,
} from "@iconscout/vue-unicons";

export default {
  name: "formTunerd",
  components: {
    UilFacebook,
    UilLinkedin,
    UilYoutube,
    UilInstagramAlt,
  },
};
</script>

<style>
footer {
  width: 95%;
  margin: 3rem 0;
}
.footer__redes {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.redes__item {
  display: flex;
  align-items: center;
  font-size: var(--step--1);
  text-decoration: none;
  color: #000;
}
.icon-redes {
  font-size: 2.2rem;
  margin: 1.5rem 1rem;
}
</style>
