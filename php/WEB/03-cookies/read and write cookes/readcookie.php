<!DOCTYPE html>
<html>
    <body>
        <?php
            if (isset($_COOKIE["UserColor"])){
                $color = $_COOKIE["UserColor"];
                echo "<p style=\"color: $color;\">Cooke UserColor has been loaded";
            } else {
                echo "<p> there is no cookie with that name...."
            }
    </body>
</html>