<?php
    include_once('db.php');
    $data = array();
    $query = "SELECT * FROM notes";
    $result = mysqli_query($conn,$query);
    while($row = mysqli_fetch_array($result)){
        $data[] = $row;
    }
    echo json_encode($data);
?>