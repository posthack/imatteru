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
            class="header-nav__item anim-fade-down"
            :style="`transition-delay: ${++idx * 150}ms`"
            >{{ el }}</a
          >
        </nav>
        <a
          href="#"
          class="header__resume anim-fade-down"
          :style="`transition-delay: ${(links.length + 2) * 150}ms`"
          >Resume</a
        >
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
.header {
  position: absolute;
  left: 0;
  top: 0;
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: $font-mono;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  padding: 0 50px;
  max-width: 100%;
}
.header-nav {
  display: flex;
}
.header__right {
  display: flex;
  align-items: center;
}
.header-nav__item {
  color: $main-text;
  padding: 10px;
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
  transition: 120ms ease-in-out;
  &:hover {
    background-color: rgba($light-blue, 0.1);
  }
}
</style>
