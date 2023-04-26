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
    case "showAll":
        showEventsAndLists();
        break;
    case "show":
        showEvents();
        break;
    case "showDetails":
        showDetails();
        break;    
    case "add":
        addEvent();
        break;
    case "edit":
        editEvent();
        break;
    case "delete":
        deleteEvent();
        break;
    default:
        echo "Not selected action.";
        break;
}

function showEventsAndLists(){
    global $user_id;
    global $dbh;

    $stmt = $dbh->prepare('SELECT listy.nazwa AS nazwa_listy, wydarzenia.id, wydarzenia.data, wydarzenia.nazwa AS nazwa_wydarzenia, wydarzenia.czas, wydarzenia.kolor FROM listy INNER JOIN wydarzenia ON listy.id=wydarzenia.lista_id WHERE user_id = :user_id ORDER BY czas ASC;') ;
    $stmt->bindParam(':user_id', $user_id);
    $stmt->execute();

    $listsEvents = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($listsEvents);
}

function showDetails(){
    global $user_id;
    global $dbh;

    $event_id = $_GET['event_id'];
    $stmt = $dbh->prepare('SELECT wydarzenia.id, wydarzenia.lista_id, wydarzenia.nazwa, wydarzenia.data, wydarzenia.czas, wydarzenia.lokalizacja, wydarzenia.opis, wydarzenia.kolor, wydarzenia.priorytet, listy.user_id, listy.nazwa as lista_nazwa, listy.opis as lista_opis FROM wydarzenia JOIN listy ON wydarzenia.lista_id = listy.id WHERE wydarzenia.id = :event_id AND listy.user_id = :user_id');

    $stmt->bindParam(':event_id', $event_id);
    $stmt->bindParam(':user_id', $user_id);
    $stmt->execute();

    $events = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($events);
}

function showEvents(){
    global $user_id;
    global $dbh;

    $list_id = $_GET['list_id'];
    $stmt = $dbh->prepare('SELECT * FROM listy WHERE id = :list_id AND user_id = :user_id');
    $stmt->bindParam(':list_id', $list_id);
    $stmt->bindParam(':user_id', $user_id);
    $stmt->execute();

    $list = $stmt->fetch(PDO::FETCH_ASSOC);

    // print $list_id;

    if($list){
        $stmt = $dbh->prepare('SELECT * FROM wydarzenia WHERE lista_id = :list_id ORDER BY priorytet DESC');
        $stmt->bindParam(':list_id', $list_id);
        $stmt->execute();
    
        $events = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
        echo json_encode($events);
    } else {
        echo json_encode(array('error' => 'Lista nie należy do tego użytkownika.'));
    }
}

function addEvent(){
    global $user_id;
    global $dbh;

    $obj = json_decode($_POST["json"], false);
    $list_id = $obj->listID;

    $stmt = $dbh->prepare('SELECT * FROM listy WHERE id = :list_id AND user_id = :user_id');
    $stmt->bindParam(':list_id', $list_id);
    $stmt->bindParam(':user_id', $user_id);
    $stmt->execute();

    $list = $stmt->fetch(PDO::FETCH_ASSOC);

    if($list){
        $event_name = $_POST['event_name'];
        $event_date = $_POST['event_date'];
        $event_time = $_POST['event_time'];
        $event_location = $_POST['event_location'];
        $event_description = $_POST['event_description'];
        $event_color = $_POST['event_color'];
        $event_priority = $_POST['event_priority'];
        
        if (empty($event_name)) {
            echo json_encode(array("error"=>"Event name cannot be empty"));
            exit;
        } elseif (strlen($event_name) > 50) {
            echo json_encode(array("error"=>"Event name cannot exceed 50 letters"));
            exit;
        }
        
        if (strlen($event_description) > 255) {
            echo json_encode(array("error"=>"Event description cannot exceed 255 letters"));
            exit;
        }

        if (strlen($event_location) > 50) {
            echo json_encode(array("error"=>"Event location cannot exceed 50 letters"));
            exit;
        }

        $stmt = $dbh->prepare('INSERT INTO wydarzenia (lista_id, nazwa, data, czas, lokalizacja, opis, kolor, priorytet) VALUES (:list_id, :event_name, :event_date, :event_time, :event_location, :event_description, :event_color, :event_priority)');
        $stmt->bindParam(':list_id', $list_id);
        $stmt->bindParam(':event_name', $event_name);
        $stmt->bindParam(':event_date', $event_date);
        $stmt->bindParam(':event_time', $event_time);
        $stmt->bindParam(':event_location', $event_location);
        $stmt->bindParam(':event_description', $event_description);
        $stmt->bindParam(':event_color', $event_color);
        $stmt->bindParam(':event_priority', $event_priority);
        $stmt->execute();
    
        echo json_encode(array('id' => $dbh->lastInsertId()));
    } else {
        echo json_encode(array('error' => 'Lista nie należy do tego użytkownika.'));
    }
}


