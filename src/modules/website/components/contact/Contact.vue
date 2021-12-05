<template>
  <section class="contact" id="contacto">
    <FormContact />
    <div class="">
      <img
        src="../../../../assets/images/contacto-ilustracion.png"
        alt=""
        class="contact__img"
      />
    </div>
  </section>
</template>

<script>
import FormContact from "../contact/FormContact";
export default {
  components: {
    FormContact,
  },
};
</script>

<style scoped>
.contact {
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.contact__img {
  width: 7rem;
  max-width: 20rem;
}
@media screen and (min-width: 37.5rem) {
  .contact__img {
    width: 25vw;
  }
}
</style>
