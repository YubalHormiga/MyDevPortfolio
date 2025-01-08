<script setup></script>

<template>
  <div class="aboutContainer">
    <div>
      <div class="profilePhotoContainer">
        <div class="profilePhoto">
          <img src="../assets//images/mi-foto.png" alt="Foto de Yubal Hormiga" />
        </div>
        <div class="aboutMe">
          <h3>Sobre <span> mí</span></h3>
        </div>
      </div>
    </div>
    <div class="bio">
      <p>
        Soy Yubal Hormiga, un desarrollador web Full Stack apasionado por la tecnología y con un
        enfoque constante en la mejora y el aprendizaje. Tras completar un bootcamp intensivo de
        desarrollo web en NEOLAND, he adquirido habilidades en tecnologías clave como HTML5, CSS3,
        JavaScript, Vue.js, Node.js y MongoDB. Mi experiencia previa en análisis de datos, gestión
        de proyectos y atención al cliente me ha permitido desarrollar una fuerte capacidad para
        resolver problemas, pensar de manera crítica y trabajar de forma colaborativa.
      </p>
      <p>
        En el camino hacia la transición al desarrollo web, he demostrado ser una persona
        responsable, adaptable y proactiva, con un fuerte compromiso en ofrecer soluciones
        tecnológicas eficientes y escalables. Mi objetivo es contribuir con mis habilidades técnicas
        y mi experiencia en gestión para impulsar proyectos innovadores, al mismo tiempo que
        continúo aprendiendo y creciendo dentro del mundo de la programación.
      </p>
      <p>
        Actualmente, estoy buscando un puesto como desarrollador web junior donde pueda aplicar mis
        conocimientos adquiridos, trabajar en equipo y seguir creciendo en el sector tecnológico.
      </p>
    </div>
  </div>
</template>

<style scoped>
.aboutContainer {
  display: flex;
  flex-direction: column;
  gap: 5rem;
}
.profilePhotoContainer {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
@media (min-width: 768px) {
  .profilePhotoContainer {
    flex-direction: row;
    align-items: center;
  }
}
.profilePhoto {
  display: flex;
  justify-content: center;
}
.aboutMe {
  display: flex;
  text-transform: uppercase;
}
.aboutMe h3,
.aboutMe span {
  display: block;
  font-size: 8rem;
  font-weight: bold;
}
p {
  font-size: 1.1em;
  line-height: 1.6;
  margin-bottom: 3rem;
}
</style>
