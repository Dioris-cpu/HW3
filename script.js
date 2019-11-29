var formEl = document.getElementById("gform");
var lengthEl = document.getElementById("length");
var lowercaseEl = document.getElementById("uppercase");
var lowercaseEl = document.getElementById("lowercase");
var numbersEl = document.getElementById("numbers");
var symbolsEl = document.getElementById("symbols");
var clipboardEl = document.getElementById("clipboard");
var generateEl = document.getElementById("generate");


generateEl.addEventListener("click",() => {
    var length = +lengthEl.value; 

    console.log(typeof length);
 
})


var generates = {lower: lowerCase, upper: upperCase, number: numberGen, symbols: symbolGen}

// heres where The link to the charcord chart  that Used http://www.net-comber.com/charset.html

function  lowerCase() {
    return String.fromCharCode(Math.floor(Math.random() *26) + 97 );
 
 }
 console.log(lowerCase());

 function  upperCase() {
    return String.fromCharCode(Math.floor(Math.random() *26) + 65 );
 
 }
 console.log(upperCase());

 function  numberGen() {
    return String.fromCharCode(Math.floor(Math.random() *10) + 48 );
 
 }
 console.log(numberGen());



 function  symbolGen() {
    return String.fromCharCode(Math.floor(Math.random() *6) + 58 ); 
 }
 console.log(symbolGen());

 