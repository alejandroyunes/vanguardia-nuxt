<script setup lang='ts'>
import { ref } from 'vue'

import './menu.scss'
import SeoSvg from '~/components/icons/menu/SeoSvg.vue'
import MarketingSvg from '~/components/icons/menu/MarketingSvg.vue'
import GraphicDesignSvg from '~/components/icons/menu/GraphicDesign.vue'
import SupportSvg from '~/components/icons/menu/SupportSvg.vue'
import ArrowDownSvg from '~/components/icons/ArrowDownSvg.vue'
import WebDesignSvg from '~/components/icons/menu/WebDesignSvg.vue'
import SuggestionsSvg from '~/components/icons/menu/SuggestionsSvg.vue'
import AnnouncementsSvg from '~/components/icons/menu/AnnouncementsSvg.vue'

const isClicked = ref(false)

const itemClicked = () => {
  isClicked.value = true
  setTimeout(() => {
    isClicked.value = false
  }, 100)
}

const servicesLinks = [
  {
    title: 'Diseño web',
    link: '/diseno-web',
    icon: WebDesignSvg,
    iconAlt: 'Diseño web',
  },
  {
    title: 'Diseño gráfico',
    link: '/diseno-grafico',
    icon: GraphicDesignSvg,
    iconAlt: 'Diseño gráfico'
  },
  {
    title: 'Marketing de motores de búsqueda',
    link: '/marketing-en-motores-de-busqueda',
    icon: SeoSvg,
    iconAlt: 'Marketing de motores de búsqueda'
  },
  {
    title: 'Marketing de medios sociales',
    link: '/marketing-en-redes-sociales',
    icon: MarketingSvg,
    iconAlt: 'Marketing en redes sociales'
  }
]

const supportLinks = [
  {
    title: 'Blog',
    link: '/blog',
    icon: AnnouncementsSvg,
    iconAlt: 'Blog'
  },  
  {
    title: 'Contacta con soporte',
    link: '/contacta-con-soporte',
    icon: SupportSvg,
    iconAlt: 'Contacta con soporte'
  },
  {
    title: 'Sugerencias',
    link: '/sugerencias',
    icon: SuggestionsSvg,
    iconAlt: 'Sugerencias'
  }
]

</script>

<template>

  <nav class="menu">
    <ul class="items">

      <li class="item">
        <h3 class="title">Servicios</h3>
        <ArrowDownSvg class="icon arrow-icon" />

        <ul :class="['sub-items', { 'clicked': isClicked }]">
          <li v-for="(item, index) in servicesLinks" :key="index" class="sub-item" @click="itemClicked">
            <NuxtLink class="link" :to="item.link">
              <component :is="item.icon" class="icon" :alt="item.iconAlt" />
              <p>{{ item.title }}</p>
            </NuxtLink>
          </li>
        </ul>
      </li>

      <li class="item">
        <h3 class="title">Soporte</h3>
        <ArrowDownSvg class="icon arrow-icon" />

        <ul :class="['sub-items', { 'clicked': isClicked }]" @click="itemClicked">
          <li v-for="(item, index) in supportLinks" :key="index" class="sub-item">
            <NuxtLink class="link" :to="item.link">
              <component :is="item.icon" class="icon" :alt="item.iconAlt" />
              <p>{{ item.title }}</p>
            </NuxtLink>
          </li>
        </ul>
      </li>

    </ul>
  </nav>

</template>
