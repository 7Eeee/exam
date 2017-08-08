<?php
	header('content-type:text/html;charset=utf-8;');
session_start();
//include('safe.php');
if($_POST['text']&&$_POST['password'])
{
$username=$_POST['text']; //接受传递值
$password=$_POST['password'];
}
else 
{
echo '用户名或密码不能为空';//当然也可以进行其他操作，比如使用header('Location:error.php')来把用户重定向到一个错误提示页
exit;
}

include('connect.php');//连接数据库
 $checkbro=$_POST['identity'];
 if($checkbro=='teacher'){
$sel1 = $mysqli->query("SELECT user,pwd FROM teacher WHERE user = '$username'  AND pwd = '$password'");

}
else{
$sel1 = $mysqli->query("SELECT user,pwd FROM student WHERE user = '$username'  AND pwd = '$password'");
}


              if ($row = $sel1->fetch_assoc()) {

              	echo "<script language='javascript'>";
                echo "sessionStorage.setItem('username', $username); ";
                if($checkbro=='teacher'){
                echo "window.location.href='teacher.html';";
                }
                else{
                	echo "window.location.href='student.html';";
                }
                echo "</script>";

	             
                     }
                      else{
                echo "<script language='javascript'>";
                echo "window.location.href='index.html';";
                echo "alert('用户名或密码错误');";
                echo "</script>";
	                      
                          }
                mysql_close($mysqli);
?>