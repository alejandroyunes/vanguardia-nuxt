<script lang="ts" setup>
import './services-list.scss'
import CheckSvg from '~/components/icons/CheckSvg.vue'

type Props = {
  data: {
    title: string
    iconAlt: string
  }[]
}

const { data } = defineProps<Props>()

</script>

<template>
  <section class="services-list">
    <ul class="items">
      <li v-for="(service, index) in data" :key="index">
        <CheckSvg class="icon" :alt="service.iconAlt" />
        <p>{{ service.title }}</p>
      </li>
    </ul>
  </section>
</template>
