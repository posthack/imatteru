<script setup>
import { ref } from "vue";
import NumberedTitle from "./NumberedTitle.vue";

const activeTab = ref(0);
const sectionContent = ref({
  title: "Где я работал",
  companies: [
    {
      id: 0,
      isSelected: true,
      name: "Bastion tech",
      date: "Март - Август 2022",
      responsibilities: [
        "разработка нового функционала для облачного хранилища с использованием <a href='https://vuejs.org/' class='text-link' target='_blank'>Vue</a>, <a href='https://www.typescriptlang.org/' class='text-link' target='_blank'>TypeScript</a> и <a href='https://vitejs.dev/' class='text-link' target='_blank'>Vite</a>",
        "написание документации к проекту",
      ],
      link: "https://bastion-tech.ru/",
    },
    {
      id: 1,
      isSelected: false,
      name: "Algoritmika",
      date: "Октябрь 2018 - Март 2022",
      responsibilities: [
        "разработка внутренней обучающей платформы с использованием <a href='https://reactjs.org/' class='text-link' target='_blank'>React</a>, <a href='https://redux.js.org/' class='text-link' target='_blank'>Redux</a>, <a href='https://styled-components.com/' class='text-link' target='_blank'>Styled components</a>",
        "разработка сервиса лендингов компании с использованием <a href='https://vuejs.org/' class='text-link' target='_blank'>Vue</a> и <a href='https://nuxtjs.org/' class='text-link' target='_blank'>Nuxt</a>",
        "переписывание внутреннего дашборда с html/js/jquery на <a href='https://vuejs.org/' class='text-link' target='_blank'>Vue 3</a>",
        "разработка новых компонентов и функционала на <a href='https://vuejs.org/' class='text-link' target='_blank'>Vue 3</a>",
      ],
      link: "https://algoritmika.org",
    },
    {
      id: 2,
      isSelected: false,
      name: "Nitka Technologies",
      date: "Май 2015 - Октябрь 2018",
      responsibilities: [
        "разработка посадочных страницы для стартапов иностранных клиентов компании",
        "использовал html/css/vanilla js/jquery, интегрировал бэк с <a href='https://firebase.google.com/' class='text-link' target='_blank'>Firebase</a>",
        "был загружен на ~3 дня в неделю",
        "в остальное время продолжал брать различные заказы на фрилансе",
      ],
      link: "",
    },
    {
      id: 3,
      isSelected: false,
      name: "Freelance",
      date: "Февраль 2010 - Май 2015",
      responsibilities: [
        "заказы на верстку различной сложности + несложный фронт",
        "сайты под ключ: верстка + бэкенд на PHP и MySQL",
      ],
      link: "",
    },
  ],
});
</script>

<template>
  <section id="experience" class="experience animate-scroll">
    <div class="container">
      <numbered-title :number="2" :title="sectionContent.title" />
      <div class="experience__wrapper">
        <div class="experience__tabs">
          <button
            v-for="el in sectionContent.companies"
            :key="el.id"
            :class="{
              'experience__tabs-item': true,
              _active: el.id === activeTab,
            }"
            @click="activeTab = el.id"
          >
            {{ el.name }}
          </button>
        </div>
        <div class="experience__content">
          <div class="experience__content-title">
            <span v-if="sectionContent.companies[activeTab].link.length">
              Frontend developer @
              <a
                :href="sectionContent.companies[activeTab].link"
                class="text-link"
                target="_blank"
                >{{ sectionContent.companies[activeTab].name }}</a
              >
            </span>
            <span v-else>{{ sectionContent.companies[activeTab].name }}</span>
          </div>
          <div class="experience__content-date">
            {{ sectionContent.companies[activeTab].date }}
          </div>
          <ul class="experience__content-list">
            <li
              v-for="(el, idx) in sectionContent.companies[activeTab]
                .responsibilities"
              :key="idx"
              v-html="el"
            ></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.experience {
  padding: 100px 0;
  @include _sm {
    padding: 40px 0;
  }
}
.container {
  max-width: 700px;
  @include _sm {
    max-width: 100%;
    padding: 0 20px;
  }
}
.experience__wrapper {
  display: flex;
  @include _sm {
    flex-direction: column;
  }
}
.experience__tabs {
  width: max-content;
  display: flex;
  flex-direction: column;
  @include _sm {
    width: 100%;
  }
}
.experience__tabs-item {
  width: 100%;
  height: 40px;
  padding: 0 20px 2px 20px;
  border: 0;
  border-left: 2px solid rgba($main-text-dark, 0.3);
  appearance: none;
  background-color: transparent;
  font-family: $font-sans;
  color: $main-text-dark;
  border-radius: 0;
  white-space: nowrap;
  cursor: pointer;
  text-align: left;
  &:hover {
    background-color: $main-bg-light;
  }
  &._active {
    color: $light-blue;
    border-left-color: $light-blue;
  }
}
.experience__content {
  width: 100%;
  margin-left: 20px;
  @include _sm {
    margin-top: 20px;
    margin-left: 0;
  }
}
.experience__content-title {
  font-size: 18px;
  line-height: 1.3;
  padding-bottom: 8px;
  font-family: $font-sans;
  color: $main-text;
  @include _sm {
    font-size: 16px;
  }
}
.experience__content-date {
  font-family: $font-sans;
  font-size: 13px;
  margin-bottom: 25px;
}
.experience__content-list {
  list-style: none;
  padding: 0;
  margin: 0;
  color: $main-text-dark;
  li {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
    margin-bottom: 10px;
    padding-left: 20px;
    position: relative;
    @include _sm {
      font-size: 14px;
    }
    &::before {
      content: "•";
      position: absolute;
      left: 0;
      top: calc(50% + 1px);
      transform: translateY(-50%);
      color: $light-blue;
    }
  }
}
</style>
