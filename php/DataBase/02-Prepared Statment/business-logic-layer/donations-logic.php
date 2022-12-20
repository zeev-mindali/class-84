<?php

require_once "../data-access-layer/dal.php";
//add new product
function addDonation($donation)
{
    //get conneciton:
    $connection = connect();

    //create prepared statement
    $ps = $connection->prepare("INSERT INTO donation(id, name, sum) VALUES(?, ?, ?)");
    
    //bind parameters (s=string, d=double, i=integer)
    $ps->bindParam("isi",$donation->id,$donation->name,$donation->sum);

    //execute prepared statement
    $id=$ps->execute();

    //getting the id , which we will get becuase of AI
    $donation->id=$id;

   
    //close connection
    $connection->close();

     //return donation with the new id
    return $donation;
}

//update donation
function updateDonation($donation){
    //get connection
    $connection = connect();

    //create prepared statment
    $ps = $connection->prepare("UPDATE donation SET name=?,family=?,sum=?,auth_code=?,memo=? WHERE id=?");

    //bind parameters (s=string,d=double,i=integer)
    $ps->bindParam("ssissi",$donation->name,$donation->family,$donation->sum,$donation->auth_code,$donation->memo,$donation->id);

    //execute
    $ps->execute();
    
    //close connection
    $connection->close();
    
    //return the donation
    return $donation;
}
function deleteDonation($id){
    //get connection
    $connection = connect();

    //create prepared statement:
    $ps = $connection->prepare("DELETE FROM donation WHERE id=?");

    //bind parameters (s=string,d=double, i=integer)
    $ps->bind_param("i",$id);

    //close connection
    $connection->close();

    //execute statement
    $ps->execute();
}
?>