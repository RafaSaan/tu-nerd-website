<template>
  <section class="contact" id="contact">
    <div class="contact__container">
      <ContactInfo />
      <ContactForm />
    </div>
  </section>
</template>

<script>
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
export default {
  name: "contact",
  components: {
    ContactInfo,
    ContactForm,
  },
};
</script>

<style>
.contact {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
}
.contact__container {
  width: 80%;
  display: flex;

  flex-wrap: wrap;
}
@media screen and (min-width: 50em) {
  .contact__container {
    flex-wrap: nowrap;
    justify-content: space-between;
  }
  .contact__info {
    width: 45%;
  }
  .form > input,
  textarea {
    width: 21.25rem;
  }
}
</style>
