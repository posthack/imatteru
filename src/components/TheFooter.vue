<template>
  <footer class="footer">
    <div class="container">
      Built & Redesigned by Viktor Abakumov <br />Inspired by
      <a href="https://brittanychiang.com/" target="_blank" class="text-link"
        >Brittany Chiang</a
      >
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  padding: 25px 0;
  text-align: center;
  color: $main-text-dark;
  font-family: $font-mono;
  font-size: 12px;
  line-height: 2;
  .text-link {
    color: $main-text-dark;
    &::before,
    &::after {
      background-color: $main-text-dark;
    }
  }
}
</style>
