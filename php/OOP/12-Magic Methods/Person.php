<?php

    class Person{
        public $full_name;


        //.1 constructor:
        public function __construct($full_name=null){
            $this->full_name = $full_name;
        }

        //2. destructor:
        public function __destruct(){
            echo "destroying an object";
        }

        //3. toString
        public function __toString(){
            return "full name: $this->full_name<br/>";
        }
    }

?>