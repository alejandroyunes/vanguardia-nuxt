<script setup lang="ts">

import Title from '~/components/atoms/title-description/index.vue'
import ContactForm from '~/components/organisms/form/contact/index.vue'

useSeoMeta({
  title: 'Contacte al Soporte Técnico de Vanguardia | Asistencia Rápida y Eficiente',
  ogTitle: 'Soporte Técnico de Vanguardia | Soluciones Rápidas a sus Problemas',
  description: 'Obtenga ayuda experta de nuestro equipo de soporte técnico. Complete nuestro formulario para una resolución rápida de sus problemas. Estamos aquí para ayudarle 24/7.',
  ogDescription: 'Asistencia técnica profesional a su alcance. Nuestro equipo de expertos está listo para resolver sus dudas y problemas técnicos de manera eficiente.',
  ogImage: '/meta/inicio-web-profesional.webp',
  ogLocale: 'es_CO',
  twitterTitle: 'Soporte Técnico de Vanguardia | Contacto Directo y Eficaz',
  twitterCard: 'summary_large_image',
  twitterDescription: 'Contacte a nuestro equipo de soporte técnico de élite. Resolución rápida y profesional de sus problemas técnicos. Su satisfacción es nuestra prioridad.',
})

</script>

<template>
  <Title
    martinTop
    title="Contacte al Soporte Técnico de Vanguardia"
    description="Para ayudarnos a procesar rápidamente su solicitud, complete todos los campos a continuación." />
  
  <ContactForm />
</template>
