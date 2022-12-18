<?php

    require_once "GreetingsTrait.php";

    class Parrot{
        public $name;
        public $type;

        use GreetingsTrait;
    }

?>