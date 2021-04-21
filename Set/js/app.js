let obj = new Set();
  
function attach (b){
  obj.add (b);
  return (b);
}
  for (let i =0; i<10;i++){
    let num= Math.floor(Math.random()*12);
    document.write ("se genera   " + num + "<br>");
    attach(num);
  }