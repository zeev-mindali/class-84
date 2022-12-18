<?php

    class Person{
        private $firstName;
        private $lastName;

        public function __construct($firstName=null,$lastName=null){
            $this->firstName = firstName;
            $this->lastName = lastName;
        }

        public function setFirstName($name){
            $this->firstName = $name;
        }

        public function getLastName(){
            return $this->lastName;
        }

        public function show(){
            echo "$this->firstName $this->lastName<br/>";
        }
    }

?>