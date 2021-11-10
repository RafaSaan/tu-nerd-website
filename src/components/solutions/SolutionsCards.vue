<template>
  <div class="solution__cards">
    <div class="card__container">
      <div class="card">
        <div class="card__icon">
          <uil-lightbulbAlt class="card__icon__svg" />
        </div>

        <div class="card__info">
          <h4 class="card__title">Inspiracion y estrategia</h4>
          <p>
            Nosotros creemos en soluciones que empoderen empresas a innovar en
            procesos con tecnología.
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card__icon">
          <uil-process class="card__icon__svg" />
        </div>

        <div class="card__info">
          <h4 class="card__title">Proceso Creativo</h4>
          <p>
            Nuestros procesos nos permiten ayudar a nuestros clientes,
            facilitándoles mayor control y flexibilidad en sus áreas de impacto.
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card__icon">
          <uil-crosshair class="card__icon__svg" />
        </div>

        <div class="card__info">
          <h4 class="card__title">Soluciones y Metas</h4>
          <p>Soluciones integrales desde su diseño hasta la entrega.</p>
        </div>
      </div>
    </div>
    <div class="card__container">
      <div class="card">
        <div class="card__icon">
          <uil-processor class="card__icon__svg" />
        </div>

        <div class="card__info">
          <h4 class="card__title">Logística y Procesos</h4>
          <p>
            La logística de nuestros procesos nos permiten incidir en cualquier
            parte de la cadena de valor de nuestros clientes.
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card__icon">
          <uil-desktopCloudAlt class="card__icon__svg" />
        </div>

        <div class="card__info">
          <h4 class="card__title">Transformación Digital</h4>
          <p>
            Sabemos que tus retos son distintos, nuestras soluciones se adaptan
            al modelo de operación de tu empresa.
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card__icon">
          <uil-headphonesAlt class="card__icon__svg" />
        </div>

        <div class="card__info">
          <h4 class="card__title">Asesoramiento</h4>
          <p>
            Asesoramiento en todo momento, que nos permitan monitorear, analizar
            y evaluar, para brindarte la mejor solución.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  UilLightbulbAlt,
  UilProcess,
  UilCrosshair,
  UilProcessor,
  UilDesktopCloudAlt,
  UilHeadphonesAlt,
} from "@iconscout/vue-unicons";
export default {
  name: "solutionsCard",
  components: {
    UilLightbulbAlt,
    UilProcess,
    UilCrosshair,
    UilProcessor,
    UilDesktopCloudAlt,
    UilHeadphonesAlt,
  },
};
</script>

<style>
.solution__cards {
  width: 80%;
  margin-top: 2.5rem;
}
.card__container {
  width: 100%;
  display: grid;
  column-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  justify-items: center;
}
.card {
  width: 18rem;
  height: 19rem;
  background: #fff;
  border-radius: 0.625rem;
  margin-bottom: 1.5rem;
}
.card__icon__svg {
  font-size: 4.5rem;
  color: var(--blue);
}
</style>
