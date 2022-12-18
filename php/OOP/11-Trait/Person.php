<?php

    require_once "GreetingsTrait.php";
    class Person{
        public $age;
        public $name;
        public $address;
        use GreetingsTrait;
    }

?>