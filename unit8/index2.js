var button=document.getElementsByTagName('button')[0]
button.addEventListener('click',function(){
	color =document.getElementsByTagName('p')[0].style.color;
	if(color=='red')document.getElementsByTagName('p')[0].style.color='black'
		else document.getElementsByTagName('p')[0].style.color='red';
})