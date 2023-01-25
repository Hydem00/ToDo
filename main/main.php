<?php

require '../vendor/autoload.php';
require '../config.php';

$config = new \PHPAuth\Config($dbh);
$auth   = new \PHPAuth\Auth($dbh, $config);

if(!$auth->isLogged()){
  header('HTTP/1.0 401 Unauthorized');
  header('Location: ../auth/login.php');
}else{
  
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ToDo - Main</title>
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
  <div class="chooseList">
    <p>Click on the list you want to edit</p>
  </div>
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
      </p>
    </div>
  </header>
  
    <main>
     
      <section class="lists">
        <h1>Your Lists</h1>
        <div class="addList"><i class="fa-solid fa-plus"></i></div>
      </section>
      <section class="menu">
        <i class="fa-solid fa-arrow-up"></i>
        <h2></h2>
        <p></p>
        <div class="addEvent">
          <h2>Add Event</h2>
          <span class="close">&times;</span>
          <form method="POST">
            <input type="text" maxlength="50" name="event_name" placeholder = "Enter the title" required>
            <textarea maxlength="255" name="event_description" placeholder = "Enter the description"></textarea>
            <input type="text" maxlength = "50" name="event_location" placeholder = "Enter the location">
            <input type="date" name="event_date" placeholder = "Enter the date" required>
            <input type="time" name="event_time" placeholder = "Enter the time" required>
            <select name="event_priority">
              <option value="1" selected>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <input type="color" name="event_color">
            <button>Add event</button>
          </form>
        </div>
        <div class="editEvent">
          <h2>Edit Event</h2>
          <span class="close">&times;</span>
          <form method="POST">
            <input type="text" maxlength="50" name="event_name" placeholder = "Enter the title" required>
            <textarea maxlength="255" name="event_description" placeholder = "Enter the description"></textarea>
            <input type="text" maxlength = "50" name="event_location" placeholder = "Enter the location">
            <input type="date" name="event_date" placeholder = "Enter the date" required>
            <input type="time" name="event_time" placeholder = "Enter the time" required>
            <select name="event_priority">
              <option value="1" selected>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <input type="color" name="event_color">
            <button>Edit event</button>
          </form>
        </div>
        <div class="events">
          <div class="addEventBtn">
            <i class="fa-solid fa-plus"></i>
          </div>
        </div>
      </section>
      <section class="profile">    
        <div class="profileInfo">
        </div>    
        <div class="profileButtons">
          <button>Change Password</button>        
          <button>Change Email</button>        
          <button>Delete Account</button>
          <button>Set/Change Your Nick</button>
          <button><a href="https://pl.gravatar.com/" target="blank">Change your Gravatar</a></button>
        </div>
        
        <div class="changePassword">
          <h2>Change Your Password</h2>
          <form method="POST">
            <input type="password" id="currentPassword" name="currpass" placeholder="Enter Current Password" required>
            <input type="password" id="newPassword" name="newpass" placeholder="Enter New Password" required>
            <input type="password" id="repeatNewPassword" name="repeatnewpass" placeholder="Repeat New Password" required>
            <button>Set New Password</button>
          </form>
          <p></p>
        </div>
        <div class="changeEmail">
          <h2>Change Your Email</h2>
          <form method="POST">
            <input type="email" id="email" name="email" placeholder="Enter New Email" required>
            <input type="password" id="password" name="password" placeholder="Enter Your Password" required>
            <button>Set New Email</button>
          </form>
          <p></p>
        </div>
        <div class="deleteAccount">
          <h2>Delete your Account</h2>
          <form method="POST">
            <input type="password" name="password" placeholder="Enter Your Password" required>
            <button>Delete your account</button>
          </form>
          <p></p>
        </div>
        <div class="additionalInformations">
          <h2>Set/Change Your Nickname</h2>
          <form method="POST">
            <input type="text" maxlength="15" name="nick" placeholder="Enter New Nickname" required>
            <button>Add informations</button>
          </form>
          <p></p>
        </div>
      </section>
      <div id="popUpAddList" class="modal popUpAdd">
        <div class="modal-content">
          <h2>Creating List</h2>
          <span class="close">&times;</span>
          <form method="POST">
            <input type="text" maxlength="50" name="list_name" placeholder = "Enter the title" required>
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
            <input type="text" maxlength="50" name="list_name" placeholder = "Enter the title" required>
            <textarea maxlength="255" name="list_description" placeholder = "Enter the description"></textarea>
            <button>Confirm</button>
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
      <div id="popUpRemoveEvent" class="modal popUpRemove">
        <div class="modal-content">
          <span class="close">&times;</span>
          <h2>Remove Event</h2>
          <h3></h3>
          <i class="fa-solid fa-triangle-exclamation"></i>
          <button>YES</button>
          <button>NO</button>
        </div>
      </div>
      <div id="popUpList" class="modal popUp">
        <div class="modal-content">
          <span class="close">&times;</span>
          
          
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
  <script src="accountMail.js"></script>
  <script src="profileSection.js"></script>
  <script src="popUpAddList.js"></script>
  <script src="eventsSection.js"></script>
  <script src="popUpEditList.js"></script>
  <script src="popUpDeleteList.js"></script>

</body>
</html>