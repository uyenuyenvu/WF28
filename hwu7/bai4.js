var i,n,m,k,tg,s=0;
n=prompt('n= ');
m=prompt('m= ');
k=prompt('k= ');
if(m<n){
	tg=m;
	m=n;
	n=tg;
}
for(i=n;i<=m;i++){
	if(i%k==0) s+=i;
    }
document.write('tổng các số chia hết cho '+k+' trong khoảng từ '+n+' đến '+m+' là: s='+s);