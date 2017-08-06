<?php
	header('content-type:text/html;charset=utf-8;');
	session_start();
$teacherID=$_POST['teacher'];
 $username=$_POST['session'];
 
include('connect.php');//连接数据库
$sel2 = $mysqli->query("select * from teacher where teacherId='$teacherID'");
if ($row = $sel2->fetch_assoc()) {
$sel1 = $mysqli->query("update student set number='$teacherID' WHERE user='$username'");
echo "<script language='javascript'>";              
               echo "var r=sessionStorage.getItem('which');";
               echo "if(r=='1'){window.location.href='index.html';}";
               echo "else{window.location.href='register.html';}";
                echo "</script>";


}
else{
		echo "<script language='javascript'>";              
                echo "alert('没有这个老师请重新输入');";
                 echo "window.location.href='student.html';";
                echo "</script>";
}
?>