function checkall(){
	var i;
	for(i=0;i<10;i++) document.frm.rd[i].checked=true;
}

function uncheckall(){
	var i;
	for(i=0;i<10;i++) document.frm.rd[i].checked=false;
}
function over(x){
		x.style.backgroundColor='yellow'
	}
	function out(x){
		x.style.backgroundColor='aqua'
	}