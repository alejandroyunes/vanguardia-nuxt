<script setup lang="ts">
import Title from '~/components/atoms/title-description/index.vue'
import SubTitle from '~/components/atoms/subtitle-description/index.vue'
import IconCards from '~/components/organisms/icon-cards/index.vue'
import MarketingAgreement from '~/components/atoms/marketing-agreement/index.vue'
import ServicesCards from '~/components/organisms/service-cards-1/index.vue'
//icons
import BrowserSvg from '~/components/icons/BrowserSvg.vue'
import StatisticsUpSvg from '~/components/icons/StatisticsUpSvg.vue'
import BrowserCreateSvg from '~/components/icons/BrowserCreateSvg.vue'
import BrandPromoSvg from '~/components/icons/BrandPromoSvg.vue'
import CommunitySvg from '~/components/icons/CommunitySvg.vue'
import CampaignSvg from '~/components/icons/CampaignSvg.vue'
import AsesorSvg from '~/components/icons/AsesorSvg.vue'
import CustomSvg from '~/components/icons/CustomSvg.vue'
import WebDesignSvg from '~/components/icons/WebDesignSvg.vue'

import PromoSvg from '~/components/icons/PromoSvg.vue'
import PremiumSvg from '~/components/icons/PremiumSvg.vue'
import ProSvg from '~/components/icons/ProSvg.vue'

useSeoMeta({
  title: 'Planes de Marketing en Redes Sociales',
  description: 'Descubre las estrategias más efectivas de marketing en redes sociales para aumentar tu visibilidad y alcanzar a tu audiencia objetivo.',
  ogSiteName: 'Paginas Profesionales',
  ogTitle: 'Planes de Marketing en Redes Sociales',
  ogDescription: 'Descubre las estrategias más efectivas de marketing en redes sociales para aumentar tu visibilidad y alcanzar a tu audiencia objetivo.',
  ogImage: '/meta/default.webp',
  ogUrl: 'https://paginasprofesionales.co/marketing-en-redes-sociales',
  ogLocale: 'es_CO',
  twitterTitle: 'Planes de Marketing en Redes Sociales',
  twitterDescription: 'Descubre las estrategias más efectivas de marketing en redes sociales para aumentar tu visibilidad y alcanzar a tu audiencia objetivo. ',
  twitterImage: '/meta/default.webp',
  twitterCard: 'summary_large_image',
})

const iconCards = [
  {
    icon: BrowserSvg,
    iconAlt: 'Configuración de páginas en redes sociales - Marketing digital',
    title: 'Configuración de páginas en redes sociales',
    description: 'Si aún no tienes presencia en redes, el equipo se encargará de crear y configurar tus páginas de manera profesional.'
  },
  {
    icon: StatisticsUpSvg,
    iconAlt: 'Optimización de páginas en redes sociales - Mejora de rendimiento',
    title: 'Optimización de páginas existentes',
    description: 'Si ya tienes páginas en redes, se optimizarán para mejorar su rendimiento y alcance, asegurando que estén alineadas con las mejores prácticas de la industria.'
  },
  {
    icon: BrowserCreateSvg,
    iconAlt: 'Creación de publicaciones en redes sociales - Contenido atractivo',
    title: 'Creación de publicaciones',
    description: 'Se elaborarán varias publicaciones al mes, diseñadas para captar la atención de tu audiencia y mantener un flujo constante de contenido.'
  },
  {
    icon: BrandPromoSvg,
    iconAlt: 'Promoción de marca en redes sociales - Aumento de visibilidad',
    title: 'Promoción de la marca',
    description: 'El equipo se encargará de compartir tus publicaciones con audiencias específicas, aumentando la visibilidad y el alcance de tu marca.'
  },
  {
    icon: CommunitySvg,
    iconAlt: 'Interacción con la comunidad en redes sociales - Gestión de comentarios',
    title: 'Interacción con la comunidad',
    description: 'Se monitorearán y responderán comentarios, nuevos "me gusta" y mensajes privados para mantener una relación activa y positiva con tu audiencia.'
  },
  {
    icon: CampaignSvg,
    iconAlt: 'Gestión de campañas en redes sociales - Publicidad eficaz',
    title: 'Gestión de campañas',
    description: 'Se supervisarán y optimizarán tus campañas publicitarias para maximizar los resultados.'
  },
  {
    icon: AsesorSvg,
    iconAlt: 'Asesoría en marketing en redes sociales - Mejores prácticas',
    title: 'Asesoría en mejores prácticas',
    description: 'El equipo te guiará en las mejores prácticas para mantener una estrategia de marketing efectiva y coherente.'
  },
  {
    icon: CustomSvg,
    iconAlt: 'Personalización de contenido en redes sociales - Identidad de marca',
    title: 'Personalización de contenido',
    description: 'Las publicaciones y anuncios serán personalizados para reflejar la identidad única de tu marca y resonar con tu audiencia.',
  },
  {
    icon: WebDesignSvg,
    iconAlt: 'Diseño gráfico para redes sociales - Contenido visual atractivo',
    title: 'Diseño gráfico',
    description: 'El equipo creará diseños gráficos atractivos para todas tus publicaciones, asegurando que sean visualmente impactantes y alineados con la identidad de tu marca.',
  }
]

