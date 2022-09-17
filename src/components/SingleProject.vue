<script setup>
import IconGithub from "@/assets/icons/IconGithub.vue";
import IconExternal from "@/assets/icons/IconExternal.vue";

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
  isRight: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<template>
  <div
    :class="{
      'single-project': true,
      'animate-scroll': true,
      'is-right': props.isRight,
    }"
  >
    <div class="single-project__meta">
      <div class="single-project__label">{{ props.project.label }}</div>
      <div class="single-project__title">{{ props.project.title }}</div>
      <div
        class="single-project__desc"
        v-html="props.project.description"
      ></div>
      <ul class="single-project__tags">
        <li v-for="(el, idx) in props.project.tags" :key="idx">{{ el }}</li>
      </ul>
      <div class="single-project__links">
        <a
          v-for="(el, idx) in props.project.links"
          :key="idx"
          :href="el.link"
          target="_blank"
          class="single-project__links-item"
        >
          <icon-github v-if="el.icon === 'github'" />
          <icon-external v-if="el.icon === 'external'" />
        </a>
      </div>
    </div>
    <div class="single-project__photo">
      <img :src="`images/${props.project.screenshot}`" alt="" />
    </div>
  </div>
</template>

<style lang="scss">
.single-project {
  display: flex;
  height: 350px;
  align-items: center;
  position: relative;
  @include _sm {
    height: auto;
  }
  &:not(:last-child) {
    margin-bottom: 100px;
    @include _sm {
      margin-bottom: 20px;
    }
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
    .single-project__links {
      justify-content: flex-end;
    }
    .single-project__links-item {
      &:not(:last-child) {
        margin-left: 10px;
        margin-right: 0;
      }
    }
  }
}
.single-project__meta {
  width: 100%;
  max-width: 50%;
  @include _sm {
    max-width: 100%;
  }
}
.single-project__label {
  color: $light-blue;
  font-family: $font-sans;
  font-size: 12px;
  margin: 10px 0;
}
.single-project__title {
  font-family: $font-sans;
  color: $main-text;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  @include _sm {
    font-size: 18px;
  }
}
.single-project__desc {
  padding: 25px;
  border-radius: 4px;
  background-color: #fff;
  color: $main-text-dark;
  line-height: 1.5;
  font-size: 15px;
  font-family: $font-sans;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.1);
  @include _sm {
    font-size: 12px;
    padding: 14px;
  }
  a {
    color: $light-blue;
  }
}
.single-project__tags {
  display: flex;
  align-items: center;
  padding-top: 25px;
  padding-bottom: 10px;
  li {
    font-family: $font-sans;
    color: $main-text-dark;
    font-size: 12px;
    @include _sm {
      font-size: 10px;
    }
    &:not(:last-child) {
      margin-right: 20px;
      @include _sm {
        margin-right: 10px;
      }
    }
  }
}
.single-project__links {
  display: flex;
  align-items: center;
}
.single-project__links-item {
  display: flex;
  padding: 10px;
  &:not(:last-child) {
    margin-right: 10px;
  }
  svg {
    width: 22px;
    height: 22px;
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
  @include _sm {
    display: none;
  }
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
