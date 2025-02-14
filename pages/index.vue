<script setup lang="ts">
import Billboard from '~/components/organisms/billboards/billboard-1/index.vue'
import SubTitle from '~/components/atoms/subtitle-description/index.vue'
import BrandDescription from '~/components/organisms/brand-description/index.vue'
import ServiceCards from '~/components/organisms/service-cards/index.vue'
// Icons
import PremiumSvg from '~/components/icons/PremiumSvg.vue'
import ProSvg from '~/components/icons/ProSvg.vue'
import PromoSvg from '~/components/icons/PromoSvg.vue'

useSeoMeta({
  title: 'Servicio Web Profesional en Colombia',
  description: 'Ofrecemos hosting gratis el primer año con un diseño web único.',
  ogSiteName: 'Paginas Profesionales',
  ogTitle: 'Servicio Web Profesional en Colombia',
  ogDescription: 'Ofrecemos hosting gratis el primer año con un diseño web único. Aprovecha esta oferta antes de que se termine.',
  ogImage: '/meta/inicio-web-profesional.webp',
  ogUrl: 'https://paginasprofesionales.co',
  ogLocale: 'es_CO',
  twitterTitle: 'Servicio Web Profesional en Colombia',
  twitterDescription: 'Ofrecemos hosting gratis el primer año con un diseño web único. Aprovecha esta oferta antes de que se termine.',
  twitterImage: '/meta/inicio-web-profesional.webp',
  twitterCard: 'summary_large_image',
})

const serviceCards = [
  {
    title: 'Esencial',
    subtitle: 'Marketing en redes sociales',
    price: '$399.999',
    icon: PromoSvg,
    iconAlt: 'Imagen que simboliza el servicio de marketing en redes sociales',
    description: 'Nuestro equipo de expertos en marketing en redes sociales te ayudará a aumentar tus oportunidades de negocio. Enfocandose en clientes potenciales en función de grupos demográficos.',
    buttonText: 'Leer más',
    link: 'marketing-en-redes-sociales'
  },
  {
    title: 'Hosting',
    subtitle: 'Alojamiento web',
    price: '$49.999',
    icon: ProSvg,
    iconAlt: 'Imagen que simboliza el servicio de alojamiento web',
    description: 'Potente alojamiento de sitios web en servidores en la nube de alta calidad de Amazon Web Services, administramos tus sitios web y servidores con alertas de seguridad.',
    buttonText: 'Leer más',
    link: 'alojamiento-web-administrado-cpanel'
  },
  {
    title: 'SEO',
    subtitle: 'Marketing en motores de búsqueda',
    price: '$999.999',
    icon: PremiumSvg,
    iconAlt: 'Imagen que simboliza el servicio de marketing en motores de búsqueda',
    description: 'Utilizamos tecnicas white hat para aparecer en los principales motores de búsqueda con nuestro servicio de optimización de motores de búsqueda y marketing de motores de búsqueda.',
    buttonText: 'Leer más',
    link: 'marketing-en-motores-de-busqueda'
  }
]

</script>

<template>
  <Billboard />

  <SubTitle 
    marginTop
    title="Nuestros Planes"
    description="Agencia Colombiana de marketing ofrece soluciones efectivas y personalizadas a empresas de cualquier tamaño." />

  <ServiceCards :data="serviceCards" />

  <BrandDescription />


</template>
