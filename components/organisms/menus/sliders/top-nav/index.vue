<script lang="ts" setup>
import './top-nav.scss'
import Logo from '~/public/logo.vue'
import ExitSvg from '@/components/icons/ExitSvg.vue'
import SeoSvg from "~/components/icons/menu/SeoSvg.vue"
import MarketingSvg from "~/components/icons/menu/MarketingSvg.vue"
import GraphicDesignSvg from "~/components/icons/menu/GraphicDesign.vue"
import ServerSvg from "~/components/icons/menu/ServerSvg.vue"
import SupportSvg from "~/components/icons/menu/SupportSvg.vue"
import WebDesignSvg from "~/components/icons/menu/WebDesignSvg.vue"
import SuggestionsSvg from "~/components/icons/menu/SuggestionsSvg.vue"
import AnnouncementsSvg from '~/components/icons/menu/AnnouncementsSvg.vue'

const { toggleTopNav, isTopNavOpen } = defineProps<{
  toggleTopNav: () => void
  isTopNavOpen: boolean | undefined
}>()

const navLinks = [
  {
    title: 'Diseño web',
    link: '/diseno-web',
    icon: WebDesignSvg,
    iconAlt: 'Diseño web'
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
    iconAlt: 'Marketing de medios sociales'
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
  },
  {
    title: 'Blog',
    link: '/blog',
    icon: AnnouncementsSvg,
    iconAlt: 'Blog'
  }
]

</script>

<template>

  <div
    :class="[isTopNavOpen === undefined ?
     'display-none' : 'top-nav',
     isTopNavOpen ? 'top-slide-in' : '',
     isTopNavOpen === false ? 'top-slide-out' : '']">
    
    <div class="top-nav-header">

      <NuxtLink to="/" class="top-nav-logo">
        <Logo />
      </NuxtLink>

      <div @click="toggleTopNav" class="animation-exit">
        <ExitSvg class=" exit-icon" />
      </div>
    </div>

    <div class="top-nav-content">

      <nav class="top-nav-list">
        <ul>
          <li v-for="(link, index) in navLinks" :key="index">
            <NuxtLink :to="link.link" class="item" @click="toggleTopNav()">
              <component :is="link.icon" class="icon" :alt="link.iconAlt" />
              <p>{{ link.title }}</p>
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="top-nav-contact">

        <div class="social-list">
          <span class="svg">
          </span>
        </div>

        <p class="contact-tel"><a href="tel:+41787746337">+57 304 665 9898</a></p>
        <p class="contact-email">
          <a href="mailto:alejandroyunes@outlook.com">alejandroyunes@outlook.com</a>
        </p>
      </div>

    </div>

  </div>

  <div v-if="isTopNavOpen" @click="toggleTopNav" class="content-bg" />
</template>