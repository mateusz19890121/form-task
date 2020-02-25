<?php 
$con = mysqli_connect('127.0.0.1','root','');

if(!$con)
{
    echo 'Not connected To Server';
}
if(!mysqli_select_db($con, 'formdata'))

$Name = $_POST['name'];
$Surname = $_POST['surname'];

$sql = "INSERT INTO data (Name, Surname) VALUES ('$Name','$Surname')";
if(!mysqli_query($con,$sql))
{
    echo 'Not Inserte';
}
else
{
    echo 'Inserted';
}

header("refresh:2; url=index.html");

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