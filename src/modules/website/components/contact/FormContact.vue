<template>
  <div class="contact__form">
    <h2>Contáctanos.</h2>
    <form class="form">
      <input type="text" placeholder="Nombre Completo" />
      <input type="text" placeholder="Correo Electronico" />
      <textarea
        name="Asunto"
        id="asunto"
        cols="30"
        rows="10"
        placeholder="Mensaje"
      ></textarea>
      <button class="form__btn">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "formContact",
};
</script>

<style scoped>
.contact__form {
  display: flex;
  flex-direction: column;
  /* max-width: 24.25rem; */
}
.contact__form > h2 {
  font-size: var(--step-1);
  padding: 1.8rem 0 0.5rem 0;
}
form {
  display: flex;
  flex-direction: column;
}
.form > input,
textarea {
  height: 3.75rem;
  margin: 0.5rem 0 !important;
  width: 18rem;
}
input:focus,
textarea:focus {
  outline: 1px solid var(--blue);
}
textarea {
  resize: none;
  height: 8.5rem;
}
.form__btn {
  background: var(--blue);
  border-radius: 5px;
  border: none;
  color: #fff;
  cursor: pointer;
  height: 50px;
  margin: 1rem auto;
  width: 200px;
}
@media screen and (min-width: 26em) {
  .form > input,
  textarea {
    width: 24rem;
  }
}
</style>
