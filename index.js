#!user/bin/env/node
import inquirer from "inquirer";
import chalk from "chalk";
import ChalkAnimation from 'chalk-animation';
let sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 5000);
    });
};
async function greet() {
    let neonTitle = ChalkAnimation.rainbow("Do your Calculation!");
    await sleep();
    neonTitle.stop();
}
greet();
async function doCalc() {
    const answer = await inquirer
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
    ]);
    if (answer.operator == "Addition") {
        console.log(chalk.green(`${answer.num1} + ${answer.num2} = ${answer.num1 + answer.num2}`));
    }
    else if (answer.operator == "Subtraction") {
        console.log(chalk.green(`${answer.num1} - ${answer.num2} = ${answer.num1 - answer.num2}`));
    }
    else if (answer.operator == "Multiplication") {
        console.log(chalk.green(`${answer.num1} * ${answer.num2} = ${answer.num1 * answer.num2}`));
    }
    else if (answer.operator == "Divison") {
        console.log(chalk.green(`${answer.num1} / ${answer.num2} = ${answer.num1 / answer.num2}`));
    }
}
async function repeatProcess() {
    do {
        await doCalc();
        var calcRep = await inquirer
            .prompt({
            type: "input",
            name: "repeat",
            message: "Do you want to calculate again? Press y or n"
        });
    } while (calcRep.repeat == "y" || calcRep.repeat == "Y" || calcRep.repeat == "YES" || calcRep.repeat == "yes");
}
repeatProcess();
