<template>
  <div class="success">
    <img src="../../assets/images/logoPIC.png" alt="logo PIC" />
    <h4>PIC</h4>
    <p>TU CONTROL-CONTRATOS</p>
    <div class="success__view-more" @click="openModal">
      Ver Más <uil-angleRightB class="view-arrow" />
    </div>
  </div>
  <div class="success success-show">
    <img src="../../assets/images/logoUNAM.png" alt="logo UNAM" />
    <h4>UNAM</h4>
    <p>TU CONTROL-MOVILIDAD</p>
    <div class="success__view-more" @click="openModal2">
      Ver Más <uil-angleRightB class="view-arrow" />
    </div>
  </div>
  <div class="success success-show">
    <img src="../../assets/images/logoNovitech.png" alt="logo Novitech" />
    <h4>Novitech</h4>
    <p>TU CONTROL-MIGRACION</p>
    <div class="success__view-more" @click="openModal3">
      Ver Más <uil-angleRightB class="view-arrow" />
    </div>
  </div>
</template>

<script>
import { UilAngleRightB } from "@iconscout/vue-unicons";

export default {
  props: {
    openModal: {
      type: Function,
    },
    openModal2: {
      type: Function,
    },
    openModal3: {
      type: Function,
    },
  },

  name: "successItems",

  components: {
    UilAngleRightB,
  },
};
</script>

<style>
.success {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 21.875rem;
  margin: 2rem 0;
  width: 13.5rem;
}
.success > img {
  width: 9.375rem;
}
.success > h4 {
  font-size: var(--step-0);
  margin: 1rem 0;
}
.success > p {
  color: rgb(49, 49, 49);
  font-size: var(--step--2);
  font-weight: 600;
  margin: 0.8rem 0;
}
.success__view-more {
  align-items: center;
  display: flex;
  cursor: pointer;
}
.view-arrow {
  color: var(--blue);
  font-size: 1.5625rem;
}
.success-show {
  display: none;
}
</style>
