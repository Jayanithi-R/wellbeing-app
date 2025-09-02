<?php
$host = "localhost";   // XAMPP default
$user = "root";        // default username
$pass = "";            // default password (empty in XAMPP)
$db   = "myapp_db";    // the database you created

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
