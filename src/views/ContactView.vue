<template>
  <div class="background">
    <h1 class="heading"><span class="highlight">Connect</span> with me</h1>
    <div class="container">
      <div class="form-container">
        <form action="https://formspree.io/f/xgebdjdv" method="post">
          <label for="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Enter name">
          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Enter surname">
          <label for="email">Email address</label>
          <input type="text" id="email" name="email_address" placeholder="Enter email address">
          <label for="subject">Message</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style="height: 200px;"></textarea>
          <input type="submit" value="Submit" class="submit-button">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.background {
  background-image: url('https://i.postimg.cc/gkYYd3H3/website-internet-contact-us-page-concept-with-phone-chat-email-icons-symbol-telephone-mail-mobile-ph.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.container {
  width: 50%;
  margin: 0 auto;
}

.heading {
  text-align: center;
  margin-top: 20px;
  animation: fade-in 1s ease-in-out;
  text-decoration: underline;
  font-weight: bold;
  padding-top: 70px; 
}


.highlight {
  color: rgb(55, 55, 153);
  font-weight: bold;
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.form-container {
  margin-top: 50px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 8px;
  font-size: 20px; 
  font-weight: bold; 
  color: #3c2c2c;
  text-decoration: underline dotted;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 16px;
  resize: vertical;
}

.submit-button {
  background-color: darkslategrey;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: auto;
}

.submit-button:hover {
  background-color: darkslategray;
}
</style>
