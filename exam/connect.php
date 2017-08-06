<!-- 连接数据库 -->
<?php 
$mysqli = new mysqli('localhost', 'root', '123456', 'exam');
if ($mysqli->connect_error) {
die('Error : (' . $mysqli->connect_error . ') ' . $mysqli->connect_error);
}
else {
    //echo "Connect success<br>";
}

?>
　