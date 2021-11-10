<template>
  <div class="successSlider">
    <SuccessItems
      :openModal="openModal"
      :openModal2="openModal2"
      :openModal3="openModal3"
    />
  </div>

  <Modal
    v-if="isOpen"
    :closeModal="closeModal"
    srcImage="/img/logoPIC.5248af9f.png"
    title="PIC"
    info="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil in aspernatur nesciunt facilis corrupti sint maxime aliquid pariatur fuga quas, ad, quae atque magni nulla a, voluptatem quisquam iste voluptas!"
  />
  <Modal
    v-if="isOpen2"
    :closeModal="closeModal2"
    srcImage="/img/logoUNAM.754e5312.png"
    title="UNAM"
    info="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil in aspernatur nesciunt facilis corrupti sint maxime aliquid pariatur fuga quas, ad, quae atque magni nulla a, voluptatem quisquam iste voluptas!"
  />
  <Modal
    v-if="isOpen3"
    :closeModal="closeModal3"
    srcImage="/img/logoNovitech.189cf767.png"
    title="Novitech"
    info="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil in aspernatur nesciunt facilis corrupti sint maxime aliquid pariatur fuga quas, ad, quae atque magni nulla a, voluptatem quisquam iste voluptas!"
  />
</template>

<script>
import SuccessItems from "@/components/successStories/SuccessItems";
import Modal from "@/components/successStories/Modal";
import { useModal } from "@/composables/useModal";

export default {
  name: "successSlider",

  components: {
    Modal,
    SuccessItems,
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
  /* justify-content: space-between; */
  justify-content: center;
  width: 80%;
  /* min-width: 300px;
  scroll-snap-type: x mandatory;
  overflow-x: scroll; */
}

@media screen and (min-width: 750px) {
  .success-show {
    display: flex;
  }
  .successSlider {
    justify-content: space-between;
  }
}
</style>
