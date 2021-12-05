<template>
  <section class="tuControl" id="tuControl">
    <div class="tuControl__container">
      <img
        src="../../../../assets/images/tuControl-ilustracion.png"
        alt="tu control ilustacion"
      />
      <div class="tuControl__info">
        <img src="../../../../assets/images/LogoTuControl.png" alt="" />
        <p>
          Implementa soluciones de Internet de las Cosas (IoT) y analítica en
          empresas para incrementar la eficiencia de las máquinas, personas y
          procesos a través de herramientas de tecnologías de información.
        </p>
      </div>
    </div>
    <div class="tuFan">
      <img
        src="../../../../assets/images/tuFan-ilustracion.png"
        alt="tu Fan ilustacion"
      />
      <div class="tuFan__info">
        <img src="../../../../assets/images/LogoTuFan.png" alt="" />
        <p>
          Implementa soluciones de Internet de las Cosas (IoT) y analítica en
          empresas para incrementar la eficiencia de las máquinas, personas y
          procesos a través de herramientas de tecnologías de información.
        </p>
      </div>
    </div>
    <div class="tuTech">
      <div class="tuFan__info">
        <img src="../../../../assets/images/LogoTuTech.png" alt="" />
        <p>
          Implementa soluciones de Internet de las Cosas (IoT) y analítica en
          empresas para incrementar la eficiencia de las máquinas, personas y
          procesos a través de herramientas de tecnologías de información.
        </p>
      </div>
      <img
        src="../../../../assets/images/tuTech-ilustracion.png"
        alt="tu Fan ilustacion"
      />
    </div>
    <h2>¿Listo para potenciar los resultados de su negocio?</h2>
    <a href="https://tc.tunerd.mx/" rel="noopener noreferrer" target="_blank"
      >Conoce más.</a
    >
  </section>
</template>

<script>
export default {};
</script>

<style>
.tuControl {
  margin: 2rem 0;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tuControl__container > img {
  width: 100%;
}

.tuControl__info > p,
.tuFan__info > p {
  font-size: var(--step--1);
  letter-spacing: 0.1em;
  padding: 1rem;
}
.tuFan {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 3rem 0;
  position: relative;
  width: 100%;
}
.tuFan__info {
  justify-self: flex-end;
  max-width: 26.25rem;
  z-index: 1;
}
.tuTech {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 3rem 0;
  position: relative;
}
.tuFan > img,
.tuTech > img {
  bottom: 0;
  opacity: 0.2;
  position: absolute;
  right: 0;
  width: 20rem;
}
.tuFan > img {
  width: 10rem;
}

.tuControl > h2 {
  font-size: var(--step-1);
}
.tuControl > a {
  align-items: center;
  background: var(--blue);
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: var(--step--1);
  height: 3.2rem;
  justify-content: center;
  letter-spacing: 0.055rem;
  margin-top: 3rem;
  text-decoration: none;
  width: 12.5rem;
}

@media screen and (min-width: 31.5625em) {
  .tuFan > img {
    opacity: 1;
    position: relative;
  }
}
@media screen and (min-width: 43.75rem) {
  .tuTech > img {
    opacity: 1;
    position: relative;
  }
}
</style>
