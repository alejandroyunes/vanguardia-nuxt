<script setup lang="ts">
import './blog-list.scss'

type Props = {
  data: {
    id: number
    title: string
    description: string
    url: string
    img: string
    alt: string
  }[]
}

const { data } = defineProps<Props>()

</script>

<template>
  <section class="blog-list">
    <div class="card" v-for="post in data" :key="post.id">
      <NuxtLink :to="`/blog/${post.url}/${post.id}`">
        <div class="image">
          <NuxtPicture
            :src="post.img"
            sizes="100vw xs:370px"
            format="webp"
            :alt="post.alt"
            width="370"
            height="200"
            loading="lazy"
          />
        </div>

        <h2 class="title">{{ post.title }}</h2>
        <p class="description">{{ post.description }}</p>
      </NuxtLink>
    </div>
  </section>
</template>
