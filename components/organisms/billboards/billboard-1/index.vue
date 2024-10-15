<script lang="ts" setup>
import './billboard-1.scss'
import ButtonsGlowOn from '~/components/atoms/buttons/glow-on/index.vue'
import ModalPromo from '~/components/organisms/modals/contact-promo/index.vue'
import SvgsBillboard from '~/components/icons/web-dev.vue'
import AnimateText from '~/components/atoms/animated-colorful-text/index.vue'

const isModalOpen = ref(false)

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value
}

</script>

<template>
  <section class="billboard-1">

    <div class="details">
      <h1 class="title">¡Obtén una página web profesional con Hosting
        <AnimateText>GRATIS</AnimateText> durante el primer año! 
      </h1>
      <p class="description">Elige entre una variedad de diseños modernos por solo $500,000.</p>
      
      <ButtonsGlowOn
        class="learn-more"
        text="¡Obtener promo!" 
        :active="true" 
        @click="toggleModal"
      />
    </div>

    <SvgsBillboard aria-label="imagen soluciones creativas de diseño gráfico"/>

    <ModalPromo v-if="isModalOpen" :toggleModal="toggleModal"/>
  </section>
</template>
