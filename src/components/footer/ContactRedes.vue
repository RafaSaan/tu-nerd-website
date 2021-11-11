<template>
  <div class="contact__redes">
    <a class="redes__item">
      <uil-facebook class="icon-contact-white" />
      <p class="redes--white">Tu Nerd</p>
    </a>
    <a class="redes__item">
      <uil-linkedin class="icon-contact-white" />
      <p class="redes--white">Tu Nerd</p>
    </a>
    <a class="redes__item">
      <uil-instagramAlt class="icon-contact-white" />
      <p class="redes--white">Tu Nerd</p>
    </a>
    <a class="redes__item">
      <uil-youtube class="icon-contact-white" />
      <p class="redes--white">Tu Nerd</p>
    </a>
  </div>
</template>

<script>
import {
  UilFacebook,
  UilLinkedin,
  UilYoutube,
  UilInstagramAlt,
} from "@iconscout/vue-unicons";

export default {
  name: "contactRedes",
  components: {
    UilFacebook,
    UilLinkedin,
    UilYoutube,
    UilInstagramAlt,
  },
};
</script>

<style>
.icon-contact-white {
  font-size: 1.875rem;
  color: #fff;
}
.redes--white {
  color: #fff;
}
</style>
