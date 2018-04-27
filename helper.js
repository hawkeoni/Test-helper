title = document.title;
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
	if (xhr.readyState ===4){
		if (xhr.status==200){
			document.title = xhr.response;
		}
	}
}
window.onkeydown = function(key){
	if (key.keyCode==83){
		var selection = window.getSelection();
		var tmp = selection.toString();
		document.title = tmp;
		query = encodeURIComponent(tmp);
		xhr.open('GET', 'http://185.224.215.223/?query=' + query, true);
		xhr.send();		
	}
	if (key.keyCode==68){
		document.title=title;
	}
	if (key.keyCode==70){
		document.title=title;
		window.onkeydown=null;
	}
}