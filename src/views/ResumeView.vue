<template>
  <div class="container">
    <h1 class="head">Education | Experience</h1>
    <div class="col">
      <header class="title">
        <h2>Education</h2>
      </header>
      <div class="content">
        <div v-for="edu in Education" :key="edu.id" class="box">
          <h4>{{ edu.year }}</h4>
          <h3>{{ edu.title }}</h3>
          <p>{{ edu.description }}</p>
        </div>
      </div>
    </div>

    <div class="col">
      <header class="title">
        <h2>Work and Experience</h2>
      </header>
      <div class="content">
        <div v-for="exp in Experience" :key="exp.id" class="box">
          <h4>{{ exp.year }}</h4>
          <h3>{{ exp.title }}</h3>
          <p>{{ exp.description }}</p>
        </div>
      </div>
    </div>

    <div class="container">
      <h1>Skill Set</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ut eveniet sapiente dolore omnis dolorem, dignissimos, nostrum quasi, aperiam exercitationem saepe eius! Laudantium sapiente consequuntur mollitia nemo facere reprehenderit dicta.</p>
      <div class="row">
        <div class="col-lg-4" v-for="skill in skills" :key="skill.id">
          <div class="card mb-4">
            <img :src="skill.image" class="card-img-top" :alt="skill.title">
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
  methods: {
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


.col {
  width: 80%;
  margin: 40px auto;
  padding-bottom: 10px;
  align-items: center; 
  border-radius: 8px;
  background-color: #c4b2b2;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

}


.title {
  text-align: center;
  padding-bottom: 0;
}

.title h2 {
  padding-top: 15px;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 10px;
  color: #333;
}

.content {
  margin: 20px 0 0 0;
}

.box {
  margin-bottom: 20px;
}

.box h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 5px;
  color: #473e3e;
}

.box h3 {
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 5px;
  color: #333;
}

.box p {
  font-size: 0.9rem;
  color: #3b51c3;
}

.container {
  padding-top: 2rem;
}

.card {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card-img-top {
  margin: auto;
  height: 170px;
  width: 170px;
  object-fit: cover;
}

.card-body {
  padding: 15px;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
}

.card-text {
  font-size: 0.9rem;
  color: #777;
}

.btn {
  margin-top: 1rem;
  font-size: 0.9rem;
  font-weight: 500;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0069d9;
  border-color: #0062cc;
}

.btn-primary:focus,
.btn-primary.focus {
  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
}

.head {
  text-align: center;
  padding-top: 100px;
  margin-bottom: 30px;
}
</style>
