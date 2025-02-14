<script setup lang="ts">
import './billboard-6.scss'

type Props = {
  data: {
    title: string
    subtitle: string
  }
}

const { data } = defineProps<Props>()

</script>

<template>
  <section class="billboard-6">
    <div class="bg">
      <h1 class="title">{{ data.title }}</h1>
      <p class="description">{{ data.subtitle }}</p>
    </div>
  </section>
</template>