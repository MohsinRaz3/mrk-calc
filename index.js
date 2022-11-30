#!user/bin/env/node
import inquirer from "inquirer";
import ChalkAnimation from 'chalk-animation';
let sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function greet() {
    let neonTitle = ChalkAnimation.neon("Do your Calculation!");
    await sleep();
    neonTitle.stop();
}
greet();
async function doCalc() {
    inquirer
        .prompt([
        {
            type: "list",
            name: "operator",
            message: "What calculation you want to perform?",
            choices: ["Addition", "Subtraction", "Multiplication", "Divison"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter first number: "
        },
        {
            type: "number",
            name: "num2",
            message: "Enter second number: "
        }
    ])
        .then((answer) => {
        if (answer.operator == "Addition") {
            console.log(`${answer.num1} + ${answer.num2} = ${answer.num1 + answer.num2}`);
        }
        else if (answer.operator == "Subtraction") {
            console.log(`${answer.num1} - ${answer.num2} = ${answer.num1 - answer.num2}`);
        }
        else if (answer.operator == "Multiplication") {
            console.log(`${answer.num1} * ${answer.num2} = ${answer.num1 * answer.num2}`);
        }
        else if (answer.operator == "Divison") {
            console.log(`${answer.num1} / ${answer.num2} = ${answer.num1 / answer.num2}`);
        }
    });
}
doCalc();
