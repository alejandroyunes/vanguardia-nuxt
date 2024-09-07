<script setup lang="ts">

import Title from '~/components/atoms/title-description/index.vue'
import ContactForm from '~/components/organisms/form/contact/index.vue'

useSeoMeta({
  title: 'Contacte al Soporte Técnico de Paginas Profesionales | Asistencia Rápida y Eficiente',
  description: 'Complete nuestro formulario para una resolución rápida de sus problemas.',
  ogSiteName: 'Paginas Profesionales',
  ogTitle: 'Contacte al Soporte Técnico de Paginas Profesionales | Asistencia Rápida y Eficiente',
  ogDescription: 'Complete nuestro formulario para una resolución rápida de sus problemas.',
  ogImage: '/meta/default.webp',
  ogUrl: 'https://paginasprofesionales.co/contacta-con-soporte',
  ogLocale: 'es_CO',
  twitterTitle: 'Contacte al Soporte Técnico de Paginas Profesionales | Asistencia Rápida y Eficiente',
  twitterDescription: 'Complete nuestro formulario para una resolución rápida de sus problemas.',
  twitterImage: '/meta/default.webp',
  twitterCard: 'summary_large_image',
})

</script>

<template>
  <Title
    martinTop
    title="Contacte al Soporte Técnico de Paginas Profesionales"
    description="Para ayudarnos a procesar rápidamente su solicitud, complete todos los campos a continuación." />
  
  <ContactForm />
</template>
