<!DOCTYPE html>
<html lang="he">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>I am google :)</title>
    <style>
        body{
            text-align: center;
        }
    </style>
</head>
<body>
        <h1>PHP search</h1>
        <label> In your mother in law, what you want?</label>
        <form method="get" action="">
            <input type="text" name="results"/>
            <input type="submit"/>
        </form>
        <?php         
          
                echo "<br/>tour search result array:<hr/><br/>";
                $url = "https://www.google.co.il/search?q=".str_replace(' ','%20',$_GET['results']);

                //zeev mindali->zeev%20mindali

                //create instance of curl......
                $ch = curl_init();
                //give the url that we want to get
                curl_setopt($ch,CURLOPT_URL,$url);
                //return the result in json format
                curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
                //tell the web shiche server send the command
                curl_setopt($ch, CURLOPT_REFERER, 'https://www.google.com');
                //execute the command
                $body = curl_exec($ch);
                //close the the connection
                curl_close($ch);

                //encode to hebrew
                $myResult = utf8_decode($body);
                //show the result
                echo $myResult;
            //}

        ?>
</body>
</html>