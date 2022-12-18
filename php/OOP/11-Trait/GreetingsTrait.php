<?php

    //Traot = A group of implemented functions that can be given to any class, with or without an interface implementation

    trait GreetingsTrait{
        public function sayHi(){
            echo "Hi!<br/>";
        }

        public function sayHello(){
            echo "Hello! <br/>";
        }

        public function sayHellowWorld(){
            echo "Hello world!<br/>";
        }
    }
?>