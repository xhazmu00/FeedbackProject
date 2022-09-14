

<?php
include 'database.php';



$name = $email = $body = '';
$nameErr = $emailErr = $bodyErr = '';

// echo $_POST['name'];
// echo $_POST['email'];
// echo $_POST['message'];


// form submit
// if (isset($_POST['submit'])) {
// validate name 
if (empty($_POST['name'])) {
    $nameErr = "Name is required";
} else {
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
}
// validate email
if (empty($_POST['email'])) {
    $emailErr = "Email is required";
} else {
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
}
// validate body
if (empty($_POST['message'])) {
    $bodyErr = "Feedback is required";
} else {
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
}

if (empty($nameErr) && empty($emailErr) && empty($bodyErr)) {

    $sql = "INSERT INTO feedback (name, email, body) VALUES ('$name','$email','$message')";

    if (mysqli_query($connection, $sql)) {
        //SUCCESS
        // header('Location: feedback.php');
        echo 'SUCCESS';
    } else {
        //ERROR
        echo 'Error: ' . mysqli_error($connection);
    }
}
 //}


?>