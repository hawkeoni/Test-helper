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
		query = encodeURIComponent(tmp);
		xhr.open('GET', 'https://geokompas.tk/?query=' + query, true);
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