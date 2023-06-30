<template>
   <div class="container">
    <h1>Testimonials</h1>
    <div class="row">
      <div class="col-lg-4" v-for="testimonial in testimonials" :key="testimonial.id">
        <div class="card mb-4">
          <img :src="testimonial.image" class="card-img-top" :alt="testimonial.title">
          <div class="card-body">
            <h5 class="card-title">{{ testimonial.name }}</h5>
          </div>
          <div class="card-body">
            <p class="card-title">{{ testimonial.description }}</p>
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
    }
</script>

<style scoped>

</style>