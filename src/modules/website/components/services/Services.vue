<template>
  <section class="services">
    <h2>Nosotros hacemos el cambio con nuestros <span> servicios </span></h2>
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
  flex-direction: column;
}
.services > h2,
span {
  font-size: var(--step-1);
  padding: 4rem 0 1rem 0;
  text-align: center;
}
.services > h2 > span {
  color: var(--blue);
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
  /* grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr)); */
  align-items: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  justify-items: center;
  min-height: 40rem;
  width: 100%;
}
.services__item {
  max-width: 35.8125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 11.25rem;
  margin: 1.5rem 0;
}
.services-icon {
  color: var(--blue);
  font-size: 3.9rem;
}
.services__info {
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 32.1rem;
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
