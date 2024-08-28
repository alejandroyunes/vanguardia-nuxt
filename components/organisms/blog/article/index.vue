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
  blogPageSummary: string
  articleSummary: string
  time: string
  related: string[]
  shared: string[]
  date: string
  step: StepType[]
}

type BlogDataTypes = {
  data: {
    author: string
    description: string
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
          sizes="100vw xs:360px sm:500px"
          format="webp"
        />

        <p class="author-name">{{ data.author }}</p>

      </div>

      <p class="description">
        {{ data.description }}
      </p>

    </div>

    <div class="article">

      <div class="heading">
        <p class="date">{{ data.blog[0].date }}</p>
        <h1 class="title">{{ data.blog[0].title }}</h1>
      </div>

      <div class="content">

        <p class="summary">
          {{ data.blog[0].articleSummary }}
        </p>

          <NuxtPicture
            class="image"
            :src="data.blog[0].image"
            :alt="data.blog[0].alt"
            sizes="100vw xs:400px sm:500px"
            format="webp"
          />

        <div class="step">

          <h2 class="title">{{ data.blog[0].step[0].title }}</h2>

          <p class="description">
            <strong>{{ data.blog[0].step[0].step }}</strong>
            {{ data.blog[0].step[0].description }}
          </p>

          <ul class="list">
            <li> {{ data.blog[0].step[0].list }} </li>
          </ul>

          <pre class="code">
            <code>
                {{ data.blog[0].step[0].code }}
            </code>
          </pre>

          <NuxtPicture class="image" :src="data.blog[0].step[0].img" :alt="data.blog[0].step[0].imgAlt"
            sizes="100vw xs:360px sm:500px" format="webp" />

          <span class="link" aria-label="link">⬇️📦
            <a href="{{data.blog[0].step[0].resource}}">{{ data.blog[0].step[0].resource }}</a>
          </span>

        </div>

      </div>

    </div>

    <ul class="info-box">
      <li class="item">
        <ClockSvg class="icon-clock" />
        {{ data.blog[0].time }} mins
      </li>
      <li class="item">
        <Tools :tools="data.blog[0].related" />
      </li>
      <li class="item">
        <Share :data="data.blog[0].shared" />
      </li>
    </ul>

  </section>
</template>