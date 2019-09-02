var s=0,i,n,p=1;
n=prompt('n=? ');
for(i=1;i<=n;i++){
	p=p*1.0/i;
	s+=p*i;
}
document.write('s='+s)