<?php
$name = filter_input(INPUT_POST, 'name');
$age = filter_input(INPUT_POST, 'age');
$country = filter_input(INPUT_POST, 'country');
$host = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "formulaquiz";
// Create connection
$conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);
if (mysqli_connect_error()){
die('Connect Error ('. mysqli_connect_errno() .') '
. mysqli_connect_error());
}
else{
$sql = "INSERT INTO formula (Name, Age, Country)
values ('$name','$age','$country')";
if ($conn->query($sql)){
echo "New record is inserted sucessfully";
}
else{
echo "Error: ". $sql ."
". $conn->error;
}
$conn->close();
}
?>