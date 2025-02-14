<script setup lang="ts">
import './assets/error.scss'
import type { NuxtError } from '#app'
import Button from '@/components/atoms/buttons/fill/index.vue'

const props = defineProps({
  error: Object as () => NuxtError
})

</script>

<template>
  <div class="error-page">
    
    <h1 v-if="props.error" class="error-page-status">{{ props.error?.statusCode || 404 }}</h1>
    <p v-if="props.error?.statusCode === 404" class="error-page-message">Página no encontrada</p>
    <p v-else class="error-page-message">Error</p>

    <Button :text="'Volver al inicio'" link="/" />

  </div>
</template>
