<script setup lang="ts">
import './article.scss'
import ClockSvg from '@/components/icons/ClockSvg.vue'
import Tools from '@/components/atoms/tools/index.vue'
import Share from '@/components/atoms/share/index.vue'

type StepType = {
  title?: string
  step?: string
  description?: string
  list?: string[]
  code?: string
  img?: string
  imgAlt?: string
  imgWidth?: string
  imgHeight?: string
  resource?: string
}

type BlogArticleType = {
  id: number
  title: string
  meta: string
  image: string
  alt: string
  articleSummary: string
  readTime: string
  tags: string[]
  sharedOn: string[]
  publishDate: string
  steps: StepType[]
}

type BlogDataTypes = {
  data: {
    blog: BlogArticleType[]
  }
}

const { data } = defineProps<BlogDataTypes>()

</script>

<template>
  <section class="blog-article">

    <div class="author">

      <div class="heading">

        <NuxtPicture
          class="image"
          src="/images/blog/blog-author.png"
          alt="Vanguardi Author"
          format="webp"
        />

        <p class="author-name">Alejandro Cano</p>

      </div>

      <p class="description">
        Un diseñador independiente y desarrollador front-end dedicado a mejorar algo de la experiencia en la web, con un enfoque centrado en la mejora progresiva y el perfeccionamiento constante.
      </p>

    </div>

    <div class="article">

      <div class="heading">
        <p class="date">{{ data.publishDate }}</p>
        <h1 class="title">{{ data.title }}</h1>
      </div>

      <div class="content">

        <div class="summary">
          <p>{{ data.articleSummary }}</p>
        </div>

        <div class="image">
          <NuxtImg
          :src="data.image"
          :alt="data.alt"
          densities="x1"
        />
        </div>
        
        <div class="step" v-for="step in data.steps" :key="step.id">

          <h2 class="title">{{ step.title }}</h2>
          
          <p v-if="step.description" class="description">
            <strong>{{ step.step }}</strong>
            {{ step.description }}
          </p>

          <ul v-if="step.list" class="list">
            <li v-for="item in step.list" :key="item"> {{ item }} </li>
          </ul>

          <pre v-if="step.code" class="code">
            <code>
                {{ step.code }}
            </code>
          </pre>

          <NuxtImg
            v-if="step.img"
            class="image"
            :src="step.img"
            :alt="step.imgAlt"
            densities="x1"
          />

          <div v-if="step.resource" class="external-link" aria-label="link">⬇️📦
             <a :href="step.resource">{{ step.resource }}</a>
          </div>

        </div>

      </div>

    </div>

    <ul class="info-box">
      <li class="item">
        <ClockSvg class="icon-clock" />
        {{ data.readTime }} mins
      </li>
      <li class="item">
        <Tools :tools="data.tags" />
      </li>
      <li class="item">
        <Share :data="data.sharedOn" />
      </li>
    </ul>

  </section>
</template>