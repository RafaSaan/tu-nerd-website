<template>
  <Swiper
    class="successSlider mySwiper"
    :slidesPerView="1"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :loop="true"
    :loopFillGroupWithBlank="true"
  >
    <SwiperSlide>
      <SuccessItems>
        <div class="success__coment">
          <img src="../../../../assets/images/logoPIC.png" alt="logo PIC" />
          <p>
            "Tu Nerd ha proporcionado importantes herramientas para organizar el
            negocio y hacerlo mucho más eficiente, logrando que nuestro enfoque
            sea mucho más dirigido a nuestros clientes. Lograron materializar el
            proyecto en poco tiempo cumpliendo con cada uno de los detalles. Hay
            un excelente equipo de soporte detrás con personal profesional que
            nos atiende de manera cordial y eficiente, logrando resolver
            importantes problemas de negocio con el apoyo y conocimiento extenso
            de tecnologías de información. ¡Gracias!"
          </p>
        </div>
        <div class="success__footer">
          <p class="success__download">Descargar PDF</p>
          <div class="success__title">
            <h4>PIC</h4>
            <p>TU CONTROL-CONTRATOS</p>
          </div>
        </div>
      </SuccessItems>
    </SwiperSlide>
    <SwiperSlide>
      <SuccessItems>
        <div class="success__coment">
          <img src="../../../../assets/images/logoUNAM.png" alt="logo UNAM" />
          <p>
            "Con Tu Nerd siempre obtenemos excelentes resultados, cabe destacar
            su alto sentido de profesionalismo y capacidad para solucionar
            cualquier encomienda que les sea asignada, así como su disposición
            para atender en tiempo y forma."
          </p>
        </div>
        <div class="success__footer">
          <p class="success__download">Descargar PDF</p>
          <div class="success__title">
            <h4>UNAM</h4>
            <p>TU CONTROL-MOVILIDAD</p>
          </div>
        </div>
      </SuccessItems>
    </SwiperSlide>

    <SwiperSlide>
      <SuccessItems>
        <div class="success__coment">
          <img
            src="../../../../assets/images/logoNovitech.png"
            alt="logo Novitech"
          />
          <p>
            "Certificamos que la empresa Tu NERD concluyó exitosamente su
            relación y operación laboral con alto sentido de profesionalidad y
            calidad en su atención."
          </p>
        </div>
        <div class="success__footer">
          <p class="success__download">Descargar PDF</p>
          <div class="success__title">
            <h4>Novitech</h4>
            <p>TU CONTROL-MIGRACION</p>
          </div>
        </div>
      </SuccessItems>
    </SwiperSlide>
  </Swiper>
</template>

<script>
import SuccessItems from "../successStories/SuccessItems";

import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

export default {
  name: "successSlider",

  components: {
    SuccessItems,

    Swiper,
    SwiperSlide,
  },

  setup() {
    return {};
  },
};
</script>

<style>
.successSlider {
  display: flex;

  width: 80%;
}
.swiper-slide {
  display: flex;
  justify-content: center;
}
.swiper-button-next,
.swiper-button-prev {
  opacity: 0.2;
}
</style>
