let n1,n2;
n1=parseInt (prompt("introduce un numero"));
n2=n1 -1;
while (n1<0){
  document.write ("introduce un valor superior a 0");
}
while (n2>1){
  n1*=n2;
  n2--;
}
document.write (" " + n1);