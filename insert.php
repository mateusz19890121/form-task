<?php
//require_once "connect.php"
//$connection = @new mysqli($host, $db_user, $db_password, $db_name);
//if($connection->connect_erno!=0)
//{
//    echo "Error: ".$connection->connect_erno . "Opis" . $connection->connect_error;
//}
//else
//{
//    $name = $_POST['name'];
//    $surname = $_POST['surname'];
//    echo 'It works!';
 //   $connection->close();
//}
$host='localhost';
$user='root';
$pass='';
$db='baza1';
$con = mysqli_connect($host, $user, $pass, $db);
if($con)
{
    echo 'Successsss';
}
$name = $_POST['name'];
$surname = $_POST['surname'];
$sql = "insert into tabela (Name, Surname) VALUES ('$name', '$surname')";
$query=mysqli_query($con,$sql);
if($query)
    echo 'data inserted';
header("refresh:8; url=index.html");

?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>