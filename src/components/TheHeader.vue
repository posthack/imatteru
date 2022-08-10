<template>
  <header class="header">
    <div class="container">
      <a href="#">logo</a>
      <div class="header__right">
        <nav class="header-nav">
          <a
            v-for="(el, idx) in links"
            :key="idx"
            :href="`#${el.toLocaleLowerCase()}`"
            :data-counter="`0${++idx}.`"
            class="header-nav__item"
            >{{ el }}</a
          >
        </nav>
        <a href="#" class="header__resume">Resume</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      links: ["About", "Experience", "Projects", "Contact"],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@scss/vars.scss";
.header {
  position: absolute;
  left: 0;
  top: 0;
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 14px;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  padding: 0 50px;
  max-width: 1100px;
}
.header-nav {
  display: flex;
}
.header__right {
  display: flex;
  align-items: center;
}
.header-nav__item {
  color: $main-text-color;
  padding: 10px;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  &:hover {
    color: $light-blue;
  }
  &::before {
    content: attr(data-counter);
    margin-right: 5px;
    color: $light-blue;
  }
}
.header__resume {
  padding: 12px 16px;
  margin-left: 15px;
  color: $light-blue;
  border: 1px solid $light-blue;
  border-radius: 4px;
}
</style>
