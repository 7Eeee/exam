<!-- 插入 -->

<?php
include("connect.php");
$suser = $_POST['user'];
$spwd = $_POST['pwd'];
$sname = $_POST['name'];
$semail= $_POST['email'];
$stel = $_POST['tel'];
$sage = $_POST['age'];
$sdate=$_POST['date'];
$steacherId=$_POST['teacherID'];
$sage=intval($sage);
//$steacherId=intval($steacherId);
if($steacherId!=null){
		$sql="INSERT INTO teacher(user,pwd,name,email,tel,age,date,teacherId) VALUES ('$suser',
'$spwd',N'$sname', '$semail','$stel',$sage,'$sdate','$steacherId')";
//$mysqli->query($sql);
if ($mysqli->query($sql) == TRUE) {
//echo "student entry saved successfully.";
header('content-type:text/html;charset=utf-8;');
echo "<script language='javascript'>";
echo "var r=confirm('恭喜你注册成功，是否现在登录？');";
echo "if(r==true){window.location.href='index.html'}";
echo "</script>";
}
 else {
 echo "INSERT attempt failed".$mysqli->error ;
 }
}
else{
$sql="INSERT INTO student(user,pwd,name,email,age,tel,date) VALUES ('$suser',
'$spwd',N'$sname', '$semail',$sage,'$stel','$sdate')";
//$mysqli->query($sql);
if ($mysqli->query($sql) == TRUE) {
//echo "student entry saved successfully.";
//echo "window.location.href='$url'";  
header('content-type:text/html;charset=utf-8;');
echo "<script language='javascript'>";
echo "var r=confirm('恭喜你注册成功，是否现在登录？');";
echo "if(r==true){window.location.href='index.html'}";
echo "</script>";
}
 else {
 echo "INSERT attempt failed".$mysqli->error ;
 }
}
mysql_close($mysqli);
?>
