<template>
  <div class="banner">
    <div class="banner__info">
      <h2>Connect Things</h2>
      <h3>Obtener, analizar y administrar tus datos</h3>
      <p>
        Somos una empresa dedicada a habilitar soluciones que faciliten la
        operación diaria de las personas.
      </p>
      <p class="info-mobile">
        Nuestras soluciones incluyen internet de las cosas, plataformas de
        administración y tecnología.
      </p>
    </div>
    <div class="banner__img">
      <img src="../../assets/images/tuNerdBanner.png" alt="Tu Nerd Cicular" />
    </div>
  </div>
</template>

<style scoped>
.banner {
  width: 80%;
  max-width: 68.75rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
}
.banner__info {
  min-height: 17.5rem;
}
.banner__info > h2,
h3,
p {
  color: #fff;
  padding-bottom: 1.875rem;
}
.banner__info > h2 {
  font-size: var(--step-3);
}
.banner__info > h3 {
  font-size: var(--step-1);
  max-width: 33.8125rem;
}
.banner__info > p {
  font-size: var(--step-0);
  max-width: 38.875rem;
  line-height: 1.85rem;
}

.banner__img > img {
  width: 15vw;
  min-width: 7.775rem;
}

/* @media screen and (max-width: 770px) {
  .banner {
    height: auto;
  }
  .banner__info > h2 {
    font-size: 3.7rem;
    padding-top: 4rem;
  }
  .banner__info > h3 {
    font-size: 2.7rem;
  }
  .banner__info > p {
    font-size: 1.9rem;
  }
} */
</style>
