<template>
  <div class="tu-nerd">
    <Loader v-if="isComplete" />
    <Navbar />
    <Home />
    <Solutions />
    <Services />
    <SuccessStories />
    <News />
    <Contact />
    <FooterTN />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Loader from "@/views/Loader";
import Navbar from "@/components/navbar/Navbar";
import Home from "@/views/Home";
import Solutions from "@/views/Solutions";
import Services from "@/views/Services";
import SuccessStories from "@/views/SuccessStories";
import News from "@/views/News";
import Contact from "@/views/Contact";
import FooterTN from "@/views/FooterTN";

export default {
  name: "mainPage",
  components: {
    Navbar,
    Loader,
    Home,
    Solutions,
    Services,
    SuccessStories,
    News,
    Contact,
    FooterTN,
  },
  setup() {
    const isComplete = ref(true);
    const loadComplete = () => (isComplete.value = false);
    setTimeout(() => {
      loadComplete();
    }, 5000);

    return {
      isComplete,
    };
  },
};
</script>

<style></style>
