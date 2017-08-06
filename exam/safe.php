<?php
if (!get_magic_quotes_gpc())
 {
 if (!empty($_GET))
 {
 $_GET  = addslashes_deep($_GET);
 }
 if (!empty($_POST))
 {
 $_POST = addslashes_deep($_POST);
 }
 $_COOKIE   = addslashes_deep($_COOKIE);
 $_REQUEST  = addslashes_deep($_REQUEST);
 }
 function addslashes_deep($value)
 {
 if (empty($value))
 {
 return $value;
 }
 else
 {
 return is_array($value) ? array_map('addslashes_deep', $value) : addslashes($value);
 }
 }

function clean($v) { 
    //判断magic_quotes_gpc是否为打开
    if (!get_magic_quotes_gpc()) {
    //进行magic_quotes_gpc没有打开的情况对提交数据的过滤
    $v = addslashes($v);
    }
    //把'_'过滤掉
    $v = str_replace("_", "\_", $v);
    //把'%'过滤掉 
    $v = str_replace("%", "\%", $v);
    //把'*'过滤掉 
    $v = str_replace("*", "\*", $v);
    //回车转换
    $v = nl2br($v);
    //html标记转换
    $v = htmlspecialchars($v);
    //将update去掉
    $v = str_replace("update", "", $v);
    //将or去掉
    $v = str_replace("or", "", $v);
    $v = str_replace("=", "", $v);
    $v = str_replace(" ", "", $v);
    return $v; 
}
?>