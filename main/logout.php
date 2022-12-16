<?php

require '../vendor/autoload.php';
require '../config.php';

$config = new \PHPAuth\Config($dbh);
$auth   = new \PHPAuth\Auth($dbh, $config);

if($auth->isLogged()){
    
  $res = $auth->logout($auth->getCurrentSessionHash());
  var_dump($res);
  if($res){
    header('Location: ../auth/login.php');
  }

}else{
    header('Location: ../auth/login.php');
}
?>
