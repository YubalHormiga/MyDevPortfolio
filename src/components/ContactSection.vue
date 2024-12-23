<template>
  <section class="flexRow">
    <div class="contactInfo">
      <h3>Estás buscando un desarrollador junior para tu equipo?</h3>
      <p>
        Soy un desarrollador junior buscando mi primer empleo en el mundo del desarrollo web. Si
        tienes un proyecto en mente o crees que puedo ser útil, ¡hablemos!
      </p>
      <a href="mailto:yubalhh@gmail.com" class="emailLink"> yubalhh@gmail.com </a>
    </div>
  </section>
</template>

<style scoped>
.flexRow {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 24px 0;
}

.contactInfo h3 {
  font-weight: 100;
  margin-bottom: 1.5rem;
}

.emailLink {
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
  margin-top: 1rem;
}

.emailLink:hover {
  text-underline-offset: 6px;
  text-decoration-thickness: 3px;
}

.marginBottomSm {
  margin-bottom: 8px;
}

.marginBottomLg {
  margin-bottom: 16px;
}
</style>
