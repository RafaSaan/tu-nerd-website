<template>
  <div class="not-found">
    <img src="../assets/images/404.png" alt="error 404" />
    <h3>Page not found</h3>
    <p>La página que estás buscando no existe o ha ocurrido un error.</p>
    <router-link exact to="/">
      Regresar a <span class="not-found--link">Tu Nerd</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "pageNotFound",
};
</script>

<style>
.not-found {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000;
}
.not-found > img,
h3,
p {
  margin-bottom: 1.5rem;
}

.not-found > h3 {
  margin-bottom: 1.5rem;
  font-size: var(--step-2);
}
.not-found > p {
  margin: 0 1rem 1.5rem 1.5rem;
  /* margin-bottom: 1.5rem; */
  font-size: var(--step--1);
  /* width: 80%; */
}
.not-found > a {
  color: #000;
}
.not-found--link {
  color: var(--blue);
  text-decoration: none;
}
</style>
