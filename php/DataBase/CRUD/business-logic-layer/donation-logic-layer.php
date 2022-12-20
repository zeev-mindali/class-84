<?php

require_once "../data-access-layer/dal.php";

//add donation
function addDonation($donation){
    //create an insert statement:
    $sql = "INSERT INTO donation(name,family,tel,sum,payment_code,memo) VALUES ('$donation->name','$donation->family','$donation->tel',$donation->sum, $donation->payment_code,'$donation->memo)";

    //add the donation
    $id = execute($sql);

    //update the id
    $donation->id = $id;

    //return the donation 
    return $donation;
}

//update existing donation
function updateDonation($donation){
    //create an update statement

    $sql = "UPDATE donation set NAME='$donation->name',family='$donation->family',tel='$donation->tel',sum=$donation->sum, payment_code=$donation->payment_code, memo='$donation->memo'
    ";

    //update the product
    execute($sql);

    //return the donation
    return $donation;
}

//delete donation
function deleteDonation($id){
    $sql = "DELETE FROM donation WHERE id=$id";

    //execute
    execute($sql);
}

//get all payment
function getAllPayments(){
    $sql = "SELECT * FROM payment";
    $paymentType = select($sql);
    return $paymentType;
}

//get donation range
function getDonationRange($from,$to){
    $sql = "SELECT * FROM donation WHERE sum>$from AND sum<$to";

    //get the result
    $donation = select($sql);

    return $donation;
}
?>