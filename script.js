var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8","9"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*"];
var submitElt = document.getElementById("submit");
var textDisplayElt = document.getElementById("display")
var lowercaseCheck = lowercase.checked;
var clipBoardElt = document.getElementById("clipboard");


submitElt.addEventListener("click", function(){
      var passwordLength = 120;
      textDisplayElt.value = generatePassword(passwordLength);
    });
 


function generatePassword(passwordLength) {

   var password = "";

   for(var i = 0; i < passwordLength; ++i){
    var length = lowercase.length;
    var lowerLetters = Math.floor(Math.random() * 26);
    var lower = lowercase[lowerLetters];
    password = password + lower; 
   };

   for(var i = 0; i < passwordLength; ++i){
      var length = uppercase.length;
      var upperLetters = Math.floor(Math.random() * 26);
      var upper = uppercase[upperLetters];
      password = password + upper; 
     };
     
     for(var i = 0; i < passwordLength; ++i){
      var length = numbers.length;
      var randomNumbers = Math.floor(Math.random() * 10);
      var nums = numbers[randomNumbers];
      password = password + nums; 
     };
     
     for(var i = 0; i < passwordLength; ++i){
      var length = symbols.length;
      var symbolsGen = Math.floor(Math.random() * 8);
      var sym = symbols[symbolsGen];
      password = password + sym; 
     } 

  
   
   return password

}

var passwordLength = 120;
var password = generatePassword(passwordLength);

