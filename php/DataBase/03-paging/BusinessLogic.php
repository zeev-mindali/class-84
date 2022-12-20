<?php

    require_once "dal.php";

    define("LIMIT",3);

    function get_total_pages(){
        $sql = "SELECT count(*) as total_rows from students";
        $total_pages = ceil(get_object($sql)->total_rows/LIMIT);
        return $total_pages;
    }

    function get_page($page_number){
        $offset = ($page_number-1)*LIMIT;
        

    }

?>