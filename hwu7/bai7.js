var i,j;
for(i=0;i<7;i++){
	for(j=0;j<=i;j++) document.write('*');
	document.write('<br>')
	}
document.write('<br>')
document.write('<br>')
document.write('<br>')
for(i=0;i<7;i++){
	for(j=0;j<7;j++) document.write('*');
	document.write('<br>')
	}
document.write('<br>')
document.write('<br>')
document.write('<br>')
for(i=0;i<7;i++){
	for(j=0;j<7;j++) if(i==0||j==0||i==6||j==6)document.write('*')
						else document.write('    &nbsp');
	document.write('<br>')
	}
document.write('<br>')
document.write('<br>')
document.write('<br>')
for(i=7;i>0;i--){
	for(j=0;j<=i;j++) document.write('*');
	document.write('<br>')
	}