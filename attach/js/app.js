let obj = {};
function attach (b){
  obj [b]=b;
}
  for (let i =0; i<10;i++){
    let num= Math.floor(Math.random()*12);
    document.write ("se genera   " + num);
    attach(num);
  }
  console.log (obj);