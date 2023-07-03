<template>
  <div class="background">
    <div class="container">
      <div class="form-container">
        <form action="https://formspree.io/f/xgebdjdv" method="POST">
          <label for="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Enter name" required>
          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Enter surname" required>
          <label for="email">Email address</label>
          <input type="text" id="email" name="email_address" placeholder="Enter email address" required>
          <label for="subject">Message</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style="height: 200px;" required></textarea>
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
  margin-top: 80px;
  background-image: url('');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: gray;
}

.container {
  margin-top: 60px;
  width: 50%;

}



.highlight {
  color: rgb(55, 55, 153);
  font-weight: bold;
}


.form-container {
  margin-top: 20px;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 8px;
  font-size: 14px; 
  font-weight: bold; 
  color: #3c2c2c;
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
  background-color: #b9b745;
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
