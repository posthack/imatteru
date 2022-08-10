<template>
  <section class="atm">
    <div class="container">
      <div class="atm__subtitle">{{ sectionContent.subtitle }}</div>
      <div class="atm__title">{{ sectionContent.firstTitle }}</div>
      <div class="atm__title _dark">{{ sectionContent.secondTitle }}</div>
      <div v-html="sectionContent.desc" class="atm__desc"></div>
      <div class="atm__button">
        <a :href="sectionContent.button.link">{{
          sectionContent.button.text
        }}</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionAtm",
  data() {
    return {
      sectionContent: {
        subtitle: "Hi, my name is",
        firstTitle: "Viktor Abakumov.",
        secondTitle: "I build things for the web.",
        desc: "I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.",
        button: {
          text: "Hire me!",
          link: "#",
        },
      },
    };
  },
};
</script>

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
}
</style>
