<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
include "db.php";

$data = json_decode(file_get_contents("php://input"), true);

$name = $data["name"] ?? "";
$email = $data["email"] ?? "";
$password = $data["password"] ?? "";
$role = $data["role"] ?? "patient";

if (empty($name) || empty($email) || empty($password)) {
    echo json_encode(["success"=>false,"message"=>"All fields required"]);
    exit;
}

$check = $conn->prepare("SELECT id FROM users WHERE email=?");
$check->bind_param("s",$email);
$check->execute();
$check->store_result();

if ($check->num_rows>0) {
    echo json_encode(["success"=>false,"message"=>"Email already exists"]);
    exit;
}

$hashed = password_hash($password,PASSWORD_BCRYPT);
$stmt = $conn->prepare("INSERT INTO users (name,email,password,role) VALUES (?,?,?,?)");
$stmt->bind_param("ssss",$name,$email,$hashed,$role);

if ($stmt->execute()) {
    echo json_encode(["success"=>true,"message"=>"Registered successfully"]);
} else {
    echo json_encode(["success"=>false,"message"=>"Error while registering"]);
}
