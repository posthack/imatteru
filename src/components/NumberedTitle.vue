<template>
  <h2 class="numbered-title" :data-number="`0${number}.`">
    <div class="numbered-title__wrapper">{{ title }}</div>
  </h2>
</template>

<script>
export default {
  name: "NumberedTitle",
  props: {
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
  },
};
</script>

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
