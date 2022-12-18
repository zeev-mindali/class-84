<?php

    $arr = array("Leon"=>"Kill","Tirza"=>"Shmuel","Sivan"=>"Ben Gvir");
    echo "What to do with leon? ".$arr["Leon"];
    echo "Tirza husband name: ".$arr["Tirza"];
    echo "When there is something strange, in the neighborhood, Who you gonna call? ".$arr["Sivan"];

    //second way
    $arr2 = ["Leon"=>"Kill","Tirza"=>"Shmuel","Sivan"=>"Ben Gvir"];
    echo "What to do with leon? ".$arr2["Leon"];
    echo "Tirza husband name: ".$arr2["Tirza"];
    echo "When there is something strange, in the neighborhood, Who you gonna call? ".$arr2["Sivan"];

    //third way
    $arr3["Leon"]="Kill";
    $arr3["Tirza"]="Shmuel";
    $arr3["Sivan"]="Ben Gvir";

    

?>