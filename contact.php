<?php
$con_name = $_POST['con_name'];
$con_email = $_POST['con_email'];
$con_message = $_POST['con_message'];

$to ='shagora061@gmail.com';

$message = $con_name.'<br/><br/>';
$message .= $con_message.'<br/><br/>';
$message .= 'Best Regards';

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";


// More headers
$headers .= 'From: <'.$con_email.'>' . "\r\n";
mail($to, $con_message, $message, $headers);

echo 'send your mail';
header('location: contact.html');