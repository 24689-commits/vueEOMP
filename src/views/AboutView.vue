<template>
  <div class="about">
    <div class="overlay"></div>
    <div class="content">
      <h1>About Me page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias voluptates et incidunt sapiente reprehenderit
        unde corporis totam doloribus, nemo corrupti! Suscipit, laudantium aspernatur! Incidunt magnam laudantium
        suscipit doloremque quis ipsa!
      </p>
    </div>
  </div>
</template>

<style scoped>
.about {
  background-image: url('https://i.postimg.cc/jqyXpq8p/background-kofu.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.content {
  text-align: center;
  color: #fff;
  z-index: 1;
}

h1 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  line-height: 1.5;
}

@media (max-width: 768px) {
  h1 {
    font-size: 28px;
  }

  p {
    font-size: 16px;
  }
}
</style>
