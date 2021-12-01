// varibals
let elInp = document.querySelector('.calc__inp');
let elOne = document.querySelector('.one');
let elTwo = document.querySelector('.two');
let elThree = document.querySelector('.three');
let elFour = document.querySelector('.four');
let elFife = document.querySelector('.fife');
let elSix = document.querySelector('.six');
let elSeven = document.querySelector('.seven');
let elEyd = document.querySelector('.eyd');
let elNine = document.querySelector('.nine');
let elZero = document.querySelector('.zero');
let elClear = document.querySelector('.clear')
let elBoluv = document.querySelector('.bolish')
let elKopaytuchi = document.querySelector('.kopaytru');
let elRemove = document.querySelector('.remove')
let elPlus = document.querySelector('.plus');
let elMinus = document.querySelector('.minus');
let elBarobar = document.querySelector('.barobar');
// varibals

// add event
elOne.addEventListener("click", one);
elTwo.addEventListener("click", two);
elThree.addEventListener("click", three);
elFour.addEventListener("click", four);
elFife.addEventListener("click", fife);
elSix.addEventListener("click", six);
elSeven.addEventListener("click", seven);
elEyd.addEventListener("click", eyd);
elNine.addEventListener("click", nine);
elZero.addEventListener("click", zero);
elClear.addEventListener("click", clearElement);
elBoluv.addEventListener("click",boluvchi);
elKopaytuchi.addEventListener("click",kopyuvchi);
elRemove.addEventListener("click", removes);
elPlus.addEventListener("click",qoshish);
elMinus.addEventListener("click",ayrish);
elBarobar.addEventListener("click",result)
// add event

// function
function one (e) {
  let ones = e.target.textContent
  console.log(ones);
  elInp.value += ones;
} 
function two (e) {
  let twos = e.target.textContent
  console.log(twos);
  elInp.value += twos;
} 
function three (e) {
  let threes = e.target.textContent
  console.log(threes);
  elInp.value += threes;
}
function four (e) {
  let fours = e.target.textContent
  console.log(fours);
  elInp.value += fours;
}
function fife (e) {
  let fifes = e.target.textContent
  console.log(fifes);
  elInp.value += fifes;
}
function six (e) {
  let sixs = e.target.textContent
  console.log(sixs);
  elInp.value += sixs;
}
function seven (e) {
  let sevens = e.target.textContent
  console.log(sevens);
  elInp.value += sevens;
}
function eyd (e) {
  let eyd = e.target.textContent
  console.log(eyd);
  elInp.value += eyd;
}
function nine (e) {
  let nines = e.target.textContent
  console.log(nines);
  elInp.value += nines;
}
function zero (e) {
  let zeros = e.target.textContent
  console.log(zeros);
  elInp.value += zeros;
}
function clearElement () {
  elInp.value= ""
}
function boluvchi (e) {
  let bol = e.target.textContent
  elInp.value += bol
}
function kopyuvchi (e) {
  let kopayuv = e.target.textContent
  elInp.value += kopayuv
}

function qoshish (e) {
  let qoshuv = e.target.textContent
  elInp.value += qoshuv;
}
function ayrish (e) {
  let ayruv = e.target.textContent
  elInp.value += ayruv;
}
function removes () {
  let val = elInp.value;
  elInp.value = val.substring(0,val.length-1)
}
function result () {
  let val = elInp.value;
  if(val) {
    elInp.value = eval(val)
  }
}