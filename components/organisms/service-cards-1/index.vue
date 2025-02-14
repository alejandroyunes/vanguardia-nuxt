<script setup lang="ts">
import './service-cards-1.scss'
import { useRoute } from 'vue-router'
import Button from '~/components/atoms/buttons/fill/index.vue'
import LightningSvg from '~/components/icons/LightningSvg.vue'
import ModalServices from '~/components/organisms/modals/services/marketing/index.vue'

type ServicesMarketingProps = {
  data: {
    title: string
    price: string
    icon: Component
    iconAlt: string
    features: {
      text: string
      star?: boolean
    }[]
    cta: string
  }[]
  service: string
}

export type Item = ServicesMarketingProps['data'][number]

const { data, service } = defineProps<ServicesMarketingProps>()

const isModalOpen = ref(false)
const itemSelection = ref<string | null>(null)

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value
}

const handleClick = (title: string) => {
  toggleModal()
  itemSelection.value = title
}

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

      <Button class="cta" :text="item.cta" @click="handleClick(item.title)" />

    </div>

    <ModalServices 
      v-if="isModalOpen && itemSelection" 
      :toggleModal="toggleModal" 
      :serviceItem="itemSelection"
      :service="service"
    />

  </section>

</template>