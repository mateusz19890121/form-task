<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php   
// echo phpinfo();
// try
// {
   $dbh = new PDO("mysql:host=localhost;dbname=formdata", "root");
// //    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   
//    $sql ="select Name from data;";
//    $statement = $pdo->prepare($sql);
//    $statement->execute();

//    var_dump($statement);

$sth = $dbh->prepare("SELECT * FROM data");
$sth->execute();

/* Fetch all of the values of the first column */
$result = $sth->fetchAll(PDO::FETCH_ASSOC);

echo "<table>"
echo "<tr>
        <td>Name</td> <td>Surname</td> <td>Email</td><td>Telephone</td><td>Date of birth</td><td>Height</td><td>Weight</td><td>Gender</td><td>Gender</td>
     </tr>"
foreach($result as $key => $row)
{
    echo "<tr>";
    echo "'<td>'.$row['Name'].'</td>'. "<td>". $row['Surname'].'</td>'. '<td>' . $row['Email'] . '</td>' . '<td>' . $row['Telephone'] . '</td>'.'<td>'. $row['Date_of_Birth'] . '</td>' .'<td>' $row['Height'] .'</td>'.'<td>'. $row['Weight'] . '</td>' .'<td>' $row['Gender'] . '</td>'.'<td>'. $row['Country'] . '</td>'";
    echo "</tr>";
}

   ​
//    $result = $statement->fetchAll();

// }
// catch(PDOException $e)
// {
//    echo 'Połączenie nie mogło zostać utworzone: ' . $e->getMessage();
// }




    // $servername = "localhost";
    // $username = "";
    // $password = "";
    
    // // Create connection
    // $conn = mysqli_connect($servername, $username, $password);
    // $pdo = new PDO('mysql:host=localhost;dbname=formdata', 'root', '');
    // // Check connection
    // if (!$pdo) {
    //     die("Connection failed: " . mysqli_connect_error());
    
    // echo "Connected successfully";
    // $query="SELECT * FROM message";
    // mysql_select_db("formdat");
    // $data=mysql_query($query);
    // while($row=mysql_fetch_array($data)){
    //     echo "<p>";
    //     echo $row["id"];
    //     echo "-"; // a separator
    //     echo $row["name"];
    //     echo "-"; // a separator
    //     echo $row ["surname"];
    //     echo "-"; // a separator
    //     echo $row["email"];
    //     echo "-"; // a separator
    //     echo $row["telephone"];
    //     echo "-"; // a separator
    //     echo $row["date_of_birth"];
    //     echo "-"; // a separator
    //     echo $row["height"];
    //     echo "-"; // a separator
    //     echo $row["weight"];
    //     echo "-"; // a separator
    //     echo $row["gender"];
    //     echo "-"; // a separator
    //     echo $row["country"];
    //     echo "</p>";
    //     }

    //     }else{
    //     echo "<p>MySQL does not know that username and password </p>";
    //     }

//     echo "<tabel>
//     <tr>
//       <td>Name:</td>
//       <td>".$_SESSION['name']."</td>
//     </tr>
//     <tr>
//       <td>Surname:</td>
//       <td></td>
//     </tr>
//     <tr>
//       <td>Email</td>
//       <td></td>
//     </tr>
//     <tr>
//       <td>Telephone</td>
//       <td></td>
//     </tr>
//     <tr>
//       <td>Date of Birth</td>
//       <td></td>
//     </tr>
//     <tr>
//       <td>Height</td>
//       <td></td>
//     </tr>
//     <tr>
//       <td>Weight</td>
//       <td></td>
//     </tr>
//     <tr>
//       <td>Gender</td>
//       <td></td>
//     </tr>
//     <tr>
//       <td>Country</td>
//       <td></td>
//     </tr>
//   </tabel>";
?>


</body>
</html>
