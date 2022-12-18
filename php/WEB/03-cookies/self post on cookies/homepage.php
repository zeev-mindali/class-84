<?php
    if (isset($_POST["fullName"])){
        //save cookie:
        setCookie("userFullName", $_POST["fullName"],time()+3600);
        //note setcookie must be before the <html> tag>

        //redirect to same page, seo we could take the cookie immeditly:
        header("Location: homepage.php");
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
    <for method="post">
        <label for="fullName">enter your full name:</label>
        <input type="text" id="fullName" name="fullName" value="<?php
            if (isset($_COOKIE["UserFullName"])){
                echo $_COOKIE["UserFullName"];
            }
            ?>">

            <input type="submit" value="save"/>
</body>
</html>