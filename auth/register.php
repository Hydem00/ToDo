<?php

require '../vendor/autoload.php';
require '../config.php';

$config = new \PHPAuth\Config($dbh);
$auth   = new \PHPAuth\Auth($dbh, $config);


if(isset($_POST["email"]) && isset($_POST["password"]) && isset($_POST["cpassword"])){
    $response = $auth->register($_POST["email"], $_POST["password"], $_POST["cpassword"], Array(),"", true);
    //var_dump($response);
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
    <link rel="shortcut icon" href="../images/Logo16.png">
    <link rel="stylesheet" href="css/logging.css">
</head>
<body>
    <section class="register">      
        <fieldset class="form">
            <legend>
                <div class="logo"></div>
            </legend>
            <h1>Registration</h1>
            <form method="POST" action="">
                <p></p>
                <input type="email" name="email" id="email" placeholder="Email">
                <input type="password" name="password" id="password" placeholder="Password">
                <input type="password" name="cpassword" id="cpassword" placeholder="Confirm Password">
                <input type="submit" name="submit" id="submit" value="Sign in">
            </form>
        </fieldset>
    </section>
</body>
</html>