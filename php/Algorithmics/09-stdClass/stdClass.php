<?php

$person1 = new stdClass;
$person1->firstName = "Shmuel";
$person1->wifeName = "Tirza";
$person1->kids=3;

$person2 = new stdClass;
$person2->firstName = "Itamar";
$person2->wifeName = "Osnat";
$person2->kids = 3;

echo "$person1->firstName loves $person1->wifeName";


function showPerson($person){
    echo "First name: $person->firstName\n";
    echo "Wife name: $person->wifeName\n";
    echo "Kids: $person->kids";
}

function showPerson2($person){
    foreach($person as $property=>$value){
        echo "Property: $property, Value: $value\n";
    }
}

?>