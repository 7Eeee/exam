function initDatabase() {
	var db = getCurrentDb(); //初始化数据库
	if(!db) {
		alert("您的浏览器不支持HTML5本地数据库");
		return;
	}
	db.transaction(function(trans) { //启动一个事务，并设置回调函数
		//执行创建表的Sql脚本
		trans.executeSql("create table if not exists Demo2(user text null,pwd text null,email text null,tel text null,age text null,date text null)", [], function(trans, result) {}, function(trans, message) {
			alert(message);
		});
		trans.executeSql("create table if not exists teacher(user text null,pwd text null,email text null,tel text null,age text null,date text null,teacherID text null)", [], function(trans, result) {}, function(trans, message) {
			alert(message);
		});
	}, function(trans, result) {}, function(trans, message) {});
	//执行创建表的Sql脚本

}

$(function() { //页面加载完成后绑定页面按钮的点击事件
	initDatabase();

	$(document).ready(function() {
		$("form").submit(function(e) {
			// alert("Submitted");
			var txtUser = $("#user").val();
			var txtPwd = $("#pwd").val();
			var txtEmail = $("#email").val();
			var txtTel = $("#tel").val();
			var txtAge = $("#age").val();
			var txtDate = $("#date").val();
			var txtTeaID = $("#teacherID").val();
			var db = getCurrentDb();
			//执行sql脚本，插入数据
			db.transaction(function(trans) {
				if(txtTeaID != null) {
					trans.executeSql("insert into teacher(user,pwd,email,tel,age,date,teacherID) values(?,?,?,?,?,?,?) ", [txtUser, txtPwd, txtEmail, txtTel, txtAge, txtDate, txtTeaID], function(ts, data) {}, function(ts, message) {
						alert(message);
					});

				} else {
					trans.executeSql("insert into Demo2(user,pwd,email,tel,age,date) values(?,?,?,?,?,?) ", [txtUser, txtPwd, txtEmail, txtTel, txtAge, txtDate], function(ts, data) {}, function(ts, message) {
						alert(message);
					});

				}
			});
			//			showAllTheData();
			showConfirm();
		});
	});
});

function getCurrentDb() {
	//打开数据库，或者直接连接数据库参数：数据库名称，版本，概述，大小
	//如果数据库不存在那么创建之
	var db = openDatabase("myDb2", "1.0", "it's to save demo data!", 1024 * 1024);
	return db;
}

//显示所有数据库中的数据到页面上去
//function showAllTheData() {
//	$("#tblData").empty();
//	var db = getCurrentDb();
//	db.transaction(function(trans) {
//		trans.executeSql("select * from Demo2 ", [], function(ts, data) {
//			if(data) {
//				for(var i = 0; i < data.rows.length; i++) {
//					appendDataToTable(data.rows.item(i)); //获取某行数据的json对象
//				}
//			}
//		}, function(ts, message) {
//			alert(message);
//			var tst = message;
//		});
//	});
//}
//
//function appendDataToTable(data) { //将数据展示到表格里面
//	//uName,title,words
//	var txtUser = data.user;
//	var txtPwd = data.email;
//
//	var strHtml = "";
//	strHtml += "<tr>";
//	strHtml += "<td>" + txtUser + "</td>";
//	strHtml += "<td>" + txtPwd + "</td>";
//	strHtml += "</tr>";
//	$("#tblData").append(strHtml);
//}

function showConfirm() {
	var r = confirm("恭喜你注册成功！是否现在登入？");
}