var generates = {lower: lowerCase, upper: upperCase, number: numberGen, symbols: symbolGen,}

// heres where The link to the charcord chart  that Used http://www.net-comber.com/charset.html

function  lowerCase() {
    return String.fromCharCode(Math.floor(Math.random() *26) + 97 );
 
 }
 console.log(lowerCase());

 function  upperCase() {
    return String.fromCharCode(Math.floor(Math.random() *26) + 65 );
 
 }
 console.log(upperCase());


 function  symbolGen() {
    return String.fromCharCode(Math.floor(Math.random() *6) + 58 ); 
 }
 console.log(symbolGen());

 