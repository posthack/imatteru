<template>
  <section id="contacts" class="contact">
    <div class="container">
      <div class="contact__label">04. What's Next?</div>
      <div class="contact__title">Get In Touch</div>
      <div class="contact__desc">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you! Say Hello
      </div>
      <div class="contact__button">
        <a href="#" target="_blank">Say Hello</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionContact",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.contact {
  padding: 100px 0;
  margin-bottom: 100px;
  text-align: center;
}
.container {
  max-width: 600px;
}
.contact__label {
  color: $light-blue;
  margin: 10px 0 20px 0;
  font-family: $font-mono;
  font-size: 16px;
}
.contact__title {
  font-size: 44px;
  font-family: $font-sans;
  color: $main-text;
  font-weight: 600;
  margin-bottom: 10px;
  line-height: 66px;
}
.contact__desc {
  line-height: 1.5;
}
.contact__button {
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
