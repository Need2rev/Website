<?php
session_start();
$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

if ($username === 'admin' && $password === 'deinPasswort') {
    $_SESSION['loggedin'] = true;
    header("Location: /admin/panel.html");
    exit;
} else {
    echo "Login fehlgeschlagen";
}
?>
