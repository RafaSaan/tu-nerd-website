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
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem 1rem;
  min-height: 18rem;
}
.success__coment {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.success__coment > p {
  font-size: 16.5px;
  font-style: italic;
  max-width: 46.5rem;
}
.success__coment > img {
  height: 150px;
}
.success__footer {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  width: 100%;
}
.success__download {
  color: var(--blue);
  cursor: pointer;
  text-decoration: none;
}
.success__title {
  margin-left: 3.5rem;
}

@media screen and (min-width: 75em) {
  .success__coment > p {
    padding-left: 3.3rem;
  }
  .success__download {
    margin-left: 12.8rem;
  }
}
</style>
