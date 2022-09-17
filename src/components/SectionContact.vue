<template>
  <section id="contacts" class="contact animate-scroll">
    <div class="container">
      <div class="contact__label">04. Чего дальше?</div>
      <div class="contact__title">Напиши мне</div>
      <div class="contact__desc">
        В настоящий момент я нахожусь в поиске новой работы.<br />Буду рад
        обсудить любые предложения
      </div>
      <div class="contact__buttons">
        <div class="contact__buttons-item">
          <a href="https://t.me/altyncent" target="_blank">Написать в телегу</a>
          <span class="contact__buttons-label">t.me/altyncent</span>
        </div>
        <div class="contact__buttons-item">
          <a href="mailto:hello@imatte.ru" target="_blank">Написать на почту</a>
          <span class="contact__buttons-label">hello@imatte.ru</span>
        </div>
        <div class="contact__buttons-item">
          <a
            href="https://chelyabinsk.hh.ru/resume/dde532e2ff038977c60039ed1f37733557344b"
            target="_blank"
            >Посмотреть резюме</a
          >
          <span class="contact__buttons-label">hh.ru</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  padding: 100px 0;
  margin-bottom: 100px;
  text-align: center;
  @include _sm {
    padding: 40px 0;
    text-align: left;
    margin-bottom: 20px;
  }
}
.container {
  max-width: 1000px;
  @include _sm {
    padding: 0 20px;
  }
}
.contact__label {
  color: $light-blue;
  margin: 10px 0 20px 0;
  font-family: $font-sans;
  font-size: 16px;
  @include _sm {
    font-size: 14px;
  }
}
.contact__title {
  font-size: 44px;
  font-family: $font-sans;
  color: $main-text;
  font-weight: 600;
  margin-bottom: 10px;
  line-height: 66px;
  @include _sm {
    text-align: left;
    font-size: 24px;
    line-height: 1.3;
  }
}
.contact__desc {
  line-height: 1.5;
  max-width: 500px;
  margin: 0 auto;
  @include _sm {
    text-align: left;
    font-size: 14px;
  }
}
.contact__buttons {
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  @include _sm {
    margin-top: 20px;
    flex-direction: column;
    align-items: flex-start;
  }
  &-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    &:not(:last-child) {
      margin-right: 20px;
      @include _sm {
        margin-right: 0;
        margin-bottom: 20px;
      }
    }
  }
  &-label {
    margin-top: 15px;
    font-size: 12px;
    font-family: $font-sans;
    @include _sm {
      margin-top: 5px;
      text-align: center;
    }
  }
  a {
    display: inline-flex;
    padding: 20px 28px;
    color: $light-blue;
    border: 1px solid $light-blue;
    border-radius: 4px;
    transition: 120ms ease-in-out;
    font-family: $font-sans;
    &:hover {
      background-color: rgba($light-blue, 0.1);
    }
    @include _sm {
      font-size: 12px;
      padding: 10px 14px;
    }
  }
}
</style>
