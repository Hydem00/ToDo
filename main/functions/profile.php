<?php
require '../../vendor/autoload.php';
require '../../config.php';

$config = new \PHPAuth\Config($dbh);
$auth   = new \PHPAuth\Auth($dbh, $config);


if(!$auth->isLogged()){
    header('HTTP/1.0 401 Unauthorized');
    echo "Forbidden";
    exit;
}else{
    //echo json_encode($auth->getCurrentUser());
    $user_id = $auth->getCurrentUser()["id"];
}

switch ($_GET["action"]) {
    case "changePassword":
        changePassword();
        break;
    case "changeEmail":
        changeEmail();
        break;
    case "deleteUser":
        deleteUser();
        break;
    default:
        echo "Not selected action.";
        break;
}

function changePassword(){
    global $user_id;
    global $dbh;

    $currpass = $_POST['currpass'];
    $newpass = $_POST['newpass'];
    $repeatnewpass = $_POST['repeatnewpass'];

    $response = $auth->changePassword($user_id, $currpass, $newpass, $repeatnewpass);

    echo json_encode($response);
}

function changeEmail(){
    global $user_id;
    global $dbh;

    $email = $_POST['email'];
    $pass = $_POST['password'];

    $response = $auth->changeEmail($user_id, $email, $pass);

    echo json_encode($response);
}

function deleteUser(){
    global $user_id;
    global $dbh;

    $stmt = $dbh->prepare('DELETE FROM wydarzenia WHERE lista_id IN (SELECT id FROM listy WHERE user_id = :user_id)');
    $stmt->bindParam(':user_id', $user_id);
    $stmt->execute();

    $stmt = $dbh->prepare('DELETE FROM listy WHERE user_id = :user_id');
    $stmt->bindParam(':user_id', $user_id);
    $stmt->execute();

    $pass = $_POST['password'];
    $response = $auth->deleteUser($user_id, $pass);

    echo json_encode($response);
}
?>