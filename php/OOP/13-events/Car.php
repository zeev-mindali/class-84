<?php

    class Car{
        public $no_fuel; //event

        public function drive(){
            $fuel_left = rand(1,100);
            call_user_func($this->no_fuel, fuel_left);
        }
    }

?>