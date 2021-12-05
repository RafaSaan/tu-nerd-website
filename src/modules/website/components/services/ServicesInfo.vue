<template>
  <div class="services__info">
    <div class="info">
      <h2>Servicios</h2>
      <p>
        Nos enfocamos en desarrollar soluciones de alto impacto utilizando
        herramientas digitales y vanguardistas para mejorar la operación y la
        experiencia de las personas. Buscamos ser flexibles, reducir costos y
        optimizar procesos de negocio.
      </p>
    </div>
    <div class="services__info__items">
      <div class="info__item">
        <uil-assistiveListeningSystems class="services-icon" />
        <p>Consultoría y asesoramiento</p>
      </div>
      <div class="info__item">
        <uil-clipboardNotes class="services-icon" />
        <p>Integración de proyectos</p>
      </div>
      <div class="info__item">
        <uil-serverNetworkAlt class="services-icon" />
        <p>Administración y Monitoreo Remoto</p>
      </div>
      <div class="info__item">
        <uil-headphonesAlt class="services-icon" />
        <p>Soporte Técnico Certificado</p>
      </div>
    </div>
  </div>
</template>

<script>
import {
  UilAssistiveListeningSystems,
  UilClipboardNotes,
  UilServerNetworkAlt,
  UilHeadphonesAlt,
} from "@iconscout/vue-unicons";
export default {
  name: "servicesInfo",
  components: {
    UilAssistiveListeningSystems,
    UilClipboardNotes,
    UilServerNetworkAlt,
    UilHeadphonesAlt,
  },
};
</script>

<style>
.services__info {
  margin-left: 2rem;
  width: 100%;
}
.info > h2 {
  font-size: var(--step-1);
  margin-top: 2.5rem;
  text-align: center;
}
.info > p {
  font-size: var(--step--1);
  line-height: 1.4rem;
  margin-top: 1.8rem;
  text-align: justify;
}
.services__info__items {
  margin-top: 2rem;
}
.info__item {
  align-items: center;
  display: flex;
  margin-bottom: 1rem;
  min-width: 275px;
}
.services-icon {
  color: var(--blue);
  font-size: 3.125rem;
}
.info__item > p {
  font-size: 1.31rem;
  padding-left: 0.5rem;
}
</style>
