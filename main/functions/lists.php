<?php
require '../../vendor/autoload.php';
require '../../config.php';

$config = new \PHPAuth\Config($dbh);
$auth   = new \PHPAuth\Auth($dbh, $config);


if(!$auth->isLogged()){
    header('HTTP/1.0 401 Unauthorized');
    echo "Forbidden";
}else{
    //echo json_encode($auth->getCurrentUser());
    $user_id = $auth->getCurrentUser()["id"];
}

switch ($_GET["action"]) {
    case "show":
        showLists();
        break;
    case "add":
        addList();
        break;
    case "edit":
        editList();
        break;
    case "delete":
        deleteList();
        break;
    default:
        echo "Not selected action.";
        break;
}

function showLists(){
    global $user_id;
    global $dbh;

    $stmt = $dbh->prepare('SELECT * FROM listy WHERE user_id = :user_id');

    $stmt->bindParam(':user_id', $user_id);

    $stmt->execute();

    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($rows);
}

function addList(){
    global $user_id;
    global $dbh;

    $list_name = $_POST['list_name'];
    $list_description = $_POST['list_description'];
    
    $stmt = $dbh->prepare('INSERT INTO listy (user_id, nazwa, opis) VALUES (:user_id, :list_name, :list_description)');
    
    $stmt->bindParam(':user_id', $user_id);
    $stmt->bindParam(':list_name', $list_name);
    $stmt->bindParam(':list_description', $list_description);
    
    $stmt->execute();
    
    echo json_encode(array('id' => $dbh->lastInsertId()));
}


function editList(){
    global $user_id;
    global $dbh;

    // $obj = json_decode($_POST["json"], false);
    // $list_id = $obj->listID;

    $list_name = $_POST['list_name'];
    $list_description = $_POST['list_description'];

    $stmt = $dbh->prepare('UPDATE listy SET nazwa = :list_name, opis = :list_description WHERE id = :list_id AND user_id = :user_id');
    
    $stmt->bindParam(':user_id', $user_id);
    $stmt->bindParam(':list_id', $list_id);
    $stmt->bindParam(':list_name', $list_name);
    $stmt->bindParam(':list_description', $list_description);

    $stmt->execute();
    
    echo json_encode(array('rows_affected' => $stmt->rowCount()));
}

function deleteList(){
    global $user_id;
    global $dbh;
    
    $obj = json_decode($_POST["json"], false);
    $list_id = $obj->listID;

    $stmt = $dbh->prepare('DELETE FROM listy WHERE id = :list_id');

    $stmt->bindParam(':list_id', $list_id);

    $stmt->execute();

    echo json_encode(array('rows_affected' => $stmt->rowCount()));
}
?>