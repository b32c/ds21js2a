function generador(len) {
    let letrasRandom = '';
    let letrasP = 'abcdefghijklmnopqrstuvwxyz';
  
    for(let i = 0; i < len; i++) {
      letrasRandom += letrasP.charAt(Math.floor(Math.random() * letrasP.length));
      //console.log("letrasRandom en for: ", letrasRandom);
    }
    console.log(letrasRandom)
  }
  generador(4);