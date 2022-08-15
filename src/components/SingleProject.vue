<template>
  <div :class="{ 'single-project': true, 'is-right': isRight }">
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
    <div class="single-project__photo">
      <img :src="`images/${project.screenshot}`" alt="" />
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

<style lang="scss" scoped>
.single-project {
  display: flex;
  height: 350px;
  align-items: center;
  position: relative;
  &:not(:last-child) {
    margin-bottom: 100px;
  }
  &:hover .single-project__photo::before {
    opacity: 0;
    visibility: hidden;
  }
  &.is-right {
    text-align: right;
    justify-content: flex-end;
    .single-project__tags {
      justify-content: flex-end;
      li:not(:last-child) {
        margin-right: 0;
      }
      li:not(:first-child) {
        margin-left: 20px;
      }
    }
    .single-project__photo {
      left: 0;
      right: auto;
    }
  }
}
.single-project__meta {
  width: 100%;
  max-width: 50%;
}
.single-project__label {
  color: $light-blue;
  font-family: $font-mono;
  font-size: 12px;
  margin: 10px 0;
}
.single-project__title {
  font-family: $font-sans-calibri;
  color: $main-text;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
}
.single-project__desc {
  padding: 25px;
  border-radius: 4px;
  background-color: #fff;
  color: $main-text-dark;
  line-height: 1.5;
  font-size: 15px;
  font-family: $font-sans-calibri;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.1);
}
.single-project__tags {
  display: flex;
  align-items: center;
  padding-top: 25px;
  padding-bottom: 10px;
  li {
    font-family: $font-mono;
    color: $main-text-dark;
    font-size: 12px;
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
}
.single-project__links {
  a {
  }
}
.single-project__photo {
  height: 100%;
  position: absolute;
  right: 0;
  z-index: -1;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($light-blue, 0.1);
    transition: 300ms ease-in-out;
  }
  img {
    height: 100%;
  }
}
</style>
