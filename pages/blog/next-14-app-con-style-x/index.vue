<script setup lang="ts">
import Title from '~/components/atoms/title-description/index.vue'
import BlogArticle from '~/components/organisms/blog/article/index.vue'

useSeoMeta({
  title: 'Blog de Vanguardia: Innovaciones en Tecnología y Marketing Digital',
  ogTitle: 'Blog de Vanguardia: Innovaciones en Tecnología y Marketing Digital',
  description: 'Explora nuestros últimos artículos sobre tecnología, desarrollo web y marketing digital. Aprende sobre Next.js, servidores modernos, desarrollo web y más.',
  ogDescription: 'Descubre las últimas tendencias en tecnología y marketing digital con los artículos del blog de Vanguardia. Desde Next.js y desarrollo web hasta servidores modernos y Linux.',
  ogImage: '/meta/inicio-web-profesional.webp',
  ogLocale: 'es_CO',
  twitterTitle: 'Blog de Vanguardia: Innovaciones en Tecnología y Marketing Digital',
  twitterCard: 'summary_large_image',
  twitterDescription: 'Mantente al día con las últimas innovaciones en tecnología y marketing digital. Lee sobre Next.js, servidores modernos, HTML5, desarrollo web y más en nuestro blog.',
  twitterLabel1: 'Tiempo de lectura',
  twitterData1: '4 minutos',
})

</script>

<template>

<Title
    title="Blog"
    description="Entérate de los últimos artículos de Vanguardia relacionados al mundo del marketing digital y tecnología." />

  <BlogArticle />
</template>
