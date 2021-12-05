<template>
  <!-- <Loader v-if="isComplete" />
  <Navbar />
  <Home />
  <Solutions />
  <Services />
  <SuccessStories />
  <News />
  <Contact />
  <FooterTN /> -->
  <router-view />
</template>
<script>
// import { ref } from "@vue/reactivity";
// import Loader from "@/views/Loader";
// import Navbar from "@/components/navbar/Navbar";
// import Home from "@/views/Home";
// import Solutions from "@/views/Solutions";
// import Services from "@/views/Services";
// import SuccessStories from "@/views/SuccessStories";
// import News from "@/views/News";
// import Contact from "@/views/Contact";
// import FooterTN from "@/views/FooterTN";

export default {
  // components: {
  //   Navbar,
  //   Loader,
  //   Home,
  //   Solutions,
  //   Services,
  //   SuccessStories,
  //   News,
  //   Contact,
  //   FooterTN,
  // },
  // setup() {
  //   const isComplete = ref(true);
  //   const loadComplete = () => (isComplete.value = false);
  //   setTimeout(() => {
  //     loadComplete();
  //   }, 5000);
  //   return {
  //     isComplete,
  //   };
  // },
};
</script>

<style>
/* @import url("https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap"); */
@import url("https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;700&display=swap");
* {
  box-sizing: border-box;
  font-family: "Maven Pro", sans-serif;
  /* font-size: 62.5%; */
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}
#app {
  width: 100%;
  max-width: 85.25rem;
}
body {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
