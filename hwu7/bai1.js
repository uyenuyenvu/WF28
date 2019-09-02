var i,dem=0,n;
n=prompt('n= ? ')
for(i=1;i<n;i++)
		if(i%3==0 || i%7==0){
			dem++
		} 
document.write('có '+dem+' số chia hết cho 3 hoặc 7 trong khoảng từ 1 đến '+n+"<br> là các số: " )
for(i=1;i<n;i++)
		if(i%3==0 || i%7==0){
			document.write(i+'   ')
		}
