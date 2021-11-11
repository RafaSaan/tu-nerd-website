<template>
  <article class="modal__container">
    <slot />
  </article>
</template>

<script>
export default {
  name: "modal",
};
</script>

<style>
.modal__container {
  width: 100%;
  height: 100vh;
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}
.modal {
  max-width: 50rem;
  height: 70vh;
  background: #fff;
  border-radius: 0.3125rem;
  position: relative;

  margin: 0.4rem;
  overflow-y: scroll;
}
.modal__close {
  width: 3.125rem;
  height: 3.125rem;
  position: absolute;
  background: #fdeeea;
  display: grid;
  place-items: center;
  top: 0.625rem;
  right: 0.625rem;
}
.icon-close {
  font-size: 2.5rem;
  color: #fe0000;
  cursor: pointer;
}
.modal__content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 419px;
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(13.5rem, 1fr));
  align-items: center;
  justify-items: center; */
}

.modal__info {
  width: 100%;
  min-width: 14rem;
  margin: 1rem;
}
.modal__info > h3 {
  font-size: var(--step-0);
}
.modal__info > p {
  font-size: var(--step--1);
}
</style>
