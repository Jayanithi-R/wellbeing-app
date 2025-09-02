<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
include "db.php";

$sql = "SELECT u.id, u.name, t.specialization, t.bio, t.availability 
        FROM users u 
        JOIN therapists t ON u.id=t.user_id 
        WHERE u.role='therapist'";

$result = $conn->query($sql);
$therapists = [];

while($row=$result->fetch_assoc()){
    $therapists[]=$row;
}

echo json_encode(["success"=>true,"therapists"=>$therapists]);
