<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias voluptates et incidunt sapiente reprehenderit
      unde corporis totam doloribus, nemo corrupti! Suscipit, laudantium aspernatur! Incidunt magnam laudantium suscipit
      doloremque quis ipsa!
    </p>
    
   
  </div>
</template>

<script>
export default {
  computed: {
    Education() {
      return this.$store.state.Education;
    },
    Experience() {
      return this.$store.state.Experience;
    }
  },
  mounted() {
    this.$store.dispatch('fetchEducation');
    this.$store.dispatch('fetchExperience');
  }
};

</script>

<style scoped>

</style>
