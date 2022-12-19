<?php

require '../vendor/autoload.php';
require '../config.php';

$config = new \PHPAuth\Config($dbh);
$auth   = new \PHPAuth\Auth($dbh, $config);

if(!$auth->isLogged()){
  header('HTTP/1.0 401 Unauthorized');
  header('Location: ../login/login.php');
}else{
  
}
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
      <li><a href="#"><i class="fa-solid fa-clipboard-list"></i></a></li>
      <li><a href="#"><i class="fa-solid fa-plus"></i></a></li>
      <li><a href="#"><i class="fa-regular fa-pen-to-square"></i></a></li>
      <li><a href="#"><i class="fa-regular fa-user"></i></a></li>
      <li><a href="logout.php"><i class="fa-solid fa-right-from-bracket"></i></a></li>
    </ul>
    <!-- <div class="logo"></div> -->
</nav>
<nav class="menuDesktop">
<div class="logo">
</div>
    <ul>
      <li><a href="#"><i class="fa-solid fa-clipboard-list"></i></a></li>
      <li><a href="#"><i class="fa-solid fa-plus"></i></a></li>
      <li><a href="#"><i class="fa-regular fa-pen-to-square"></i></a></li>
      <li><a href="#"><i class="fa-regular fa-user"></i></a></li>
      <li><a href="logout.php"><i class="fa-solid fa-right-from-bracket"></i></a></li>
    </ul>
</nav>
<div class="wrap">
  <header>
    <div class="leftHeader">
      <div class="burger">
          <span></span>
          <span></span>
          <span></span>
      </div>
    </div>
    <div class="rightHeader">
      <p class="name_account">
        <!-- <i class="fa-regular fa-user"></i> -->
        <?php
          echo $auth->getCurrentUser()["email"]; 
        ?>
      </p>
    </div>
  </header>
  
    <main>
      <section class="lists">
        <h1>Your Lists</h1>
        <div class="list"></div>
        <div class="list"></div>
        <div class="list"></div>

        <div class="addList"><i class="fa-solid fa-plus"></i></div>
      </section>
      <div id="myModal" class="modal">
        <div class="modal-content">
          <h2>Creating List</h2>
          <span class="close">&times;</span>
          <form action="">
            <input type="text" placeholder = "Enter the title">
            <textarea placeholder = "Enter the description"></textarea>
            <button>Add List</button>
          </form>
        </div>
      </div>
    </main>

    <footer id="footer">
          <div class="copy">
              <p>&copy; All rights reserved</p>
          </div>
      </footer>
</div>
  <script src="navigation.js"></script>
  <script src="popup.js"></script>
</body>
</html>