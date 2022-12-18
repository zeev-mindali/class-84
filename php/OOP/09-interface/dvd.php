<?php

    require_once "ElectronicDevice.php";
    require_once "PlayerInterface.php";
    require_once "TestingInterface.php";


    class DVD extends ElectronicDevice implements PlayerInteface, TestingInterface{
        public function play(){
            echo "playing....<br/>";
        }

        public function pause(){
            echo "pausing.....<br/>";
        }

        public function stop(){
            echo "Stopping......<br/>";
        }

        public function test(){
            echo "testing the device.....";
        }
    }

?>