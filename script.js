let num = 266219;
let str = num.toString();
let box = str.split("");
let result = 1;
  for (let i=0; i<box.length; i++) {
    result = result*box[i];
  }
console.log((result));
let end = result**3;
console.log(end);
console.log(String(end).slice(0, 2));

