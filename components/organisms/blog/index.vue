<script setup lang="ts">
import './blog-list.scss'

const blogListData = [
  {
    title: "Next 14 app con Style X",
    description: "Una guía paso a paso para configurar la aplicación Next 14 con Style X. En el mundo siempre cambiante de la tecnología, mantenerse al día significa adoptar las últimas innovaciones.",
    url: "/blog/next-14-app-con-style-x",
    img: '/images/blog/blog-1.webp',
    alt: "Captura de pantalla de la interfaz de usuario de una aplicación creada con Next 14 y Style X",
  },
  {
    title: "Arquitectura de servidor moderno y de alto rendimiento",
    description: "Guía para crear un Servidor con Node.js, Express, TypeScript, GraphQL, Apollo Server, PostgreSQL y Prisma.",
    url: "/blog/arquitectura-de-servidor-moderno-y-de-alto-rendimiento",
    img: '/images/blog/blog-2.webp',
    alt: "Diagrama de arquitectura de servidor con Node.js, Express y otras tecnologías",
  },
  {
    title: "Guía de Carrera en Desarrollo Web",
    description: "Descubre habilidades esenciales y perspectivas para una exitosa carrera en desarrollo web en nuestra guía integral.",
    url: "/blog/guia-de-carrera-en-desarrollo-web",
    img: '/images/blog/blog-3.webp',
    alt: "Ilustración de un desarrollador web trabajando en múltiples pantallas",
  },
  {
    title: "Explorando algunas Etiquetas HTML5 Poderosas para una Web Moderna",
    description: "Descubre las Innovadoras Etiquetas HTML que Simplifican Nuestra Vida en la Web.",
    url: "/blog/explorando-algunas-etiquetas-html5-poderosas-para-una-web-moderna",
    img: '/images/blog/blog-4.webp',
    alt: "Gráfico representativo de etiquetas HTML5 para diseño web moderno",
  },
  {
    title: "¿Cómo instalar Linux Mint junto con Windows 11?",
    description: "Esta guía te mostrará cómo correr Linux Mint y Windows juntos en un mismo PC.",
    url: "/blog/como-instalar-linux-mint-junto-con-windows-11",
    img: '/images/blog/blog-5.webp',
    alt: "Pantalla de configuración dual con Linux Mint y Windows 11 en un mismo ordenador",
  }
]

                 
</script>

<template>
  <section class="blog-list">
    <div class="card" v-for="(post, index) in blogListData" :key="index">
      <NuxtLink :to="post.url">

        <div class="image" >
          <NuxtPicture
            :src="post.img" 
            sizes="100vw xs:370px" 
            format="webp"
            :alt="post.alt" />
        </div>

        <h2 class="title">{{ post.title }}</h2>
        <p class="description">{{ post.description }}</p>
      </NuxtLink>
    </div>
  </section>
</template>
