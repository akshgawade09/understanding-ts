function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    if (showResult) {
        const result = n1 + n2;
        console.log(phrase + result);
    } else {
        return n1 + n2;
    }
}

const number1 = 5;
const number2 = 3.5;
const printResult = true;
const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);


/* const person: {name: string, age: number} = {
    name: "Akshay",
    age: 27
} */

const person = {
    name: "Akshay",
    age: 27
}

console.log(person.name);
console.log(person.age);
