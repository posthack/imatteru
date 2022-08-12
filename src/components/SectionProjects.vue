<template>
  <section class="projects">
    <div class="container">
      <numbered-title :number="3" :title="title" />
      <div class="projects-list">
        <single-project
          v-for="(el, idx) in projects"
          :key="idx"
          :project="el"
          :is-right="idx % 2 === 0"
        />
      </div>

      <!-- todo: Other Noteworthy Projects section -->
    </div>
  </section>
</template>

<script>
import NumberedTitle from "./NumberedTitle.vue";
import SingleProject from "./SingleProject.vue";

export default {
  name: "SectionProjects",
  components: { SingleProject, NumberedTitle },
  data() {
    return {
      title: "Несколько моих проектов",
      projects: [
        {
          label: "Featured Project",
          title: "Halcyon Theme",
          description:
            "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
          tags: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
          links: [
            {
              link: "https://github.com",
              icon: "fab fa-github",
            },
            {
              link: "https://google.com",
              icon: "fab fa-external-link",
            },
          ],
          screenshot: "https://picsum.photos/200/300/?random",
        },
        {
          label: "Featured Project",
          title: "Spotify Profile",
          description:
            "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
          tags: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
          links: [
            {
              link: "https://github.com",
              icon: "fab fa-github",
            },
            {
              link: "https://google.com",
              icon: "fab fa-external-link",
            },
          ],
          screenshot: "https://picsum.photos/200/300/?random",
        },
        {
          label: "Featured Project",
          title: "Build a Spotify Connected App",
          description:
            "Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotify's OAuth flow and fetching API data in a React app. By the end of the course, you’ll have an app deployed to the internet you can add to your portfolio.",
          tags: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
          links: [
            {
              link: "https://github.com",
              icon: "fab fa-github",
            },
            {
              link: "https://google.com",
              icon: "fab fa-external-link",
            },
          ],
          screenshot: "https://picsum.photos/200/300/?random",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.projects {
  padding: 100px 0;
}
.container {
  max-width: 1000px;
}
</style>
