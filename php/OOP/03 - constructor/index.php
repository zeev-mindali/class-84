<?php

    require_once "person.php";

    $p1 = new Person;
    $p1->show(); //nulll

    $p2 = new Person();
    $p2->show(); //null

    $p3 = new Person ("Tirza");
    $p3->show(); //tirza null

    $p4 = new Person ("Tirza","Shmuel");
    $p4->show(); //tirza shmuel

?>