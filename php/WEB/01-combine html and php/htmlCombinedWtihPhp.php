<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>php inside html</title>
</head>
<body>
    <p>
        <?php echo "this line is using PHP commands"?>
    </p>
    <div>
        <?php
            date-date_default_timezone_set("israel"); //old format
            echo "server date & time".date("d/m/y H:i:s");
        ?>
    </div>
</body>
</html>