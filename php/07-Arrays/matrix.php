<?php

    for ($i=0;$i<=10;$i++){
        for ($j=0;$j<=10;$j++){
            $mat[$i][]=($i+1)*($j+1);
        }
    }


    //לוח הכפל
    for ($i=0;$i<count($mat);$i++){
        for ($j=0;$j<$mat[$i];$j++){
            echo $mat[$i][$j]." ";
        }
    }
?>