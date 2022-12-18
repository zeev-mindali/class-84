<?php

    //abstract class - can't create an object

    abstract class Shape{
        public $x;

        public $y;

        public function __construct($x=0,$y=0){
            $this->x = $x;
            $this->y = $y;
        }

        public function show(){
            echo "x=$this->x , Y=$this->y";
        }

        //abstract methods
        //1. have implementation
        //2. must be overridden in non abstract derived class
        //3, can exists only abstract class 

        public abstract function get_area();
    }
?>