<template>
  <section class="successStories">
    <SuccessSlider />
  </section>
</template>

<script>
import SuccessSlider from "@/components/successStories/SuccessSlider";
export default {
  name: "successStories",
  components: {
    SuccessSlider,
  },
};
</script>

<style>
.successStories {
  background: url(../assets/images/bgCasosExito.png);
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