function editEvent(){
    global $user_id;
    global $dbh;

    $obj = json_decode($_POST["json"], false);
    $event_id = $obj->eventID;

    $stmt = $dbh->prepare('SELECT * FROM listy INNER JOIN wydarzenia ON listy.id = wydarzenia.lista_id WHERE wydarzenia.id = :event_id AND listy.user_id = :user_id');
    $stmt->bindParam(':event_id', $event_id);
    $stmt->bindParam(':user_id', $user_id);
    $stmt->execute();

    $event = $stmt->fetch(PDO::FETCH_ASSOC);

    if($event){
        $event_name = $_POST['event_name'];
        $event_date = $_POST['event_date'];
        $event_time = $_POST['event_time'];
        $event_location = $_POST['event_location'];
        $event_description = $_POST['event_description'];
        $event_color = $_POST['event_color'];
        $event_priority = $_POST['event_priority'];
        
        if (empty($event_name)) {
            echo json_encode(array("error"=>"Event name cannot be empty"));
            exit;
        } elseif (strlen($event_name) > 50) {
            echo json_encode(array("error"=>"Event name cannot exceed 50 letters"));
            exit;
        }
        
        if (strlen($event_description) > 255) {
            echo json_encode(array("error"=>"Event description cannot exceed 255 letters"));
            exit;
        }

        if (strlen($event_location) > 50) {
            echo json_encode(array("error"=>"Event location cannot exceed 50 letters"));
            exit;
        }


        $stmt = $dbh->prepare('UPDATE wydarzenia SET nazwa = :event_name, data = :event_date, czas = :event_time, lokalizacja = :event_location, opis = :event_description, kolor = :event_color, priorytet = :event_priority WHERE id = :event_id');
        $stmt->bindParam(':event_name', $event_name);
        $stmt->bindParam(':event_date', $event_date);
        $stmt->bindParam(':event_time', $event_time);
        $stmt->bindParam(':event_location', $event_location);
        $stmt->bindParam(':event_description', $event_description);
        $stmt->bindParam(':event_color', $event_color);
        $stmt->bindParam(':event_priority', $event_priority);
        $stmt->bindParam(':event_id', $event_id);
        $stmt->execute();
    } else {
        echo json_encode(array('error' => 'Wydarzenie nie należy do tego użytkownika.'));
    }
}

function deleteEvent(){
    global $user_id;
    global $dbh;

    $obj = json_decode($_POST["json"], false);
    $event_id = $obj->eventID;
     
    $stmt = $dbh->prepare('SELECT * FROM listy INNER JOIN wydarzenia ON listy.id = wydarzenia.lista_id WHERE wydarzenia.id = :event_id AND listy.user_id = :user_id');
    $stmt->bindParam(':event_id', $event_id);
    $stmt->bindParam(':user_id', $user_id);
    $stmt->execute();

    $event = $stmt->fetch(PDO::FETCH_ASSOC);

    if($event){
        $stmt = $dbh->prepare('DELETE FROM wydarzenia WHERE id = :event_id');
        $stmt->bindParam(':event_id', $event_id);
        $stmt->execute();

        echo json_encode(array('rows_affected' => $stmt->rowCount()));
    } else {
        echo json_encode(array('error' => 'Wydarzenie nie należy do tego użytkownika.'));
    }
}
?>