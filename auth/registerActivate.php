<?php

require '../vendor/autoload.php';
require '../config.php';

$config = new \PHPAuth\Config($dbh);
$auth   = new \PHPAuth\Auth($dbh, $config);

$message = "";
if(isset($_POST["submit"])){
    if(!empty($_POST["activateCode"])){
        $res = $auth->activate($_POST["activateCode"]);
        $message = $res["message"];
    }else{
        $message = "Field is empty!";
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
            <h1>Account Activation</h1>
            <form method="POST" action="">
                <div class="informationText">
                    <p><?php echo $message; ?></p>
                </div>
                <input type="text" name="activateCode" id="activateCode" placeholder="activateCode" autocomplete="off" required>
                <input type="submit" name="submit" id="submit" value="Activate">
            </form>
        </fieldset>
    </section>
    <script src="goBack.js"></script>
</body>
</html>