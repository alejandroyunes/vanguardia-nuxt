<script setup>
import { ref } from 'vue'
import './footer.scss'
import FacebookSvg from '~/components/icons/social/FacebookSvg.vue'
import TwitterSvg from '~/components/icons/social/TwitterSvg.vue'
import InstagramSvg from '~/components/icons/social/InstagramSvg.vue'

const currentYear = ref(new Date().getFullYear())

const socialLinks = [
  { icon: FacebookSvg, to: 'https://facebook.com/profile.php?id=61564869706521', label: 'Visítanos en Facebook' },
  { icon: TwitterSvg, to: 'https://twitter.com/paginaspro_co', label: 'Visítanos en Twitter' },
  { icon: InstagramSvg, to: 'https://instagram.com/paginasprofesionales.co', label: 'Visítanos en Instagram' },
]

</script>

<template>
  <footer class="footer-content">

    <NuxtPicture
      class="image"
      src="/logo.png"
      alt="Logo de páginas profesionales"
      densities="x1"
      width="100"
      height="100"
    />
    <h2 class="title">Páginas Profesionales</h2>

    <ul class="social-links">
      <li class="item" v-for="socialLink in socialLinks" :key="socialLink.to">
        <NuxtLink :to="socialLink.to" :aria-label="socialLink.label" rel="noopener noreferrer" target="_blank">
          <component :is="socialLink.icon" />
        </NuxtLink>
      </li>
    </ul>

    <p class="copyright">&copy; {{ currentYear }} Páginas Profesionales.</p>
  </footer>
</template>
