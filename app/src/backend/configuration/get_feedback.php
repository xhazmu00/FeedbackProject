<?php 
        include 'database.php';

        $sql = 'SELECT * FROM feedback';
        $result = mysqli_query($connection, $sql);
        // $feedback = mysqli_fetch_all($result, MYSQLI_ASSOC);

        $rows = array();
        while($r = mysqli_fetch_assoc($result)) {
            $rows[] = $r;
        }
        print json_encode($rows); //convert php data to json data
