<template>
  <Loader v-if="isComplete" />
  <Navbar />
  <Home />
  <Solutions />
  <Services />
  <SuccessStories />
  <News />
  <Contact />
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

export default {
  components: {
    Navbar,
    Loader,
    Home,
    Solutions,
    Services,
    SuccessStories,
    News,
    Contact,
  },
  setup() {
    const isComplete = ref(true);
    const loadComplete = () => (isComplete.value = false);
    setTimeout(() => {
      loadComplete();
    }, 1000);

    return {
      isComplete,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Maven Pro", sans-serif;
  /* font-size: 62.5%; */
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
}
</style>
