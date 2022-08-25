<template>
  <section id="projects" class="projects">
    <div class="container">
      <numbered-title :number="3" :title="title" />
      <div class="projects-list">
        <single-project v-for="(el, idx) in projects" :key="idx" :project="el" :is-right="idx % 2 === 0" />
      </div>
    </div>
  </section>
</template>

<script>
import NumberedTitle from "./NumberedTitle.vue";
import SingleProject from "./SingleProject.vue";

export default {
  name: "SectionProjects",
  components: { SingleProject, NumberedTitle },
  data() {
    return {
      title: "Несколько моих проектов",
      projects: [
        {
          label: "Корпоративный проект",
          title: "Сервис лендингов",
          description:
            "Сервис лендингов для школы программирования <a href='https://algoritmika.org' target='_blank' class='text-link'>Алгоритмика</a>. Мультиязычность, адаптивность, платежная система.",
          tags: ["Vue", "Nuxt", "SCSS", "i18n", "Figma"],
          links: [
            {
              link: "https://algoritmika.org",
              icon: "external",
            },
          ],
          screenshot: "single-project-01.png",
        },
        {
          label: "Корпоративный проект",
          title: "Bastion secure cloud",
          description:
            "Облачное хранилище с E2E шифрованием. Доступ к ключам шифрования есть только у отправителя и получателя.",
          tags: ["Vue 3", "TypeScript", "Vite", "SCSS", "i18n", "Figma"],
          links: [
            {
              link: "https://bsc.bastion-tech.ru/",
              icon: "external",
            },
          ],
          screenshot: "single-project-02.png",
        },
        {
          label: "Корпоративный проект",
          title: "Интернет магазин одежды",
          description:
            "Иностранный интернет магазин одежды с кучей сложных, красивых анимаций.",
          tags: ["Vanilla JS", "CSS3", "Animations", "Figma"],
          links: [
            {
              link: "https://yelvy.com/",
              icon: "external",
            },
          ],
          screenshot: "single-project-03.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.projects {
  padding: 100px 0;
}

.container {
  max-width: 1000px;
}
</style>
