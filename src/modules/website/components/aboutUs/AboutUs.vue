<template>
  <section class="aboutUs" id="aboutUs">
    <h2>¿Qué es lo que hacemos?</h2>
    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
    <div class="aboutUs__cards">
      <div class="card">
        <img
          src="../../../../assets/images/aboutUs-01.png"
          alt="ilustacion objetivo"
        />
        <div class="card__info">
          <h3>Lorem</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div class="card">
        <img
          src="../../../../assets/images/aboutUs-02.png"
          alt="ilustacion objetivo"
        />
        <div class="card__info">
          <h3>Lorem</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div class="card">
        <img
          src="../../../../assets/images/aboutUs-03.png"
          alt="ilustacion objetivo"
        />
        <div class="card__info">
          <h3>Lorem</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.aboutUs {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  width: 80%;
}
.aboutUs > h2 {
  font-size: var(--step-2);
  padding: 1rem 0;
}
.aboutUs > h5 {
  color: #4e4e4e;
  font-size: var(--step-0);
  font-weight: normal;
  max-width: 50rem;
  padding: 1rem 0 1.5rem 0;
}
.aboutUs__cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}
.card {
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 18.125rem;
}
.card__info {
  align-items: center;
  display: flex;
  flex-direction: column;
}
.card__info > p {
  text-align: center;
}

@media screen and (min-width: 68.75em) {
  .aboutUs__cards {
    justify-content: space-between;
  }
}
</style>
