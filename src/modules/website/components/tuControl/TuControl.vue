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
          Soluciones integrales de monitoreo y analítica a través de plataformas
          centralizadas de comunicación. Medimos, conectamos y obtenemos los
          datos de tu operación de forma ordenada para una mejor toma de
          decisiones. Uno de nuestros diferenciadores es que medimos a las
          personas además de las máquinas logrando mejorar su desempeño y
          productividad.
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
          Plataforma para redes Wifi que te permite proveer publicidad,
          monetización y autenticación para redes inalámbricas públicas y
          proveer servicios a clientes a través de wifi y dar acceso a Internet
          de manera gratuita a los invitados del venue y proveyendo analíticos
          para crear una gran experiencia.
        </p>
      </div>
    </div>
    <div class="tuTech">
      <div class="tuFan__info">
        <img src="../../../../assets/images/LogoTuTech.png" alt="" />
        <p>
          Soluciones integrales de comunicaciones e infraestructura para
          asegurarte de tener la información dónde y cuándo la necesitas.
          Integramos sensores para poder obtener información de tu operación en
          tiempo real.
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
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  max-width: 52rem;
}

.tuControl__container > img {
  width: 100%;
}

.tuControl__info > p,
.tuFan__info > p {
  font-size: var(--step--1);
  letter-spacing: 0.07rem;
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
  border-radius: 5px;
  border: none;
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
    width: 15rem;
  }
}
@media screen and (min-width: 43.75rem) {
  .tuTech > img {
    opacity: 1;
    position: relative;
  }
}
</style>
