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

//function checkCookie() {
//	username = getCookie('username');
//	txtPwd=getCookie('pwd');
//	if(username!= null && username != ""&&txtPwd != null && txtPwd != "") {
//		document.getElementById('text').value=username;
//		document.getElementById('password').value=txtPwd;
//	} else {
//		var txtUser = $("#text").val();            //设置cookie
//	    var txtPwd = $("#password").val();
//		if(txtUser != null && txtUser != ""&&txtPwd != null && txtPwd != "") {
//			setCookie('username',txtUser, 365);
//			setCookie('pwd',txtPwd, 365);
//		}
//	}
//}

function ischeck() {
	if(document.getElementById("ischeckbox").checked) {
		// alert("checkbox is checked");
		setCookie('flag1', '111', 1);
		var txtUser = $("#text").val(); //设置cookie
		var txtPwd = $("#password").val();
		//alert(txtUser);
		if(txtUser != null && txtUser != "" && txtPwd != null && txtPwd != "") {
//			alert('jjj');
			setCookie('username', txtUser, 1);
			setCookie('pwd', txtPwd, 1);
		} 
	}
	else {
			setCookie('flag1', '000', 1);
		}
	
}

function onload2() {
	flag1 = getCookie('flag1');
	if(flag1 == "111") {
		var username = getCookie('username');
		var txtPwd = getCookie('pwd');
		if(username != null && username != "" && txtPwd != null && txtPwd != "") {
			document.getElementById('text').value = username;
			document.getElementById('password').value = txtPwd;
			document.getElementById("ischeckbox").checked=true;
		}
	} else {
		document.getElementById('text').value = null;
		document.getElementById('password').value =null;
	}
}


