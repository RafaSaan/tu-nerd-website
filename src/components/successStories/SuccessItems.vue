<template>
  <div class="success">
    <slot />
  </div>
</template>

<script>
export default {
  name: "successItems",
};
</script>

<style>
.success {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 21.875rem;
  margin: 2rem 1rem;
  width: 15rem;
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
</style>
