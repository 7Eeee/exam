var uname = document.getElementById('user');

uname.onfocus = function() {
	this.nextElementSibling.style.display = 'block';
	this.nextElementSibling.innerHTML = '8-12数字或字母组成';
}
uname.onblur = function() {
	if(this.validity.valid) {
		this.nextElementSibling.className = 'pc show_pass';
		this.nextElementSibling.innerHTML = '用户名格式正确';

	} else if(this.validity.valueMissing) {
		this.nextElementSibling.className = 'pc show_warn';
		this.nextElementSibling.innerHTML = '用户名不能为空';

	} else if(this.validity.patternMismatch) {
		this.nextElementSibling.className = 'pc show_warn';
		this.nextElementSibling.innerHTML = '用户名格式非法';

	}
}
var upwd = document.getElementById('pwd');
upwd.onfocus = function() {
	this.nextElementSibling.style.display = 'block';
	this.nextElementSibling.innerHTML = '6-12位数字/字母/英文符号组成';
}
upwd.onblur = function() {
	if(this.validity.valid) {
		this.nextElementSibling.className = 'pc show_pass';
		this.nextElementSibling.innerHTML = '密码格式正确';

	} else if(this.validity.valueMissing) {
		this.nextElementSibling.className = 'pc show_warn';
		this.nextElementSibling.innerHTML = '用户密码不能为空';

	} else if(this.validity.patternMismatch) {
		this.nextElementSibling.className = 'pc show_warn';
		this.nextElementSibling.innerHTML = '密码格式非法';

	}
}
var e_mail = document.getElementById('email');
e_mail.onfocus = function() {
	this.nextElementSibling.style.display = 'block';
	this.nextElementSibling.innerHTML = '请输入你的常用邮箱';
}
e_mail.onblur = function() {
	if(this.validity.valid) {
		this.nextElementSibling.className = 'pc show_pass';
		this.nextElementSibling.innerHTML = '邮箱格式正确';

	} else if(this.validity.valueMissing) {
		this.nextElementSibling.className = 'pc show_warn';
		this.nextElementSibling.innerHTML = '邮箱不能为空';

	} else if(this.validity.typeMismatch) {
		this.nextElementSibling.className = 'pc show_warn';
		this.nextElementSibling.innerHTML = '邮箱格式有误';

	}
}

var uphone = document.getElementById('tel');
uphone.onfocus = function() {
	this.nextElementSibling.style.display = 'block';
	this.nextElementSibling.innerHTML = '请输入你的联系电话';
}
uphone.onblur = function() {
	if(this.validity.valid) {
		this.nextElementSibling.className = 'pc show_pass';
		this.nextElementSibling.innerHTML = '电话号码格式正确';

	} else if(this.validity.valueMissing) {
		this.nextElementSibling.className = 'pc show_warn';
		this.nextElementSibling.innerHTML = '电话号码不能外空';

	} else if(this.validity.typeMismatch) {
		this.nextElementSibling.className = 'pc show_warn';
		this.nextElementSibling.innerHTML = '电话号码格式非法';

	}
}
var uage = document.getElementById('age');
uage.onfocus = function() {
	this.nextElementSibling.style.display = 'block';
	this.nextElementSibling.innerHTML = '请输入你的年龄';
}
uage.onblur = function() {
	if(this.validity.valid) {
		this.nextElementSibling.className = 'pc show_pass';
		this.nextElementSibling.innerHTML = '你的年龄符合注册要求';

	} else if(this.validity.rangeOverflow) {
		this.nextElementSibling.className = 'pc show_warn';
		this.nextElementSibling.innerHTML = '你的年龄大于注册范围';

	} else if(this.validity.rangeUnderflow) {
		this.nextElementSibling.className = 'pc show_warn';
		this.nextElementSibling.innerHTML = '你的年龄小于注册范围';

	} else if(this.validity.valueMissing) {
		this.nextElementSibling.className = 'pc show_warn';
		this.nextElementSibling.innerHTML = '年龄不能为空';

	}
}
var udate = document.getElementById('date');
udate.onfocus = function() {
	this.nextElementSibling.style.display = 'block';
	this.nextElementSibling.innerHTML = '请输入你的出生日期';
}
udate.onblur = function() {
	if(this.validity.valueMissing) {
		this.nextElementSibling.className = 'pc show_warn';
		this.nextElementSibling.innerHTML = '出生日期不能为空';

	} else if(this.validity.valid) {
		this.nextElementSibling.className = 'pc show_pass';
		this.nextElementSibling.innerHTML = '已选择出生日期';

	}
}
var uname2 = document.getElementById('name');

uname2.onfocus = function() {
	this.nextElementSibling.style.display = 'block';
	this.nextElementSibling.innerHTML = '真实姓名';
}
uname2.onblur = function() {
	if(this.validity.valid) {
		this.nextElementSibling.className = 'pc show_pass';
		this.nextElementSibling.innerHTML = '姓名格式正确';

	} else if(this.validity.valueMissing) {
		this.nextElementSibling.className = 'pc show_warn';
		this.nextElementSibling.innerHTML = '用户名不能为空';

	} else if(this.validity.patternMismatch) {
		this.nextElementSibling.className = 'pc show_warn';
		this.nextElementSibling.innerHTML = '用户名格式非法';

	}
}

function check(bro) {
	if(bro == "student")
		document.getElementById('teaID').style.display = 'none';
	else
		document.getElementById('teaID').style.display = 'block';
}