<template>
  <section class="experience">
    <div class="container">
      <div class="numeric-title" data-number="02.">
        {{ sectionContent.title }}
      </div>
      <div class="experience__wrapper">
        <div class="experience__tabs">
          <button
            v-for="el in sectionContent.companies"
            :key="el.id"
            class="experience__tabs-item"
          >
            {{ el.name }}
          </button>
        </div>
        <div class="experience__content">
          <div class="experience__content-item"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionExperience",
  data() {
    return {
      sectionContent: {
        title: "Where I’ve worked",
        companies: [
          {
            id: 0,
            isSelected: true,
            name: "Upstatement",
            date: "2019 - Present",
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
            name: "Scout",
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
            name: "Apple",
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
            name: "Scout",
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

<style></style>
