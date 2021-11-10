<template>
  <section class="news">
    <h2 class="news__title">Noticias</h2>
    <div class="news__container">
      <div class="news__item">
        <div class="news__image">
          <img src="../assets/images/noticia1.png" alt="" />
        </div>
        <div class="news__info">
          <h5>
            Cuándo es la Tech Week donde habrá 400 búsquedas activas para
            puestos tecnológicos.
          </h5>
          <div class="success__view-more">
            Ver Más <uil-angleRightB class="view-arrow" />
          </div>
        </div>
      </div>
      <div class="news__item">
        <div class="news__image">
          <img src="../assets/images/noticia2.png" alt="noticia" />
        </div>
        <div class="news__info">
          <h5>Una nueva plataforma de IoT optimiza y mejora el telecontro.</h5>
          <div class="success__view-more">
            Ver Más <uil-angleRightB class="view-arrow" />
          </div>
        </div>
      </div>
      <div class="news__item">
        <div class="news__image">
          <img src="../assets/images/noticia3.png" alt="" />
        </div>
        <div class="news__info">
          <h5>
            La innovación en IoT en los sistemas de refrigeración para el
            triunfo de los micromarkets.
          </h5>
          <div class="success__view-more">
            Ver Más <uil-angleRightB class="view-arrow" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { UilAngleRightB } from "@iconscout/vue-unicons";
export default {
  name: "news",
  components: {
    UilAngleRightB,
  },
};
</script>

<style>
.news {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.news__image > img {
  width: 280px;
}
.news__title {
  font-size: var(--step-1);
  text-align: center;
  margin: 2rem 0;
}
.news__container {
  width: 80%;
  display: grid;
  column-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  place-items: center;
}
.news__item {
  width: 280px;
  height: 290px;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 0.625rem;
  margin: 1rem 0;
}
.news__info {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.news__info > h5 {
  text-align: center;
  max-width: 250px;
  padding-bottom: 0.8rem;
  font-size: var(--step--1);
  color: rgb(31, 31, 31);
  height: 90%;
}
</style>
