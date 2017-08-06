 function setCookie(c_name, value, expiredays) {
	var exdate = new Date()
	exdate.setDate(exdate.getDate() + expiredays)
	document.cookie = c_name + "=" + escape(value) +
		((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
}
 $("#test").click(function(){
// window.location.href('AddTest.html');  
   var testid = window.prompt("请输入要添加的试卷的ID","");
            if(testid)  //当用户输入内容，点确定后；
            {
            	setCookie('testid',testid,1);
//          	sessionStorage.setItem("testid",testid);
            	setCookie('type','a1',1);
            	window.location.href='frame.html';
//              document.form1.finishdate.value=user
//              document.form1.submit();
//              return true;
            }
            else
            {
                if( testid=="" ){alert("您没有设置试卷ID!");} //1、当用户不输入任何内容，点确定；
//              return false; //2、或直接点取消；
            }
       
  });
   $("#exam").click(function(){	
   window.location.href='TeacherResult.html';  
  });