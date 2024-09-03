<script setup lang="ts">
import './billboard-5.scss'

</script>

<template>
  <section class="billboard-5">

    <NuxtPicture 
      class="image"
      src="/images/diseno-grafico.webp"
      width="500"
      height="320" 
      sizes="100vw xs:360px sm:500px"
      format="webp" 
      loading="lazy"
      alt="Imagen de identidad corporativa de diseño gráfico" 
    />

    <div class="details">
      <h2 class="title">
        Identidad <span>corporativa</span>
      </h2>
      <p class="subtitle">
        La piedra angular de cualquier emprendimiento sólido es un paquete de identidad que no solo se distinga de la
        competencia y funcione bien en todos los medios, sino que también comunique sus ofertas a los posibles
        consumidores a nivel personal. Podemos ayudarlo a crear una identidad corporativa completamente nueva desde cero
        o a renovar una imagen corporativa “cansada” u obsoleta.
      </p>
    </div>
  </section>
</template>