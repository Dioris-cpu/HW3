var defaultEl = document.getElementById("default");
var lengthEl = document.getElementById("length");
var uppercaseEl = document.getElementById("uppercase");
var lowercaseEl = document.getElementById("lowercase");
var numbersEl = document.getElementById("numbers");
var symbolsEl = document.getElementById("symbols");
var generateEl = document.getElementById("generate");

var generateFunc = {lower: lowerCase, upper: upperCase, number: numberGen, symbols: symbolGen };


generateEl.addEventListener("click",() => {
   var length = +lengthEl.value;
   var checkForLower = lowercaseEl.checked; 
   var checkForUpper = uppercaseEl.checked;
   var checkForNumbers = numbersEl.checked;
   var checkForSymbols = symbolsEl.checked; 
 
    

   
   defaultEl.innerText = generatePassword(checkForLower, checkForUpper, checkForNumbers, checkForSymbols,length);

   console.log(checkForLower, checkForUpper, checkForNumbers, checkForSymbols);

});

function generatePassword(lower,upper,number,symbols,length) {
   
   var generatedPassword = "";

   var typesCount = lower + upper + number + symbols;

   console.log("typesCount:", typesCount);

   var typesArr = [{lower}, {upper}, {number}, {symbols}].filter (item => Object.values(item)[0]);

   console.log("typesArr:", typesArr);

   if (typesCount === 0) {
      return '';
   }
   for( var i = 0; i < length;i += typesCount) {
      typesArr.forEach(type => {
         var funcName = Object.keys(type)[0];
         console.log( "funcName:", funcName);
         
         generatedPassword += generateFunc[funcName] ();
      });
        var finalPassword =generatedPassword.slice(0, length);
        
        return finalPassword

   }


};

// Heres the link to the charcord chart that I used http://www.net-comber.com/charset.html

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