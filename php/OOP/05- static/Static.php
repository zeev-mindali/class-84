<?php

    class test{
        public $var1;
        public static $var2;
    

        public function f1(){
            echo "i am a regular function";
        }

        public static function f2(){
            echo "i am a static function";
        }

    }

    test::$var2=200;
    test::f2();

    $t = new Test();
    $t->var1="zeev";

?>


