<template>
  <div class="about">
    <div class="overlay"></div>
    <div class="content">
      <h1>ABOUT ME</h1>
      <p>
        I am an enthusiastic learner currently enrolled in the full-stack coding course at Life Choices Academy. I am Aphelele Joyi, and through this immersive program, I am acquiring hands-on experience in full-stack development, honing my skills in HTML, CSS, JavaScript, and various programming languages and frameworks. With a strong commitment to problem-solving and attention to detail, I strive to deliver innovative solutions that make a positive impact in the digital world.
      </p>
      <p>
      </p>
      <p>
        I am thrilled to leverage the skills and knowledge gained from Life Choices Academy to contribute meaningfully to the tech community. In the near future, I see myself diving in the cloud world as it is a field that excites me a lot. If you have any exciting projects or opportunities where I can apply my coding prowess, I am eager to collaborate and create something amazing together. Thank you for taking the time to learn a little bit about me, and I look forward to connecting with you as we embark on an incredible coding journey.
      </p>
      <a href="https://drive.google.com/uc?export=download&id=1lCv95PTOoiwBcx-nCYj5zSHjqdAF-Xrg" target="_blank" rel="noopener noreferrer">
        <button class="download-cv-button">Download CV</button>
      </a>
    
    </div>
  </div>
</template>

<style scoped>
.download-cv-button{
  margin-top: 10px;
  padding: 8px 13px;
  margin-bottom: 10px;
  background-color: #b9b745; 
  color: white; 
  border: none;
  border-radius: 6px; 
  font-size: 16px; 
  cursor: pointer;
  box-shadow: 3px 6px 0px black; 
}
.about {
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  position: relative; 
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color:gray; 
  opacity: 0.3;
}

.content {
  text-align: center;
  color: rgb(50, 50, 74);
  width: 60%;
}

h1 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
  margin-top: 65px;
}

p {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
}

.bi {
  margin-top: 30px;
  color: rgb(14, 14, 14);
}

@media (max-width: 768px) {
  .content {
    width: 80%;
  }

  h1 {
    font-size: 28px;
  }

  p {
    font-size: 16px;
  }
}

@media (max-width: 476px) {
  .content {
    width: 100%;
  }

  h1 {
    font-size: 18px;
    margin-bottom: 0px;
  }

  p {
    padding-inline: 5px;
    font-size: 16px;
    margin-bottom: 0px;
  }

  .bi {
    margin-top: 3px;
    color: rgb(82, 45, 45);
  }
}

@media (max-width: 320px) { 
  .content {
    max-width: 100%;
  }

  h1 {
    font-size: 20px;
    margin-bottom: 0px;
  }

  p {
    font-size: 14px;
    margin-bottom: 0;
    padding: 0;
  }

  .bi {
    margin-top: 13px;
    color: rgb(82, 45, 45);
  }
}
</style>
