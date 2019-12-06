var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8","9"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*"];
var submitElt = document.getElementById("submit");
var textDisplayElt = document.getElementById("display")
var lowercaseCheck = lowercase.checked;
var clipBoardElt = document.getElementById("clipboard");
var lengthElt = document.getElementById("length");


submitElt.addEventListener("click", function(){
      var passwordLength = lengthElt.value;
      textDisplayElt.value = generatePassword(passwordLength);
    });  

 


function generatePassword(passwordLength) {
   var passwordLength = lengthElt.value;
   alert(passwordLength)
   var password = "";
   var numLowerCase = Math.floor(Math.random() * passwordLength) 

   for(var i = 0; i < numLowerCase; ++i){
    //var length = lowercase.length;
    var lowerLetters = Math.floor(Math.random() * 25);
    var lower = lowercase[lowerLetters];
    password = password + lower; 
   };

   var numUpperCase = Math.floor(Math.random() * passwordLength - numLowerCase) 

   for(var i = 0; i < numUpperCase; ++i){
      //var length = uppercase.length;
      var upperLetters = Math.floor(Math.random() * 25);
      var upper = uppercase[upperLetters];
      password = password + upper; 
     };
     var numNumber = Math.floor(Math.random() * passwordLength - numLowerCase - numUpperCase);  

     for(var i = 0; i < numNumber; ++i){
      //var length = numbers.length;
      var randomNumbers = Math.floor(Math.random() * 9);
      var nums = numbers[randomNumbers];
      password = password + nums; 
     };
     var numSymbols = Math.floor(Math.random() * passwordLength - numLowerCase - numUpperCase - numNumber);  

     for(var i = 0; i < numSymbols; ++i){
      //var length = symbols.length;
      var symbolsGen = Math.floor(Math.random() * 7);
      var sym = symbols[symbolsGen];
      password = password + sym; 
     } 

  
   
   return password

}

var password = generatePassword(passwordLength);

