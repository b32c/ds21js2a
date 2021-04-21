let n1, primo;
  n1=parseInt (prompt("introduce un numero"));
  i=2;
  primo=true;
  while (i<n1){
    if(n1&i===0){
      n1=false;
    }
    i++;
  }
  if (primo===true){
    document.write ("el numero" + n1 + "es primo");
  }
  else{
    document.write ("el numero" + n1 + "no es primo");
  }