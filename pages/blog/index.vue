<script setup lang="ts">
import Title from '~/components/atoms/title-description/index.vue'
import BlogList from '~/components/organisms/blog/index.vue'

import nextImg from '/images/blog/blog-1.webp'
import serverImg from '/images/blog/blog-2.webp'
import carreraImg from '/images/blog/blog-3.webp'
import htmlImg from '/images/blog/blog-4.webp'
import linuxImg from '/images/blog/blog-5.webp'

useSeoMeta({
  title: 'Blog Vanguardia | Noticias, Análisis y Tendencias Actuales',
  ogTitle: 'Blog Vanguardia: Tu Fuente de Información y Análisis de Vanguardia',
  description: 'Explora nuestro blog para las últimas noticias, análisis profundos y tendencias emergentes. Mantente informado con Vanguardia, tu fuente confiable de contenido relevante y actual.',
  ogDescription: 'Sumérgete en artículos fascinantes, reportajes exclusivos y opiniones expertas en el Blog de Vanguardia. Descubre perspectivas únicas sobre los temas que más importan.',
  ogImage: '/meta/inicio-web-profesional.webp',
  ogLocale: 'es_CO',
  twitterTitle: 'Blog Vanguardia | Información de Calidad, Análisis Profundo',
  twitterCard: 'summary_large_image',
  twitterDescription: 'Mantente al día con las últimas innovaciones en tecnología y marketing digital. Lee sobre Next.js, servidores modernos, HTML5, desarrollo web y más en nuestro blog.',
})

const blogListData = [
  {
    id: 1,
    title: "Next 14 app con Style X",
    description: "Una guía paso a paso para configurar la aplicación Next 14 con Style X. En el mundo siempre cambiante de la tecnología, mantenerse al día significa adoptar las últimas innovaciones.",
    url: "next-14-app-con-style-x",
    img: nextImg,
    alt: "Captura de pantalla de la interfaz de usuario de una aplicación creada con Next 14 y Style X",
  },
  {
    id: 2,
    title: "Arquitectura de servidor moderno y de alto rendimiento",
    description: "Guía para crear un Servidor con Node.js, Express, TypeScript, GraphQL, Apollo Server, PostgreSQL y Prisma.",
    url: "arquitectura-de-servidor-moderno-y-de-alto-rendimiento",
    img: serverImg,
    alt: "Diagrama de arquitectura de servidor con Node.js, Express y otras tecnologías",
  },
  {
    id: 3,
    title: "Guía de Carrera en Desarrollo Web",
    description: "Descubre habilidades esenciales y perspectivas para una exitosa carrera en desarrollo web en nuestra guía integral.",
    url: "guia-de-carrera-en-desarrollo-web",
    img: carreraImg,
    alt: "Ilustración de un desarrollador web trabajando en múltiples pantallas",
  },
  {
    id: 4,
    title: "Explorando algunas Etiquetas HTML5 Poderosas para una Web Moderna",
    description: "Descubre las Innovadoras Etiquetas HTML que Simplifican Nuestra Vida en la Web.",
    url: "explorando-algunas-etiquetas-html5-poderosas-para-una-web-moderna",
    img: htmlImg,
    alt: "Gráfico representativo de etiquetas HTML5 para diseño web moderno",
  },
  {
    id: 5,
    title: "¿Cómo instalar Linux Mint junto con Windows 11?",
    description: "Esta guía te mostrará cómo correr Linux Mint y Windows juntos en un mismo PC.",
    url: "como-instalar-linux-mint-junto-con-windows-11",
    img: linuxImg,
    alt: "Pantalla de configuración dual con Linux Mint y Windows 11 en un mismo ordenador",
  }
]


</script>

<template>
  <Title
    title="Blog"
    description="Entérate de los últimos artículos de Vanguardia relacionados al mundo del marketing digital y tecnología." />

  <BlogList :data="blogListData" />
</template>
