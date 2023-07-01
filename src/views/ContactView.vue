<template>
    <div>
       <h1>Contact</h1>
       <div  class="container mb-4 ">
        <form action="https://formspree.io/f/xgebdjdv" method="post">
          <label for="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Please enter your name">
          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Please enter your last name">
          <label for="subject">Email address</label>
          <input type="text" id="ename" name="email_address" placeholder="Please enter your email address">
          <label for="subject">Message</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
          <input type="submit" value="Submit">
          <br><br><br><br><br>
        </form>
      </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>