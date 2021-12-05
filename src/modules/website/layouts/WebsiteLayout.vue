<template>
  <div class="tunerd">
    <Loader v-if="isComplete" />
    <Navbar />
    <Home />
    <SuccessSlider />
    <AboutUs />
    <TuControl />
    <Services />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Loader from "../components/Loader";
import Navbar from "../components/navbar/Navbar";
import Home from "../components/home/Home";
import SuccessSlider from "../components/successStories/SuccessSlider";
import AboutUs from "../components/aboutUs/AboutUs";
import TuControl from "../components/tuControl/TuControl";
import Services from "../components/services/Services";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import { ref } from "vue";

export default {
  name: "websiteLayout",
  components: {
    Loader,
    Navbar,
    Home,
    SuccessSlider,
    AboutUs,
    TuControl,
    Services,
    Contact,
    Footer,
  },
  setup() {
    const isComplete = ref(true);
    setTimeout(() => {
      isComplete.value = false;
    }, 5000);

    return {
      isComplete,
    };
  },
};
</script>

<style>
.tunerd {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
