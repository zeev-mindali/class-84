<?php

    require_once "Person.php";

    class Student extends Person{
        private $grade;
        
        public function getGrade(){
            return $this->grade;
        }

        public function setGrade($grade){
            $this->grade=$grade;
        }
    }


?>