document.getElementById('p1').style.color='red';
document.getElementsByClassName('p2')[0].style.color='green'
document.getElementsByTagName('p')[0].style.color='blue'
var text=document.getElementById('p1').innerHTML;
document.getElementsByTagName('p')[2].innerHTML="the da bi thay doi noi dung"

var src=document.getElementsByTagName('img')[0].src;
document.write(src+'<br>');
document.getElementsByTagName('img')[0].src="tuandien.jpg";
document.getElementsByTagName('h3')[0].style.color='red';
var color=document.getElementsByTagName('h3')[0].style.color;
document.write(color);