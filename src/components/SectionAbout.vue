<template>
  <section class="about">
    <div class="container">
      <numbered-title :number="1" :title="`About Me`" />
      <div class="about-flex">
        <div class="about__text">
          <p>
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>
          <p>
            Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </p>
          <p>
            I also recently
            <a href="#" class="text-link">launched a course</a> that covers
            everything you need to build a web app with the Spotify API using
            Node & React.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul class="about__list">
            <li
              v-for="(el, idx) in sectionContent.skills"
              :key="idx"
              class="about__list-el"
            >
              {{ el }}
            </li>
          </ul>
        </div>
        <div class="about__right">
          <div class="about__photo-wrapper">
            <div
              class="about__photo"
              style="
                background-image: url('https://avatars.githubusercontent.com/u/2180116?v=4');
              "
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NumberedTitle from "./NumberedTitle.vue";

export default {
  name: "SectionAbout",
  components: { NumberedTitle },
  data() {
    return {
      sectionContent: {
        skills: [
          "JavaScript (ES6+)",
          "TypeScript",
          "React",
          "Eleventy",
          "Node.js",
          "WordPress",
        ],
      },
    };
  },
};
</script>

<style scoped lang="scss">
.about {
  margin: 100px 0;
}
.container {
  max-width: 900px;
}
.about__text {
  font-size: 16px;
  color: $main-text-dark;
  line-height: 1.5;
  p:not(:last-child) {
    margin-bottom: 15px;
  }
}
.about-flex {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;
}
.about__list {
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 0px 10px;
  padding: 0px;
  margin: 20px 0px 0px;
  overflow: hidden;
  list-style: none;
}
.about__list-el {
  font-size: 14px;
  font-family: $font-mono;
  font-weight: 400;
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
  &::before {
    content: "•";
    position: absolute;
    left: 0;
    top: calc(50% + 1px);
    transform: translateY(-50%);
    color: $light-blue;
  }
}

.about__photo-wrapper {
  position: relative;
  width: 300px;
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 20px;
    left: 20px;
    border: 2px solid $light-blue;
    border-radius: 4px;
    transition: 0.2s ease-in-out;
  }
  &:hover {
    .about__photo {
      filter: grayscale(0);
    }
    &::after {
      left: 10px;
      top: 10px;
    }
  }
}
.about__photo {
  width: 300px;
  height: 300px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 4px;
  filter: grayscale(100%);
  transition: 0.2s ease-in-out;
}
</style>
