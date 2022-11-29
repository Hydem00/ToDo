<?php

require '../vendor/autoload.php';
require '../config.php';

$config = new \PHPAuth\Config($dbh);
$auth   = new \PHPAuth\Auth($dbh, $config);

$message = "";
if(isset($_POST["submit"])){
    if(!empty($_POST["email"]) && !empty($_POST["password"])){
        $res = $auth->login($_POST["email"], $_POST["password"]);
        $message = $res["message"];
    }else{
        $message = "Some fields are empty!";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ToDo List</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;900&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/ff5fd0c0f4.js" crossorigin="anonymous"></script>
    <link rel="shortcut icon" href="../images/Logo16.png">
    <link rel="stylesheet" href="css/logging.css">
</head>
<body>
    <section class="register">      
        <fieldset class="form">
            <legend>
                <a href="../index.html"><div class="logo"></div></a>
            </legend>
            <div class="goBackBtn">
                <a href="../index.html"><i class="fa-solid fa-arrow-up"></i></a>
            </div>
            <div class="goSignBtn">
                <a href="register.php"><p>SIGN UP</p></a>
            </div>
            <h1>Login</h1>
            <form method="POST" action="">
                <div class="informationText">
                    <p><?php echo $message; ?></p>
                </div>
                <label for="email"></label><input type="email" name="email" id="email" placeholder="Email" autocomplete="off" required>
                <label for="password"></label><input type="password" name="password" id="password" placeholder="Password" required>
                <label for="submit"></label><input type="submit" name="submit" id="submit" value="Sign in">
            </form>
        </fieldset>
    </section>
</body>
</html>