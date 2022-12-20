<?php

    //create a database connection
    function connect(){
        $conn = mysqli_connect("localhost","root","12345678","myDonation"); //host,user,pass,db

        //check if the connection was successfuly
        if (mysqli_connect_errno($conn)){
            die("failed to connect to mysql, Error: ".mysqli_connect_error());
        }

        //support hebrew/arabic/russian 
        mysqli_set_charset($conn,"utf8");

        return $conn;
    }

    //insert, update, delete
    //getting a SQL statement into $sql
    function execute($sql){
        //connect to database
        $connection = connect();

        //execute query:
        mysqli_execute($connection, $sql);

        //get the auto increment id:
        $id = mysqli_insert_id($connection); //in update or delete the id is 0

        //close connection
        mysqli_close($connection);

        //return the new created id
        return $id;
    }

    //select:
    function select($sql){
        //connect to database
        $connection = connect();

        //get a cursor represented by the query:
        $cursor = mysqli_query($connection, $sql);

        $row = mysqli_fetch_object($cursor); //take first row;
        while ($row){
            $arr[] = $row; //push to array
            $row = mysqli_fetch_object($cursor);
        }

        //close the connection
        mysqli_close($connection);

        //return an array containing the data:
        return $arr;
    }

?>