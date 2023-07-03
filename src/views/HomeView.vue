<template>
  <div class="home align-center">
    <div class="card" style="max-width: 100%; max-height:100%">
      <div class="row g-0">
        <div class="col">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="col">
          <img src="https://i.postimg.cc/KjnTKFVD/Thotyelwa-Mpongwana.jpg" class="img-fluid img-top" alt="...">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {},
};
</script>

<style scoped>
.align-center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.head {
  margin-top: 80px;
}
.home {
  margin-top: 56px;
}
</style>
