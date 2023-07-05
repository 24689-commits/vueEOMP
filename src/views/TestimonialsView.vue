<template>
  <div class="container">
    <h1>Testimonials</h1>
    <div class="row">
      <div
        class="col-lg-4 col-md-6 col-sm-12 pb-4"
        v-for="testimonial in testimonials"
        :key="testimonial.id"
      >
        <div class="card mb-4">
          <div class="card-img-wrapper">
            <img :src="testimonial.image" class="card-img-top img-fluid rounded-circle" :alt="testimonial.title">
          </div>
          <div class="card-body">
            <h6 class="card-title">{{ testimonial.role }}</h6>
            <h5 class="card-title">{{ testimonial.name }}</h5>
            <p class="card-text">{{ testimonial.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    testimonials() {
      return this.$store.state.testimonials;
    }
  },
  mounted() {
    this.$store.dispatch('fetchTestimonials');
  }
};
</script>

<style scoped>

h1{
  padding-top: 5rem;
  padding-bottom: 1rem;
}
.container {
  padding-top: 2rem;
}

.card {
  height: 380px;
  overflow: hidden;
  transition: transform 0.3s ease;
  margin-top: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
  background-color: rgb(226, 222, 216);
}

.card:hover {
  transform: translateY(-5px);
  transform: scale(1.05);
}

.card-img-wrapper {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  height: 110px;
}

.card-img-top {
  width: 110px;
  height: 110px;
  object-fit: cover;
}

.rounded-circle {
  border-radius: 50%;
}

.card-body {
  padding-top: 50px;
  padding: 15px;
  height: 190px;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #743f3f;
}

.card-text {
  font-size: 0.9rem;
  color: #777;
}

@media (max-width: 475px) {
  .card{
    height: 475px;
  }
}

</style>




