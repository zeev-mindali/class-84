<?php

    $a = 3;

    switch ($a){
        case 1:
            echo "one\n";
            break;
        case 2:
            echo "two\n";
            break;
        case 3:
            echo "three. \n";
            break;
        default:
            echo "Where The Food ?!?!?";
    }

    $str = "Rom";

    switch ($str){
        case "lion":
            echo "kill $str";
            break;
        case "Rom":
            echo "$str is the best student in class";
            break;
        case "Sivan":
            echo "Cousin of Ben Gvir from his wife side";
            break;
        default:
            echo "I wish i had more students like Itamar";
    }

    $grade = 85;

    switch($grade){
        case $grade>94:
            echo "A+";
            break;
        case $grade>90:
            echo "A";
            break;
        case $grade>85:
            echo "B+";
            break;
        default:
            echo "Lion";
    }
?>