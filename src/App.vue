<script setup>
import { ref, onMounted } from "vue";
import TheHeader from "@/components/TheHeader.vue";
import SectionAtm from "@/components/SectionAtm.vue";
import SectionAbout from "./components/SectionAbout.vue";
import SectionExperience from "./components/SectionExperience.vue";
import SectionProjects from "./components/SectionProjects.vue";
import SectionContact from "./components/SectionContact.vue";
import TheFooter from "./components/TheFooter.vue";
import { animateScroll } from "./helpers/scroll.js";

const isLoading = ref(true);
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
  animateScroll(".animate-scroll", "fade");
});
</script>

<template>
  <div :class="{ app: true, loaded: !isLoading }">
    <the-header />
    <section-atm />
    <section-about />
    <section-experience />
    <section-projects />
    <section-contact />
    <the-footer />
  </div>
</template>

<style lang="scss"></style>
