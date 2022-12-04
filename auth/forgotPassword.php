<?php

require '../vendor/autoload.php';
require '../config.php';

$config = new \PHPAuth\Config($dbh);
$auth   = new \PHPAuth\Auth($dbh, $config);

$message = "";
if(isset($_POST["submit"])){
    if(!empty($_POST["email"])){
        $res = $auth->requestReset($_POST["email"]);
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
                <i class="fa-solid fa-arrow-up"></i>
            </div>
            <h1>Forgot password</h1>
            <form method="POST" action="">
                <div class="informationText">
                    <p><?php echo $message; ?></p>
                    <p>Enter your email to get a link to set a new password.</p>
                </div>
                <label for="email"></label><input type="email" name="email" id="email" placeholder="Email" autocomplete="off" required>
                <label for="submit"></label><input type="submit" name="submit" id="submit" value="Send">
            </form>
        </fieldset>
    </section>
    <script src="emailValidation.js"></script>
    <script src="goBack.js"></script>
</body>
</html>