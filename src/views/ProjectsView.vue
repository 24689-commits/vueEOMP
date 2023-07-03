<template>
<div class="background">
  <div class="container">
    <h1 class="text-center mb-4 animated-heading"><span>Explore</span> My Work</h1>
    <div class="row">
      <div class="col-lg-4" v-for="project in projects" :key="project.id">
        <div class="card mb-4">
          <img class="card-img-top img-fluid" :src="project.image" :alt="project.title" style="height:200px;">
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text" v-if="!project.showMore">{{ truncateText(project.description) }}</p>
            <p class="d-flex justify-content-between align-items-center" v-else>{{ project.description }}</p>
            <div class="button-container d-flex justify-content-center">
              <button class="btn btn-dark button-smaller mb-1" @click="toggleShowMore(project)">
                {{ project.showMore ? 'Read Less' : 'Read More' }}
              </button>
            </div>
            <div class="d-flex justify-content-center">
              <a :href="project.netlify" target="_blank" class="btn btn-primary button-smaller">Netlify</a>
              <a :href="project.github" target="_blank" class="btn btn-secondary button-smaller">GitHub</a>
            </div>
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
    projects() {
      return this.$store.state.projects;
    }
  },
  mounted() {
    this.$store.dispatch('fetchProjects');
  },
  methods: {
    truncateText(text) {
      const maxLength = 100;
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
      }
      return text;
    },
    toggleShowMore(project) {
      project.showMore = !project.showMore;
    }
  }
};
</script>

<style scoped>
.background{
   background-image: url('https://i.postimg.cc/Z5Jr23F9/shutterstock-582803470.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.container {
  margin-top: 90px;
}

.card {
  margin-top: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
  background-color: rgb(226, 222, 216);
}

.card:hover {
  transform: scale(1.05);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
}

.card-text {
  color: #666;
}

.btn-primary,
.btn-secondary,
.btn-dark {
  padding: 0.25rem 0.5rem;
  font-size: 14px;
}

.button-container {
  display: flex;
  align-items: center;
}

.button-smaller {
  margin-right: 0.5rem;
}

.btn-primary {
  background-color: #0D6EFD;
  border-color: #0D6EFD;
}

.btn-primary:hover {
  background-color: #0A58CA;
  border-color: #0A58CA;
}
.animated-heading {
  font-family: 'Arial', sans-serif;
  font-size: 36px;
  font-weight: bold;
  color: #333;
  position: relative;
  animation: heading-animation 2s ease-in-out infinite;
  background: linear-gradient(to right, #514b4b, #bb9065);
}
div .col{
  margin-top: 0;
}

@keyframes heading-animation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
    color: #a2b2c8;
  }
  100% {
    transform: scale(1);
  }
}
</style>
