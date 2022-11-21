<?php

require 'vendor/autoload.php';

$dbh = new PDO("mysql:host=localhost;dbname=phpauth", "username", "password");

$config = new \PHPAuth\Config($dbh);
$auth   = new \PHPAuth\Auth($dbh, $config);

if (!$auth->isLogged()) {
    header('HTTP/1.0 403 Forbidden');
    echo "Forbidden";

    exit();
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello world!</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Hello world!</h1>
</body>
</html>