<script lang="ts" setup>
import './billboard-3.scss'

import AnimatedColorfulText from '~/components/atoms/animated-colorful-text/index.vue'

</script>

<template>
  <section class="billboard-3">

    <NuxtPicture 
      src="/images/diseno-web.webp" 
      class="image"
      sizes="100vw xs:360px sm:500px"
      width="500"
      height="320" 
      format="webp"
      loading="lazy"
      alt="imagen soluciones creativas de diseño gráfico" 
    />

    <div class="details">
      <h2>Desbloquea tu Identidad
        <AnimatedColorfulText>Visual</AnimatedColorfulText>
      </h2>

      <p>
        Ofrecemos un servicio de diseño gráfico de alta calidad a precios competitivos, lo que nos permite apoyar o integrarnos como parte de su equipo de marketing.
      </p>
    </div>

  </section>
</template>
