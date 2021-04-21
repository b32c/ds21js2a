//2. Powers of 2 
//   power2(n)
// -> n integer
// <- the n first elements of 2^n

let base =3;
let exponente =2;
let r =base;
for (let i =1; i <exponente; i ++){
  r=r *base;
}
console.log (r);
