
function getCookie(c_name) {
	if(document.cookie.length > 0) {
		c_start = document.cookie.indexOf(c_name + "=")
		if(c_start != -1) {
			c_start = c_start + c_name.length + 1
			c_end = document.cookie.indexOf(";", c_start)
			if(c_end == -1) c_end = document.cookie.length
			return unescape(document.cookie.substring(c_start, c_end))
		}
	}
	return ""
}
function setCookie(c_name, value, expiredays) {
	var exdate = new Date()
	exdate.setDate(exdate.getDate() + expiredays)
	document.cookie = c_name + "=" + escape(value) +
		((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
}

$("#a1").click(function(){
//	showhint();
	setCookie('type', 'a1', 1);
	
});
$("#a2").click(function(){
	setCookie('type', 'a2', 1);
});
$("#a3").click(function(){
	setCookie('type', 'a3', 1);
});
$("#a4").click(function(){
	setCookie('type', 'a4', 1);
});
$("#a5").click(function(){
	setCookie('type', 'a5', 1);
});
$("#a6").click(function(){
	setCookie('type', 'a6', 1);
});
$("#a7").click(function(){
	setCookie('type', 'a7', 1);
});
$("#a8").click(function(){
	setCookie('type', 'a8', 1);
});
$("#a9").click(function(){
	setCookie('type', 'a9', 1);
});
$("#a10").click(function(){
	setCookie('type', 'a10', 1);
});

$("#b1").click(function(){
	setCookie('type', 'b1', 1);
});
$("#b2").click(function(){
	setCookie('type', 'b2', 1);
});
$("#b3").click(function(){
	setCookie('type', 'b3', 1);
});
$("#b4").click(function(){
	setCookie('type', 'b4', 1);
});
$("#b5").click(function(){
	setCookie('type', 'b5', 1);
});
$("#b6").click(function(){
	setCookie('type', 'b6', 1);
});
$("#b7").click(function(){
	setCookie('type', 'b7', 1);
});
$("#b8").click(function(){
	setCookie('type', 'b8', 1);
});
$("#b9").click(function(){
	setCookie('type', 'b9', 1);
});
$("#b10").click(function(){
	setCookie('type', 'b10', 1);
});

$("#c1").click(function(){
	setCookie('type', 'c1', 1);
});
$("#c2").click(function(){
	setCookie('type', 'c2', 1);
});
//function onload4(){
//// var a=getCookie('type');
//var b= sessionStorage.getItem('left');
////var b=getCookie('left');
////alert(a);
////alert(a);
////alert(b);
////if(String(a)==String(b))
//	document.getElementById(b).style.background="greenyellow";
//	
//	
//}
function showhint()
{
//	setCookie('type', '1', 1);
var xmlhttp;

if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  	alert(xmlhttp.responseText);
if (xmlhttp.readyState==4 && xmlhttp.status==200&&xmlhttp.responseText.substr(0,4)=='good')
{
  	alert('aaa');
  document.getElementById('a1').style.background='green';
 }
xmlhttp.open("GET","try.php",true);
xmlhttp.send();
}
}