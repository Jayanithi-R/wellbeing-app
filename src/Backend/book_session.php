<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
include "db.php";

$data = json_decode(file_get_contents("php://input"), true);

$patient_id = $data["patient_id"] ?? "";
$therapist_id = $data["therapist_id"] ?? "";
$session_date = $data["session_date"] ?? "";

if(empty($patient_id)||empty($therapist_id)||empty($session_date)){
    echo json_encode(["success"=>false,"message"=>"All fields required"]);
    exit;
}

$stmt = $conn->prepare("INSERT INTO sessions (patient_id, therapist_id, session_date) VALUES (?,?,?)");
$stmt->bind_param("iis",$patient_id,$therapist_id,$session_date);

if($stmt->execute()){
    echo json_encode(["success"=>true,"message"=>"Session booked successfully"]);
}else{
    echo json_encode(["success"=>false,"message"=>"Failed to book session"]);
}
