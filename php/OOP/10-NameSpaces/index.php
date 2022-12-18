<?php

    require_once "Person.php";
    require_once "Collage.php";
    //there are three ways of using class resides in different namespace:

    //first way - explicit declaration:
        $p1 = new zeev\Person();
        $p1->show();

    //second way - implicit decleration
    use zeev\Person; //must ends with a class
    $p2 = new Person();
    $p2->show();

    use JohnBryce as iliya;
    $p3 = new iliya\Person();
    $p3->show();


    $p4 = new hitech\Person();
    $p4->show();

?>