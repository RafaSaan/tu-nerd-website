<template>
  <Swiper
    class="successSlider mySwiper"
    :slidesPerView="1"
    :navigation="true"
    :loop="true"
    :loopFillGroupWithBlank="true"
    :breakpoints="{
      '640': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '1248': {
        slidesPerView: 3,
        spaceBetween: 150,
      },
    }"
  >
    <SwiperSlide>
      <SuccessItems>
        <img src="../../assets/images/logoPIC.png" alt="logo PIC" />
        <h4>PIC</h4>
        <p>TU CONTROL-CONTRATOS</p>
        <div class="success__view-more" @click="openModal">
          Ver Más <uil-angleRightB class="view-arrow" />
        </div>
      </SuccessItems>
    </SwiperSlide>
    <SwiperSlide>
      <SuccessItems>
        <img src="../../assets/images/logoUNAM.png" alt="logo UNAM" />
        <h4>UNAM</h4>
        <p>TU CONTROL-MOVILIDAD</p>
        <div class="success__view-more" @click="openModal2">
          Ver Más <uil-angleRightB class="view-arrow" />
        </div>
      </SuccessItems>
    </SwiperSlide>

    <SwiperSlide>
      <SuccessItems>
        <img src="../../assets/images/logoNovitech.png" alt="logo Novitech" />
        <h4>Novitech</h4>
        <p>TU CONTROL-MIGRACION</p>
        <div class="success__view-more" @click="openModal3">
          Ver Más <uil-angleRightB class="view-arrow" />
        </div>
      </SuccessItems>
    </SwiperSlide>
  </Swiper>

  <Modal v-if="isOpen">
    <div class="modal">
      <div class="modal__close" @click="closeModal">
        <uil-multiply class="icon-close" />
      </div>
      <div class="modal__content">
        <div class="modal__image">
          <img src="../../assets/images/logoPIC.png" alt="logo PIC" />
        </div>
        <div class="modal__info">
          <h3>PIC</h3>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil in
            aspernatur nesciunt facilis corrupti sint maxime aliquid pariatur
            fuga quas, ad, quae atque magni nulla a, voluptatem quisquam iste
            voluptas!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil in
            aspernatur nesciunt facilis corrupti sint maxime aliquid pariatur
            fuga quas, ad, quae atque magni nulla a, voluptatem quisquam iste
            voluptas!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil in
            aspernatur nesciunt facilis corrupti sint maxime aliquid pariatur
            fuga quas, ad, quae atque magni nulla a, voluptatem quisquam iste
            voluptas!
          </p>
        </div>
      </div>
    </div>
  </Modal>

  <Modal v-if="isOpen2">
    <div class="modal">
      <div class="modal__close" @click="closeModal2">
        <uil-multiply class="icon-close" />
      </div>
      <div class="modal__content">
        <div class="modal__image">
          <img src="../../assets/images/logoUNAM.png" alt="logo UNAM" />
        </div>
        <div class="modal__info">
          <h3>PIC</h3>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil in
            aspernatur nesciunt facilis corrupti sint maxime aliquid pariatur
            fuga quas, ad, quae atque magni nulla a, voluptatem quisquam iste
            voluptas!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil in
            aspernatur nesciunt facilis corrupti sint maxime aliquid pariatur
            fuga quas, ad, quae atque magni nulla a, voluptatem quisquam iste
            voluptas!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil in
            aspernatur nesciunt facilis corrupti sint maxime aliquid pariatur
            fuga quas, ad, quae atque magni nulla a, voluptatem quisquam iste
            voluptas!
          </p>
        </div>
      </div>
    </div>
  </Modal>

  <Modal v-if="isOpen3">
    <div class="modal">
      <div class="modal__close" @click="closeModal3">
        <uil-multiply class="icon-close" />
      </div>
      <div class="modal__content">
        <div class="modal__image">
          <img src="../../assets/images/logoNovitech.png" alt="logo Novitech" />
        </div>
        <div class="modal__info">
          <h3>PIC</h3>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil in
            aspernatur nesciunt facilis corrupti sint maxime aliquid pariatur
            fuga quas, ad, quae atque magni nulla a, voluptatem quisquam iste
            voluptas!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil in
            aspernatur nesciunt facilis corrupti sint maxime aliquid pariatur
            fuga quas, ad, quae atque magni nulla a, voluptatem quisquam iste
            voluptas!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil in
            aspernatur nesciunt facilis corrupti sint maxime aliquid pariatur
            fuga quas, ad, quae atque magni nulla a, voluptatem quisquam iste
            voluptas!
          </p>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script>
import SuccessItems from "@/components/successStories/SuccessItems";
import Modal from "@/components/successStories/Modal";
import { useModal } from "@/composables/useModal";
import { UilAngleRightB, UilMultiply } from "@iconscout/vue-unicons";

import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);

export default {
  name: "successSlider",

  components: {
    Modal,
    SuccessItems,
    UilAngleRightB,
    UilMultiply,
    Swiper,
    SwiperSlide,
  },

  setup() {
    const [isOpen, openModal, closeModal] = useModal(false);
    const [isOpen2, openModal2, closeModal2] = useModal(false);
    const [isOpen3, openModal3, closeModal3] = useModal(false);

    return {
      isOpen,
      openModal,
      closeModal,
      isOpen2,
      openModal2,
      closeModal2,
      isOpen3,
      openModal3,
      closeModal3,
    };
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
</style>
