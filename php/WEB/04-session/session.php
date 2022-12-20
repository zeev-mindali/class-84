<?php

//Initialize user session.
//(must do it on each php file that needs the session)
session_start();

$userColor = "";
if (isset($_POST["save"])){
    $_SESSION["UserColor"] = "green"; //write value
} elseif (isset($_POST["read"])){
    if (isset($_SESSION["UserColor"])){
        $userColor = $_SESSION["UserColor"]; //read value
    }
} elseif (isset($_POST["remove"])){
    unset($_SESSION["UserColor"]); //remove specific value from session
} elseif (isset($_POST["clear"])){
    session_destroy();
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post">
        <input type="submit" value="SAVE item to session" name="save"/>
        <input type="submit" value="READ item from session" name="read"/>
        <input type="submit" value="REMOVE item from session" name="remove"/>
        <input type="submit" value="CLEAR all session" name="clear"/>
        <hr/>
        <?php
            if ($userColor !=""){
            echo "<p style='color: $userColor;'>User Color: $userColor</p>";
            }
        ?>
    </form>
</body>
</html>