<template>
  <div class="logo">va</div>
</template>

<script>
export default {
  name: "TheLogo",
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.logo {
  position: relative;
  top: 5px;
  left: 5px;
  font-size: 50px;
  padding: 10px 20px;
  font-family: $font-mono;
  text-transform: uppercase;
  color: $main-text;
  font-weight: 700;
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba($light-blue, 0.2);
    left: 0;
    top: 0;
    z-index: -1;
    transition: 0.5s ease-in-out;
    transition-delay: 2s;
  }
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba($light-blue, 0.2);
    left: 0;
    top: 0;
    z-index: -1;
    transition: 0.5s ease-in-out;
    transition-delay: 2s;
  }
}
.loaded .logo {
  &::before {
    transform: translate(-5px, -5px);
  }
  &::after {
    transform: translate(5px, 5px);
  }
}
</style>
