<?php
    include_once('db.php');
    $data = json_decode(file_get_contents("php://input"),true);
    
        $query = "UPDATE notes set title = ?, notes = ? WHERE userid = ?";
        $param = $conn->prepare($query);
        $param->bind_param("ssi",$data['title'],$data['notes'],$data['id']);
        $param->execute();
        if($param->affected_rows>0)
        {
            echo "note updated";
        }
        else{
            echo "failed to update";
        }
    
    
?>