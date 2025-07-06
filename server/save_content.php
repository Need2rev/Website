<?php
session_start();
if (!$_SESSION['loggedin']) {
  http_response_code(403);
  exit;
}
$data = json_decode(file_get_contents("php://input"), true);
file_put_contents('../data/content.json', json_encode($data));
