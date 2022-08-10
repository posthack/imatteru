<template>
  <h2 class="numbered-title" :data-number="`0${number}.`">{{ title }}</h2>
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
}
</style>
