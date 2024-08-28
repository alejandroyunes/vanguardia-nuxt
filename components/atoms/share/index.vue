<script setup lang="ts">
import './share.scss'

import Author from "~/components/icons/share/AuthorSvg.vue"
import Twitter from "~/components/icons/share/TwitterSvg.vue"
import LinkedIn from "~/components/icons/share/LinkedinSvg.vue"
import Facebook from "~/components/icons/share/FacebookSvg.vue"
import Tag from "~/components/icons/share/TagSvg.vue"
import ShareSvg from "~/components/icons/share/ShareSvg.vue"

const shareComponents: Record<string, Component> = {
  Author,
  Twitter,
  LinkedIn,
  Facebook,
  Tag
}

type Props = {
  data: string[] | undefined
}

const { data } = defineProps<Props>()

</script>

<template>

  <section class="share">
    <ShareSvg class="icon" />
    <component class="share-icon" v-for="(icon, index) in data" :key="index" :is="shareComponents[icon]" />
  </section>
</template>
