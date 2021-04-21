var aux;
var vector= [3,1,2,4,6,8,9,5,7];
for(var i=0; i<vector.length; i++){
  
document.write (" " + vector [i]);
}
document.write("</br>");

for (var i=0; i<vector.length; i++){
  for (var j= i+1; j<vector.length; j++){
    if (vector [i] < vector [j]){
   aux=vector[j];
      vector[j]=vector[i];
      vector[i]=aux;
    }
  }
}
for (var i=0; i<vector.length; i++){
document.write(" " + vector[i]);
}
