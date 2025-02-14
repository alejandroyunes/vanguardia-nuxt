<script setup lang="ts">
import './billboard-4.scss'
import AnimatedShowText from '@/components/atoms/animated-show-text/index.vue'

type Props = {
  data: {
    text: string
    words: string[]
  }
}

const { data } = defineProps<Props>()


</script>

<template>
  <section class="billboard-4">

    <div class="details">

      <h2 class="title">{{ data.text }}</h2>

        <AnimatedShowText :data="data.words" />

        <h3 class="subtitle">
          Diseñadores gráficos expertos listos para trabajar para usted.
        </h3>
    </div>

    <p>
      El diseño gráfico de su sitio web, logotipo, tarjeta de presentación y publicidad es crucial para causar una
      buena primera impresión. Nuestro equipo profesional se encarga de destacar su negocio y comunicar
      estratégicamente sus mensajes. No solo mejoramos la apariencia, sino que también aseguramos que el diseño sea
      efectivo para vender su producto o servicio. Trabajamos para que el diseño final sea estéticamente atractivo y
      rentable, ayudándole a conectar con su mercado objetivo de manera asequible y efectiva.
    </p>
  </section>
</template>