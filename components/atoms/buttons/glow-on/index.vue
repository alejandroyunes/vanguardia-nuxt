<script setup lang="ts">
import './glow-on.scss'

type GlowOnProps = {
  text: string
  active?: boolean
  link?: string
}

const router = useRouter()

const { text, active, link } = defineProps<GlowOnProps>()

const handleClick = () => {
  if (link) {
    router.push(link)
  }
}
</script>

<template>
  <button :class="['glow-on', active ? 'active' : '']" type="button" @click="handleClick">
    <span>{{ text }}</span>
  </button>
</template>