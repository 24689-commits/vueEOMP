<template>
  <div class="container">
    <h1>This is a projects page</h1>
    <div class="row">
      <div class="col-lg-4" v-for="project in projects" :key="project.id">
        <div class="card mb-4">
          <img :src="project.image" class="card-img-top" :alt="project.title">
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <a :href="project.netlify" target="_blank" class="btn btn-primary">Netlify</a>
            <a :href="project.github" target="_blank" class="btn btn-secondary">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    }
  },
  mounted() {
    this.$store.dispatch('fetchProjects');
  }
};
</script>

<style scoped>

</style>
