<?php

require '../vendor/autoload.php';
require '../config.php';

$config = new \PHPAuth\Config($dbh);
$auth   = new \PHPAuth\Auth($dbh, $config);

$message = "";
if(isset($_POST["submit"])){
    if(!empty($_POST["email"]) && !empty($_POST["password"]) && !empty($_POST["cpassword"])){
        if (filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
            if (preg_match("#.*^(?=.{10,100})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$#", $_POST["password"])){
                $message = "Your password is strong.";
                $res = $auth->register($_POST["email"], $_POST["password"], $_POST["cpassword"], Array(), "", true);
                $message = $res["message"];
            } else {
                $message = "Your password is not safe. <br>Must be least 10 characters, must contain: 1 uppercase, 1 lowercase, 1 numeric, and 1 special characters.";
            }
        }else {
            $message = "Provided e-mail is invalid.";
        }
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
                <i class="fa-solid fa-arrow-up"></i>
            </div>
            <h1>Change password</h1>
            <form method="POST" action="">
                <div class="informationText">
                    <p><?php echo $message; ?></p>
                    <p>Set your new password</p>
                </div>
                <label for="password"></label><input type="password" name="password" id="password" placeholder="New Password" required>
                <label for="cpassword"></label><input type="password" name="cpassword" id="cpassword" placeholder="Confirm Password" required>
                <label for="submit"></label><input type="submit" name="submit" id="submit" value="Set password">
            </form>
        </fieldset>
    </section>
    <script src="passwordValidation.js"></script>
    <script src="goBack.js"></script>
</body>
</html>