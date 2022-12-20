<?php

//create a database connection
function connect(){
    $user = "root";
    $pass = "12345678";
    $server = "localhost";
    $schema = "donation";
    $conn = mysqli_connect($server, $user, $pass, $schema); //host,user,password,schema

    //check if the connection was established
    if (mysqli_connect_errno($conn)){
        die("failed to connect to mysql, Error: ".mysqli_connect_error());
    }

    //support hebrew/arabic/russion
    mysqli_set_charset($conn, "utf8");

    return $conn;
}

//insert,update,delete
//getting a SQL statement int $sql
function execute($sql){
    //connect to database
    $connection = connect();

    //execute query:
    mysqli_execute($connection, $sql);

    //get the auto increment id:\
    $id = mysqli_insert_id($connection); //in update or delete the id is 0

    //close connection
    mysqli_close($connection);

    //return the new created id or 0
    return $id;
}

//select
function select($sql){
    //connect to database
    $connection = connect();

    //get a cursor represented by the query:
    $cursor = mysqli_query($connection, $sql);

    $row = mysqli_fetch_object($cursor); //take first row;
    while ($row){
        $arr[] = $row; //push to array;
        $row = mysqli_fetch_object($cursor); //move to the next object
    }

    //close the connection
    mysqli_close($connection);

    //return an array containg the data:
    return $arr;
}

?>