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

   <div class="container">
    <div class="row">
      <div class="col-lg-4" v-for="skill in skills" :key="skill.id">
        <div class="card mb-4">
          <img :src="skill.image" class="card-img-top img-fluid" :alt="skill.title">
          <div class="card-body">
            <h5 class="card-title">{{ skill.title }}</h5>
            <p class="card-text" v-if="!skill.showMore">{{ truncateText(skill.description) }}</p>
            <p class="card-text" v-else>{{ skill.description }}</p>
            <button class="btn btn-primary" @click="toggleShowMore(skill)">
              {{ skill.showMore ? 'Read Less' : 'Read More' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
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
    },
    skills() {
      return this.$store.state.skills;
    }
  },
  mounted() {
    this.$store.dispatch('fetchEducation');
    this.$store.dispatch('fetchExperience');
     this.$store.dispatch('fetchSkills');
  },
  methods :{
    truncateText(text) {
      const maxLength = 100;
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
      }
      return text;
    },
    toggleShowMore(skill) {
      skill.showMore = !skill.showMore;
    }
  }
};
</script>

<style scoped>
.main-content{
    display: flex;
}
.main-content #box{
    flex-basis: 50%;
    padding: 10px 20px;
}
#box h2{
    font-size: 1.12rem;
    font-weight: 600;
    text-transform: uppercase;
}
#box .content{
    margin: 20px 0 0 0;
}




.d-flex h1{
    margin-right: 5rem;
    margin-top: 3rem;

}
.container {
  padding-top: 2rem;
}

.card {
  width: 100%;
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.btn {
  margin-top: 1rem;
}

</style>
          
          
        
          
          
