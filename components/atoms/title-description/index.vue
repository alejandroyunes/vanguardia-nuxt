<script lang="ts" setup>
import './title-description.scss'

type Props = {
  title: string
  description?: string
}

const { title, description } = defineProps<Props>()

</script>

<template>
  <section class="title-description">
    <h1 class="title">{{ title }}</h1>
    <p class="description">{{ description }}</p>
  </section>
</template>
