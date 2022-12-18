<?php

    class test{
        //public - accessed from within and from outside the class
        public $var1;

        public function f1(){
            echo "i am a public function";
        }

        //private - accessed from within the class and can not be accessed outside the class
        private $var2;
        private function f2(){
            echo "i am a private function";
        }

        //Tirza style -> Protected - access from within and sub classes
        protected $var3;
        protected function f3(){
            echo "i am a protected function";
        }
    }