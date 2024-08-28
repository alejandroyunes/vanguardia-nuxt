<script setup>
import { ref } from 'vue'
import './footer.scss'
import LogoSvg from '~/public/logo.vue'
import FacebookSvg from '~/components/icons/social/FacebookSvg.vue'
import TwitterSvg from '~/components/icons/social/TwitterSvg.vue'
import InstagramSvg from '~/components/icons/social/InstagramSvg.vue'

const currentYear = ref(new Date().getFullYear())

const links = [
  { label: 'Diseño web', to: '/' },
  { label: 'Desarrollo web', to: '/' },
  { label: 'SEO', to: '/' },
  { label: 'Marketing digital', to: '/' },
]

const socialLinks = [
  { icon: FacebookSvg, to: 'https://facebook.com' },
  { icon: TwitterSvg, to: 'https://twitter.com' },
  { icon: InstagramSvg, to: 'https://instagram.com' },
]

</script>

<template>
  <footer class="footer-content">

    <LogoSvg class="logo" />
    <h2 class="title">Vanguardia.tech</h2>

    <ul class="social-links">
      <li class="item" v-for="socialLink in socialLinks" :key="socialLink.to">
        <NuxtLink :to="socialLink.to">
          <component :is="socialLink.icon" />
        </NuxtLink>
      </li>
    </ul>

    <ul class="links">
      <li v-for="link in links" :key="link.to">
        <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
      </li>
    </ul>

    <p class="copyright">&copy; {{ currentYear }} Vanguardia.tech. Todos los derechos reservados.</p>
  </footer>
</template>
