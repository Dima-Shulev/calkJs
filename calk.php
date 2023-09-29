<?php
    $result = [];
    foreach($_POST as $key=>$item){
        $result[] = $key;
    }
    $sum = implode('',$result);
    $sum = json_encode($sum);
    //$string = "";
    //$string .= $result[0];
    echo($sum);


?>