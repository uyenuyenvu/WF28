var text=document.getElementById('text');

function md(){
	text.style.fontSize='20px';
}
function tang(){
	
	var s=text.style.fontSize;
	var a=s.substring(0,s.length-2)
	a=a*1.4;
	 text.style.fontSize=a+'px'
}
function giam(){
	var s=text.style.fontSize;
	var a=s.substring(0,s.length-2)
	a=a*0.6;
	 text.style.fontSize=a+'px'
}