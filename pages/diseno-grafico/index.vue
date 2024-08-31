<script setup lang="ts">
import Subtitle from '~/components/atoms/subtitle-description/index.vue'
import Services from '~/components/organisms/services-list/index.vue'
import Billboard3 from '~/components/organisms/billboards/billboard-3/index.vue'
import Billboard4 from '~/components/organisms/billboards/billboard-4/index.vue'
import Billboard5 from '~/components/organisms/billboards/billboard-5/index.vue'

useSeoMeta({
  title: 'Diseño Gráfico Profesional en Colombia - Identidad Corporativa y Más',
  ogTitle: 'Diseño Gráfico Profesional en Colombia - Identidad Corporativa y Más',
  description: 'Mejora la identidad corporativa de tu negocio con nuestro diseño gráfico profesional en Colombia. Desde logotipos hasta publicidad, nuestro equipo asegura una primera impresión impactante y un diseño efectivo.',
  ogDescription: 'Destaca con nuestro diseño gráfico profesional en Colombia. Creamos identidades corporativas únicas y efectivas que mejoran la apariencia y comunicación de tu negocio. ¡Contáctanos para transformar tu imagen!',
  ogImage: '/meta/diseno-grafico-profesional.webp',
  ogLocale: 'es_CO',
  twitterTitle: 'Diseño Gráfico Profesional en Colombia - Identidad Corporativa y Más',
  twitterCard: 'summary_large_image',
  twitterDescription: 'Transforma tu identidad corporativa con nuestro diseño gráfico profesional en Colombia. Creamos logotipos y materiales publicitarios que comunican eficazmente tus ofertas y destacan entre la competencia.',
})

const services = [
  {
    title: 'Diseño de folletos',
    iconAlt: 'Diseño de folletos',
  },
  {
    title: 'Diseño de logotipos e identidad',
    iconAlt: 'Diseño de logotipos e identidad',
  },
  {
    title: 'Boletines informativos y catálogos',
    iconAlt: 'Boletines informativos y catálogos',
  },
  {
    title: 'Diseño de papelería',
    iconAlt: 'Diseño de papelería',
  },
  {
    title: 'Afiches/volantes/postales',
    iconAlt: 'Afiches/volantes/postales',
  },
  {
    title: 'Tarjetas de presentación',
    iconAlt: 'Tarjetas de presentación',
  },
  {
    title: 'Menús de restaurantes',
    iconAlt: 'Menús de restaurantes',
  },
  {
    title: 'Letreros para césped',
    iconAlt: 'Letreros para césped',
  },
  {
    title: 'Banners',
    iconAlt: 'Banners',
  },
  {
    title: 'Carpetas de presentación',
    iconAlt: 'Carpetas de presentación',
  },
  {
    title: 'Tarjetas de felicitación',
    iconAlt: 'Tarjetas de felicitación',
  },
  {
    title: 'Colgadores para puertas',
    iconAlt: 'Colgadores para puertas',
  },
]

const billboard3Data = {
  text: 'Creando cosas',
  words: ['Hermosas', 'Geniales', 'Increíbles']
}

</script>

<template>
  <Billboard3 />

  <Subtitle
    marginTop
    title="Servicios"
    description="Estos son algunos de los servicios de diseño gráfico que ofrece Vanguardia."
  />
  
  <Services :data="services" />

  <Billboard4 :data="billboard3Data" />

  <Billboard5 />
</template>
