let i,n,m;

n=Number(prompt("Enter which table you want:",""));

do{
  if(isNaN(n))
{  
  alert("Enter valid no.");
  n=Number(prompt("Enter which table you want:",""));
}
}while(isNaN(n));
  
m=Number(prompt("Enter till which no. you want to end the table:","10"));

  document.write('<br><div class="container"> '+n+' Table <br><br><center><hr color="red" width="30%" size="8px"></hr> </center>');

for(i=0;i<=m;i++)
{
  document.write
(n+'X'+i+'='+(n*i)+'<br>')
}

  document.write('  <center><hr color="red" width="30%" size="8px" ><br>'+n+ ' table ended at  '+m+'<br></div>');
