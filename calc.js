const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
mathSymbol = tokens[0];
num1 = Number(tokens[1]);
num2 = Number(tokens[2]);

if (mathSymbol === "add"){
	console.log(num1 + num2);
}
else if (mathSymbol === "times"){
	console.log(num1 * num2);
}
else if (mathSymbol === "subtract"){
	console.log(num1 - num2)
}
else if (mathSymbol === "divide"){ 
    console.log (num1 / num2)
}
else if (mathSymbol === "square"){
     console.log ( Math.sqrt(num1))
}
else if (mathSymbol === "cube"){
     console.log (num1*num1*num1)
}
else if (mathSymbol === "power"){
     console.log (Math.pow(num1, num2))
} 
else if (mathSymbol === "remainder"){
     console.log(num1%num2)
}
	// This line closes the connection to the command line interface.
	reader.close()
});
