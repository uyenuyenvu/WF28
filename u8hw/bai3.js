function tab1(){
	document.getElementsByClassName('text1')[0].style.visibility='visible'
	document.getElementsByClassName('text2')[0].style.visibility='hidden'
	document.getElementsByClassName('text3')[0].style.visibility='hidden'
	document.getElementById('tab1').style.backgroundColor='white'
	document.getElementById('tab1').style.color='black'
	document.getElementById('tab2').style.backgroundColor='gray'
	document.getElementById('tab2').style.color='white'
	document.getElementById('tab3').style.backgroundColor='gray'
	document.getElementById('tab3').style.color='white'
}
function tab2(){
	document.getElementsByClassName('text2')[0].style.visibility='visible'
	document.getElementsByClassName('text1')[0].style.visibility='hidden'
	document.getElementsByClassName('text3')[0].style.visibility='hidden'
	document.getElementById('tab2').style.backgroundColor='white'
	document.getElementById('tab2').style.color='black'
	document.getElementById('tab1').style.backgroundColor='gray'
	document.getElementById('tab1').style.color='white'
	document.getElementById('tab3').style.backgroundColor='gray'
	document.getElementById('tab3').style.color='white'
}
function tab3(){
	document.getElementsByClassName('text3')[0].style.visibility='visible'
	document.getElementsByClassName('text1')[0].style.visibility='hidden'
	document.getElementsByClassName('text2')[0].style.visibility='hidden'
	document.getElementById('tab3').style.backgroundColor='white'
	document.getElementById('tab3').style.color='black'
	document.getElementById('tab2').style.backgroundColor='gray'
	document.getElementById('tab2').style.color='white'
	document.getElementById('tab1').style.backgroundColor='gray'
	document.getElementById('tab1').style.color='white'
}