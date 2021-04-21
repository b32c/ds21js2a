
//1. Least common multiple
//   lcm(a,b)
// -> a integer
// -> b integer
// <- lcm 
let n1,n2,vn1,vn2, mcm=1, div=2;
  n1 =parseInt(prompt ("ingrese el primer numero"));
   n2 =parseInt(prompt ("ingrese el segundo numero"));
  n1=Math.abs(n1);
   n2=Math.abs(n2);
  
  vn1=n1;
  vn2=n2;
  while (div<=n1 || div<=n2){
         while ((div <= n1&& n1&div ==0) || (div <=n2 && n2%div ==0) ){
    mcm=mcm*div;
    if ( (div <= n1 && n1%div ==0))
    n1=n1/div;
     if ((div <= n2 && n2 % div ==0))
    n2=n2/div;
  }
  div=div +1;
  }
console.log ("el MCM entre " + vn1+ " y " +vn2+ " es: "+ mcm);

    