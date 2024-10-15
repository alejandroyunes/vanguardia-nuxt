<script setup lang="ts">
import './service-cards-1.scss'
import Button from '~/components/atoms/buttons/fill/index.vue'
import LightningSvg from '~/components/icons/LightningSvg.vue'

type Props = {
  data: {
    title: string
    price: string
    star?: boolean
    icon: Component
    iconAlt: string
    features: {
      text: string
      star?: boolean
    }[]
    cta: string
    link?: string
    onClick?: () => void
  }[]
}

const { data } = defineProps<Props>()

</script>

<template>

  <section class="service-cards-1">

    <div class="item" v-for="(item, index) in data" :key="index">

      <div class="heading">

        <h3 class="title">
          {{ item.title }}
        </h3>

        <span class="subtitle">
          {{ item.price }}
        </span>
      </div>

      <div class="details">

        <Component class="image" :is="item.icon" :aria-label="item.iconAlt" />

        <ul class="description">
          
          <li class="item" v-for="(feature, index) in item.features" :key="index">
            <LightningSvg class="icon" v-if="feature.star"  :class="{ 'star': feature.star }" />
            {{ feature.text }}
          </li>
        </ul>

      </div>

      <Button class="cta" :text="item.cta" :link="item.link" @click="item.onClick" />

    </div>

  </section>

</template>