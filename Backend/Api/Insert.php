<?php
    include_once('db.php');
    $data = json_decode(file_get_contents("php://input"),true);
    
        $query = "INSERT into notes (userid,title,notes) VALUES (?,?,?)";
        $param = $conn->prepare($query);
        $param->bind_param("sss",$data['id'],$data['title'], $data['notes']);
        $param->execute();
        if(count($data)>0){
            echo "note added";
        }
        else{
            echo "failed to add";
        }
    
    
    
    
?>