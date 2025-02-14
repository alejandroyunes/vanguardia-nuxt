<script lang="ts" setup>
import Title from '~/components/atoms/title-description/index.vue'
import LinkSvg from '~/components/icons/LinkSvg.vue'
import GithubSvg from '~/components/icons/Github.vue';

const projects = [
  {
    title: 'Niche E-Commerce Platform',
    description: 'Un sitio web dinámico y especializado para usuarios que buscan irrigadores dentales, que incluye un blog con guías y reseñas.',
    image: '/images/portfolio/portfolio-1.webp',
    technologies: ['Nuxt.js', 'Node.js', 'SCSS', 'AWS'],
    demo: 'https://dental-irrigator.net/',
    github: 'https://github.com/alejandroyunes/nuxt-dental-irrigator'
  },
  {
    title: 'Plataforma E-commerce',
    description: 'Una plataforma de compra y venta de productos con posibilidad de apostar por el producto solo con el número telefónico.',
    image: '/images/portfolio/portfolio-2.webp',
    technologies: ['Nuxt.js', 'TypeScript', 'SEO', 'AWS'],
    demo: 'https://www.epicompras.com/',
    github: 'https://github.com/alejandroyunes/nuxt-dental-irrigator'
  },
  {
    title: 'Sitio WebDr. Puerta',
    description: 'Un sitio web elegante de la clínica que ofrece información detallada sobre el médico y sus procedimientos.',
    image: '/images/portfolio/portfolio-3.webp',
    technologies: ['Vue.js', 'OpenWeather API', 'Chart.js', 'SCSS'],
    demo: 'https://www.drpuerta.com/',
    github: 'https://github.com/alejandroyunes/nuxt-dr-puerta'
  }
]
</script>

<template>
  <Title marginTop title="Proyectos destacados" description="Aquí encontrarás algunos de los proyectos destacados que hemos desarrollado." />

  <section class="work">
    <div class="container">

      <div class="work__grid">
        <article v-for="project in projects" :key="project.title" class="project">
          <div class="project__image-wrapper">
            <NuxtImg :src="project.image" :alt="project.title" class="project__image" />
          </div>
          <div class="project__content">
            <h3 class="project__title">{{ project.title }}</h3>
            <p class="project__description">{{ project.description }}</p>
            <ul class="project__tech-stack">
              <li v-for="tech in project.technologies" :key="tech" class="project__tech">
                {{ tech }}
              </li>
            </ul>
            <div class="project__links">
              <NuxtLink :href="project.demo" class="project__link" target="_blank">
                <LinkSvg />
                <span>Vista Demo</span>
              </NuxtLink>
              <NuxtLink :href="project.github" class="project__link" target="_blank">
                <GithubSvg />
                <span>Código Fuente</span>
              </NuxtLink>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>


<style scoped lang="scss">
.work {
  padding: 2.5rem 0;

  .container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 1.5rem;

    @media (max-width: 768px) {
      padding: 0 1rem;
    }

  }

  &__title {
    font-size: 2.5rem;
    margin-bottom: 1rem * 4;
    text-align: center;
    color: var(--header);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 1rem * 3;
  }
}

.project {
  background-color: var(--backgruond-base);
  border-radius: 45px;
  overflow: hidden;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

    .project__image {
      transform: scale(1.05);
    }
  }

  &__image-wrapper {
    position: relative;
    padding-top: 56.25%;
    overflow: hidden;
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &__content {
    padding: 1rem * 2;
    background-color: var(--backgruond-opposite);

  }

  &__title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--heading);
  }

  &__description {
    color: var(--text);
    margin-bottom: 1rem;
  }

  &__tech-stack {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    align-content: flex-start;
    gap: 1rem;
    margin-bottom: 1rem * 2;
  }

  &__tech {
    font-size: 0.875rem;
    color: var(--white);
    padding: 0.5rem 0.8rem;
    background-color: var(--primary);
    border-radius: 45px;
  }

  &__links {
    display: flex;
    gap: 1rem;
  }

  &__link {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    color: var(--heading);
    text-decoration: none;
    font-size: 0.875rem;
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    font-weight: 600;


    &:hover {
      text-decoration: underline;
    }
  }
}
</style>