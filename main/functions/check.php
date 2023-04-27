<?php
require '../../config.php';
require '../../vendor/autoload.php';

$config = new \PHPAuth\Config($dbh);
$auth   = new \PHPAuth\Auth($dbh, $config);


echo json_encode($auth->isLogged());

?>