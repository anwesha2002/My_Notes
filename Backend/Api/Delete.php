<?php
    include_once('db.php');
    $data = json_decode(file_get_contents('php://input'),true);
    $query = "DELETE FROM notes WHERE userid=?";
    $param = $conn->prepare($query);
    $param->bind_param("i",$data['id']);
    if($param->execute()){
        echo "note deleted";
    }else{
        echo "could not delete";
    }
?>