//selected operator
let operator = "";
//first input before operator selection
let equationStringA = "";
//second input after operator selection
let equationStringB = "";
//saved previous answer
let previousAnswer = "";

//clicking on number puts it into #display textContent
const inputNumber = Array.from(document.querySelectorAll(".number"));
inputNumber.forEach((button) => {
	button.addEventListener("click", (e) => {
		const display = document.querySelector("#display");
		display.textContent += `${event.target.textContent}`;
	});
});

//clicking operator saves first input into stringA, clears display, saves the operator for equation
//trying to make it give answer if both stringA and stringB already have values
const inputOperator = Array.from(document.querySelectorAll(".operator"));
inputOperator.forEach((button) => {
	button.addEventListener("click", (e) => {
		operator = `${event.target.id}`;
		if (equationStringA == ""){
			addStringA();
		} else if (equationStringB == ""){
			addStringB();	
		} else if (equationStringA != "" && equationStringB != ""){
			const display = document.querySelector("#display");
			display.textContent = operate(equationStringA, equationStringB);
			console.log("previousAnswer: " + operate(equationStringA, equationStringB));
		};
		console.log(operator);
	});
});

//clicking equal saves second input into stringB, then evaluates based on stringA, operator clicked, and stringB
//trying to make it store previous value to continue making calculations without retyping in result
const equationResult = document.querySelector("#equal");
equationResult.addEventListener("click", (e) => {
	addStringB();
	const display = document.querySelector("#display");
	previousAnswer = operate(equationStringA, equationStringB);
	display.textContent = previousAnswer;
	console.log("previousAnswer: " + operate(equationStringA, equationStringB));
});
 
//click AC, clear equationStringA and equationStringB, and display textContent
const clearData = document.querySelector("#clear");
clearData.addEventListener("click", (e) => {
	const display = document.querySelector("#display");
	display.textContent = "";
	equationStringA = "";
	equationStringB = "";
});		

//operator functions
function addition(a, b){
	return parseFloat(a) + parseFloat(b);
};

function subtraction(a, b){
	return parseFloat(a) - parseFloat(b);
};

function multiplication(a, b){
	return parseFloat(a) * parseFloat(b);
};

function division(a, b){
	return parseFloat(a) / parseFloat(b);
};

function operate(stringA, stringB){
	switch(operator){
		case "add":
			display.textContent = addition(stringA, stringB);
			break;
		case "minus":
			display.textContent = subtraction(stringA, stringB);
			break;
		case "multiply":
			display.textContent = multiplication(stringA, stringB);
			break;
		case "divide":
			display.textContent = division(stringA, stringB);
			break;
	};
};

function addStringA(){
	equationStringA = "";
	const display = document.querySelector("#display");
	equationStringA = display.textContent;
	console.log("stringA: " + equationStringA);
	display.textContent = "";
};

function addStringB(){
	equationStringB = "";
	const display = document.querySelector("#display");
	equationStringB = display.textContent;
	console.log("stringB: " + equationStringB);
	display.textContent = "";
};

