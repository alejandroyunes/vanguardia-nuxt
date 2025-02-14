<script setup lang="ts">
import './service-cards.scss'
import Button from '~/components/atoms/buttons/fill/index.vue'

type Props = {
  data: {
    title: string
    subtitle: string
    price: string
    icon: Component
    iconAlt: string
    description: string
    buttonText: string
    link?: string
    onClick?: () => void
  }[]
}

const { data } = defineProps<Props>()

</script>

<template>

  <section class="service-cards">

    <div class="item" v-for="(item, index) in data" :key="index">

      <div class="heading">

        <h3 class="title">
          {{ item.title }}
        </h3>

        <p class="subtitle">
          {{ item.subtitle }}
        </p>

        <p class="price">
          {{ item.price }}
        </p>

      </div>

      <div class="details">

        <component :is="item.icon" class="image" :aria-label="item.iconAlt" />

        <p class="description">
          {{ item.description }}
        </p>
      </div>

      <Button class="buttonText" :text="item.buttonText" :link="item.link" @click="item.onClick" />

    </div>

  </section>

</template>