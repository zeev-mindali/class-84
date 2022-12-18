<?php
    class Test{
        const PI = 3.1415;
        const vat = 17;
    

        public function f1(){
            echo "PI: ".self::PI."<br/>";
        }


    }

    echo "PI: ".Test::PI;
?>