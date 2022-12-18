<?php

    class Person{
        //data members (must come with an access modifires):
            public $firstName; //will contains null
            public $lastName="---"; //will contains ---

            //note the following are errors:
            //$firstName;  => error, must have access modifier
            //$lastName=""; =>error, can not accept empty string


            //methods:
            public function show(){ //print is php keryword and this wirds cannot be used as functions name
                //note: must address any data member with $this
                echo $this->firstName." ".$this->lastName;
                //$this->firstName $this->lastName //also OK
                $this->print_separator();
                
            }


            //if you will not write a modifier it will be private
            function print_separator(){
                echo "<br/>-------------------------------------";
            }
    }

?>