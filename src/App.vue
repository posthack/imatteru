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

<script>
import TheHeader from "@/components/TheHeader.vue";
import SectionAtm from "@/components/SectionAtm.vue";
import SectionAbout from "./components/SectionAbout.vue";
import SectionExperience from "./components/SectionExperience.vue";
import SectionProjects from "./components/SectionProjects.vue";
import SectionContact from "./components/SectionContact.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    SectionAtm,
    SectionAbout,
    SectionExperience,
    SectionProjects,
    SectionContact,
    TheFooter,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
};
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
::-webkit-scrollbar {
  width: 6px;
  height: 10px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: rgba($main-text, 0.2);
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

body {
  font-family: $font-sans;
  background-color: $main-bg;
  color: $main-text;
  overflow-x: hidden;
  ::selection {
    background-color: lighten($main-bg, 5%);
  }
}
.app {
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: darken($main-bg, 4%);
    opacity: 1;
    transition: all 0.5s linear;
  }
  &.loaded::after {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
