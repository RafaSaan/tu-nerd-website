<template>
  <section class="services">
    <img
      src="../../../../assets/images/servicios-ilustracion.png"
      alt="ilustracion servicios"
    />
    <div class="services__container">
      <div class="services__item">
        <img src="../../../../assets/images/services-icon-support.png" alt="" />
        <div class="services__info">
          <h3>Consultoría y asesoramiento.</h3>
          <p>
            Identificamos todos los pasos a seguir desde sus necesidades y
            deseos hasta las herramientas necesarias para desarrollar con éxito
            su proyecto.
          </p>
        </div>
      </div>
      <div class="services__item">
        <uil-headphonesAlt class="services-icon" />
        <div class="services__info">
          <h3>Soporte Técnico Certificado.</h3>
          <p>
            Soporte técnico profesional y especializado por tecnología que
            permite garantizar la perfecta operación de tus servicios críticos.
          </p>
        </div>
      </div>
      <div class="services__item">
        <uil-desktop class="services-icon" />
        <div class="services__info">
          <h3>Administración y Monitoreo Remoto.</h3>
          <p>
            Contamos con monitoreo, administración y asesoramiento continuo de
            soluciones.
          </p>
        </div>
      </div>
      <div class="services__item">
        <uil-clipboardNotes class="services-icon" />
        <div class="services__info">
          <h3>Integración de proyectos.</h3>
          <p>
            Analizamos cada elemento del proyecto integrando personas, recursos
            y equipo, planificando y programando con éxito los proyectos.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  UilHeadphonesAlt,
  UilDesktop,
  UilClipboardNotes,
} from "@iconscout/vue-unicons";
export default {
  name: "services",
  components: {
    UilHeadphonesAlt,
    UilDesktop,
    UilClipboardNotes,
  },
};
</script>

<style scoped>
.services {
  width: 80%;
  display: flex;
  position: relative;
  min-height: 40rem;
  overflow: hidden;
}
.services > img {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 11rem;
  margin: auto;
  opacity: 0.2;
  width: 15rem;
}
.services__container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  /* grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr)); */
  align-items: center;
  justify-items: center;
}
.services__item {
  max-width: 35.8125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 11.25rem;
}
.services-icon {
  font-size: 3.9rem;
  color: var(--blue);
}
.services__info {
  max-width: 32.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.services__info > h3 {
  font-size: var(--step-0);
  text-align: center;
}
.services__info > p {
  font-size: var(--step--1);
  text-align: center;
}
@media screen and (min-width: 57.25em) {
  .services__container {
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  }
  .services > img {
    opacity: 1;
    width: 17rem;
  }
}
</style>
