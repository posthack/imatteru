<template>
  <section class="atm">
    <div class="container">
      <div
        class="atm__subtitle anim-fade-right"
        :style="`transition-delay: ${8 * 150}ms`"
      >
        {{ sectionContent.subtitle }}
      </div>
      <div
        class="atm__title anim-fade-right"
        :style="`transition-delay: ${9 * 150}ms`"
      >
        {{ sectionContent.firstTitle }}
      </div>
      <div
        class="atm__title _dark anim-fade-right"
        :style="`transition-delay: ${10 * 150}ms`"
      >
        {{ sectionContent.secondTitle }}
      </div>
      <div
        v-html="sectionContent.desc"
        class="atm__desc anim-fade-right"
        :style="`transition-delay: ${11 * 150}ms`"
      ></div>
      <div
        class="atm__button anim-fade-up"
        :style="`transition-delay: ${12 * 150}ms`"
      >
        <a :href="sectionContent.button.link">{{
          sectionContent.button.text
        }}</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionAtm",
  data() {
    return {
      sectionContent: {
        subtitle: "Hi, my name is",
        firstTitle: "Viktor Abakumov.",
        secondTitle: "I build things for the web.",
        desc: "I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at <a href='#'>Upstatement</a>.",
        button: {
          text: "Hire me!",
          link: "#",
        },
      },
    };
  },
};
</script>

<style lang="scss">
.atm {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  max-width: 1000px;
  width: 100%;
}
.atm__subtitle {
  font-size: 16px;
  color: $light-blue;
  font-family: $font-mono;
  margin: 0 0 30px 4px;
}
.atm__title {
  font-size: 70px;
  line-height: 1.3;
  color: $main-text;
  font-weight: 600;
  font-family: $font-sans-calibri;
  &._dark {
    color: $main-text-dark;
  }
}
.atm__desc {
  margin-top: 20px;
  line-height: 1.5;
  font-size: 16px;
  color: $main-text-dark;
  max-width: 540px;
  a {
    color: $light-blue;
  }
}
.atm__button {
  margin-top: 50px;
  a {
    display: inline-flex;
    padding: 20px 28px;
    color: $light-blue;
    border: 1px solid $light-blue;
    border-radius: 4px;
    transition: 120ms ease-in-out;
    font-family: $font-mono;
    &:hover {
      background-color: rgba($light-blue, 0.1);
    }
  }
}
</style>
