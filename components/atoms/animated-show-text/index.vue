<script setup lang="ts">
import './animated-show-text.scss'

type Props = {
  data: string[]
}

const { data } = defineProps<Props>()

</script>

<template>
  <section class="animated-show-text">

    <h2>
      <div class="message">
        <div v-for="word in data" :key="word">{{ word }}</div>
      </div>
    </h2>

  </section>
</template>