document.onmouseup = function() {alert(window.getSelection().toString());};
javascript:void(x = new XMLHttpRequest(); x = open('GET', 'https://google.com'); x.send(); console.log(x.response);)


javascript:(function() {
function se(d) {
    return d.selection ? d.selection.createRange().text : d.getSelection()
} 
s = se(document); 
for (i=0; i<frames.length && !s; i++) s = se(frames[i].document); 
if (!s || s=='') s = prompt('Enter%20search%20terms%20for%20Wikipedia',''); 
open('http://en.wikipedia.org' + (s ? '/w/index.php?title=Special:Search&search=' + encodeURIComponent(s) : '')).focus();
})();


javascript:(function(){
	var r = new XMLHttpRequest();
	r.open('GET', 'http://185.224.215.223/query= из ответов правильный? При значении конфигурационного регистра 0x2142 ма');
	r.send();
	console.log('plshalp');
})();

javascript:(function(){
	var r = new XMLHttpRequest();
	r.open('GET', 'http://185.224.215.223/query= из ответов правильный? При значении конфигурационного регистра 0x2142 ма');
	r.send();
	console.log(r.response);
})();