<?php

// require '../vendor/autoload.php';
// require '../config.php';

// $config = new \PHPAuth\Config($dbh);
// $auth   = new \PHPAuth\Auth($dbh, $config);

// if(!$auth->isLogged()){
//   header('HTTP/1.0 401 Unauthorized');
//   header('Location: ../login/login.php');
// }else{
  
// }
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="shortcut icon" href="../images/Logo16.png">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;900&display=swap" rel="stylesheet">
  <script src="https://kit.fontawesome.com/ff5fd0c0f4.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="css/mainPage.css">
</head>
<body>
<nav class="menuMobile">
    <ul>
      <li><a href="#">Display Lists</a></li>
      <li><a href="#">Create Lists</a></li>
      <li><a href="#">Edit Lists</a></li>
      <li><a href="#">Show Profile</a></li>
      <li><a href="#">Sign Out</a></li>
    </ul>
    <div class="logo"></div>
</nav>
<nav class="menuDesktop">
<div class="logo"></div>
    <ul>
      <li><a href="#">Display Lists</a></li>
      <li><a href="#">Create Lists</a></li>
      <li><a href="#">Edit Lists</a></li>
      <li><a href="#">Show Profile</a></li>
      <li><a href="#">Sign Out</a></li>
    </ul>
</nav>
  <header>
    <div class="leftHeader">
      <div class="burger">
          <span></span>
          <span></span>
          <span></span>
      </div>
    </div>
    <div class="rightHeader">
      <p class="name_account">Nazwa konta</p>
    </div>
  </header>
  <div class="wrap">
    <main>
      <section class="lists">
        <h1>Your Lists</h1>
        <div class="list"></div>
        <div class="list"></div>
        <div class="list"></div>
        <div class="addList"><span><i class="fa-solid fa-plus"></i></span></div>
      </section>
      <div id="myModal" class="modal">
        <div class="modal-content">
          <h2>Creating List</h2>
          <span class="close">&times;</span>
          <form action="">
            <input type="text" placeholder = "Enter the title">
            <textarea placeholder = "Enter the description"></textarea>
            <button>Create</button>
          </form>
        </div>
      </div>
    </main>
    </div>
    <footer id="footer">
          <div class="socials">
              <p class="contact">Contact</p>
              <p class="social"><i class="fa-solid fa-envelope"></i> 205ic.amw@wp.com</p>
              <p class="social"><i class="fa-solid fa-phone"></i> 123456789</p>
              <p class="social"><i class="fa-brands fa-facebook"></i> amw205IC</p>
              <p class="social"><i class="fa-brands fa-twitter"></i> @amw205IC</p>
              <p class="social"><i class="fa-brands fa-instagram"></i> _205icamw</p>
          </div>
          <div class="map">
              <p>our location</p>
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18516.6912095253!2d18.532573036039114!3d54.54078761204572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda7023a6440b3%3A0x6144d17db5b3ddb1!2sAkademia%20Marynarki%20Wojennej%20im.%20Bohater%C3%B3w%20Westerplatte!5e0!3m2!1spl!2spl!4v1669023217726!5m2!1spl!2spl"
                  width="300" height="200" style="border:0;" allowfullscreen="" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div class="copy">
              <p>&copy; All rights reserved</p>
          </div>
      </footer>
  <script src="navigation.js"></script>
  <script src="popup.js"></script>
</body>
</html>