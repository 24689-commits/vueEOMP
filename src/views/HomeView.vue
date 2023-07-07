<template>
  <div class="container">
    <div class="home align-center">
      <div class="card-wrapper">
        <div class="card">
          <div class="row g-0">
            <div class="col-sm">
              <div class="card-body">
                <h3 class="card-hi">HI THERE!</h3>
                <h1 class="card-name">I am <span>Aphelele Joyi</span></h1>
                <h4 class="card-asp">An aspiring full-stack developer</h4>
                <button  class="btnConnect" @click="$router.push('/about')">More about me</button>
              </div>
            </div>
            <div class="col-sm gray-background"> 
              <div class="image-container">
                <img src="https://i.postimg.cc/bwF80f5T/C12-Aphelele-Joyi-1-removebg-preview.png" class="img-fluid img-top" alt="profile image">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.align-center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.card-wrapper {
  margin-top: 60px;
  margin-bottom: 75px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  margin-top: 60px;
  width: 80%;
  height: 100%;
  
}

.card-asp {
  background-color: #ccba5f;
}

.card-hi {
  font-size: 24px;
  font-weight: bold;
  animation:tada;
  animation-duration: 2s;
 

}

.card-name {
  font-size: 50px;
  font-weight: bold;
  animation:bounceInLeft;
  animation-duration: 2s;
}

.card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}


span {
  color: rgb(173, 173, 111);
}



.image-container {
  width: 100%; 
  height: 100%;
  background-image: url('https://i.postimg.cc/BQ36G5cH/photo-1600456899121-68eda5705257-ixlib-rb-4-0.jpg'); 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.btnConnect {
  margin-top: 30px;
  padding: 10px 18px;
  background-color: #b9b745; 
  color: white; 
  border: none;
  border-radius: 6px; 
  font-size: 18px; 
  cursor: pointer;
  box-shadow: 3px 6px 0px black; 
}


/* Bootstrap Media Queries */
@media (max-width: 576px) {
  .card-name {
    font-size: 40px;
  }
}

@media (min-width: 577px) and (max-width: 790px) {
  .card-name {
    font-size: 45px;
  }
  .image-container{
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .card-name {
    font-size: 48px;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .card-name {
    font-size: 50px;
  }
}
</style>
