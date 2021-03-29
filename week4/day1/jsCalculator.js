


function calculate(operand, num1, num2){
    
    if (operand == "multiply"){
        answer = num1 * num2
    }
    else if (operand == "divide"){
        answer = num1 / num2
    }
    else if (operand == "add"){
        answer = num1 + num2
    }
    else if (operand == "subtract"){
        answer = num1 - num2
    }
    else {
        console.log("oops")
    };
    
console.log(`You choose ${operand} and your answer is ${answer}`);
};

calculate("subtract", 4, 2);



