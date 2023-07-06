<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top" >
            <div class="container-fluid">
              <a class="navbar-brand" href="#"> A Joyi</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <router-link to="/">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/about">About</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/resume">Resume</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/testimonials">Testimonials</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/projects">Projects</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/contact">Contact</router-link>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.navbar {
  background-color:rgb(210, 208, 208)!important; 
  color: rgb(76, 36, 36);

}
.navbar-brand {
  color: rgb(145, 107, 107);
  font-weight: bold;
}

.navbar-nav .nav-item {
  margin-right: 10px;
}

.navbar-nav .nav-item a {
  color: black;
  text-decoration: none;
  transition: color 0.3s;
}

.navbar-nav .nav-item a:hover {
  color: rgb(91, 68, 92); 
}
.navbar-nav .nav-item .router-link-active{
  color:#8a8a8a;
}

</style>

