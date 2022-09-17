<script setup>
// define props
const props = defineProps({
  number: {
    type: Number,
    required: false,
    default: 0,
  },
  title: {
    type: String,
    required: true,
    default: "",
  },
});
</script>

<template>
  <h2 class="numbered-title" :data-number="`0${props.number}.`">
    <div class="numbered-title__wrapper">{{ props.title }}</div>
  </h2>
</template>

<style lang="scss" scoped>
.numbered-title {
  margin: 10px 0 40px 0;
  font-size: 28px;
  color: $main-text;
  font-weight: 600;
  &::before {
    content: attr(data-number);
    font-family: $font-mono;
    margin-right: 10px;
    color: $light-blue;
    font-size: 24px;
    font-weight: 400;
  }

  &__wrapper {
    position: relative;
    display: inline-block;
    margin: 0;
    &::after {
      content: "";
      position: absolute;
      left: calc(100% + 20px);
      top: 50%;
      transform: translate(0, -50%);
      width: 160px;
      height: 1px;
      background-color: $main-text;
    }
  }
}
</style>
