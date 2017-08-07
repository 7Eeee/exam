$("#back").click(function() {
	parent.window.history.go(-1);
	//alert(window.location.pathname);
});
$("#index").click(function() {
	//window.location.href='GiveTest.html';
	if(window.location.pathname == '/exam/head.html') {
		parent.window.location.href = 'teacher.html';
	}

});
$("#logout").click(function() {

	window.location.href = 'index.html';

});