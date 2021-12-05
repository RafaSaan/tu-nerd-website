<template>
  <div class="services__tu-control">
    <img
      src="../../assets/images/LogoTuControl.svg"
      alt="logo-tuControl"
      class="logo-tu-control"
    />
    <p class="tu-control__info">
      La información es el aspecto crítico de las toma de decisiones
      inteligentes.
    </p>
    <p class="tu-control__info">
      Las herramientas de Tu Nerd permiten recolectar la mayor información
      posible para tener los mejores escenarios.
    </p>
    <div class="tu-control__logos">
      <img
        src="../../assets/images/LogoTuControl.svg"
        alt="logo-tuControl"
        class="logo-tu-control-group"
      />
      <img src="../../assets/images/LogoTuFan.svg" alt="logo-tuFan" />
      <img src="../../assets/images/LogoTuTech.svg" alt="logo-tuTech" />
    </div>

    <a
      class="tu-control__cta"
      href="https://tc.tunerd.mx/"
      rel="noopener noreferrer"
      target="_blank"
      >Ver Más</a
    >
  </div>
</template>

<script>
export default {};
</script>

<style>
.services__tu-control {
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(../../assets/images/BannerTuControl.png);
}

.tu-control__info {
  font-size: var(--step--1);
  color: #fff;
  max-width: 1071px;
  margin: 1rem 0;
  width: 80%;
  line-height: 1.375rem;
}
.tu-control__logos > img {
  width: 12.5rem;
}
.tu-control__logos {
  width: 80%;
  display: flex;

  flex-wrap: wrap;
}
.tu-control__logos > .logo-tu-control-group {
  width: 17rem;
}
.logo-tu-control {
  width: 18.5rem;
}
.tu-control__cta {
  width: 10rem;
  height: 3.125rem;
  border: none;
  border-radius: 0.625rem;
  background: var(--blue);
  color: #fff;
  margin: 3rem 0;
  display: grid;
  place-items: center;
  text-decoration: none;
}
@media screen and (min-width: 31em) {
  .logo-tu-control {
    width: 26rem;
  }
  .tu-control__logos {
    justify-content: center;
  }
  .tu-control__logos > img {
    margin: 1rem 3rem;
  }
  .tu-control__info {
    text-align: center;
  }
}
</style>
