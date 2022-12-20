<?php

    require_once "BusinessLogic.php";

    $command = $_REQUEST["command"];

    switch ($command){
        case "get_total_pages:";
            echo get_total_pages();
            break;

        case "get_page":
            echo get_page($_GET["page_number"]);
    }



?>