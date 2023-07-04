<template>
<div class="background">
  <div class="container">
    <h1>Testimonials</h1>
    <div class="row">
      <div class="col-lg-4" v-for="testimonial in testimonials" :key="testimonial.id">
        <div class="card h-100 mb-4">
          <div class="card-img-wrapper">
            <img :src="testimonial.image" class="card-img-top rounded-circle" :alt="testimonial.title">
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ testimonial.name }}</h5>
            <p class="card-text">{{ testimonial.description }}</p>
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
.background{
  background-color: gray;
}
h1{
  padding-top: 5rem;
  padding-bottom: 1rem;
}
.container {
  padding-top: 2rem;
}

.card {
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
  margin-top: 20px;
  display: flex;
  justify-content: center;
  height: 150px;
}

.card-img-top {
  max-width: 130px;
  max-height: 130px;
  object-fit: cover;
}

.rounded-circle {
  border-radius: 50%;
}

.card-body {
  padding-top: 50px;
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
</style>




<!--
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
} -->