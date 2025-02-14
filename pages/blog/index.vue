<script setup lang="ts">
import Title from '~/components/atoms/title-description/index.vue'
import BlogList from '~/components/organisms/blog/index.vue'

import nextImg from '/images/blog/blog-1.webp'
import serverImg from '/images/blog/blog-2.webp'
import carreraImg from '/images/blog/blog-3.webp'
import htmlImg from '/images/blog/blog-4.webp'
import linuxImg from '/images/blog/blog-5.webp'

useSeoMeta({
  title: 'Blog | Noticias, Análisis y Tendencias Sobre Tecnología y Desarrollo Web',
  description: 'Mantente al día con las últimas noticias sobre innovaciones en tecnología y desarrollo web.',
  ogSiteName: 'Paginas Profesionales',
  ogTitle: 'Blog | Noticias, Análisis y Tendencias Sobre Tecnología y Desarrollo Web',
  ogDescription: 'Mantente al día con las últimas noticias sobre innovaciones en tecnología y desarrollo web.',
  ogImage: '/meta/default.webp',
  ogUrl: 'https://paginasprofesionales.co/blog',
  ogLocale: 'es_CO',
  twitterTitle: 'Blog | Noticias, Análisis y Tendencias Sobre Tecnología y Desarrollo Web',
  twitterDescription: 'Mantente al día con las últimas noticias sobre innovaciones en tecnología y desarrollo web.',
  twitterImage: '/meta/default.webp',
  twitterCard: 'summary_large_image',
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
    description="Entérate de los últimos artículos de páginas profesionales relacionados al mundo del marketing digital y tecnología." />

  <BlogList :data="blogListData" />
</template>
