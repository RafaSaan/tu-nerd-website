<template>
  <div class="aboutUs">
    <div class="aboutUs__card">
      <div class="card__icon">
        <img
          src="../../assets/images/DesarrolloCard.png"
          alt="icono-desarrollo"
        />
      </div>
      <div class="card__info">
        <h4 class="card__title">Razón de existir</h4>
        <p>
          Diseñamos, construimos y desarrollamos soluciones personalizadas para
          satisfacer las necesidades de nuestros clientes.
        </p>
      </div>
    </div>
    <div class="aboutUs__card">
      <div class="card__icon">
        <img
          src="../../assets/images/MexicoCard.png"
          alt="icono mapa de mexico"
        />
      </div>
      <div class="card__info">
        <h4 class="card__title">Razón de ser mexicanos</h4>
        <p>
          Entendemos las necesidades de las empresas y es por ello que
          desarrollamos nuestras soluciones con talento mexicano, para resolver
          los problemas.
        </p>
      </div>
    </div>
    <div class="aboutUs__card">
      <div class="card__icon">
        <img
          src="../../assets/images/innovacionCard.png"
          alt="icono-innovacion"
        />
      </div>
      <div class="card__info">
        <h4 class="card__title">Innovación tecnológica</h4>
        <p>
          Resolvemos los retos más complicados, utilizando las soluciones más
          innovadoras.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.aboutUs {
  width: 80%;
  background: #fff;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17.5rem, 1fr));
  place-items: center;
}
.aboutUs__card {
  width: 17.5rem;
  height: 19rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card__icon {
  display: grid;
  place-items: center;
  height: 40%;
}

.card__info {
  text-align: center;
}
.card__title {
  margin: 1.56rem 0;
  color: #333333;
  font-size: var(--step-0);
}
.card__info > p {
  font-size: var(--step--2);
  color: #727272;
}
</style>
