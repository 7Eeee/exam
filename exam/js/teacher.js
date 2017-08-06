function onload(){
	var username = sessionStorage.getItem("username");
	document.getElementById('session').value=username;
}

 $("#test").click(function(){
// 	alert('aa');
 	sessionStorage.setItem('which', '1');
 	document.getElementById("form1").submit();
   
    
 });
  $("#exam").click(function(){
 	sessionStorage.setItem('which', '2');
   document.getElementById("form1").submit();
  });