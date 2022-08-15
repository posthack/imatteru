<template>
  <header class="header">
    <div class="container">
      <a
        href="#"
        class="anim-fade-in"
        style="transition-delay: 1s; transition-duration: 0.5s"
      >
        <TheLogo />
      </a>
      <div class="header__right">
        <ul class="header-nav">
          <li
            v-for="(el, idx) in links"
            :key="idx"
            class="anim-fade-down"
            :style="`transition-delay: ${(idx + 1) * 150}ms`"
          >
            <a
              class="header-nav__item"
              :data-counter="`0${idx + 1}.`"
              :href="`#${el.link}`"
              >{{ el.title }}</a
            >
          </li>
        </ul>
        <div
          class="header__resume anim-fade-down"
          :style="`transition-delay: ${(links.length + 2) * 150}ms`"
        >
          <a :href="resume.link" target="_blank">{{ resume.title }}</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import TheLogo from "./TheLogo.vue";

export default {
  name: "TheHeader",
  components: {
    TheLogo,
  },
  data() {
    return {
      links: [
        {
          title: "Обо мне",
          link: "about",
        },
        {
          title: "Мой опыт",
          link: "experience",
        },
        {
          title: "Проекты",
          link: "projects",
        },
        {
          title: "Контакты",
          link: "contacts",
        },
      ],
      resume: {
        title: "Резюме",
        link: "#",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  left: 0;
  top: 0;
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: $font-mono;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 50px;
  max-width: 100%;
}
.header-nav {
  display: flex;
}
.header__right {
  display: flex;
  align-items: center;
}
.header-nav__item {
  color: $main-text;
  padding: 10px;
  &:hover {
    color: $light-blue;
  }
  &::before {
    content: attr(data-counter);
    margin-right: 5px;
    color: $light-blue;
  }
  a {
    display: block;
  }
}
.header__resume {
  margin-left: 15px;
  a {
    display: block;
    padding: 12px 16px;
    color: $light-blue;
    border: 1px solid $light-blue;
    border-radius: 4px;
    transition: 120ms ease-in-out;
    &:hover {
      background-color: rgba($light-blue, 0.1);
    }
  }
}
</style>
