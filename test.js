var title = document.title;
window.onkeydown = function(key){
	if (key.keyCode==83){
		var data = window.getSelection();
		var test = data.toString();
		
		document.title=test;
	}
	if (key.keyCode==68){
		document.title=title;
	}
}

