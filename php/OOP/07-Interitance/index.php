<?php

    require_once "student.php";

    $s1 = new Student("Tirza","Dankur");
    $s2->setGrade(100); // +900 because she his married to shmuel


    $p1 = new Person ("Shmuel","Dankur");

    if ($s1 instanceof Person){
        echo "person";
    }

    if ($s1 instanceof Student){
        echo "student";
    }

    if ($s1 instanceof Itamar){
        echo "they wish";
    }

    class Itamar{} //ha kartzya
?>