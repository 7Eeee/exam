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

var type = getCookie('type');
var testname = sessionStorage.getItem("title");
var unit = sessionStorage.getItem("unit");

function onload3() {

	//leftTree是左边Frame的id  
	//重新加载这个页面  
	//  window.parent.frames[ "left"].location.reload();  

	if(type != 'a1') {
		//	document.getElementById("TestName").disabled='disabled';
		//	document.getElementById("unit").disabled='disabled';
		//	document.getElementById('TestName').placeholder=testname+'(如需修改题目，请返回第一题修改）';
		document.getElementById('TestName').value = testname;
		document.getElementById('unit').value = unit;
		//$('#TestName').val($testname);
		//$('#unit').val($unit);
	}

	if(type.charAt(0) == 'b') {
		//	document.getElementById("AnswerB").disabled='disabled';
		//	document.getElementById("AnswerC").disabled='disabled';
		//	document.getElementById("AnswerD").disabled='disabled';
		document.getElementById("h3").style.display = 'none';
		document.getElementById("h4").style.display = 'none';
		document.getElementById("h5").style.display = 'none';
		document.getElementById("how").innerHTML = '正确答案';
	}
	if(type.charAt(0) == 'c') {
		//	document.getElementById("AnswerB").disabled='disabled';
		//	document.getElementById("AnswerC").disabled='disabled';
		//	document.getElementById("AnswerD").disabled='disabled';
		document.getElementById("h3").style.display = 'none';
		document.getElementById("h4").style.display = 'none';
		document.getElementById("h5").style.display = 'none';
		document.getElementById("how").innerHTML = '正确答案';

	}
	if(type.charAt(0) == 'a') var s1 = "选择题"; //提示第几题
	if(type.charAt(0) == 'b') var s1 = "填空题";
	if(type.charAt(0) == 'c') var s1 = "简答题";
	document.getElementById("aa1").innerHTML = s1 + '第' + type.charAt(1) + '题';
}