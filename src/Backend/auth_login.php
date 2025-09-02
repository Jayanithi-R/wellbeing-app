<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
include "db.php";

$data = json_decode(file_get_contents("php://input"), true);

$email = $data["email"] ?? "";
$password = $data["password"] ?? "";

$stmt = $conn->prepare("SELECT id,name,password,role FROM users WHERE email=?");
$stmt->bind_param("s",$email);
$stmt->execute();
$result = $stmt->get_result();

if ($row=$result->fetch_assoc()) {
    if (password_verify($password,$row["password"])) {
        echo json_encode([
            "success"=>true,
            "message"=>"Login successful",
            "user"=>[
                "id"=>$row["id"],
                "name"=>$row["name"],
                "role"=>$row["role"],
                "email"=>$email
            ]
        ]);
    } else {
        echo json_encode(["success"=>false,"message"=>"Invalid password"]);
    }
} else {
    echo json_encode(["success"=>false,"message"=>"User not found"]);
}
