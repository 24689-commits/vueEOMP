<template>
  <div class="col text-md-center" id="gap">
    <footer class="footer text-center mt-5" style="background-color: rgb(178, 173, 173);">
      <p>aphelelejoyi@gmail.com</p>
      <p>067 024 1734</p>
      <p class="padding">Copyright &copy; 2023 Joyi. All rights reserved</p>
      <!-- <a href="https://drive.google.com/uc?export=download&id=1lCv95PTOoiwBcx-nCYj5zSHjqdAF-Xrg" target="_blank" rel="noopener noreferrer">
        <button class="download-cv-button">Download CV</button>
      </a> -->
      <div class="social-icons">
        <a href="mailto:aphelelejoyi@gmail.com" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope"
            viewBox="0 0 16 16">
            <path
              d="M14.146 2H1.854C1.355 2 1 2.355 1 2.854v10.292c0 .499.355.854.854.854h12.292c.499 0 .854-.355.854-.854V2.854C15 2.355 14.645 2 14.146 2zM13 3.854L8 7.961 3 3.854V4l5 3.807L13 4v-.146zM2 3.854L7 7.961 2 12.068V3.854z" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/aphelele-joyi-1717a7276/" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-linkedin"
            viewBox="0 0 16 16">
            <path
              d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
          </svg>
        </a>
        <a href="https://github.com/Aphelele2" target="_blank" rel="noopener noreferrer">
          <svg class="bi bi-github" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.49-.94-.84-1.13-.29-.14-.71-.49-.01-.5.66-.01 1.13.61 1.28.87.75 1.26 1.95.9 2.43.68.07-.52.29-.9.53-1.11-1.86-.21-3.82-.93-3.82-4.13 0-.91.32-1.65.85-2.23-.09-.21-.37-1.05.08-2.19 0 0 .69-.22 2.27.85.66-.18 1.37-.27 2.08-.27s1.42.09 2.08.27c1.58-1.07 2.27-.85 2.27-.85.45 1.14.17 1.98.08 2.19.53.58.85 1.32.85 2.23 0 3.2-1.96 3.92-3.83 4.13.3.26.57.77.57 1.56 0 1.13-.01 2.04-.01 2.31 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
        </div>
      
    </footer>
  </div>
</template>
  

<script>
export default {

}
</script>

<style scoped>
.social-icons {
  display: flex;
  justify-content: center;
  animation:flash;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
.social-icons:hover{
  animation-play-state: paused;
}
.social-icons a {
  margin: 0 10px;
}
.social-icons :hover {
  color:blue;
}

.footer {
  background-color: rgb(178, 173, 173);
  text-align: center;
  margin-top: 5rem;
  padding: 1rem;
}

</style>