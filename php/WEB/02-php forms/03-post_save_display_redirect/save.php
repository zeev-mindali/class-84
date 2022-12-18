<?php

    //take parameters
    $fullName = $_POST["fullName"];
    $message = $_POST["message"];

    //save them to text file.
    $data2save = "full name: $fullName \nMessage: $message\n";
    file_put_contents("Details.txt",$data2save, FILE_APPEND);

    //display on screen
    echo "Full name: $fullName<br/>";
    echo "Message: $message";

    //redirect to thank you page
    header("Location: thankyou.html");

?>

<!-- 
    note:
    $_POST is for POST verb..
    $_GET is for GET verb...
    $_COOKIE is for COOKIE
    $_REQUEST containes POST,GET cookies
    FILE_APPEND will cause append to the file.... 
-->
