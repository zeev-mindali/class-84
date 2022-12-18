<?php 

include "math_functions.php";

echo getAvg(11,22,33);

sayHi();

showMessage("i will never talk again with rom in the class",500);
showMessage("Shmuel and Tirza for Ever....");



function sayHi(){
    echo "Hi!\n";
}

function showMessage($message,$times=1){
    for ($i=1;$i<=$times;$i++){
        echo $message."\n";
    }
}

?>