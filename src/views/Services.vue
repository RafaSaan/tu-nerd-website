<template>
  <div class="services">
    <div class="services__info__container">
      <img
        src="../assets/images/ServiciosImg.png"
        alt="servicio Tu Control"
        class="services__image show-image"
      />
      <ServicesInfo />
    </div>
    <ServicesTuControl />
  </div>
</template>

<script>
import ServicesInfo from "@/components/services/ServicesInfo";
import ServicesTuControl from "@/components/services/ServicesTuControl";
export default {
  name: "services",
  components: {
    ServicesInfo,
    ServicesTuControl,
  },
};
</script>

<style>
.services {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}
.services__info__container {
  align-items: center;
  display: flex;
  justify-content: center;
  width: 80%;
}
.services__image {
  display: none;
  width: 400px;
}

@media screen and (min-width: 50em) {
  .services {
    align-items: center;
  }
  .services__image {
    display: inline;
  }
  .services__info {
    width: 50%;
  }
  .info > h2 {
    text-align: start;
  }
}
</style>
