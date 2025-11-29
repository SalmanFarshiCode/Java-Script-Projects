const prompt = require("prompt-sync")();
function getNumber(numberString){
    while(true){
        const number=parseFloat(prompt("Enter Number"+numberString+": "))
        if(isNaN(number)){
            console.log("Invalid...")
        }
        else return number
    }
}
const numOne=getNumber("One")
const numTwo=getNumber("Two")
const operator=prompt("Enter Sign: ")
let result;
let valid=true;
switch(operator){
    case "+":
        result=numOne+numTwo
        break;
    case "-":
        result=numOne-numTwo
        break;
    case "*":
        result=numOne*numTwo
        break;
    case "/":
        result=numOne/numTwo
        break;
    default:
        valid=false;
        console.log("Syntax Error...")
}
if(valid){
    console.log(numOne,operator,numTwo,"=",result)
}
