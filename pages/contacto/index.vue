<script setup lang="ts">
import Title from '~/components/atoms/title-description/index.vue'
import ContactForm from '~/components/organisms/form/contact/index.vue'
useSeoMeta({
  title: 'Contacto de Páginas Profesionales',
  description: 'Conecta con nosotros para obtener más información sobre nuestros servicios.',
  ogSiteName: 'Contacto de Páginas Profesionales',
  ogTitle: 'Contacto Páginas Profesionales',
  ogDescription: 'Conecta con nosotros para obtener más información sobre nuestros servicios.',
  ogImage: '/meta/default.webp',
  ogUrl: 'https://www.paginasprofesionales.com/contacto',
  ogLocale: 'es',
  twitterTitle: 'Contacto Páginas Profesionales',
  twitterDescription: 'Conecta con nosotros para obtener más información sobre nuestros servicios.',
  twitterImage: '/meta/default.webp',
  twitterCard: 'summary_large_image',
})

</script>

<template>
  <Title
    martinTop
    title="Contacto"
    description="Contáctanos para obtener más información sobre nuestros servicios." />
    
  <ContactForm />
</template>
