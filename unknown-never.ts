let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Akshay";

if (typeof userInput === "string") {
	userName = userInput;
}
console.log(typeof userInput);
console.log(typeof userName);

function generateError(message: string, code: number): never {
	throw { message: message, errorCode: code };
}

generateError("An error occured...!", 500);
