<script setup lang="ts">

import Title from '~/components/atoms/title-description/index.vue'
import SuggestionsForm from '~/components/organisms/form/suggestions/index.vue'

useSeoMeta({
  title: 'Comparte tus Ideas | Sugerencias y Comentarios sobre Vanguardia',
  ogTitle: 'Tu Opinión Cuenta | Sugerencias y Comentarios para Vanguardia',
  description: 'Ayúdanos a mejorar. Comparte tus sugerencias y comentarios sobre Vanguardia. Tu opinión es valiosa para nosotros y contribuye a nuestro crecimiento continuo.',
  ogDescription: 'Participa en la evolución de Vanguardia. Envíanos tus ideas, sugerencias y comentarios. Juntos, creamos una experiencia mejor para todos nuestros usuarios.',
  ogImage: '/meta/inicio-web-profesional.webp',
  ogLocale: 'es_CO',
  twitterTitle: 'Sé Parte del Cambio | Sugerencias y Comentarios para Vanguardia',
  twitterCard: 'summary_large_image',
  twitterDescription: '¿Tienes ideas para mejorar Vanguardia? Comparte tus sugerencias y comentarios. Valoramos tu opinión y la usamos para evolucionar constantemente.',
})

</script>

<template>
  <Title
    martinTop
    title="Sugerencias"
    description="Envíanos tus sugerencias y comentarios sobre Vanguardia" />
  
  <SuggestionsForm />
</template>
