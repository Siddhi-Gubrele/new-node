// console.log(process);
console.log(__dirname);
let t = 0;
let counter = 10;
function decCounter() {
  counter--;
  console.log(counter);
  if (counter == 0) clearInterval(mytimer);
}
const mytimer = setInterval(decCounter, 1000);
// clearInterval(mytimer);
