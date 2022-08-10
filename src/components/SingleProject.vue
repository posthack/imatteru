<template>
  <div class="single-project">
    <div class="single-project__meta">
      <div class="single-project__label">{{ project.label }}</div>
      <div class="single-project__title">{{ project.title }}</div>
      <div class="single-project__desc" v-html="project.description"></div>
      <ul class="single-project__tags">
        <li v-for="(el, idx) in project.tags" :key="idx">{{ el }}</li>
      </ul>
      <div class="single-project__links">
        <a
          v-for="(el, idx) in project.links"
          :key="idx"
          :href="el.link"
          :class="el.icon"
          target="_blank"
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleProject",
  props: {
    project: {
      type: Object,
      required: true,
    },
    isRight: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style></style>
