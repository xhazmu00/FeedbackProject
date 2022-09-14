<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

    define('DB_HOST', '127.0.0.1');
    define('DB_USER', 'hadzi');
    define('DB_PASS', '');
    define('DB_NAME', 'php_dev');

    // CREATE CONNECTION
    $connection = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

    // CHECK CONNECTION
    if($connection -> connect_error)
    {
        die('Connection failed' . $connection->connect_error);
    }
    else{
        // echo 'Connection is ready';
    }
