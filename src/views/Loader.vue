<template>
  <div class="loader">
    <img
      src="../assets/images/tuNerdAnimation.gif"
      alt="Animacion de logo Tu Nerd"
    />
  </div>
</template>

<script>
export default {};
</script>

<style>
.loader {
  background: #f8f8f8;
  display: grid;
  height: 100vh;
  place-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 99;
}
.loader > img {
  width: 100%;
}
</style>
