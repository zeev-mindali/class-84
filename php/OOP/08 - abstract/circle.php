<?php

    require_once "shape.php";

    class Circle extends Shape{
        private $radius;

        const PI = 3.1415;
    

        public function __construct($x=0,$y=0,$radius=0){
            $this->x=$x;
            $this->y=$y;
            $this-setRadius($radius);
        }


        public function getRadius(){
            return $this->radius;
        }

        public function setRadius($radius){
            if ($radius>0){
                $this->radius=$radius;
            }
        }

        //override abstract method 
        public function getArea(){
            return self::PI*$this->radius*$this->radius;
        }
    }
?>