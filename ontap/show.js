

var mini=document.getElementsByClassName('mini');
var img=document.getElementsByClassName('imgs');
img[0].style.display='block';
mini[0].style.opacity='0.8';
var last=document.getElementById('last');
var next=document.getElementById('next');
var cs;
function lastt(){
	for(var i=0;i<img.length;i++){
	if(img[i].style.display=='block'){
		cs=i;
		img[cs].style.display='none';
		mini[cs].style.opacity='0.3';

	}
	}
	
	if(cs==0){
	 img[img.length-1].style.display='block';
	 mini[img.length-1].style.opacity='0.8';

	}else if(cs>0){
		cs=cs-1;
		img[cs].style.display='block';
		mini[cs].style.style='0.8';

	}
}
function nextt(){
	for(var i=0;i<img.length;i++){
	if(img[i].style.display=='block'){
		cs=i;
		img[cs].style.display='none';
		mini[cs].style.opacity='0.3';
	}
	}
	
	if(cs==img.length-1){
	 img[0].style.display='block';
	 mini[0].style.opacity='0.8';

	}else if(cs<img.length-1){
		cs=cs+1;
		img[cs].style.display='block';
		mini[cs].style.opacity='0.8';

	}
}
for(var i = 0; i < mini.length; i++){
    		mini[i].addEventListener('click',function(){
				for(var j = 0; j < mini.length; j++){
								mini[j].style.opacity = '0.3';
								img[j].style.display='none'
								}
				this.style.opacity = '0.8';
				for(var u=0;u<img.length;u++){
					if(mini[u].style.opacity=='0.8'){
						img[u].style.display='block';
					}
				}
				})    		
    	}
  var x = setInterval(function(){
  	nextt();
},10000);
