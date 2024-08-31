<script lang="ts" setup>
import './post-description.scss'

interface PostSubtitleProps {
  text: string
  text1?: string
  text2?: string
  text3?: string
}

const { text, text1, text2, text3 } = defineProps<PostSubtitleProps>()

</script>

<template>
  <section class="post-description">

      <p>{{ text }}</p>
      <p v-if="text1">{{ text1 }}</p>
      <p v-if="text2">{{ text2 }}</p>
      <p v-if="text3">{{ text3 }}</p>

  </section>
</template>
