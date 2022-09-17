<script setup>
import { ref } from "vue";

const sectionContent = ref({
  subtitle: "Привет, меня зовут",
  firstTitle: "Абакумов Виктор.",
  secondTitle: "Я делаю фронт для сайтов.",
  desc: "Frontend разработчик с 12-летним стажем. Последние 4 года занимаюсь корпоративной разработкой проектов на <a href='https://vuejs.org/' class='text-link' target='_blank'>VueJS</a>. В настоящее время нахожусь в поиске новой работы.",
  button: {
    text: "Найми меня",
    link: "#contacts",
  },
});
</script>

<template>
  <section class="atm">
    <div class="container">
      <div
        class="atm__subtitle anim-fade-right"
        :style="`transition-delay: ${8 * 150}ms`"
      >
        {{ sectionContent.subtitle }}
      </div>
      <div
        class="atm__title anim-fade-right"
        :style="`transition-delay: ${9 * 150}ms`"
      >
        {{ sectionContent.firstTitle }}
      </div>
      <div
        class="atm__title _dark anim-fade-right"
        :style="`transition-delay: ${10 * 150}ms`"
      >
        {{ sectionContent.secondTitle }}
      </div>
      <div
        v-html="sectionContent.desc"
        class="atm__desc anim-fade-right"
        :style="`transition-delay: ${11 * 150}ms`"
      ></div>
      <div
        class="atm__button anim-fade-up"
        :style="`transition-delay: ${12 * 150}ms`"
      >
        <a :href="sectionContent.button.link">{{
          sectionContent.button.text
        }}</a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.atm {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  max-width: 1000px;
  width: 100%;
  @include _sm {
    padding: 0 20px;
  }
}
.atm__subtitle {
  font-size: 16px;
  color: $light-blue;
  font-family: $font-sans;
  margin: 0 0 30px 4px;
  @include _sm {
    font-size: 16px;
    margin: 0 0 20px 4px;
  }
}
.atm__title {
  font-size: 70px;
  line-height: 1.3;
  color: $main-text;
  font-weight: 600;
  font-family: $font-sans;
  @include _sm {
    font-size: 24px;
  }
}
.atm__desc {
  margin-top: 20px;
  line-height: 1.5;
  font-size: 16px;
  color: $main-text-dark;
  max-width: 540px;
  @include _sm {
    max-width: 100%;
  }
  a {
    color: $light-blue;
  }
}
.atm__button {
  margin-top: 50px;
  a {
    display: inline-flex;
    padding: 20px 28px;
    color: $light-blue;
    border: 1px solid $light-blue;
    border-radius: 4px;
    transition: 120ms ease-in-out;
    font-family: $font-sans;
    &:hover {
      background-color: rgba($light-blue, 0.1);
    }
  }
}
</style>
