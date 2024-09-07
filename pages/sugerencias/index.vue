<script setup lang="ts">

import Title from '~/components/atoms/title-description/index.vue'
import SuggestionsForm from '~/components/organisms/form/suggestions/index.vue'

useSeoMeta({
  title: 'Comparte tus Ideas | Sugerencias y Comentarios sobre Paginas Profesionales',
  description: 'Ayúdanos a mejorar. Comparte tus sugerencias y comentarios sobre Paginas Profesionales. Tu opinión es valiosa para nosotros y contribuye a nuestro crecimiento continuo.',
  ogSiteName: 'Paginas Profesionales',
  ogTitle: 'Tu Opinión Cuenta | Sugerencias y Comentarios para Paginas Profesionales',
  ogDescription: 'Participa en la evolución de páginas profesionales. Envíanos tus ideas, sugerencias y comentarios. Juntos, creamos una experiencia mejor para todos nuestros usuarios.',
  ogImage: '/meta/default.webp',
  ogUrl: 'https://paginasprofesionales.co/sugerencias',
  ogLocale: 'es_CO',
  twitterTitle: 'Sugerencias y Comentarios para Paginas Profesionales',
  twitterDescription: '¿Tienes ideas para mejorar Paginas Profesionales? Comparte tus sugerencias y comentarios. Valoramos tu opinión y la usamos para evolucionar constantemente.',
  twitterImage: '/meta/default.webp',
  twitterCard: 'summary_large_image',
})

</script>

<template>
  <Title
    martinTop
    title="Sugerencias"
    description="Envíanos tus sugerencias y comentarios sobre Paginas Profesionales" />
  
  <SuggestionsForm />
</template>