const servicesCards = [
  {
    title: 'Esencial',
    price: '$599.999',
    star: true,
    icon: PromoSvg,
    iconAlt: 'Paquete Esencial de Marketing en Redes Sociales - Facebook e Instagram',
    features: [
      {
        text: 'Facebook & Instagram',
      },
      {
        text: 'Llamada de inicio',
      },
      {
        text: 'Gasto mensual en anuncios $150.000',
        star: true
      },
      {
        text: '1 unidades de anuncios patrocinados',
        star: true
      },
      {
        text: 'Hasta 4 creaciones de publicaciones por mes',
      },
      {
        text: 'Publicaciones bilingües/traducciones incluidas',
      },
      {
        text: 'Post boost',
      },
      {
        text: 'Informes de rendimiento',
      }
    ],
    cta: 'Solicitar'
  },
  {
    title: 'Pro',
    price: '$899.999',
    icon: ProSvg,
    iconAlt: 'Paquete Pro de Marketing en Redes Sociales - Estrategia Avanzada en Facebook e Instagram',
    features: [
      {
        text: 'Facebook & Instagram',
      },
      {
        text: 'Llamada de inicio',
      },
      {
        text: 'Gasto mensual en anuncios $300.000',
        star: true
      },
      {
        text: '2 unidades de anuncios patrocinados',
        star: true
      },
      {
        text: 'Hasta 4 creaciones de publicaciones por mes',
      },
      {
        text: 'Publicaciones bilingües/traducciones incluidas',
      },
      {
        text: 'Post boost',
      },
      {
        text: 'Informes de rendimiento',
      }
    ],
    cta: 'Solicitar'
  },
  {
    title: 'Premium',
    price: '$1,199.999',
    icon: PremiumSvg,
    iconAlt: 'Paquete Premium de Marketing en Redes Sociales - Publicidad y Gestión en Facebook e Instagram',
    features: [
      {
        text:   'Facebook & Instagram',
      },
      {
        text: 'Llamada de inicio',
      },
      {
        text: 'Gasto mensual en anuncios $400.000',
        star: true
      },
      {
        text: '2 unidades de anuncios patrocinados',
        star: true
      },
      {
        text: 'Hasta 4 creaciones de publicaciones por mes',
      },
      {
        text: 'Publicaciones bilingües/traducciones incluidas',
      },
      {
        text: 'Post boost',
      },
      {
        text: 'Informes de rendimiento',
      }
    ],
    cta: 'Solicitar'
  }
]

</script>

<template>

  <Title 
    marginTop
    title="Soluciones de marketing en redes sociales"
    description="El equipo profesional de marketing en redes sociales se encargará de diversas funciones esenciales para impulsar tu marca en el entorno digital. Estas funciones incluyen:" />

  <IconCards :data="iconCards" />

  <SubTitle
    marginTop
    title="Nuestros planes de marketing en redes sociales"
    description="Diseñados para maximizar tu presencia digital y alcanzar tus objetivos comerciales con precisión y eficacia." />

  <ServicesCards :data="servicesCards" />

  <MarketingAgreement />

</template>