<?php

    //running over a regular array - getting only the values:
    $arr1 = [10,20,30,"Leon"];
    foreach($arr1 as $item){
        echo "$item ";
    }
    echo "<br><hr/><br>";
    foreach ($arr1 as $index=>$value){
        //             =>
        echo "$index &rarr; $value | ";
    }
    echo "<br><hr/><br>";
    //running over associative array - getting only the values
    $arr2 = ["Leon"=>"Kill","Tirza"=>"Shmuel","Sivan"=>"Ben Gvir"];
    foreach ($arr2 as $item){
        echo "$item ";
    }
    echo "<br><hr/><br>";
    foreach ($arr2 as $key=>$item){
        echo "$key &rarr; $item | ";
    }

?>