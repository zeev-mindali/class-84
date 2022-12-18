<?php

    class Person{
        public $firstName;
        public $lastName;

        public function __construct($firstName = null, $lastName = null){
            $this->firstName = $firstName;
            $this->lastName = $lastName;
        }

        public function show(){
            echo "$this->firstName $this->lastName<br/>";
        }
    }