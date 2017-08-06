<!-- Create database -->
<?php
include("connect.php");
$sql = "
create table namepassword(
password int(11) not null auto_increment primary key,
name varchar(255) 
)
";
if ($mysqli->query($sql) === TRUE) {
echo "Database created successfully";
}
else {
echo "Error creating database: " . $conn->error;
}
?>