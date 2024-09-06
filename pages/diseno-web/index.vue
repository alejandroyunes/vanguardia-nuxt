<script setup lang="ts">
import SubTitle from '~/components/atoms/subtitle-description/index.vue'
import ServiceCards from '~/components/organisms/service-cards/index.vue'
import Billboard2 from '~/components/organisms/billboards/billboard-2/index.vue'
import ModalPromo from '~/components/organisms/modals/modal-promo/index.vue'
// Icons
import PremiumSvg from '~/components/icons/PremiumSvg.vue'
import ProSvg from '~/components/icons/ProSvg.vue'
import PromoSvg from '~/components/icons/PromoSvg.vue'

useSeoMeta({
  title: 'Diseño Web Profesional en Colombia',
  description: 'Paginas Web Profesionales desde $599.999, líderes en diseño web en Colombia.',
  ogSiteName: 'Paginas Profesionales',
  ogTitle: 'Diseño Web Profesional en Colombia',
  ogDescription: 'Paginas Web Profesionales desde $599.999, líderes en diseño web en Colombia.',
  ogImage: '/meta/diseno-web-profesional.webp',
  ogUrl: 'https://paginasprofesionales.co/diseno-web',
  ogLocale: 'es_CO',
  twitterTitle: 'Diseño Web Profesional en Colombia',
  twitterDescription: 'Paginas Web Profesionales desde $599.999, líderes en diseño web en Colombia.',
  twitterImage: '/meta/diseno-web-profesional.webp',
  twitterCard: 'summary_large_image',
})

const isModalOpen = ref(false)

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value
}

const billboardData = {
  title: 'Expertos en Diseño Web - Servicio Profesional',
  subtitle: 'soluciones web personalizadas.',
  text: [
    'Somos una empresa líder en diseño web y desarrollo digital en Colombia, ofreciendo soluciones profesionales para pequeñas empresas, corporaciones y necesidades individuales.Creamos sitios web destacados que impulsan el crecimiento orgánico y fortalecen su presencia digital', 
    'Nos especializamos en diseño web responsivo, desarrollo de aplicaciones web, SEO y marketing digital integral. Nuestro objetivo es atraer más atención a su sitio y establecer una posición dominante en su industria.',
    'Los beneficios de nuestro trabajo incluyen aumento del tráfico orgánico, mejora de la experiencia del usuario, incremento en las conversiones y fortalecimiento de la imagen de marca.'
  ]
} 

const serviceCards = [
  {
    title: 'Esencial',
    subtitle: 'Promoción de páginas web',
    price: '$599.999',
    icon: PromoSvg,
    iconAlt: 'Servicio Esencial de Promoción de Páginas Web con Alojamiento Gratis',
    description: '¡Obtén un sitio web impresionante y alojamiento GRATIS durante tu primer año!',
    buttonText: 'Leer más',
    onClick: toggleModal
  },
  {
    title: 'Web Pro',
    subtitle: 'Sitio web de 5 páginas',
    price: '$999.999',
    icon: ProSvg,
    iconAlt: 'Servicio Web Pro - Creación de un Sitio Web de 5 Páginas con Alojamiento Gratis',
    description: '¡Obtén un sitio web de comercio electrónico con 5 páginas y alojamiento GRATIS tu primer año!',
    buttonText: 'Leer más',
    onClick: () => {
      console.log('toggleEvent 2')
    }
  },
  {
    title: 'Premium',
    subtitle: 'Promoción de tienda online',
    price: '$4,999.999',
    icon: PremiumSvg,
    iconAlt: 'Servicio Premium de Promoción de Tienda Online con Alojamiento Gratis',
    description: '¡Obtén un sitio web de comercio electrónico con 5 páginas y alojamiento GRATIS tu primer año!',
    buttonText: 'Leer más',
    onClick: () => {
      console.log('toggleEvent 3')
    }
  },
]

</script>

<template>

  <Billboard2 :data="billboardData" />

  <SubTitle
    marginTop
    title="Nuestras promociones populares de diseño web"
    description="¡Obtenga un sitio web con todas las funciones que aumente sus ingresos y expanda su negocio!" />

  <ServiceCards :data="serviceCards" />

  <ModalPromo v-if="isModalOpen" :toggleModal="toggleModal"/>

</template>
