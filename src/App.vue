<template>
  <div class="app">
    <the-header />
    <section-atm />
    <section-about />
    <section-experience />
    <section-contact />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import SectionAtm from "@/components/SectionAtm.vue";
import SectionAbout from "./components/SectionAbout.vue";
import SectionExperience from "./components/SectionExperience.vue";
import SectionContact from "./components/SectionContact.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    SectionAtm,
    SectionAbout,
    SectionExperience,
    SectionContact,
  },
};
</script>

<style lang="scss">
body {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, Roboto, sans-serif;
  background-color: #0a192f;
  color: #8892b0;
}
</style>
