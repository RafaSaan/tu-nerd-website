<template>
  <div class="tunerd">
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
import Navbar from "../components/navbar/Navbar";
import Home from "../components/home/Home";
import SuccessSlider from "../components/successStories/SuccessSlider";
import AboutUs from "../components/aboutUs/AboutUs";
import TuControl from "../components/tuControl/TuControl";
import Services from "../components/services/Services";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

export default {
  name: "websiteLayout",
  components: {
    Navbar,
    // Loader,
    Home,
    SuccessSlider,
    AboutUs,
    TuControl,
    Services,
    Contact,
    Footer,
    // Solutions,
    // Services,
    // SuccessStories,
    // News,
    // Contact,
    // FooterTN,
  },
  //   setup() {
  //     const isComplete = ref(true);
  //     const loadComplete = () => (isComplete.value = false);
  //     setTimeout(() => {
  //       loadComplete();
  //     }, 5000);

  //     return {
  //       isComplete,
  //     };
  //   },
};
</script>

<style>
.tunerd {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
