<?php

    require_once '../business-logic/donations-logic.php';

    $command = $_REQUEST["command"];
    //(name,family,tel,sum,payment_code,memo) 

    switch($command){
        case "insert":
            $donation= new stdClass();
            $donation->name = $_POST["name"];
            $donation->family = $_POST["family"];
            $donation->tel=$_POST["tel"];
            $donation->sum=$_POST["sum"];
            $donation->payment_code=$_POST["payment_code"];
            $donation->memo=$_POST["memo"];
            addDonation($donation);
            break;
        case "update":
            $donation= new stdClass();
            $donation->name = $_POST["name"];
            $donation->family = $_POST["family"];
            $donation->tel=$_POST["tel"];
            $donation->sum=$_POST["sum"];
            $donation->payment_code=$_POST["payment_code"];
            $donation->memo=$_POST["memo"];
            $donation->auth_code=$_POST["auth_code"];
            updateDonation($donation);
            break;
        case "delete":
            $id = $_POST["id"];
            deleteDonation($id);
            break;
    }

//redirect:
header("location: ../pages./thanks.php");

?>