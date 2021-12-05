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
  width: 16rem;
  height: 3.75rem;
  /* min-width: 16rem; */
  margin: 0.5rem 0 !important;
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
  width: 200px;
  height: 50px;
  background: var(--blue);
  border-radius: 10px;
  border: none;
  margin: 1rem auto;
  color: #fff;
}
</style>
