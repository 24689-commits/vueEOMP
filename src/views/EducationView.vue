<template>
    <div>
          <section class="col">
      <header class="title">
        <h2>Education</h2>
      </header>
      <div class="container" v-for="edu in Education" :key="edu.id" id="box">
        <h4>{{ edu.year }}</h4>
        <h3>{{ edu.title }}</h3>
        <p>{{ edu.description }}</p>
      </div>
    </section>
    
    <section class="col">
      <header class="title">
        <h2>Work and Experience</h2>
      </header>
      <div class="contents">
        <div class="container" v-for="exp in Experience" :key="exp.id" id="box">
          <h4>{{ exp.year }}</h4>
          <h3>{{ exp.title }}</h3>
          <p>{{ exp.description }}</p>
        </div>
      </div>
    </section>
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
          
          
        
          
          
