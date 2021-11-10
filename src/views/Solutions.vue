<template>
  <section class="solutions">
    <SolutionsInfo />
    <SolutionsCards />
  </section>
</template>

<script>
import SolutionsInfo from "@/components/solutions/SolutionsInfo";
import SolutionsCards from "@/components/solutions/SolutionsCards";
export default {
  name: "solutions",
  components: {
    SolutionsInfo,
    SolutionsCards,
  },
};
</script>

<style>
.solutions {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;
  background: var(--bg-primary);
}
</style>
