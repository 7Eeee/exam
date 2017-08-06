<?php
header('content-type:text/html;charset=utf-8;');
session_start();


//$QuestionType=$_POST['QuestionType']; //接受传递值
//$QuestionNumber=$_POST['QuestionNumber'];

//echo "good";
$TestContent=$_POST['TestContent']; //接受传递值
$AnswerA=$_POST['AnswerA'];
$AnswerB=$_POST['AnswerB']; //接受传递值
$AnswerC=$_POST['AnswerC'];
$AnswerD=$_POST['AnswerD'];
$score=$_POST['score'];
$score=intval($score);
$type=$_COOKIE["type"];
$testid=$_COOKIE["testid"];
$type2=intval($type.substr(1,1));


       if($type=='a1'){
       	$TestName=$_POST['TestName'];
$unit=$_POST['unit'];
       	include('connect.php');//连接数据库  
   $sql="INSERT INTO test(testid,testname,unit,type,content,selectA,selectB,
                selectC,selectD,correct,score) VALUES ('$testid',N'$TestName',N'$unit','$type',
                 N'$TestContent',N'$AnswerA',N'$AnswerB',N'$AnswerC',N'$AnswerD',N'$AnswerA',$score)";
                if ($mysqli->query($sql) == TRUE) {
//setCookie('title', '$TestContent', 1);
                	echo "<script language='javascript'>";     
                		echo "parent.window.frames['left'].document.getElementById('$type').style.background='green';";        	
echo "sessionStorage.setItem('title', '$TestName');";
echo "sessionStorage.setItem('unit', '$unit');";
echo "var r=confirm('恭喜你添加成功');";
echo "parent.window.frames['left'].document.getElementById('$type').nextElementSibling.click();";
echo "</script>";
}
else {
// echo "INSERT attempt failed".$mysqli->error ;

include('connect.php');
  $sql="select testname,unit from test where type='a1'";
            
//              $unit=$arr['unit'];
 $sql="update test set testname=N'$TestName',unit=N'$unit',content=N'$TestContent',selectA=N'$AnswerA',
selectB=N'$AnswerB',selectC=N'$AnswerC',selectD=N'$AnswerD',correct=N'$AnswerA',score=$score
 WHERE type=N'$type' ;";
// echo "怎么回事";
// echo $mysqli->query($sql);
  if ($mysqli->query($sql) == TRUE) {
//setCookie('title', '$TestContent', 1);
                	echo "<script language='javascript'>";     
                		echo "parent.window.frames['left'].document.getElementById('$type').style.background='green';";        	
echo "sessionStorage.setItem('title', '$TestName');";
echo "var r=confirm('恭喜你修改成功,请选择题目序号哦');";
 

echo "</script>";
}
else {
// echo "INSERT attempt failed".$mysqli->error ;
   echo "请选择题目";
}
 }
 
       } 
       else{
       		include('connect.php');//连接数据库  
       		
//              $sql="select testname,unit from test where type='a1';";
//             $r= $mysqli->query($sql);
//              $arr=mysqli_fetch_assoc($r);//或者 mysql_fetch_array($result,MYSQL_ASSOC);
//              $TestName=$arr['testname'];
//              $unit=$arr['unit'];
 	$TestName=$_POST['TestName'];
 $unit=$_POST['unit'];
                
               echo $TestName;
       	$sql="INSERT INTO test(testid,testname,unit,type,content,selectA,selectB,
                selectC,selectD,correct,score) VALUES ('$testid',N'$TestName',N'$unit','$type',
                 N'$TestContent',N'$AnswerA',N'$AnswerB',N'$AnswerC',N'$AnswerD',N'$AnswerA',$score)";
//               echo $mysqli->query($sql);
                 if ($mysqli->query($sql) == TRUE) {
//              	echo $mysqli->query($sql);
//              	 $arr=mysqli_fetch_assoc($r);
//              	 echo $arr;
//              	$response='good';
//echo $response;
//setcookie("left",$type,1);
echo "<script language='javascript'>";
//echo "sessionStorage.setItem('left', '$type');";
	echo "parent.window.frames['left'].document.getElementById('$type').style.background='green';"; 
	echo "var r=confirm('恭喜你添加成功');";
echo "parent.window.frames['left'].document.getElementById('$type').nextElementSibling.click();";

echo "</script>";
}
   else {

   include('connect.php');//连接数据库  	
            
               
       	$sql="update test set content=N'$TestContent',selectA=N'$AnswerA',
selectB=N'$AnswerB',selectC=N'$AnswerC',selectD=N'$AnswerD',correct=N'$AnswerA',score=$score
   WHERE type='$type';";
                if ($mysqli->query($sql) == TRUE) {

echo "<script language='javascript'>";
	echo "parent.window.frames['left'].document.getElementById('$type').style.background='green';"; 
echo "var r=confirm('恭喜你修改成功,请选择题目序号');";

echo "</script>";
}
   else {
   echo "INSERT attempt failed".$mysqli->error ;

   }
   }
       }
         
   mysqli_close($mysqli);            
?>