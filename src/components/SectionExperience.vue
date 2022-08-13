<template>
  <section class="experience">
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
            <a href="#" class="text-link">{{
              sectionContent.companies[activeTab].name
            }}</a>
          </div>
          <div class="experience__content-date">
            {{ sectionContent.companies[activeTab].date }}
          </div>
          <ul class="experience__content-list">
            <li
              v-for="(el, idx) in sectionContent.companies[activeTab]
                .responsibilities"
              :key="idx"
            >
              {{ el }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NumberedTitle from "./NumberedTitle.vue";

export default {
  name: "SectionExperience",
  components: {
    NumberedTitle,
  },
  data() {
    return {
      activeTab: 0,
      sectionContent: {
        title: "Где я работал",
        companies: [
          {
            id: 0,
            isSelected: true,
            name: "Bastion tech",
            date: "Март - Август 2022",
            responsibilities: [
              "Write modern, performant, maintainable code for a diverse array of client and internal projects",
              "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
              "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
            ],
            link: "https://google.com",
          },
          {
            id: 1,
            isSelected: false,
            name: "Algoritmika",
            date: "January - April 2018",
            responsibilities: [
              "Worked with a team of three designers to build a marketing website and e-commerce platform for blistabloc, an ambitious startup originating from Northeastern",
              "Helped solidify a brand direction for blistabloc that spans both packaging and web",
              "Interfaced with clients on a weekly basis, providing technological expertise",
            ],
            link: "https://google.com",
          },
          {
            id: 2,
            isSelected: false,
            name: "Nitka Technologies",
            date: "January - April 2018",
            responsibilities: [
              "Worked with a team of three designers to build a marketing website and e-commerce platform for blistabloc, an ambitious startup originating from Northeastern",
              "Helped solidify a brand direction for blistabloc that spans both packaging and web",
              "Interfaced with clients on a weekly basis, providing technological expertise",
            ],
            link: "https://google.com",
          },
          {
            id: 3,
            isSelected: false,
            name: "Freelance",
            date: "January - April 2018",
            responsibilities: [
              "Worked with a team of three designers to build a marketing website and e-commerce platform for blistabloc, an ambitious startup originating from Northeastern",
              "Helped solidify a brand direction for blistabloc that spans both packaging and web",
              "Interfaced with clients on a weekly basis, providing technological expertise",
            ],
            link: "https://google.com",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.experience {
  padding: 100px 0;
}
.container {
  max-width: 700px;
}
.experience__wrapper {
  display: flex;
}
.experience__tabs {
  width: max-content;
  display: flex;
  flex-direction: column;
}
.experience__tabs-item {
  width: 100%;
  height: 40px;
  padding: 0 20px 2px 20px;
  border: 0;
  border-left: 2px solid rgba($main-text-dark, 0.3);
  appearance: none;
  background-color: transparent;
  font-family: $font-mono;
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
}
.experience__content-title {
  font-size: 18px;
  line-height: 1.3;
  padding-bottom: 8px;
  font-family: $font-sans-calibri;
}
.experience__content-date {
  font-family: $font-mono;
  font-size: 13px;
  margin-bottom: 25px;
}
.experience__content-list {
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
    margin-bottom: 10px;
    padding-left: 20px;
    position: relative;
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
