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
      <li><a href="#" class="addList"><i class="fa-solid fa-plus"></i></a></li>
      <li><a href="#"><i class="fa-regular fa-pen-to-square"></i></a></li>
      <li><a href="#"><i class="fa-regular fa-user"></i></a></li>
      <li><a href="logout.php"><i class="fa-solid fa-right-from-bracket"></i></a></li>
    </ul>
</nav>
<nav class="menuDesktop">
    <ul>
      <li><a href="#"><i class="fa-solid fa-clipboard-list"></i></a></li>
      <li><a href="#" class="addList"><i class="fa-solid fa-plus"></i></a></li>
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
        <?php
          echo $auth->getCurrentUser()["email"]; 
        ?>
      </p>
    </div>
  </header>
  
    <main>
      <section class="lists">
        <h1>Your Lists</h1>
        <div class="addList"><i class="fa-solid fa-plus"></i></div>
      </section>
      <div id="popUpAddList" class="modal popUpAdd">
        <div class="modal-content">
          <h2>Creating List</h2>
          <span class="close">&times;</span>
          <form method="POST">
            <input type="text" maxlength="22" name="list_name" placeholder = "Enter the title" required>
            <textarea maxlength="255" name="list_description" placeholder = "Enter the description"></textarea>
            <button>Add List</button>
          </form>
        </div>
      </div>
      <div id="popUpEditList" class="modal popUpEdit">
        <div class="modal-content">
          <h2>Edit List</h2>
          <span class="close">&times;</span>
          <form method="POST">
            <input type="text" maxlength="22" name="list_name" placeholder = "Enter the title" required>
            <textarea maxlength="255" name="list_description" placeholder = "Enter the description"></textarea>
            <button>Confirm Changes</button>
          </form>
        </div>
      </div>
      <div id="popUpRemoveList" class="modal popUpRemove">
        <div class="modal-content">
          <span class="close">&times;</span>
          <h2>Remove List</h2>
          <h3></h3>
          <i class="fa-solid fa-triangle-exclamation"></i>
          <button>YES</button>
          <button>NO</button>
        </div>
      </div>
      <div id="popUpList" class="modal popUp">
        <div class="modal-content">
          <span class="close">&times;</span>
          <h2></h2>
          <p></p>
          <section class="menu">
              <div class="addEvent">
                <h2>Add Event</h2>
                <form method="POST">
                  <input type="text" maxlength="22" name="event_name" placeholder = "Enter the title" required>
                  <textarea maxlength="255" name="event_description" placeholder = "Enter the description"></textarea>
                  <input type="text" name="event_location" placeholder = "Enter the location">
                  <input type="date" name="event_date" placeholder = "Enter the date">
                  <input type="time" name="event_time" placeholder = "Enter the time">
                  <input type="number" min="1" max="5" name="event_priority" placeholder = "Priority 1 to 5" oninput="this.value = Math.round(this.value);" required>
                  <input type="color" name="event_color">
                  <button>Add event</button>
                </form>
              </div>
              <!-- <div class="editEvent">
                <h2>Edit Event</h2>
                <form method="POST">
                  <input type="text" maxlength="22" name="event_name" placeholder = "Enter the title" required>
                  <textarea maxlength="255" name="event_description" placeholder = "Enter the description"></textarea>
                  <input type="date" name="event_date" placeholder = "Enter the date" required>
                  <input type="time" name="event_time" placeholder = "Enter the time" required>
                  <input type="number" name="event_priority" placeholder = "Priority 1 to 10" required>
                  <input type="color" name="event_color">
                  <button>Add event</button>
                </form>
              </div> -->
            <div class="events">
            </div>
          </section>
          
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
  <script src="fetch.js"></script>  
  <script src="popUpAddList.js"></script>
  <script src="popUpList.js"></script>
  <script src="popUpEditList.js"></script>
  <script src="popUpDeleteList.js"></script>
  <script src="accountMail.js"></script>
</body>
</html>