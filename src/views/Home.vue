<template>
  <section id="home" class="home">
    <div class="banner__container">
      <Banner />
    </div>
    <About />
  </section>
</template>

<script>
import Banner from "@/components/home/Banner";
import About from "@/components/home/About";

export default {
  name: "Home",
  components: {
    Banner,
    About,
  },
};
</script>
<style>
.home {
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.75rem;
}
.banner__container {
  width: 100%;
  height: 100vh;
  background: url(../assets/images/bgBanner.png);
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-height: 35.625em) {
  .banner__container {
    height: 125vh;
  }
}

@media screen and (min-height: 43.75em) {
  .banner__container {
    height: 88vh;
  }
}
@media screen and (min-width: 85.625rem) {
}
</style>
